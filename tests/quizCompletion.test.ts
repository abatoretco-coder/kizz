import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

function completionHandler(saveSession: () => Promise<void>) {
  const source = ts.createSourceFile('App.tsx', readFileSync('App.tsx', 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let handler: ts.FunctionDeclaration | undefined;
  const visit = (node: ts.Node) => {
    if (ts.isFunctionDeclaration(node) && node.name?.text === 'continueQuiz') handler = node;
    ts.forEachChild(node, visit);
  };
  visit(source);
  assert.ok(handler);
  const compiled = ts.transpileModule(handler.getText(source) + '\ncontinueQuiz;', {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const quizActionPending = { current: false };
  const noOp = async () => {};
  const callback = runInNewContext(compiled, {
    answers: [{ questionId: 'q', selectedIndex: 0, correct: true }], quiz: [{ id: 'q' }], questionIndex: 0,
    infiniteDifficulty: null, topic: { id: 'test' }, quizActionPending, saveSession,
    setAnswers: noOp, clearSessionDraft: noOp, setDraft: noOp,
    refreshStats: noOp, refreshProgress: noOp, refreshRecentSessions: noOp, refreshLanguageProgress: noOp,
    navigateTo: noOp,
  }) as () => Promise<void>;
  return { callback, quizActionPending };
}

test('deux appuis sur le bilan ne déclenchent qu’un seul enregistrement', async () => {
  let calls = 0;
  let finish!: () => void;
  const pending = new Promise<void>((resolve) => { finish = resolve; });
  const { callback } = completionHandler(async () => { calls++; await pending; });
  const first = callback();
  const second = callback();
  try { assert.equal(calls, 1); }
  finally { finish(); await Promise.all([first, second]); }
});

test('une erreur de sauvegarde permet de réessayer la fin de session', async () => {
  let calls = 0;
  const { callback, quizActionPending } = completionHandler(async () => {
    if (++calls === 1) throw new Error('écriture interrompue');
  });
  await assert.rejects(callback(), /écriture interrompue/);
  assert.equal(quizActionPending.current, false);
  await callback();
  assert.equal(calls, 2);
});
