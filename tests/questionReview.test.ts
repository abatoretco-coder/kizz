import assert from 'node:assert/strict';
import test from 'node:test';
import { QuizQuestion } from '../src/domain';
import { countReviewStatus, reviewQuestionQuality } from '../src/questionReview';

const baseQuestion: QuizQuestion = {
  id: 'review-ok',
  topicId: 'culture',
  difficulty: 2,
  prompt: 'Quelle proposition correspond à cette question de test ?',
  choices: ['Réponse juste', 'Distracteur un', 'Distracteur deux', 'Distracteur trois'],
  answerIndex: 0,
  explanation: 'Cette explication donne assez de contexte pour valider la réponse.',
  tags: ['test'],
  sourceLabel: 'Kizz',
};

test('la revue qualité valide un QCM équilibré', () => {
  const review = reviewQuestionQuality(baseQuestion);
  assert.equal(review.status, 'ok');
  assert.ok(review.checks.some((check) => check.label === '4 propositions distinctes'));
});

test('la revue qualité détecte les propositions dupliquées et les réponses invalides', () => {
  const review = reviewQuestionQuality({
    ...baseQuestion,
    id: 'review-error',
    choices: ['Paris', 'Paris', 'Lyon', 'Marseille'],
    answerIndex: 7,
  });
  assert.equal(review.status, 'error');
  assert.ok(review.checks.some((check) => check.label === 'Propositions dupliquées'));
  assert.ok(review.checks.some((check) => check.label === 'Bonne réponse invalide'));
});

test('la revue qualité signale les difficultés visiblement suspectes', () => {
  const review = reviewQuestionQuality({
    ...baseQuestion,
    id: 'review-warning',
    difficulty: 3,
    prompt: 'Quel est le drapeau de l’Italie ?',
    tags: ['drapeau'],
  });
  assert.equal(review.status, 'warning');
  assert.ok(review.checks.some((check) => check.label.includes('Drapeau en niveau avancé')));
});

test('les compteurs de revue agrègent les statuts', () => {
  const counts = countReviewStatus([
    baseQuestion,
    { ...baseQuestion, id: 'review-warning', difficulty: 3, prompt: 'Où se trouve l’Atomium ?', tags: ['monument'] },
    { ...baseQuestion, id: 'review-error', choices: ['A', 'A', 'B', 'C'] },
  ]);
  assert.deepEqual(counts, { ok: 1, warning: 1, error: 1 });
});
