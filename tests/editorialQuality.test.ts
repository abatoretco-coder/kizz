import assert from 'node:assert/strict';
import test from 'node:test';
import { questions } from '../src/content';
import { auditContent } from '../src/contentAudit';
import { isFreeTextCorrect } from '../src/quizEngine';

test('la memoire persistante attend une technologie precise et accepte ses variantes', () => {
  const question = questions.find((item) => item.id === 'tech-02');
  assert.ok(question);
  assert.equal(isFreeTextCorrect(question, '  MÉMOIRE FLASH '), true);
  assert.equal(isFreeTextCorrect(question, 'flash'), true);
  assert.equal(isFreeTextCorrect(question, 'RAM'), false);
  assert.equal(isFreeTextCorrect(question, 'stockage'), false);
});

test('un enonce demandant une observation sans image est detecte', () => {
  const question = questions.find((item) => item.id === 'tech-03');
  assert.ok(question);
  const report = auditContent([{ id: 'technology', title: 'Technologie', subtitle: '', icon: 'T', color: '#ffffff' }], [
    { ...question, prompt: 'En observant ce monument, dans quel pays se trouve-t-il ?' },
  ]);
  assert.ok(report.issues.some((issue) => issue.severity === 'error' && issue.message.includes('sans media')));
});

test('la banque ne demande pas une observation sans fournir de media', () => {
  for (const question of questions.filter((item) => /\ben observant\b/i.test(item.prompt))) {
    assert.ok(question.imageAsset || question.imageUrl || question.choiceImageAssets?.length || question.promptBlocks?.some((block) => block.type === 'image'), question.id);
  }
});
