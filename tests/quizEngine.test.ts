import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { questions, topics } from '../src/content';
import { countryCapitalData } from '../src/contentWorldCountries';
import { franceDepartmentData, franceRegionData } from '../src/contentFranceAdmin';
import { auditContent } from '../src/contentAudit';
import { subthemes } from '../src/subthemes';
import { parseCsvQuizPack } from '../src/csvQuizPack';
import { bearingDegrees, cardinalDirection, distanceKm, gradeMapPoint, gradeMultiText, isFreeTextCorrect, nextReviewState, normalizeAnswer, sessionScore, shouldStayInReview, shuffleQuestions } from '../src/quizEngine';
import { summarizeByInteraction } from '../src/sessionSummary';
import { summarizeLanguageProgress } from '../src/languageProgress';

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

test('prepare un import CSV avec preview QCM et texte libre', () => {
  const csv = [
    'id,topicId,topicTitle,difficulty,prompt,type,choiceA,choiceB,choiceC,choiceD,answer,acceptedAnswers,explanation,tags,sourceLabel',
    'csv-1,geo,Geographie,1,"Quelle capitale est celle de l Italie ?",multiple-choice,Rome,Madrid,Lisbonne,Berlin,A,,Rome est la capitale de l Italie.,capitales|europe,Test CSV',
    'csv-2,geo,Geographie,1,"Quelle ville est la capitale de l Espagne ?",free-text,,,,,Madrid,Madrid|madrid,La capitale espagnole est Madrid.,capitales|europe,Test CSV',
  ].join('\n');
  const draft = parseCsvQuizPack(csv, 'demo.csv');
  assert.equal(draft.preview.questions, 2);
  assert.equal(draft.preview.topics, 1);
  assert.equal(draft.pack.questions[0].answerIndex, 0);
  assert.deepEqual(draft.pack.questions[1].acceptedAnswers, ['Madrid', 'madrid']);
});

test('resume une session par type d interaction', () => {
  const sessionQuestions = [
    questions.find((item) => (item.type ?? 'multiple-choice') === 'multiple-choice')!,
    questions.find((item) => item.type === 'map-point')!,
    questions.find((item) => item.type === 'multi-text')!,
  ];
  const summary = summarizeByInteraction(sessionQuestions, [
    { questionId: sessionQuestions[0].id, selectedIndex: 0, correct: true },
    { questionId: sessionQuestions[1].id, selectedIndex: -3, correct: false, credit: 0.5 },
    { questionId: sessionQuestions[2].id, selectedIndex: -2, correct: true, credit: 1 },
  ]);
  assert.deepEqual(summary.map((item) => [item.type, item.answered, item.accuracy]), [
    ['map-point', 1, 50],
    ['multi-text', 1, 100],
    ['multiple-choice', 1, 100],
  ]);
});

