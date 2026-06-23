import assert from 'node:assert/strict';
import test from 'node:test';
import { questions, topics } from '../src/content';
import { bearingDegrees, cardinalDirection, distanceKm, gradeMapPoint, gradeMultiText, isFreeTextCorrect, nextReviewState, normalizeAnswer, sessionScore, shuffleQuestions } from '../src/quizEngine';

test('normalise accents, espaces et casse', () => {
  assert.equal(normalizeAnswer('  ÉPARGNE  '), 'epargne');
  assert.equal(normalizeAnswer('Mémoire   flash'), 'memoire flash');
});

test('accepte les variantes déclarées et refuse une autre réponse', () => {
  const question = questions.find((item) => item.id === 'eco-007');
  assert.ok(question);
  assert.equal(isFreeTextCorrect(question!, ' Epargne '), true);
  assert.equal(isFreeTextCorrect(question!, 'budget'), false);
});

test('calcule un score entier et gère une session vide', () => {
  assert.equal(sessionScore([true, false, true]), 67);
  assert.equal(sessionScore([]), 0);
});

test('accorde un crédit partiel aux réponses multi-champs', () => {
  const question = questions.find((item) => item.id === 'art-07');
  assert.ok(question);
  assert.equal(gradeMultiText(question!, { work: 'Mona Lisa', artist: 'inconnu' }).credit, 0.5);
  assert.equal(gradeMultiText(question!, { work: 'La Joconde', artist: 'Léonard de Vinci' }).credit, 1);
});

test('calcule une distance et crédite une réponse carte', () => {
  const paris = questions.find((item) => item.id === 'geo-map-001');
  assert.ok(paris);
  assert.ok(distanceKm({ lat: 48.8566, lon: 2.3522 }, { lat: 51.5074, lon: -0.1278 }) > 300);
  assert.equal(cardinalDirection(bearingDegrees({ lat: 48.8566, lon: 2.3522 }, { lat: 51.5074, lon: -0.1278 })), 'nord-ouest');
  assert.equal(gradeMapPoint(paris!, { lat: 48.8, lon: 2.2 }).credit, 1);
  assert.equal(gradeMapPoint(paris!, { lat: 43.6, lon: 1.4 }).credit, 0.5);
  const far = gradeMapPoint(paris!, { lat: 35.6762, lon: 139.6503 });
  assert.equal(far.credit, 0);
  assert.ok(far.direction);
});

test('planifie les révisions selon le crédit obtenu', () => {
  const now = new Date('2026-06-22T10:00:00.000Z');
  const success = nextReviewState(undefined, 1, now);
  assert.equal(success.intervalDays, 1);
  assert.equal(success.repetitions, 1);
  const partial = nextReviewState(success, 0.5, now);
  assert.equal(partial.intervalDays, 1);
  const failed = nextReviewState(success, 0, now);
  assert.equal(failed.intervalDays, 0);
  assert.equal(failed.repetitions, 0);
});

test('la confiance ajuste la révision sans modifier le crédit', () => {
  const now = new Date('2026-06-23T10:00:00.000Z');
  const hesitant = nextReviewState({ repetitions: 2, intervalDays: 3, ease: 2.3 }, 1, now, 1);
  const neutral = nextReviewState({ repetitions: 2, intervalDays: 3, ease: 2.3 }, 1, now, 2);
  const certain = nextReviewState({ repetitions: 2, intervalDays: 3, ease: 2.3 }, 1, now, 3);
  assert.equal(hesitant.intervalDays, 1);
  assert.ok(neutral.intervalDays > hesitant.intervalDays);
  assert.ok(certain.intervalDays > neutral.intervalDays);
  const confidentError = nextReviewState(undefined, 0, now, 3);
  assert.ok(confidentError.ease < nextReviewState(undefined, 0, now, 2).ease);
});

test('mélange sans modifier la liste source', () => {
  const source = [1, 2, 3, 4];
  const shuffled = shuffleQuestions(source, () => 0);
  assert.deepEqual(source, [1, 2, 3, 4]);
  assert.deepEqual([...shuffled].sort(), source);
  assert.notDeepEqual(shuffled, source);
});

