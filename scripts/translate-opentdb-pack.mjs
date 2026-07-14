import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const sourcePath = resolve('generated-packs', 'opentdb-cc-by-sa-4.json');
const targetPath = resolve('external-data', 'opentdb', 'opentdb-cc-by-sa-4.fr.json');
const cachePath = resolve('external-data', 'opentdb', 'translation-cache.en-fr.json');
const notesPath = resolve('external-data', 'opentdb', 'translation-notes.md');
const endpoint = 'https://translate.googleapis.com/translate_a/single';
const separator = '<KIZZ_FIELD_SEPARATOR_DO_NOT_TRANSLATE>';
const maxCharsPerBatch = 2600;
const delayMs = 220;

function argValue(name) {
  const prefix = `${name}=`;
  const match = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : undefined;
}

const maxQuestions = Number(argValue('--max-questions') ?? '0');

function wait(ms) {
  return new Promise((resolveWait) => setTimeout(resolveWait, ms));
}

function normalizeChoice(value) {
  return value.trim().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function cleanTranslation(value) {
  return value
    .replace(/\s+([?!;:])/g, ' $1')
    .replace(/\s+,/g, ',')
    .replace(/\s+\./g, '.')
    .replace(/«\s+/g, '« ')
    .replace(/\s+»/g, ' »')
    .trim();
}

async function readJson(path, fallback) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(await readFile(path, 'utf8'));
}

async function translateJoined(texts) {
  const q = texts.join(`\n${separator}\n`);
  const url = `${endpoint}?client=gtx&sl=en&tl=fr&dt=t&q=${encodeURIComponent(q)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} pendant la traduction`);
  const payload = await response.json();
  const translated = payload[0].map((part) => part[0]).join('');
  return translated.split(separator).map(cleanTranslation);
}

async function translateBatch(texts) {
  const translated = await translateJoined(texts);
  if (translated.length === texts.length) return translated;
  const fallback = [];
  for (const text of texts) {
    const [single] = await translateJoined([text]);
    fallback.push(single);
    await wait(delayMs);
  }
  return fallback;
}

function buildBatches(texts) {
  const batches = [];
  let batch = [];
  let length = 0;
  for (const text of texts) {
    const projected = length + text.length + separator.length + 4;
    if (batch.length && projected > maxCharsPerBatch) {
      batches.push(batch);
      batch = [];
      length = 0;
    }
    batch.push(text);
    length += text.length + separator.length + 4;
  }
  if (batch.length) batches.push(batch);
  return batches;
}

const pack = await readJson(sourcePath);
const cache = await readJson(cachePath, {});
const selectedQuestions = maxQuestions > 0 ? pack.questions.slice(0, maxQuestions) : pack.questions;
const textsToTranslate = [];

for (const question of selectedQuestions) {
  for (const text of [question.prompt, ...question.choices]) {
    if (!cache[text]) textsToTranslate.push(text);
  }
}

const uniqueTexts = [...new Set(textsToTranslate)];
const batches = buildBatches(uniqueTexts);

await mkdir(resolve('external-data', 'opentdb'), { recursive: true });

for (const [index, batch] of batches.entries()) {
  const translations = await translateBatch(batch);
  translations.forEach((translation, itemIndex) => {
    cache[batch[itemIndex]] = translation;
  });
  if ((index + 1) % 10 === 0 || index === batches.length - 1) {
    await writeFile(cachePath, `${JSON.stringify(cache, null, 2)}\n`, 'utf8');
    console.log(`${index + 1}/${batches.length} lots traduits, ${Object.keys(cache).length} entrees en cache`);
  }
  await wait(delayMs);
}

const translatedQuestions = selectedQuestions.map((question) => {
  const translatedPrompt = cache[question.prompt] ?? question.prompt;
  const translatedChoices = question.choices.map((choice) => cache[choice] ?? choice);
  const duplicateAfterTranslation = new Set(translatedChoices.map(normalizeChoice)).size !== translatedChoices.length;
  const choices = duplicateAfterTranslation ? question.choices : translatedChoices;
  const correctAnswer = choices[question.answerIndex];
  return {
    ...question,
    prompt: translatedPrompt,
    choices,
    explanation: `D'après Open Trivia DB, la bonne réponse est "${correctAnswer}". Cette question provient d'une banque anglophone sous licence CC BY-SA 4.0 et a été traduite automatiquement en français.`,
    tags: [...new Set([...question.tags, 'translated:machine', 'source-language:en'])],
  };
});

const translatedPack = {
  ...pack,
  id: `${pack.id}-fr`,
  name: `${pack.name} - traduction française`,
  description: 'Banque Open Trivia DB convertie au format Kizz. Questions traduites automatiquement en français, licence CC BY-SA 4.0.',
  language: 'fr',
  exportedAt: new Date().toISOString(),
  questions: translatedQuestions,
};

await writeFile(targetPath, `${JSON.stringify(translatedPack, null, 2)}\n`, 'utf8');
await writeFile(cachePath, `${JSON.stringify(cache, null, 2)}\n`, 'utf8');
await writeFile(notesPath, [
  '# Traduction Open Trivia DB',
  '',
  `Date: ${translatedPack.exportedAt}`,
  'Source: generated-packs/opentdb-cc-by-sa-4.json',
  'Cible: external-data/opentdb/opentdb-cc-by-sa-4.fr.json',
  'Méthode: traduction automatique en-fr via endpoint Google Translate public.',
  'Licence conservée: Open Trivia DB - CC BY-SA 4.0.',
  '',
  `Questions traduites: ${translatedQuestions.length}`,
  '',
].join('\n'), 'utf8');

console.log(`Pack traduit: ${targetPath}`);