test('resume la progression langue par langue et niveau', () => {
  const summary = summarizeLanguageProgress([
    { tags: ['lang:es', 'cefr:A1', 'skill:vocabulary'], answered: 2, score: 1 },
    { tags: ['lang:es', 'cefr:A1', 'skill:writing'], answered: 1, score: 1 },
    { tags: ['lang:de', 'cefr:B1', 'skill:lesson'], answered: 4, score: 3 },
    { tags: ['lang:xx', 'cefr:A1'], answered: 10, score: 10 },
  ]);
  assert.deepEqual(summary.map((item) => [item.language, item.level, item.answered, item.accuracy]), [
    ['de', 'B1', 4, 75],
    ['es', 'A1', 3, 67],
  ]);
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

test('la révision garde les questions faibles jusqu’à maîtrise stable', () => {
  assert.equal(shouldStayInReview({ answeredCount: 0, accuracy: 0, recentFailureCount: 0, solidRepetitions: 0 }), false);
  assert.equal(shouldStayInReview({ answeredCount: 5, accuracy: 0.6, recentFailureCount: 1, solidRepetitions: 0 }), true);
  assert.equal(shouldStayInReview({ answeredCount: 10, accuracy: 0.9, recentFailureCount: 1, solidRepetitions: 4 }), true);
  assert.equal(shouldStayInReview({ answeredCount: 10, accuracy: 0.7, recentFailureCount: 0, solidRepetitions: 5 }), true);
  assert.equal(shouldStayInReview({ answeredCount: 10, accuracy: 0.8, recentFailureCount: 0, solidRepetitions: 5 }), false);
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

test('les questions visuelles embarquent des assets complets', () => {
  const assetsDir = join(process.cwd(), 'assets', 'questions');
  const visualQuestions = questions.filter((question) => question.imageAsset || question.choiceImageAssets?.length);
  assert.ok(visualQuestions.length >= 15);
  assert.ok(questions.some((question) => question.tags.includes('image-choice')));

  for (const question of visualQuestions) {
    if (question.imageAsset) {
      assert.ok(existsSync(join(assetsDir, `${question.imageAsset}.jpg`)), `${question.id}: imageAsset introuvable`);
      assert.ok(question.imageAlt?.trim(), `${question.id}: texte alternatif absent`);
    }
    if (question.choiceImageAssets) {
      assert.equal(question.choiceImageAssets.length, 4, `${question.id}: quatre images de choix requises`);
      assert.equal(question.choiceImageAlts?.length, 4, `${question.id}: quatre textes alternatifs requis`);
      for (const asset of question.choiceImageAssets) assert.ok(existsSync(join(assetsDir, `${asset}.jpg`)), `${question.id}: choix image introuvable ${asset}`);
    }
  }
});

test('le quiz expose un zoom image et precharge les medias', () => {
  const app = readFileSync('App.tsx', 'utf8');
  assert.ok(app.includes('MediaZoomModal'));
  assert.ok(app.includes('Image.prefetch'));
  assert.ok(app.includes('maximumZoomScale'));
  assert.ok(app.includes('Appui long pour agrandir'));
});

test('la banque Arts/Histoire generee reste presente', () => {
  assert.ok(questions.filter((question) => question.tags.includes('banque-visuelle')).length >= 225);
  assert.ok(questions.filter((question) => question.tags.includes('banque-personnages')).length >= 200);
  assert.ok(questions.filter((question) => question.imageAsset?.startsWith('generated/art-')).length >= 45);
  assert.ok(questions.filter((question) => question.imageAsset?.startsWith('generated/') && !question.imageAsset.startsWith('generated/art-')).length >= 45);
});

test('la banque Nature propose des identifications visuelles', () => {
  const natureVisual = questions.filter((question) => question.topicId === 'nature' && question.tags.includes('identification-espece'));
  assert.ok(natureVisual.length >= 90);
  assert.ok(natureVisual.filter((question) => question.tags.includes('animaux')).length >= 40);
  assert.ok(natureVisual.filter((question) => question.tags.includes('botanique')).length >= 40);
  assert.ok(natureVisual.filter((question) => question.imageAsset?.startsWith('nature/')).length >= 30);
  assert.ok(natureVisual.filter((question) => question.tags.includes('image-choice')).length >= 30);
});

test('la banque sciences couvre la chimie niveau ingenieur', () => {
  const chemistry = questions.filter((question) => question.topicId === 'science' && question.tags.includes('tableau-periodique'));
  assert.ok(chemistry.length >= 170);
  assert.ok(chemistry.filter((question) => question.tags.includes('numero-atomique')).length >= 30);
  assert.ok(chemistry.filter((question) => question.tags.includes('formule')).length >= 12);
  assert.ok(chemistry.filter((question) => question.tags.includes('raisonnement')).length >= 20);
});

test('l’audit automatique de banque ne remonte aucune erreur', () => {
  const report = auditContent(topics, questions);
  assert.deepEqual(report.issues.filter((issue) => issue.severity === 'error'), []);
  assert.ok(Math.max(...report.answerIndexCounts) - Math.min(...report.answerIndexCounts) <= 1);
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
  assert.ok(mapQuestions.length >= 72);
  for (const difficulty of [1, 2, 3] as const) {
    assert.ok(mapQuestions.filter((question) => question.difficulty === difficulty).length >= 18);
  }
  const franceMapQuestions = questions.filter((question) => question.topicId === 'france-map' && question.type === 'map-point');
  assert.ok(franceMapQuestions.length >= 30);
  for (const difficulty of [1, 2, 3] as const) {
    assert.ok(franceMapQuestions.filter((question) => question.difficulty === difficulty).length >= 8);
  }
  assert.ok(questions.some((question) => question.tags.includes('departement') && question.type === 'free-text'));
  assert.ok(mapQuestions.some((question) => question.tags.includes('pays')));
  assert.ok(mapQuestions.some((question) => question.tags.includes('region-monde')));
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
  for (const language of languages) {
    for (const level of levels) {
      assert.ok(questions.some((question) => question.tags.includes(`lang:${language}`) && question.tags.includes(`cefr:${level}`) && question.tags.includes('skill:lesson')), `${language}/${level}/lesson: cours absent`);
    }
  }
  assert.ok(questions.some((question) => question.type === 'free-text' && question.tags.includes('conjugation:practice')));
});

test('chaque grand thème reçoit une extension éditoriale ciblée', () => {
  for (const topicId of ['history', 'science', 'sport', 'arts', 'nature', 'technology', 'cinema', 'architecture', 'economy']) {
    const topicQuestions = questions.filter((question) => question.topicId === topicId && question.tags.includes('theme-expansion'));
    assert.equal(topicQuestions.length, 3, `${topicId}: extension thématique incomplète`);
    for (const difficulty of [1, 2, 3] as const) {
      assert.ok(topicQuestions.some((question) => question.difficulty === difficulty), `${topicId}: niveau ${difficulty} absent`);
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
  assert.equal(ranked.length, 126);
  assert.ok(ranked.every((question) => question.tags.includes('mode:recognition') || question.tags.includes('mode:recall')));
});

test('la banque couvre tous les pays, régions et départements demandés', () => {
  assert.equal(countryCapitalData.length, 195);
  assert.equal(franceRegionData.length, 18);
  assert.equal(franceDepartmentData.length, 101);
  assert.equal(questions.filter((question) => question.tags.includes('coverage:world-countries')).length, 390);
  assert.equal(questions.filter((question) => question.tags.includes('coverage:world-flags')).length, 585);
  assert.equal(questions.filter((question) => question.tags.includes('coverage:world-flags') && question.type === 'free-text').length, 195);
  assert.equal(questions.filter((question) => question.id.startsWith('world-flag-choice-')).length, 195);
  assert.equal(questions.filter((question) => question.id.startsWith('world-country-flag-')).length, 195);
  assert.equal(questions.filter((question) => question.tags.includes('coverage:france-regions')).length, 18);
  assert.equal(questions.filter((question) => question.tags.includes('coverage:france-departements-cheflieux')).length, 101);
  assert.equal(questions.filter((question) => question.tags.includes('coverage:france-departements')).length, 101);
});

test('chaque sous-theme affiche correspond a du contenu', () => {
  for (const subtheme of subthemes) {
    assert.ok(questions.some((question) => question.topicId === subtheme.topicId && question.tags.includes(subtheme.tag)), `${subtheme.id}: aucun contenu`);
  }
});
