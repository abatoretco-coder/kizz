import assert from 'node:assert/strict';
import test from 'node:test';
import { questions, topics } from '../src/content';
import { auditContent } from '../src/contentAudit';
import { createDatabaseHarness } from './helpers/databaseHarness';

test('la banque complète est intègre après son passage réel dans SQLite', async () => {
  const { db, api } = createDatabaseHarness();
  try {
    await api.initializeDatabase();
    assert.equal(db.prepare('PRAGMA integrity_check').get()!.integrity_check, 'ok');
    assert.equal(db.prepare('PRAGMA foreign_key_check').all().length, 0);
    const pack = await api.exportQuizPack();
    assert.equal(pack.questions.length, questions.length);
    assert.equal(pack.topics.length, topics.length);
    assert.equal(auditContent(pack.topics, pack.questions).issues.filter((issue) => issue.severity === 'error').length, 0);
  } finally { db.close(); }
});

test('un redémarrage actualise le contenu sans perdre favoris, révisions, historique et signalements', async () => {
  const { db, api, content } = createDatabaseHarness();
  try {
    await api.initializeDatabase();
    const question = content.questions.find((row) => row.topicId === 'geography')!;
    await api.toggleFavorite(question.id);
    await api.saveSession(question.topicId, [{ questionId: question.id, selectedIndex: -1, correct: false, credit: 0, confidence: 1 }]);
    await api.reportQuestion(question.id, 'ambiguous');
    const reviewBefore = JSON.stringify(db.prepare('SELECT * FROM review_state WHERE question_id = ?').get(question.id));
    question.explanation = 'Cette explication a été mise à jour lors du prochain chargement.';
    await api.initializeDatabase();
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM favorites WHERE question_id = ?').get(question.id)!.count, 1);
    assert.equal(JSON.stringify(db.prepare('SELECT * FROM review_state WHERE question_id = ?').get(question.id)), reviewBefore);
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM answers WHERE question_id = ?').get(question.id)!.count, 1);
    assert.equal(db.prepare('SELECT count FROM question_reports WHERE question_id = ?').get(question.id)!.count, 1);
    assert.equal(db.prepare('SELECT explanation FROM questions WHERE id = ?').get(question.id)!.explanation, question.explanation);
    assert.equal(db.prepare('PRAGMA foreign_key_check').all().length, 0);
  } finally { db.close(); }
});

test('les décisions éditoriales locales restent appliquées après rechargement', async () => {
  const { db, api } = createDatabaseHarness();
  try {
    await api.initializeDatabase();
    const updated = questions[0];
    const deleted = questions[1];
    const level = updated.difficulty === 3 ? 1 : 3;
    await api.adminUpdateQuestionDifficulty(updated.id, level);
    await api.adminDeleteQuestion(deleted.id);
    await api.initializeDatabase();
    assert.equal(db.prepare('SELECT difficulty FROM questions WHERE id = ?').get(updated.id)!.difficulty, level);
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM questions WHERE id = ?').get(deleted.id)!.count, 0);
  } finally { db.close(); }
});

test('une erreur pendant une session ne laisse ni historique partiel ni révision incomplète', async () => {
  const { db, api } = createDatabaseHarness();
  try {
    await api.initializeDatabase();
    await assert.rejects(api.saveSession(questions[0].topicId, [
      { questionId: questions[0].id, selectedIndex: 0, correct: false },
      { questionId: 'question-absente', selectedIndex: 0, correct: false },
    ]), /FOREIGN KEY constraint failed/);
    for (const table of ['sessions', 'answers', 'review_state']) {
      assert.equal(db.prepare(`SELECT COUNT(*) AS count FROM ${table}`).get()!.count, 0, table);
    }
  } finally { db.close(); }
});

test('une mise à jour éditoriale interrompue restaure le contenu et les données personnelles', async () => {
  const { db, api, content } = createDatabaseHarness();
  try {
    await api.initializeDatabase();
    const original = content.questions[0].explanation;
    await api.toggleFavorite(content.questions[0].id);
    content.questions[0].explanation = 'Mise à jour qui sera annulée.';
    content.questions[1].topicId = 'theme-absent';
    await assert.rejects(api.initializeDatabase(), /FOREIGN KEY constraint failed/);
    assert.equal(db.prepare('SELECT explanation FROM questions WHERE id = ?').get(content.questions[0].id)!.explanation, original);
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM favorites').get()!.count, 1);
    assert.equal(db.prepare('PRAGMA foreign_key_check').all().length, 0);
  } finally { db.close(); }
});

