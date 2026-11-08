import assert from 'node:assert/strict';
import test from 'node:test';
import { summarizeForReview } from '../src/sessionSummary';

test('le bilan classe toutes les reponses, meme sans autoevaluation', () => {
  const summary = summarizeForReview([
    { questionId: 'correct', selectedIndex: 0, correct: true },
    { questionId: 'wrong', selectedIndex: 1, correct: false },
    { questionId: 'confident-wrong', selectedIndex: 1, correct: false, confidence: 3 },
    { questionId: 'partial', selectedIndex: -2, correct: false, credit: 0.5, confidence: 3 },
    { questionId: 'hesitant', selectedIndex: 0, correct: true, confidence: 1 },
    { questionId: 'solid', selectedIndex: 0, correct: true, confidence: 3 },
    { questionId: 'medium', selectedIndex: 0, correct: true, confidence: 2 },
  ]);
  assert.deepEqual(summary.map((item) => item.value), [4, 2, 1]);
  assert.equal(summary.reduce((total, item) => total + item.value, 0), 7);
});

test('un bilan vide ne suggere aucune reponse acquise', () => {
  assert.deepEqual(summarizeForReview([]).map((item) => item.value), [0, 0, 0]);
});
