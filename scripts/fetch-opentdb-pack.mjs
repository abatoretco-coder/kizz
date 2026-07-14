import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const API = 'https://opentdb.com';
const RATE_LIMIT_MS = 5200;

const difficultyMap = {
  easy: 1,
  medium: 2,
  hard: 3,
};

const topicMap = {
  'General Knowledge': { id: 'opentdb-general', title: 'OpenTDB - Culture générale', icon: 'CG', color: '#5367C7' },
  'Entertainment: Books': { id: 'opentdb-books', title: 'OpenTDB - Livres', icon: 'Li', color: '#9A5B9E' },
  'Entertainment: Film': { id: 'opentdb-film', title: 'OpenTDB - Cinéma', icon: 'Ci', color: '#9A5B9E' },
  'Entertainment: Music': { id: 'opentdb-music', title: 'OpenTDB - Musique', icon: 'Mu', color: '#9A5B9E' },
  'Entertainment: Musicals & Theatres': { id: 'opentdb-theatre', title: 'OpenTDB - Théâtre', icon: 'Th', color: '#9A5B9E' },
  'Entertainment: Television': { id: 'opentdb-tv', title: 'OpenTDB - Télévision', icon: 'TV', color: '#9A5B9E' },
  'Entertainment: Video Games': { id: 'opentdb-games', title: 'OpenTDB - Jeux vidéo', icon: 'JV', color: '#2E7E9C' },
  'Entertainment: Board Games': { id: 'opentdb-board-games', title: 'OpenTDB - Jeux de société', icon: 'JS', color: '#2E7E9C' },
  'Science & Nature': { id: 'opentdb-science-nature', title: 'OpenTDB - Sciences et nature', icon: 'SN', color: '#3F8F72' },
  'Science: Computers': { id: 'opentdb-computers', title: 'OpenTDB - Informatique', icon: 'IT', color: '#2E7E9C' },
  'Science: Mathematics': { id: 'opentdb-math', title: 'OpenTDB - Mathématiques', icon: 'Ma', color: '#5367C7' },
  Mythology: { id: 'opentdb-mythology', title: 'OpenTDB - Mythologie', icon: 'My', color: '#E96D4B' },
  Sports: { id: 'opentdb-sports', title: 'OpenTDB - Sport', icon: 'Sp', color: '#B27C2B' },
  Geography: { id: 'opentdb-geography', title: 'OpenTDB - Géographie', icon: 'G', color: '#3F8F72' },
  History: { id: 'opentdb-history', title: 'OpenTDB - Histoire', icon: 'H', color: '#E96D4B' },
  Politics: { id: 'opentdb-politics', title: 'OpenTDB - Politique', icon: 'Po', color: '#5367C7' },
  Art: { id: 'opentdb-art', title: 'OpenTDB - Arts', icon: 'A', color: '#9A5B9E' },
  Celebrities: { id: 'opentdb-celebrities', title: 'OpenTDB - Célébrités', icon: 'Ce', color: '#B27C2B' },
  Animals: { id: 'opentdb-animals', title: 'OpenTDB - Animaux', icon: 'An', color: '#3F8F72' },
  Vehicles: { id: 'opentdb-vehicles', title: 'OpenTDB - Véhicules', icon: 'V', color: '#2E7E9C' },
  'Entertainment: Comics': { id: 'opentdb-comics', title: 'OpenTDB - Comics', icon: 'Co', color: '#9A5B9E' },
  'Science: Gadgets': { id: 'opentdb-gadgets', title: 'OpenTDB - Gadgets', icon: 'Ga', color: '#2E7E9C' },
  'Entertainment: Japanese Anime & Manga': { id: 'opentdb-anime-manga', title: 'OpenTDB - Anime et manga', icon: 'AM', color: '#9A5B9E' },
  'Entertainment: Cartoon & Animations': { id: 'opentdb-animation', title: 'OpenTDB - Animation', icon: 'An', color: '#9A5B9E' },
};

function argValue(name) {
  const prefix = `${name}=`;
  const match = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : undefined;
}

const maxQuestions = Number(argValue('--max-questions') ?? '0');

function wait(ms) {
  return new Promise((resolveWait) => setTimeout(resolveWait, ms));
}

async function fetchJson(path) {
  const response = await fetch(`${API}${path}`);
  if (!response.ok) throw new Error(`HTTP ${response.status} pour ${path}`);
  return response.json();
}

function decodeBase64(value) {
  return Buffer.from(value, 'base64').toString('utf8');
}

function slug(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'question';
}

function shuffledDistractors(correct, incorrect) {
  const unique = [];
  for (const choice of [correct, ...incorrect]) {
    if (!unique.some((item) => item.toLowerCase() === choice.toLowerCase())) unique.push(choice);
  }
  if (unique.length !== 4) return undefined;
  return unique;
}

function answerIndex(choices, correct) {
  return choices.findIndex((choice) => choice.toLowerCase() === correct.toLowerCase());
}

