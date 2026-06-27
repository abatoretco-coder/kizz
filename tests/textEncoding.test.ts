import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const filesToScan = [
  'App.tsx',
  'README.md',
  'docs/CODE_AUDIT.md',
  'docs/PRODUCT_NOTES.md',
  'docs/ROADMAP.md',
  'docs/RESEARCH.md',
  'src/content.ts',
  'src/contentVisualRecognition.ts',
  'src/generated/contentVisualHistory.ts',
  'src/quizPack.ts',
];

const mojibakeSequences = [
  'é', 'è', 'ê', 'à', 'ç', 'ô', 'î', 'œ', 'Œ', '’', '“', '”', '…', '—', '∞', '★', '‹', '›', 'Ω',
].map((character) => Buffer.from(character, 'utf8').toString('latin1'));

test('les textes visibles ne contiennent pas de mojibake UTF-8', () => {
  for (const file of filesToScan) {
    const content = readFileSync(file, 'utf8');
    for (const sequence of mojibakeSequences) {
      assert.equal(content.includes(sequence), false, `${file} contient une sequence mal encodee: ${sequence}`);
    }
  }
});