test('une banque personnelle importée survit au rechargement et à un second import', async () => {
  const { db, api } = createDatabaseHarness();
  try {
    await api.initializeDatabase();
    const pack = await api.exportQuizPack();
    pack.id = 'personal-test';
    pack.questions = [{ ...pack.questions[0], id: 'personal-question' }];
    pack.topics = pack.topics.filter((topic) => topic.id === pack.questions[0].topicId);
    assert.equal((await api.importQuizPack(pack)).questionsAdded, 1);
    await api.toggleFavorite('personal-question');
    await api.initializeDatabase();
    const second = await api.importQuizPack(pack);
    assert.equal(second.questionsAdded, 0);
    assert.equal(second.questionsSkipped, 1);
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM favorites WHERE question_id = ?').get('personal-question')!.count, 1);
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM questions').get()!.count, questions.length + 1);
  } finally { db.close(); }
});

test('une ancienne base peuplée reçoit les colonnes nouvelles sans perdre ses favoris', async () => {
  const { db, api } = createDatabaseHarness();
  try {
    db.exec(`
      CREATE TABLE topics (id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL, subtitle TEXT NOT NULL, icon TEXT NOT NULL, color TEXT NOT NULL);
      CREATE TABLE questions (id TEXT PRIMARY KEY NOT NULL, topic_id TEXT NOT NULL, difficulty INTEGER NOT NULL,
        prompt TEXT NOT NULL, choices_json TEXT NOT NULL, answer_index INTEGER NOT NULL, explanation TEXT NOT NULL,
        tags_json TEXT NOT NULL, source_label TEXT NOT NULL, source_url TEXT, FOREIGN KEY(topic_id) REFERENCES topics(id));
      CREATE TABLE favorites (question_id TEXT PRIMARY KEY NOT NULL, created_at TEXT NOT NULL,
        FOREIGN KEY(question_id) REFERENCES questions(id) ON DELETE CASCADE);
    `);
    const question = questions.find((item) => item.choices?.length === 4)!;
    const topic = topics.find((item) => item.id === question.topicId)!;
    db.prepare('INSERT INTO topics VALUES (?, ?, ?, ?, ?)').run(topic.id, topic.title, topic.subtitle, topic.icon, topic.color);
    db.prepare('INSERT INTO questions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').run(question.id, question.topicId, question.difficulty,
      question.prompt, JSON.stringify(question.choices), question.answerIndex!, question.explanation, JSON.stringify(question.tags), question.sourceLabel, null);
    db.prepare('INSERT INTO favorites VALUES (?, ?)').run(question.id, '2026-01-01T00:00:00.000Z');
    await api.initializeDatabase();
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM favorites').get()!.count, 1);
    assert.equal(db.prepare('SELECT question_type FROM questions WHERE id = ?').get(question.id)!.question_type, 'multiple-choice');
    assert.ok(db.prepare('PRAGMA table_info(answers)').all().some((column) => column.name === 'credit'));
    assert.equal(db.prepare('PRAGMA foreign_key_check').all().length, 0);
  } finally { db.close(); }
});

test('la recherche utilise les énoncés et thèmes, sans bruit des métadonnées techniques', async () => {
  const { db, api } = createDatabaseHarness();
  try {
    await api.initializeDatabase();
    const people = await api.searchQuestions('personne', 1000);
    assert.ok(people.some((question) => question.id === 'qapi-cmck8wdv5005whzromlwzsru1'));
    assert.ok(!people.some((question) => question.id === 'qapi-cmgqnx0530017hz95bn5nr0g5'));
    assert.equal((await api.searchQuestions('source:quizzapi')).length, 0);
    assert.ok((await api.searchQuestions('capitales')).length > 0);
  } finally { db.close(); }
});
