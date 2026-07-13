import { QuestionSeed } from './domain';
import { visualHistoryQuestions } from './generated/contentVisualHistory';
import { landmarkVisualQuestions } from './generated/contentLandmarkVisual';
import { natureVisualQuestions } from './generated/contentNatureVisual';

const easyCulturalCountries = new Set(['espagne', 'france', 'italie', 'pays-bas']);
const mediumCulturalCountries = new Set([
  'allemagne', 'australie', 'autriche', 'belgique', 'bresil', 'canada', 'chine', 'coree du sud',
  'cambodge', 'emirats arabes unis', 'etats-unis', 'grece', 'hongrie', 'inde', 'indonesie', 'japon', 'jordanie',
  'mexique', 'norvege', 'perou', 'royaume-uni', 'russie', 'singapour', 'suisse', 'turquie', 'ukraine', 'vatican',
]);

const easyHistoricalRegions = new Set(['angleterre', 'egypte antique', 'etats-unis', 'france', 'grece', 'grece antique', 'rome antique', 'royaume-uni']);
const mediumHistoricalRegions = new Set([
  'afrique du sud', 'allemagne', 'allemagne et etats-unis', 'amerique du sud', 'athenes', 'carthage',
  'empire carolingien', 'empire ottoman', 'espagne et france', 'france et angleterre', 'france et pologne',
  'geneve', 'inde', 'italie', 'macedoine', 'mexique', 'monde arabo-musulman', 'monde musulman', 'monde germanique',
  'monde mongol', 'mongolie', 'pays-bas', 'pologne', 'renaissance italienne', 'russie', 'venise',
]);

const easyHistoricalEras = new Set(['antiquite', 'epoque contemporaine', 'renaissance']);
const mediumHistoricalEras = new Set(['epoque moderne', 'lumieres', 'moyen age', 'xixe siecle']);

const easyArtworkTitles = new Set(['guernica', 'la joconde', 'la naissance de venus', 'la nuit etoilee', 'le cri']);

function answerOf(question: QuestionSeed) {
  return question.choices?.[question.answerIndex ?? 0] ?? '';
}

