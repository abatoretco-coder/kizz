import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { gradeMapPoint, gradeMultiText, isFreeTextCorrect } from '../src/quizEngine';
import type { QuizQuestion, SessionAnswer } from '../src/domain';

test('le bouton Continuer ne transmet pas son evenement tactile aux reponses de session', async () => {
  // Execute le branchement JSX reel sans charger les modules Android dans Node.
  const source = ts.createSourceFile('App.tsx', readFileSync('App.tsx', 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let expression: ts.Expression | undefined;
  function visit(node: ts.Node) {
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(source) === 'Quiz') {
      for (const attribute of node.attributes.properties) {
        if (ts.isJsxAttribute(attribute) && attribute.name.getText(source) === 'onContinue'
          && attribute.initializer && ts.isJsxExpression(attribute.initializer)) {
          expression = attribute.initializer.expression;
        }
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  assert.ok(expression, 'le quiz doit exposer son action Continuer');

  const calls: unknown[][] = [];
  const compiled = ts.transpileModule(`const callback = ${expression.getText(source)}; callback;`, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const callback = runInNewContext(compiled, {
    continueQuiz: (...args: unknown[]) => { calls.push(args); return Promise.resolve(); },
  });

  await callback({ nativeEvent: { pageX: 100, pageY: 200 } });
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0], [], 'la fonction doit utiliser les reponses de session deja en memoire');
});

const correctCases: Array<{ handler: string; question: QuizQuestion; args: unknown[]; expectedSelected: number }> = [
  { handler: 'selectAnswer', question: { id: 'qcm', topicId: 'test', difficulty: 1, prompt: 'Quel choix est correct ?', choices: ['Paris', 'Rome', 'Madrid', 'Berlin'], answerIndex: 0, explanation: 'Paris est la reponse de ce test.', tags: [], sourceLabel: 'Test' }, args: [0], expectedSelected: 0 },
  { handler: 'submitFreeText', question: { id: 'text', topicId: 'test', difficulty: 1, type: 'free-text', prompt: 'Quelle est la capitale de la France ?', acceptedAnswers: ['paris'], explanation: 'Paris est la capitale de la France.', tags: [], sourceLabel: 'Test' }, args: [], expectedSelected: -1 },
  { handler: 'submitMultiText', question: { id: 'multi', topicId: 'test', difficulty: 1, type: 'multi-text', prompt: 'Complete les deux champs.', answerFields: [{ id: 'city', label: 'Ville', acceptedAnswers: ['paris'] }, { id: 'country', label: 'Pays', acceptedAnswers: ['france'] }], explanation: 'Paris se trouve en France.', tags: [], sourceLabel: 'Test' }, args: [], expectedSelected: -2 },
  { handler: 'submitMapPoint', question: { id: 'map', topicId: 'test', difficulty: 1, type: 'map-point', prompt: 'Place Paris sur la carte.', geoTarget: { lat: 48.8566, lon: 2.3522, toleranceKm: 50, label: 'Paris' }, explanation: 'Paris se trouve dans le nord de la France.', tags: [], sourceLabel: 'Test' }, args: [], expectedSelected: -3 },
];

for (const scenario of correctCases) {
  test(`${scenario.handler} garde la bonne reponse en correction jusqu'au choix du joueur`, () => {
    const source = ts.createSourceFile('App.tsx', readFileSync('App.tsx', 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    let declaration: ts.FunctionDeclaration | undefined;
    function visit(node: ts.Node) {
      if (ts.isFunctionDeclaration(node) && node.name?.text === scenario.handler) declaration = node;
      ts.forEachChild(node, visit);
    }
    visit(source);
    assert.ok(declaration);
    let advances = 0;
    const context = {
      selected: null as number | null,
      questionIndex: 0,
      quiz: [scenario.question],
      answers: [] as SessionAnswer[],
      topic: { id: 'test' },
      freeText: 'Paris',
      fieldValues: { city: 'Paris', country: 'France' },
      mapGuess: { lat: 48.8566, lon: 2.3522 },
      isFreeTextCorrect, gradeMultiText, gradeMapPoint,
      setSelected: (value: number) => { context.selected = value; },
      setAnswers: (value: SessionAnswer[]) => { context.answers = value; },
      persistDraft: () => Promise.resolve(),
      continueQuiz: () => { advances += 1; },
      Keyboard: { dismiss: () => undefined },
      Haptics: { notificationAsync: () => Promise.resolve(), NotificationFeedbackType: { Success: 'success', Warning: 'warning' } },
    };
    const compiled = ts.transpileModule(`${declaration.getText(source)}; ${scenario.handler};`, {
      compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS },
    }).outputText;
    const handler = runInNewContext(compiled, context);
    handler(...scenario.args);
    assert.equal(context.selected, scenario.expectedSelected);
    assert.equal(context.answers.length, 1);
    assert.equal(context.answers[0].correct, true);
    assert.equal(advances, 0, 'la correction doit rester visible');
    handler(...scenario.args);
    assert.equal(context.answers.length, 1, 'une reponse validee ne doit pas etre comptee deux fois');
  });
}