test('la banque éditoriale respecte le contrat MVP', () => {
  assert.ok(topics.length >= 10);
  assert.ok(questions.length >= 50);
  assert.equal(new Set(topics.map((topic) => topic.id)).size, topics.length);
  assert.equal(new Set(questions.map((question) => question.id)).size, questions.length);
  const topicIds = new Set(topics.map((topic) => topic.id));
  for (const question of questions) {
    assert.ok(topicIds.has(question.topicId), `${question.id}: thème absent`);
    assert.ok(question.explanation.trim(), `${question.id}: explication absente`);
    assert.ok(question.learnMoreUrl || question.prompt, `${question.id}: ressource absente`);
    if (question.type === 'free-text') assert.ok(question.acceptedAnswers?.length, `${question.id}: réponse libre absente`);
    else if (question.type === 'multi-text') assert.ok(question.answerFields && question.answerFields.length >= 2, `${question.id}: champs multiples absents`);
    else if (question.type === 'map-point') {
      assert.ok(question.geoTarget, `${question.id}: cible carte absente`);
      assert.ok(question.geoTarget!.lat >= -90 && question.geoTarget!.lat <= 90, `${question.id}: latitude invalide`);
      assert.ok(question.geoTarget!.lon >= -180 && question.geoTarget!.lon <= 180, `${question.id}: longitude invalide`);
      assert.ok(question.geoTarget!.toleranceKm > 0, `${question.id}: tolerance invalide`);
    }
    else {
      assert.equal(question.choices?.length, 4, `${question.id}: quatre choix requis`);
      assert.ok(Number.isInteger(question.answerIndex) && question.answerIndex! >= 0 && question.answerIndex! < 4, `${question.id}: index invalide`);
    }
  }
});

test('le pack étendu couvre tous les thèmes et toutes les difficultés', () => {
  assert.ok(questions.length >= 189);
  for (const topic of topics) {
    const topicQuestions = questions.filter((question) => question.topicId === topic.id);
    assert.ok(topicQuestions.length >= 16, `${topic.id}: banque trop petite`);
    for (const difficulty of [1, 2, 3] as const) {
      assert.ok(
        topicQuestions.filter((question) => question.difficulty === difficulty).length >= 4,
        `${topic.id}: difficulté ${difficulty} insuffisante`,
      );
    }
  }
});

test('la géographie contient un premier pack carte équilibré', () => {
  const mapQuestions = questions.filter((question) => question.type === 'map-point');
  assert.equal(mapQuestions.length, 30);
  for (const difficulty of [1, 2, 3] as const) {
    assert.equal(mapQuestions.filter((question) => question.difficulty === difficulty).length, 10);
  }
});

test('les parcours de langues ne mélangent ni langue, ni niveau, ni compétence', () => {
  const languages = ['es', 'de', 'it'];
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const skills = ['vocabulary', 'reading', 'writing', 'culture'];
  for (const language of languages) {
    for (const level of levels) {
      for (const skill of skills) {
        assert.ok(questions.some((question) => question.tags.includes(`lang:${language}`) && question.tags.includes(`cefr:${level}`) && question.tags.includes(`skill:${skill}`)), `${language}/${level}/${skill}: cellule absente`);
      }
    }
  }
});

test('chaque langue et niveau fournit une session complète et un rang fréquentiel stable', () => {
  for (const language of ['es', 'de', 'it']) {
    for (const level of ['A1', 'A2', 'B1', 'B2', 'C1']) {
      const cell = questions.filter((question) => question.tags.includes(`lang:${language}`) && question.tags.includes(`cefr:${level}`));
      assert.ok(cell.length >= 10, `${language}/${level}: moins de 10 exercices`);
      assert.ok(cell.filter((question) => question.tags.includes('skill:vocabulary')).length >= 4, `${language}/${level}: vocabulaire insuffisant`);
      assert.ok(cell.filter((question) => question.tags.includes('skill:writing')).length >= 4, `${language}/${level}: rappel écrit insuffisant`);
    }
  }
  const ranked = questions.filter((question) => question.tags.some((tag) => tag.startsWith('frequency-rank:')));
  assert.equal(ranked.length, 90);
  assert.ok(ranked.every((question) => question.tags.includes('mode:recognition') || question.tags.includes('mode:recall')));
});
