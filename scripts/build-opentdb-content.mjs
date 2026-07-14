import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const translatedPackPath = resolve('external-data', 'opentdb', 'opentdb-cc-by-sa-4.fr.json');
const originalPackPath = resolve('generated-packs', 'opentdb-cc-by-sa-4.json');
const packPath = existsSync(translatedPackPath) ? translatedPackPath : originalPackPath;
const targetPath = resolve('src', 'generated', 'contentOpenTdb.ts');

function subthemeTag(topicId) {
  return `subtheme:${topicId.replace(/^opentdb-/, 'opentdb:')}`;
}

function normalizeChoice(value) {
  return value.trim().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function textWords(value) {
  return normalizeChoice(value).match(/[\p{L}\p{N}]+/gu) ?? [];
}

function isAnswerStopword(word) {
  return ['de', 'du', 'des', 'la', 'le', 'les', 'l', 'd', 'a', 'au', 'aux', 'en', 'et', 'ou'].includes(word);
}

function numericValue(value) {
  const normalized = value.trim().replace(',', '.');
  if (!/^-?\d+(\.\d)?$/.test(normalized) && !/^-?\d+(\.\d+)?$/.test(normalized)) return undefined;
  return Number(normalized);
}

function fullAnswerAppearsInPrompt(question) {
  const correctChoice = question.choices[question.answerIndex];
  if (!correctChoice || correctChoice.trim().length <= 4) return false;
  const meaningfulCorrectWords = textWords(correctChoice).filter((word) => !isAnswerStopword(word));
  if (!meaningfulCorrectWords.length) return false;
  const promptWords = new Set(textWords(question.prompt));
  return meaningfulCorrectWords.every((word) => promptWords.has(word));
}

function hasWeakNumericChoices(question) {
  const numbers = question.choices.map(numericValue);
  const numericCount = numbers.filter((value) => value !== undefined).length;
  if (numericCount > 0 && numericCount < question.choices.length) return true;
  if (!numbers.every((value) => value !== undefined)) return false;
  const correct = numbers[question.answerIndex];
  if (correct === undefined) return false;
  const distractors = numbers.filter((_, index) => index !== question.answerIndex);
  if (correct > 10 && distractors.every((value) => [1, 2, 3].includes(value))) return true;
  const maxGap = Math.max(...distractors.map((value) => Math.abs(value - correct)));
  return correct > 0 && maxGap > Math.max(25, Math.abs(correct) * 2.5);
}

function isEditoriallyUsable(question) {
  const normalizedChoices = question.choices.map(normalizeChoice);
  if (new Set(normalizedChoices).size !== normalizedChoices.length) return false;
  const promptLength = question.prompt.trim().length;
  if (promptLength < 18 || promptLength > 180) return false;
  if (fullAnswerAppearsInPrompt(question)) return false;
  if (hasWeakNumericChoices(question)) return false;
  return true;
}

function longerExplanation(question) {
  const answer = question.choices[question.answerIndex];
  return `D’après Open Trivia DB, la bonne réponse est « ${answer} ». Cette question provient d’une banque anglophone traduite automatiquement en français et intégrée avec attribution CC BY-SA 4.0.`;
}

function withAnswerAt(question, targetIndex) {
  const correctChoice = question.choices[question.answerIndex];
  const distractors = question.choices.filter((_, index) => index !== question.answerIndex);
  const choices = [];
  for (let index = 0; index < 4; index += 1) {
    choices[index] = index === targetIndex ? correctChoice : distractors.shift();
  }
  return {
    ...question,
    choices,
    answerIndex: targetIndex,
  };
}

function rebalanceAnswerIndexes(questions) {
  const groupCounts = new Map();
  return questions.map((question) => {
    const groupKey = `${question.topicId}:${question.difficulty}`;
    const nextCount = groupCounts.get(groupKey) ?? 0;
    groupCounts.set(groupKey, nextCount + 1);
    return withAnswerAt(question, nextCount % 4);
  });
}

const pack = JSON.parse(await readFile(packPath, 'utf8'));
const topics = pack.topics.map((topic) => ({
  ...topic,
  subtitle: 'Banque sous licence CC BY-SA 4.0',
}));

const filteredQuestions = pack.questions.filter(isEditoriallyUsable);

const questions = rebalanceAnswerIndexes(filteredQuestions)
  .map((question) => ({
    ...question,
    explanation: longerExplanation(question),
    tags: [...new Set([
      ...question.tags,
      'licensed-content',
      'language:fr',
      'source-language:en',
      'translated:machine',
      subthemeTag(question.topicId),
      `${subthemeTag(question.topicId)}:${question.difficulty}`,
    ])],
    sourceLabel: 'Open Trivia DB - CC BY-SA 4.0',
    sourceUrl: 'https://opentdb.com/',
    learnMoreUrl: 'https://opentdb.com/',
  }));

const source = `import { QuestionSeed, Topic } from '../domain';

export const openTdbTopics = ${JSON.stringify(topics, null, 2)} as Topic[];

export const openTdbQuestions = ${JSON.stringify(questions, null, 2)} as QuestionSeed[];
`;

await writeFile(targetPath, source, 'utf8');
console.log(`${targetPath} (${questions.length}/${pack.questions.length} questions conservees)`);