async function main() {
  const outDir = resolve('external-data', 'opentdb');
  const packDir = resolve('generated-packs');
  await mkdir(outDir, { recursive: true });
  await mkdir(packDir, { recursive: true });

  const [{ trivia_categories: categories }, tokenResponse, counts] = await Promise.all([
    fetchJson('/api_category.php'),
    fetchJson('/api_token.php?command=request'),
    fetchJson('/api_count_global.php'),
  ]);
  const token = tokenResponse.token;
  const rawQuestions = [];
  const skipped = { boolean: 0, duplicateOrInvalidChoices: 0, apiEmpty: 0 };

  for (const category of categories) {
    let categoryDone = false;
    while (!categoryDone) {
      if (maxQuestions > 0 && rawQuestions.length >= maxQuestions) break;
      const remaining = maxQuestions > 0 ? Math.min(50, maxQuestions - rawQuestions.length) : 50;
      const path = `/api.php?amount=${remaining}&category=${category.id}&type=multiple&encode=base64&token=${token}`;
      const payload = await fetchJson(path);
      if (payload.response_code === 0) {
        rawQuestions.push(...payload.results);
        console.log(`${rawQuestions.length} questions recuperees...`);
        await wait(RATE_LIMIT_MS);
        continue;
      }
      if (payload.response_code === 4 || payload.response_code === 1) {
        skipped.apiEmpty += 1;
        categoryDone = true;
        await fetchJson(`/api_token.php?command=reset&token=${token}`);
        await wait(RATE_LIMIT_MS);
        continue;
      }
      if (payload.response_code === 5) {
        await wait(RATE_LIMIT_MS);
        continue;
      }
      throw new Error(`Reponse API OpenTDB inattendue: ${payload.response_code}`);
    }
    if (maxQuestions > 0 && rawQuestions.length >= maxQuestions) break;
  }

  const decoded = rawQuestions.map((item) => ({
    type: decodeBase64(item.type),
    difficulty: decodeBase64(item.difficulty),
    category: decodeBase64(item.category),
    question: decodeBase64(item.question),
    correct_answer: decodeBase64(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map(decodeBase64),
  }));

  const topicIds = new Set();
  const questions = [];
  for (const [index, item] of decoded.entries()) {
    if (item.type !== 'multiple') {
      skipped.boolean += 1;
      continue;
    }
    const topic = topicMap[item.category] ?? {
      id: `opentdb-${slug(item.category)}`,
      title: `OpenTDB - ${item.category}`,
      icon: 'Q',
      color: '#5367C7',
    };
    const choices = shuffledDistractors(item.correct_answer, item.incorrect_answers);
    if (!choices) {
      skipped.duplicateOrInvalidChoices += 1;
      continue;
    }
    topicIds.add(topic.id);
    questions.push({
      id: `opentdb-${slug(item.category)}-${String(index + 1).padStart(5, '0')}`,
      topicId: topic.id,
      difficulty: difficultyMap[item.difficulty] ?? 2,
      type: 'multiple-choice',
      prompt: item.question,
      choices,
      answerIndex: answerIndex(choices, item.correct_answer),
      explanation: `Réponse Open Trivia DB: ${item.correct_answer}.`,
      tags: ['opentdb', 'cc-by-sa-4.0', `opentdb:${slug(item.category)}`, `difficulty:${item.difficulty}`],
      sourceLabel: 'Open Trivia DB - CC BY-SA 4.0',
      sourceUrl: 'https://opentdb.com/',
      learnMoreUrl: 'https://opentdb.com/',
    });
  }

  const topics = categories
    .map((category) => topicMap[category.name] ?? {
      id: `opentdb-${slug(category.name)}`,
      title: `OpenTDB - ${category.name}`,
      icon: 'Q',
      color: '#5367C7',
    })
    .filter((topic) => topicIds.has(topic.id))
    .map((topic) => ({
      ...topic,
      subtitle: 'Questions importées depuis Open Trivia DB',
    }));

  const pack = {
    format: 'kizz.quiz-pack',
    version: 1,
    id: `opentdb-cc-by-sa-4-${new Date().toISOString().slice(0, 10)}`,
    name: 'Open Trivia DB - CC BY-SA 4.0',
    description: 'Banque Open Trivia DB convertie au format Kizz. Questions en anglais, licence CC BY-SA 4.0.',
    language: 'en',
    exportedAt: new Date().toISOString(),
    topics,
    questions,
  };

  const attribution = [
    '# Open Trivia DB',
    '',
    'Source: https://opentdb.com/',
    'API: https://opentdb.com/api_config.php',
    'Licence annoncee par Open Trivia DB: Creative Commons Attribution-ShareAlike 4.0 International.',
    'Licence: https://creativecommons.org/licenses/by-sa/4.0/',
    '',
    `Recuperation: ${pack.exportedAt}`,
    `Questions brutes recuperees: ${decoded.length}`,
    `Questions Kizz converties: ${questions.length}`,
    `Questions ignorees: ${JSON.stringify(skipped)}`,
    `Compteur global OpenTDB au moment de la recuperation: ${JSON.stringify(counts.overall)}`,
    '',
    'Note: le pack conserve les enonces en anglais et attribue chaque question a Open Trivia DB.',
    '',
  ].join('\n');

  await writeFile(resolve(outDir, 'raw-multiple-choice.json'), `${JSON.stringify(decoded, null, 2)}\n`, 'utf8');
  await writeFile(resolve(outDir, 'attribution.md'), attribution, 'utf8');
  await writeFile(resolve(packDir, 'opentdb-cc-by-sa-4.json'), `${JSON.stringify(pack, null, 2)}\n`, 'utf8');
  console.log(`Pack ecrit: ${resolve(packDir, 'opentdb-cc-by-sa-4.json')}`);
  console.log(`Attribution: ${resolve(outDir, 'attribution.md')}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
