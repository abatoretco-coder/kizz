import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { questions } from '../src/content';
import { quizzApiGeoQuestions } from '../src/contentQuizzApiGeo';
import { quizzApiExpansionQuestions } from '../src/contentQuizzApiExpansion';

type SourceQuestion = { id: string; question: string; answer: string; badAnswers: string[]; category: string; difficulty: string };
const read = (name: string) => JSON.parse(readFileSync(new URL(`../external-data/quizzapi/${name}`, import.meta.url), 'utf8'));
const source = read('questions-originales.json') as { count: number; quizzes: SourceQuestion[] };
const selection = [...read('selection-geographie.json'), ...read('selection-sciences-histoire.json')] as { sourceId: string; choices?: string[]; answerIndex?: number }[];
const activeQuestions = [...quizzApiGeoQuestions, ...quizzApiExpansionQuestions];
const manifest = read('manifest.json');

test('le réservoir français conserve les QCM complets et les comptes annoncés', () => {
  assert.equal(source.count, source.quizzes.length);
  assert.equal(source.count, manifest.total);
  assert.equal(new Set(source.quizzes.map((item) => item.id)).size, source.count);
  for (const row of source.quizzes) {
    assert.ok(row.question.trim().length > 0, row.id);
    assert.equal(row.badAnswers.length, 3, row.id);
    assert.equal(new Set([row.answer, ...row.badAnswers].map((answer) => answer.trim().toLowerCase())).size, 4, row.id);
    assert.ok(['facile', 'normal', 'difficile'].includes(row.difficulty), row.id);
  }
  assert.equal(source.quizzes.filter((item) => item.category === 'geographie').length, read('geographie-originale.json').length);
});

test('chaque QCM activé conserve sa provenance et la réponse de sa sélection éditoriale', () => {
  assert.equal(activeQuestions.length, manifest.activeSelection);
  assert.ok(activeQuestions.length >= 100);
  for (const question of activeQuestions) {
    const sourceId = question.id.slice('qapi-'.length);
    const row = source.quizzes.find((item) => item.id === sourceId);
    const edit = selection.find((item) => item.sourceId === sourceId);
    assert.ok(row && edit, question.id);
    assert.equal(question.choices![question.answerIndex!], edit.choices ? edit.choices[edit.answerIndex ?? 0] : row.answer.trim(), question.id);
    assert.ok(question.tags.includes(`source-level:${row.difficulty}`), question.id);
    assert.ok(question.sourceLabel?.includes('Quiz API v2 - Jonathan Moreschi'), question.id);
    assert.ok(question.sourceUrl?.endsWith(sourceId), question.id);
    assert.ok(question.explanation.length >= 60, question.id);
    assert.ok(questions.some((item) => item.id === question.id), question.id);
  }
});

test('les erreurs de masse lunaire, de période orbitale et de lieu photographique sont corrigées', () => {
  const correct = (id: string) => {
    const question = activeQuestions.find((item) => item.id === `qapi-${id}`)!;
    assert.ok(question);
    return question.choices![question.answerIndex!];
  };
  assert.equal(correct('cmck8wdv5005whzromlwzsru1'), 'Elle reste de 60 kg');
  assert.equal(correct('cmck8wdv5005thzrognpaaoe4'), '27,3 jours');
  assert.equal(correct('cmgqe688p000lhz95gqgbmv0t'), 'GEIPAN');
  assert.equal(correct('cmjhh18nb0045hz0l2w5w87sf'), 'Saint-Loup-de-Varennes');
});

test('la sélection corrige la définition endoréique et écarte les erreurs géographiques repérées', () => {
  const lake = quizzApiGeoQuestions.find((item) => item.id === 'qapi-cmsz1e8ds001dhz9cprc0u843');
  assert.ok(lake);
  assert.match(lake.prompt, /écoulement vers l’océan/);
  assert.match(lake.explanation, /peut recevoir des cours d’eau/);
  assert.ok(!quizzApiGeoQuestions.some((item) => item.id === 'qapi-cmck8wdv8008khzroztym15l2'));
  assert.ok(!quizzApiGeoQuestions.some((item) => item.id === 'qapi-cmguxjmlc0001hz8n9ilc7i08'));
});
