import * as SQLite from 'expo-sqlite';
import { questions, topics } from './content';
import { DashboardStats, ImportReport, LanguageSessionFilters, LibraryStats, QUIZ_PACK_FORMAT, QuizPack, QuizQuestion, SessionAnswer, SessionDraft, SessionFilters, Topic } from './domain';
import { nextReviewState } from './quizEngine';
import { parseSessionDraftPayload } from './sessionDraft';

const dbPromise = SQLite.openDatabaseAsync('kizz.db');
const retiredTopicIds = ['starter', 'daily'];

export async function initializeDatabase() {
  const db = await dbPromise;
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS topics (
      id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL, subtitle TEXT NOT NULL,
      icon TEXT NOT NULL, color TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY NOT NULL, topic_id TEXT NOT NULL, difficulty INTEGER NOT NULL,
      prompt TEXT NOT NULL, choices_json TEXT NOT NULL, answer_index INTEGER NOT NULL,
      explanation TEXT NOT NULL, tags_json TEXT NOT NULL, source_label TEXT NOT NULL,
      source_url TEXT, FOREIGN KEY(topic_id) REFERENCES topics(id)
    );
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT, topic_id TEXT NOT NULL, score INTEGER NOT NULL,
      total INTEGER NOT NULL, completed_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS answers (
      id INTEGER PRIMARY KEY AUTOINCREMENT, session_id INTEGER NOT NULL,
      question_id TEXT NOT NULL, selected_index INTEGER NOT NULL, correct INTEGER NOT NULL,
      answered_at TEXT NOT NULL, FOREIGN KEY(session_id) REFERENCES sessions(id)
    );
    CREATE TABLE IF NOT EXISTS imports (
      id INTEGER PRIMARY KEY AUTOINCREMENT, pack_id TEXT NOT NULL, pack_name TEXT NOT NULL,
      questions_added INTEGER NOT NULL, imported_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS favorites (
      question_id TEXT PRIMARY KEY NOT NULL, created_at TEXT NOT NULL,
      FOREIGN KEY(question_id) REFERENCES questions(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS review_state (
      question_id TEXT PRIMARY KEY NOT NULL, repetitions INTEGER NOT NULL DEFAULT 0,
      interval_days INTEGER NOT NULL DEFAULT 0, ease REAL NOT NULL DEFAULT 2.3,
      due_at TEXT NOT NULL, last_credit REAL NOT NULL DEFAULT 0,
      FOREIGN KEY(question_id) REFERENCES questions(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS session_draft (
      id INTEGER PRIMARY KEY NOT NULL CHECK (id = 1), payload_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);

  const questionColumns = new Set((await db.getAllAsync<{ name: string }>('PRAGMA table_info(questions)')).map((column) => column.name));
  const questionMigrations: Array<[string, string]> = [
    ['question_type', "ALTER TABLE questions ADD COLUMN question_type TEXT NOT NULL DEFAULT 'multiple-choice'"],
    ['accepted_answers_json', "ALTER TABLE questions ADD COLUMN accepted_answers_json TEXT NOT NULL DEFAULT '[]'"],
    ['answer_fields_json', "ALTER TABLE questions ADD COLUMN answer_fields_json TEXT NOT NULL DEFAULT '[]'"],
    ['image_url', 'ALTER TABLE questions ADD COLUMN image_url TEXT'],
    ['image_asset', 'ALTER TABLE questions ADD COLUMN image_asset TEXT'],
    ['image_alt', 'ALTER TABLE questions ADD COLUMN image_alt TEXT'],
    ['learn_more_url', 'ALTER TABLE questions ADD COLUMN learn_more_url TEXT'],
    ['interaction_type', 'ALTER TABLE questions ADD COLUMN interaction_type TEXT'],
    ['prompt_blocks_json', "ALTER TABLE questions ADD COLUMN prompt_blocks_json TEXT NOT NULL DEFAULT '[]'"],
    ['answer_schema_json', "ALTER TABLE questions ADD COLUMN answer_schema_json TEXT NOT NULL DEFAULT '{}'"],
    ['geo_target_json', 'ALTER TABLE questions ADD COLUMN geo_target_json TEXT'],
  ];
  for (const [column, sql] of questionMigrations) if (!questionColumns.has(column)) await db.execAsync(sql);
  const answerColumns = new Set((await db.getAllAsync<{ name: string }>('PRAGMA table_info(answers)')).map((column) => column.name));
  if (!answerColumns.has('selected_text')) await db.execAsync('ALTER TABLE answers ADD COLUMN selected_text TEXT');
  if (!answerColumns.has('credit')) await db.execAsync('ALTER TABLE answers ADD COLUMN credit REAL');
  if (!answerColumns.has('confidence')) await db.execAsync('ALTER TABLE answers ADD COLUMN confidence INTEGER');

  await db.withTransactionAsync(async () => {
    for (const retiredTopicId of retiredTopicIds) {
      await db.runAsync('DELETE FROM answers WHERE question_id IN (SELECT id FROM questions WHERE topic_id = ?)', retiredTopicId);
      await db.runAsync('DELETE FROM answers WHERE session_id IN (SELECT id FROM sessions WHERE topic_id = ?)', retiredTopicId);
      await db.runAsync('DELETE FROM favorites WHERE question_id IN (SELECT id FROM questions WHERE topic_id = ?)', retiredTopicId);
      await db.runAsync('DELETE FROM review_state WHERE question_id IN (SELECT id FROM questions WHERE topic_id = ?)', retiredTopicId);
      await db.runAsync('DELETE FROM sessions WHERE topic_id = ?', retiredTopicId);
      await db.runAsync('DELETE FROM questions WHERE topic_id = ?', retiredTopicId);
      await db.runAsync('DELETE FROM topics WHERE id = ?', retiredTopicId);
    }
    await db.runAsync("DELETE FROM session_draft WHERE payload_json LIKE '%\"id\":\"daily\"%' OR payload_json LIKE '%\"topicId\":\"daily\"%' OR payload_json LIKE '%\"id\":\"starter\"%' OR payload_json LIKE '%\"topicId\":\"starter\"%'");
    for (const topic of topics) {
      await db.runAsync(
        'INSERT OR REPLACE INTO topics (id, title, subtitle, icon, color) VALUES (?, ?, ?, ?, ?)',
        topic.id, topic.title, topic.subtitle, topic.icon, topic.color,
      );
    }
    for (const question of questions) {
      await db.runAsync(
        `INSERT OR REPLACE INTO questions
          (id, topic_id, difficulty, prompt, choices_json, answer_index, explanation, tags_json, source_label, source_url,
           question_type, accepted_answers_json, answer_fields_json, image_url, image_asset, image_alt, learn_more_url,
           interaction_type, prompt_blocks_json, answer_schema_json, geo_target_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        question.id, question.topicId, question.difficulty, question.prompt,
        JSON.stringify(question.choices ?? []), question.answerIndex ?? -1, question.explanation,
        JSON.stringify(question.tags), question.sourceLabel, question.sourceUrl ?? null,
        question.type ?? 'multiple-choice', JSON.stringify(question.acceptedAnswers ?? []), JSON.stringify(question.answerFields ?? []), question.imageUrl ?? null, question.imageAsset ?? null,
        question.imageAlt ?? null, question.learnMoreUrl ?? wikipediaSearchUrl(question.prompt),
        question.interactionType ?? question.type ?? 'choice', JSON.stringify(question.promptBlocks ?? []), JSON.stringify(question.answerSchema ?? {}), question.geoTarget ? JSON.stringify(question.geoTarget) : null,
      );
    }
  });
}

export async function saveSessionDraft(draft: Omit<SessionDraft, 'updatedAt'>) {
  const db = await dbPromise;
  const updatedAt = new Date().toISOString();
  await db.runAsync(
    `INSERT INTO session_draft (id, payload_json, updated_at) VALUES (1, ?, ?)
     ON CONFLICT(id) DO UPDATE SET payload_json=excluded.payload_json, updated_at=excluded.updated_at`,
    JSON.stringify(draft), updatedAt,
  );
  return { ...draft, updatedAt };
}

export async function getSessionDraft(): Promise<SessionDraft | null> {
  const db = await dbPromise;
  const row = await db.getFirstAsync<{ payload_json: string; updated_at: string }>('SELECT payload_json, updated_at FROM session_draft WHERE id = 1');
  if (!row) return null;
  const draft = parseSessionDraftPayload(row.payload_json, row.updated_at);
  if (!draft) {
    await db.runAsync('DELETE FROM session_draft WHERE id = 1');
    return null;
  }
  return draft;
}

export async function clearSessionDraft() {
  const db = await dbPromise;
  await db.runAsync('DELETE FROM session_draft WHERE id = 1');
}

export async function getLibraryStats(): Promise<LibraryStats> {
  const db = await dbPromise;
  const topicCount = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) AS count FROM topics');
  const questionCount = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) AS count FROM questions');
  const importCount = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) AS count FROM imports');
  return { topics: topicCount?.count ?? 0, questions: questionCount?.count ?? 0, imports: importCount?.count ?? 0 };
}

export async function getTopics(): Promise<Topic[]> {
  const db = await dbPromise;
  return db.getAllAsync<Topic>('SELECT id, title, subtitle, icon, color FROM topics ORDER BY title');
}

export async function importQuizPack(pack: QuizPack): Promise<ImportReport> {
  const db = await dbPromise;
  let questionsAdded = 0;
  let questionsSkipped = 0;
  const existingTopics = await db.getAllAsync<{ id: string }>('SELECT id FROM topics');
  const existingTopicIds = new Set(existingTopics.map((topic) => topic.id));
  const topicsAdded = pack.topics.filter((topic) => !existingTopicIds.has(topic.id)).length;

  await db.withTransactionAsync(async () => {
    for (const topic of pack.topics) {
      await db.runAsync(
        'INSERT OR IGNORE INTO topics (id, title, subtitle, icon, color) VALUES (?, ?, ?, ?, ?)',
        topic.id, topic.title, topic.subtitle, topic.icon, topic.color,
      );
    }
    for (const question of pack.questions) {
      const result = await db.runAsync(
        `INSERT OR IGNORE INTO questions
          (id, topic_id, difficulty, prompt, choices_json, answer_index, explanation, tags_json, source_label, source_url,
           question_type, accepted_answers_json, answer_fields_json, image_url, image_asset, image_alt, learn_more_url,
           interaction_type, prompt_blocks_json, answer_schema_json, geo_target_json)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        question.id, question.topicId, question.difficulty, question.prompt,
        JSON.stringify(question.choices ?? []), question.answerIndex ?? -1, question.explanation,
        JSON.stringify(question.tags), question.sourceLabel, question.sourceUrl ?? null,
        question.type ?? 'multiple-choice', JSON.stringify(question.acceptedAnswers ?? []), JSON.stringify(question.answerFields ?? []), question.imageUrl ?? null, question.imageAsset ?? null,
        question.imageAlt ?? null, question.learnMoreUrl ?? wikipediaSearchUrl(question.prompt),
        question.interactionType ?? question.type ?? 'choice', JSON.stringify(question.promptBlocks ?? []), JSON.stringify(question.answerSchema ?? {}), question.geoTarget ? JSON.stringify(question.geoTarget) : null,
      );
      if (result.changes === 1) questionsAdded += 1;
      else questionsSkipped += 1;
    }
    await db.runAsync(
      'INSERT INTO imports (pack_id, pack_name, questions_added, imported_at) VALUES (?, ?, ?, ?)',
      pack.id, pack.name, questionsAdded, new Date().toISOString(),
    );
  });
  return { bankName: pack.name, topicsAdded, questionsAdded, questionsSkipped };
}

export async function exportQuizPack(): Promise<QuizPack> {
  const db = await dbPromise;
  const topicRows = await db.getAllAsync<{ id: string; title: string; subtitle: string; icon: string; color: string }>('SELECT * FROM topics ORDER BY title');
  const questionRows = await db.getAllAsync<QuestionRow>('SELECT * FROM questions ORDER BY topic_id, id');
  return {
    format: QUIZ_PACK_FORMAT,
    version: 1,
    id: `kizz-export-${Date.now()}`,
    name: 'Export Kizz',
    description: 'Bibliothèque exportée depuis Kizz',
    language: 'fr',
    exportedAt: new Date().toISOString(),
    topics: topicRows.map((row) => ({ id: row.id, title: row.title, subtitle: row.subtitle, icon: row.icon, color: row.color })),
    questions: questionRows.map(mapQuestionRow),
  };
}

type QuestionRow = {
  id: string; topic_id: string; difficulty: number; prompt: string; choices_json: string;
  answer_index: number; explanation: string; tags_json: string; source_label: string; source_url: string | null;
  question_type: 'multiple-choice' | 'free-text' | 'multi-text' | 'map-point'; accepted_answers_json: string; answer_fields_json: string; image_url: string | null; image_asset: string | null;
  image_alt: string | null; learn_more_url: string | null; interaction_type: 'choice' | 'text' | 'multi-text' | 'map-point' | null; prompt_blocks_json: string; answer_schema_json: string; geo_target_json: string | null;
  is_favorite?: number;
};

function wikipediaSearchUrl(prompt: string) {
  return `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(prompt)}`;
}

function mapQuestionRow(row: QuestionRow): QuizQuestion {
  return {
    id: row.id, topicId: row.topic_id, difficulty: row.difficulty as 1 | 2 | 3,
    prompt: row.prompt, type: row.question_type, choices: JSON.parse(row.choices_json), answerIndex: row.answer_index,
    acceptedAnswers: JSON.parse(row.accepted_answers_json), answerFields: JSON.parse(row.answer_fields_json), explanation: row.explanation,
    tags: JSON.parse(row.tags_json), sourceLabel: row.source_label, sourceUrl: row.source_url ?? undefined,
    imageUrl: row.image_url ?? undefined, imageAsset: row.image_asset ?? undefined, imageAlt: row.image_alt ?? undefined,
    learnMoreUrl: row.learn_more_url ?? wikipediaSearchUrl(row.prompt),
    interactionType: row.interaction_type ?? undefined, promptBlocks: JSON.parse(row.prompt_blocks_json ?? '[]'), answerSchema: JSON.parse(row.answer_schema_json ?? '{}'),
    geoTarget: row.geo_target_json ? JSON.parse(row.geo_target_json) : undefined,
    favorite: row.is_favorite === 1,
  };
}

export async function getQuizQuestions(topicId: string, limit = 8): Promise<QuizQuestion[]> {
  const db = await dbPromise;
  const rows = await db.getAllAsync<QuestionRow>(
    `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
     FROM questions q WHERE q.topic_id = ? ORDER BY RANDOM() LIMIT ?`, topicId, limit,
  );
  return rows.map(mapQuestionRow);
}

export async function getFilteredQuestions(filters: SessionFilters): Promise<QuizQuestion[]> {
  const db = await dbPromise;
  const clauses: string[] = [];
  const parameters: Array<string | number> = [];
  if (filters.topicIds.length) {
    clauses.push(`q.topic_id IN (${filters.topicIds.map(() => '?').join(', ')})`);
    parameters.push(...filters.topicIds);
  }
  if (filters.difficulties.length) {
    clauses.push(`q.difficulty IN (${filters.difficulties.map(() => '?').join(', ')})`);
    parameters.push(...filters.difficulties);
  }
  const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
  parameters.push(filters.limit);
  const rows = await db.getAllAsync<QuestionRow>(
    `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
     FROM questions q ${where} ORDER BY RANDOM() LIMIT ?`,
    ...parameters,
  );
  return rows.map(mapQuestionRow);
}

export async function getRandomTopicQuestionsByDifficulty(difficulty: 1 | 2 | 3, limit = 10): Promise<{ topic: Topic; questions: QuizQuestion[] } | null> {
  const db = await dbPromise;
  const topic = await db.getFirstAsync<Topic>(
    `SELECT t.id, t.title, t.subtitle, t.icon, t.color
     FROM topics t
     WHERE t.id != 'language' AND EXISTS (
       SELECT 1 FROM questions q WHERE q.topic_id = t.id AND q.difficulty = ?
     )
     ORDER BY RANDOM() LIMIT 1`,
    difficulty,
  );
  if (!topic) return null;
  const rows = await db.getAllAsync<QuestionRow>(
    `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
     FROM questions q WHERE q.topic_id = ? AND q.difficulty = ? ORDER BY RANDOM() LIMIT ?`,
    topic.id, difficulty, limit,
  );
  return { topic, questions: rows.map(mapQuestionRow) };
}

export async function getRandomQuestionByDifficulty(difficulty: 1 | 2 | 3, excludeIds: string[] = []): Promise<QuizQuestion | null> {
  const db = await dbPromise;
  const exclusion = excludeIds.length ? `AND q.id NOT IN (${excludeIds.map(() => '?').join(', ')})` : '';
  const parameters: Array<string | number> = [difficulty, ...excludeIds];
  let row = await db.getFirstAsync<QuestionRow>(
    `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
     FROM questions q
     WHERE q.topic_id != 'language' AND q.difficulty = ? ${exclusion}
     ORDER BY RANDOM() LIMIT 1`,
    ...parameters,
  );
  if (!row && excludeIds.length) {
    row = await db.getFirstAsync<QuestionRow>(
      `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
       FROM questions q
       WHERE q.topic_id != 'language' AND q.difficulty = ?
       ORDER BY RANDOM() LIMIT 1`,
      difficulty,
    );
  }
  return row ? mapQuestionRow(row) : null;
}

export async function getLanguageQuestions(filters: LanguageSessionFilters): Promise<QuizQuestion[]> {
  const db = await dbPromise;
  if (!filters.skills.length) return [];
  const skillClause = filters.skills.map(() => 'q.tags_json LIKE ?').join(' OR ');
  const parameters = [
    `%"lang:${filters.language}"%`,
    `%"cefr:${filters.level}"%`,
    ...filters.skills.map((skill) => `%"skill:${skill}"%`),
    filters.limit,
  ];
  const rows = await db.getAllAsync<QuestionRow>(
    `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
     FROM questions q
     WHERE q.topic_id = 'language' AND q.tags_json LIKE ? AND q.tags_json LIKE ? AND (${skillClause})
     ORDER BY q.id LIMIT ?`,
    ...parameters,
  );
  return rows.map(mapQuestionRow);
}

export async function getReviewQuestions(limit = 10): Promise<QuizQuestion[]> {
  const db = await dbPromise;
  const rows = await db.getAllAsync<QuestionRow>(
    `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
     FROM questions q LEFT JOIN review_state r ON r.question_id = q.id
     WHERE r.due_at <= ? OR (SELECT a.correct FROM answers a WHERE a.question_id = q.id ORDER BY a.id DESC LIMIT 1) = 0
     ORDER BY COALESCE(r.due_at, '9999-12-31') ASC, RANDOM() LIMIT ?`, new Date().toISOString(), limit,
  );
  return rows.map(mapQuestionRow);
}

export async function getFavoriteQuestions(limit = 20): Promise<QuizQuestion[]> {
  const db = await dbPromise;
  const rows = await db.getAllAsync<QuestionRow>(
    `SELECT q.*, 1 AS is_favorite FROM questions q
     JOIN favorites f ON f.question_id = q.id ORDER BY RANDOM() LIMIT ?`, limit,
  );
  return rows.map(mapQuestionRow);
}

export async function getTaggedQuestions(tag: string, limit = 10): Promise<QuizQuestion[]> {
  const db = await dbPromise;
  const rows = await db.getAllAsync<QuestionRow>(
    `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
     FROM questions q WHERE q.tags_json LIKE ? ORDER BY RANDOM() LIMIT ?`,
    `%"${tag}"%`, limit,
  );
  return rows.map(mapQuestionRow);
}

export async function searchQuestions(query: string, limit = 30): Promise<QuizQuestion[]> {
  const db = await dbPromise;
  const pattern = `%${query.trim()}%`;
  const rows = await db.getAllAsync<QuestionRow>(
    `SELECT q.*, EXISTS(SELECT 1 FROM favorites f WHERE f.question_id = q.id) AS is_favorite
     FROM questions q WHERE q.prompt LIKE ? OR q.tags_json LIKE ? ORDER BY q.prompt LIMIT ?`, pattern, pattern, limit,
  );
  return rows.map(mapQuestionRow);
}

export async function toggleFavorite(questionId: string): Promise<boolean> {
  const db = await dbPromise;
  const existing = await db.getFirstAsync<{ question_id: string }>('SELECT question_id FROM favorites WHERE question_id = ?', questionId);
  if (existing) {
    await db.runAsync('DELETE FROM favorites WHERE question_id = ?', questionId);
    return false;
  }
  await db.runAsync('INSERT INTO favorites (question_id, created_at) VALUES (?, ?)', questionId, new Date().toISOString());
  return true;
}

export async function saveSession(topicId: string, answers: SessionAnswer[]) {
  const db = await dbPromise;
  const now = new Date().toISOString();
  const score = answers.reduce((total, answer) => total + (answer.credit ?? (answer.correct ? 1 : 0)), 0);
  const result = await db.runAsync(
    'INSERT INTO sessions (topic_id, score, total, completed_at) VALUES (?, ?, ?, ?)',
    topicId, score, answers.length, now,
  );
  for (const answer of answers) {
    await db.runAsync(
      'INSERT INTO answers (session_id, question_id, selected_index, selected_text, correct, credit, confidence, answered_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      result.lastInsertRowId, answer.questionId, answer.selectedIndex, answer.selectedText ?? null, answer.correct ? 1 : 0, answer.credit ?? (answer.correct ? 1 : 0), answer.confidence ?? null, now,
    );
    const previous = await db.getFirstAsync<{ repetitions: number; interval_days: number; ease: number }>('SELECT repetitions, interval_days, ease FROM review_state WHERE question_id = ?', answer.questionId);
    const credit = answer.credit ?? (answer.correct ? 1 : 0);
    const next = nextReviewState(previous ? { repetitions: previous.repetitions, intervalDays: previous.interval_days, ease: previous.ease } : undefined, credit, new Date(now), answer.confidence);
    await db.runAsync(
      `INSERT INTO review_state (question_id, repetitions, interval_days, ease, due_at, last_credit)
       VALUES (?, ?, ?, ?, ?, ?)
       ON CONFLICT(question_id) DO UPDATE SET repetitions=excluded.repetitions, interval_days=excluded.interval_days,
       ease=excluded.ease, due_at=excluded.due_at, last_credit=excluded.last_credit`,
      answer.questionId, next.repetitions, next.intervalDays, next.ease, next.dueAt, credit,
    );
  }
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const db = await dbPromise;
  const totals = await db.getFirstAsync<{ answered: number; correct: number }>(
    'SELECT COUNT(*) AS answered, COALESCE(SUM(COALESCE(credit, correct)), 0) AS correct FROM answers',
  );
  const sessions = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) AS count FROM sessions');
  const due = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) AS count FROM review_state WHERE due_at <= ?', new Date().toISOString());
  const days = await db.getAllAsync<{ day: string }>(
    "SELECT DISTINCT substr(completed_at, 1, 10) AS day FROM sessions ORDER BY day DESC",
  );
  let streakDays = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  for (const { day } of days) {
    const expected = cursor.toISOString().slice(0, 10);
    if (day !== expected) break;
    streakDays += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { answered: totals?.answered ?? 0, correct: totals?.correct ?? 0, sessions: sessions?.count ?? 0, streakDays, dueReview: due?.count ?? 0 };
}
