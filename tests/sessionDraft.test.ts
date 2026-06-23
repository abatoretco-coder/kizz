import assert from 'node:assert/strict';
import test from 'node:test';
import { parseSessionDraftPayload } from '../src/sessionDraft';

const topic = { id: 'science', title: 'Sciences', subtitle: 'Test', icon: 'S', color: '#5367C7' };
const question = { id: 'sci-test', topicId: 'science', difficulty: 1 as const, prompt: 'Question ?', choices: ['A', 'B', 'C', 'D'] as [string, string, string, string], answerIndex: 0, explanation: 'Explication', tags: [], sourceLabel: 'Test' };

test('restaure et borne un brouillon de session valide', () => {
  const parsed = parseSessionDraftPayload(JSON.stringify({ topic, questions: [question], questionIndex: 8, answers: [] }), '2026-06-23T12:00:00.000Z');
  assert.ok(parsed);
  assert.equal(parsed.questionIndex, 0);
  assert.equal(parsed.updatedAt, '2026-06-23T12:00:00.000Z');
});

test('restaure le mode infini quand il est present', () => {
  const parsed = parseSessionDraftPayload(JSON.stringify({ topic, questions: [question], questionIndex: 0, answers: [], mode: { kind: 'infinite', difficulty: 2 } }), '2026-06-23T12:00:00.000Z');
  assert.ok(parsed);
  assert.deepEqual(parsed.mode, { kind: 'infinite', difficulty: 2 });
});

test('ignore un mode infini invalide', () => {
  const parsed = parseSessionDraftPayload(JSON.stringify({ topic, questions: [question], questionIndex: 0, answers: [], mode: { kind: 'infinite', difficulty: 9 } }), '2026-06-23T12:00:00.000Z');
  assert.ok(parsed);
  assert.equal(parsed.mode, undefined);
});

test('rejette un brouillon corrompu ou incomplet', () => {
  assert.equal(parseSessionDraftPayload('{cassé', 'now'), null);
  assert.equal(parseSessionDraftPayload(JSON.stringify({ topic, questions: [], questionIndex: 0, answers: [] }), 'now'), null);
});