function normalizedAnswer(question: QuestionSeed) {
  return answerOf(question).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function visualArtworkDifficulty(question: QuestionSeed): 1 | 2 | 3 {
  const answer = normalizedAnswer(question);
  if (question.id.endsWith('-country')) {
    if (easyCulturalCountries.has(answer)) return 1;
    if (mediumCulturalCountries.has(answer)) return 2;
    return 3;
  }
  if (question.id.endsWith('-work')) {
    if (easyArtworkTitles.has(answer)) return 1;
    return question.difficulty === 3 ? 3 : 2;
  }
  return question.difficulty;
}

function visualLandmarkDifficulty(question: QuestionSeed): 1 | 2 | 3 {
  const answer = normalizedAnswer(question);
  if (question.id.endsWith('-country')) {
    if (easyCulturalCountries.has(answer)) return 1;
    if (mediumCulturalCountries.has(answer)) return 2;
    return 3;
  }
  return question.difficulty;
}

function visualHistoryDifficulty(question: QuestionSeed): 1 | 2 | 3 {
  const answer = normalizedAnswer(question);
  if (question.id.endsWith('-role')) return 2;
  if (question.id.endsWith('-region')) {
    if (easyHistoricalRegions.has(answer)) return 1;
    if (mediumHistoricalRegions.has(answer)) return 2;
    return 3;
  }
  if (question.id.endsWith('-era')) {
    if (easyHistoricalEras.has(answer)) return 1;
    if (mediumHistoricalEras.has(answer)) return 2;
    return 3;
  }
  return question.difficulty;
}

function visualMovementQuestions(): QuestionSeed[] {
  const imageByKey = new Map(
    visualHistoryQuestions
      .filter((question) => /^paint-bank-\d+-artist$/.test(question.id) && question.imageAsset)
      .map((question) => [question.id.replace('-artist', ''), question]),
  );

  return visualHistoryQuestions
    .filter((question) => /^paint-bank-\d+-movement$/.test(question.id))
    .flatMap((question) => {
      const imageQuestion = imageByKey.get(question.id.replace('-movement', ''));
      if (!imageQuestion?.imageAsset) return [];
      return [{
        ...question,
        id: `${question.id}-visual`,
        prompt: question.prompt.replace('À quel mouvement rattache-t-on surtout', 'En observant cette œuvre, à quel mouvement rattache-t-on'),
        explanation: question.explanation.replace('est rangé ici dans le repère', 'sert ici de repère pour le mouvement'),
        imageAsset: imageQuestion.imageAsset,
        imageAlt: imageQuestion.imageAlt,
        tags: [...new Set([...question.tags, 'image', 'relecture-visuelle'])],
      }];
    });
}

function visualArtworkContextQuestions(): QuestionSeed[] {
  const imageByKey = new Map(
    visualHistoryQuestions
      .filter((question) => /^paint-bank-\d+-artist$/.test(question.id) && question.imageAsset)
      .map((question) => [question.id.replace('-artist', ''), question]),
  );

  return visualHistoryQuestions
    .filter((question) => /^paint-bank-\d+-(work|country|subject)$/.test(question.id))
    .flatMap((question) => {
      const imageQuestion = imageByKey.get(question.id.replace(/-(work|country|subject)$/, ''));
      if (!imageQuestion?.imageAsset) return [];
      const answer = question.choices?.[question.answerIndex ?? 0] ?? '';
      const explanation = question.id.endsWith('-work')
        ? `L’image renvoie au titre ${answer}; elle sert de repère visuel pour relier œuvre et artiste.`
        : question.id.endsWith('-country')
          ? `Cette œuvre est rattachée ici au repère culturel ${answer}.`
          : `Cette image sert de repère visuel pour reconnaître le sujet ${answer}.`;
      return [{
        ...question,
        id: `${question.id}-visual`,
        difficulty: visualArtworkDifficulty(question),
        prompt: question.prompt
          .replace('Quelle œuvre est associée à', 'En observant cette œuvre, quel titre est associé à')
          .replace('Quel pays sert de repère culturel principal pour', 'En observant cette œuvre, quel pays sert de repère culturel principal pour')
          .replace('Quel type de sujet décrit le mieux', 'En observant cette œuvre, quel type de sujet décrit le mieux'),
        explanation,
        imageAsset: imageQuestion.imageAsset,
        imageAlt: imageQuestion.imageAlt,
        tags: [...new Set([...question.tags, 'image', 'relecture-visuelle'])],
      }];
    });
}

function visualLandmarkStyleQuestions(): QuestionSeed[] {
  const imageByKey = new Map(
    landmarkVisualQuestions
      .filter((question) => /^landmark-\d+-identify$/.test(question.id) && question.imageAsset)
      .map((question) => [question.id.replace('-identify', ''), question]),
  );

  return landmarkVisualQuestions
    .filter((question) => /^landmark-\d+-style$/.test(question.id))
    .flatMap((question) => {
      const imageQuestion = imageByKey.get(question.id.replace('-style', ''));
      if (!imageQuestion?.imageAsset) return [];
      return [{
        ...question,
        id: `${question.id}-visual`,
        prompt: question.prompt.replace('Quel repère stylistique associer à', 'En observant ce monument, quel repère stylistique associer à'),
        imageAsset: imageQuestion.imageAsset,
        imageAlt: imageQuestion.imageAlt,
        tags: [...new Set([...question.tags, 'image', 'relecture-visuelle'])],
      }];
    });
}

function visualLandmarkLocationQuestions(): QuestionSeed[] {
  const imageByKey = new Map(
    landmarkVisualQuestions
      .filter((question) => /^landmark-\d+-identify$/.test(question.id) && question.imageAsset)
      .map((question) => [question.id.replace('-identify', ''), question]),
  );

  return landmarkVisualQuestions
    .filter((question) => /^landmark-\d+-(city|country)$/.test(question.id))
    .flatMap((question) => {
      const imageQuestion = imageByKey.get(question.id.replace(/-(city|country)$/, ''));
      if (!imageQuestion?.imageAsset) return [];
      const answer = question.choices?.[question.answerIndex ?? 0] ?? '';
      const explanation = question.id.endsWith('-country')
        ? `Ce monument est associé au pays ${answer} ; l’image sert de repère visuel pour relier architecture et géographie.`
        : `Ce monument est associé à ${answer} ; l’image sert de repère visuel pour le situer.`;
      return [{
        ...question,
        id: `${question.id}-visual`,
        difficulty: visualLandmarkDifficulty(question),
        prompt: question.prompt
          .replace('Dans quelle ville ou zone se trouve', 'En observant ce monument, dans quelle ville ou zone se trouve')
          .replace('Dans quel pays se trouve', 'En observant ce monument, dans quel pays se trouve')
          .replace('Quelle ville ou zone correspond à ce repère architectural', 'En observant ce monument, quelle ville ou zone correspond à ce repère architectural'),
        explanation,
        imageAsset: imageQuestion.imageAsset,
        imageAlt: imageQuestion.imageAlt,
        tags: [...new Set([...question.tags, 'image', 'relecture-visuelle'])],
      }];
    });
}

function visualHistoryContextQuestions(): QuestionSeed[] {
  const imageByKey = new Map(
    visualHistoryQuestions
      .filter((question) => /^hist-figure-\d+-identity$/.test(question.id) && question.imageAsset)
      .map((question) => [question.id.replace('-identity', ''), question]),
  );

  return visualHistoryQuestions
    .filter((question) => /^hist-figure-\d+-(role|region|era)$/.test(question.id))
    .flatMap((question) => {
      const imageQuestion = imageByKey.get(question.id.replace(/-(role|region|era)$/, ''));
      if (!imageQuestion?.imageAsset) return [];
      return [{
        ...question,
        id: `${question.id}-visual`,
        difficulty: visualHistoryDifficulty(question),
        prompt: question.prompt
          .replace('Quel rôle décrit le mieux', 'En observant ce portrait, quel rôle décrit le mieux')
          .replace('À quel espace historique rattache-t-on', 'En observant ce portrait, à quel espace historique rattache-t-on')
          .replace('Dans quelle période place-t-on surtout', 'En observant ce portrait, dans quelle période place-t-on surtout'),
        explanation: question.explanation.replace('est rattaché ici à', 'est rattaché ici à'),
        imageAsset: imageQuestion.imageAsset,
        imageAlt: imageQuestion.imageAlt,
        tags: [...new Set([...question.tags, 'image', 'portrait', 'relecture-visuelle'])],
      }];
    });
}

function visualNatureClueQuestions(): QuestionSeed[] {
  const imageByKey = new Map(
    natureVisualQuestions
      .filter((question) => /^nature-(animals|plants)-\d+-identify$/.test(question.id) && question.imageAsset)
      .map((question) => [question.id.replace('-identify', ''), question]),
  );

  return natureVisualQuestions
    .filter((question) => /^nature-(animals|plants)-\d+-clue$/.test(question.id))
    .flatMap((question) => {
      const imageQuestion = imageByKey.get(question.id.replace('-clue', ''));
      if (!imageQuestion?.imageAsset) return [];
      return [{
        ...question,
        id: `${question.id}-visual`,
        prompt: question.prompt.replace('Quelle espèce correspond à cet indice', 'En observant cette image, quelle espèce correspond aussi à cet indice'),
        explanation: question.explanation.replace(/\bLa réponse attendue\b/g, 'La réponse attendue'),
        imageAsset: imageQuestion.imageAsset,
        imageAlt: imageQuestion.imageAlt,
        tags: [...new Set([...question.tags, 'image', 'relecture-visuelle'])],
      }];
    });
}

export const visualImageExpansionQuestions: QuestionSeed[] = [
  ...visualMovementQuestions(),
  ...visualArtworkContextQuestions(),
  ...visualLandmarkStyleQuestions(),
  ...visualLandmarkLocationQuestions(),
  ...visualHistoryContextQuestions(),
  ...visualNatureClueQuestions(),
];
