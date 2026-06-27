import { Difficulty, QUIZ_PACK_FORMAT, QuizPack, QuestionSeed, Topic } from './domain';

export type CsvQuizPackDraft = {
  pack: QuizPack;
  preview: {
    name: string;
    topics: number;
    questions: number;
    samplePrompts: string[];
  };
};

const REQUIRED_COLUMNS = ['topicId', 'difficulty', 'prompt', 'explanation'] as const;

export function parseCsvQuizPack(raw: string, fileName = 'import.csv'): CsvQuizPackDraft {
  const rows = parseCsv(raw.replace(/^\uFEFF/, ''));
  if (rows.length < 2) throw new Error('Le CSV doit contenir une ligne d en-tetes et au moins une question.');
  const headers = rows[0].map((header) => header.trim());
  const index = new Map(headers.map((header, column) => [header, column]));
  for (const column of REQUIRED_COLUMNS) {
    if (!index.has(column)) throw new Error(`Colonne CSV manquante: ${column}.`);
  }

  const topics = new Map<string, Topic>();
  const questions: QuestionSeed[] = [];
  const seenQuestionIds = new Set<string>();

  rows.slice(1).forEach((row, rowIndex) => {
    if (!row.some((cell) => cell.trim())) return;
    const line = rowIndex + 2;
    const get = (column: string) => (index.has(column) ? row[index.get(column)!]?.trim() ?? '' : '');
    const topicId = required(get('topicId'), 'topicId', line);
    const topicTitle = get('topicTitle') || topicId;
    topics.set(topicId, {
      id: topicId,
      title: topicTitle,
      subtitle: get('topicSubtitle'),
      icon: (get('topicIcon') || topicTitle.slice(0, 2)).slice(0, 3),
      color: validColor(get('topicColor')) ? get('topicColor') : '#68D7A2',
    });

    const type = normalizeType(get('type'));
    const difficulty = normalizeDifficulty(required(get('difficulty'), 'difficulty', line), line);
    const id = get('id') || `csv-${slug(topicId)}-${line}`;
    if (seenQuestionIds.has(id)) throw new Error(`Identifiant de question duplique dans le CSV: ${id}.`);
    seenQuestionIds.add(id);

    const base = {
      id,
      topicId,
      difficulty,
      prompt: required(get('prompt'), 'prompt', line),
      explanation: required(get('explanation'), 'explanation', line),
      tags: splitList(get('tags')),
      sourceLabel: get('sourceLabel') || `CSV ${fileName}`,
      sourceUrl: get('sourceUrl') || undefined,
      learnMoreUrl: get('learnMoreUrl') || undefined,
    };

    if (type === 'free-text') {
      const acceptedAnswers = splitList(get('acceptedAnswers') || get('answer'));
      if (!acceptedAnswers.length) throw new Error(`Ligne ${line}: une question libre doit avoir acceptedAnswers ou answer.`);
      questions.push({ ...base, type, acceptedAnswers });
      return;
    }

    const choices = [get('choiceA'), get('choiceB'), get('choiceC'), get('choiceD')] as [string, string, string, string];
    if (choices.some((choice) => !choice)) throw new Error(`Ligne ${line}: un QCM doit avoir choiceA, choiceB, choiceC et choiceD.`);
    questions.push({
      ...base,
      type: 'multiple-choice',
      choices,
      answerIndex: normalizeAnswerIndex(required(get('answer'), 'answer', line), choices, line),
    });
  });

  if (!questions.length) throw new Error('Aucune question valide trouvee dans le CSV.');
  const cleanName = fileName.replace(/\.[^.]+$/, '').trim() || 'Import CSV';
  const pack: QuizPack = {
    format: QUIZ_PACK_FORMAT,
    version: 1,
    id: `csv-${slug(cleanName)}-${Date.now()}`,
    name: `Import CSV - ${cleanName}`,
    description: 'Banque importee depuis un fichier CSV.',
    language: 'fr',
    exportedAt: new Date().toISOString(),
    topics: [...topics.values()],
    questions,
  };
  return {
    pack,
    preview: {
      name: pack.name,
      topics: pack.topics.length,
      questions: pack.questions.length,
      samplePrompts: pack.questions.slice(0, 3).map((question) => question.prompt),
    },
  };
}

function parseCsv(raw: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let quoted = false;
  for (let index = 0; index < raw.length; index += 1) {
    const char = raw[index];
    const next = raw[index + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"';
        index += 1;
      } else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') {
      row.push(cell);
      cell = '';
    } else if (char === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else if (char !== '\r') cell += char;
  }
  if (quoted) throw new Error('CSV invalide: guillemet non ferme.');
  row.push(cell);
  rows.push(row);
  return rows.filter((item) => item.some((value) => value.trim()));
}

function required(value: string, column: string, line: number) {
  if (!value) throw new Error(`Ligne ${line}: colonne ${column} vide.`);
  return value;
}

function normalizeType(value: string): 'multiple-choice' | 'free-text' {
  const normalized = value.trim().toLowerCase();
  if (!normalized || normalized === 'multiple-choice' || normalized === 'qcm') return 'multiple-choice';
  if (normalized === 'free-text' || normalized === 'texte' || normalized === 'text') return 'free-text';
  throw new Error(`Type CSV non supporte: ${value}.`);
}

function normalizeDifficulty(value: string, line: number): Difficulty {
  const difficulty = Number(value);
  if (difficulty !== 1 && difficulty !== 2 && difficulty !== 3) throw new Error(`Ligne ${line}: difficulty doit valoir 1, 2 ou 3.`);
  return difficulty;
}

function normalizeAnswerIndex(answer: string, choices: [string, string, string, string], line: number) {
  const normalized = answer.trim().toUpperCase();
  if (/^[ABCD]$/.test(normalized)) return normalized.charCodeAt(0) - 65;
  const numeric = Number(normalized);
  if (Number.isInteger(numeric) && numeric >= 0 && numeric <= 3) return numeric;
  const byChoice = choices.findIndex((choice) => choice.trim().toLowerCase() === answer.trim().toLowerCase());
  if (byChoice >= 0) return byChoice;
  throw new Error(`Ligne ${line}: answer doit etre A, B, C, D, 0-3 ou le texte exact du bon choix.`);
}

function splitList(value: string) {
  return value.split(/[;|]/).map((item) => item.trim()).filter(Boolean);
}

function validColor(value: string) {
  return /^#[0-9A-Fa-f]{6}$/.test(value);
}

function slug(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'pack';
}
