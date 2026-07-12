import { QuestionSeed } from './domain';
import { visualHistoryQuestions } from './generated/contentVisualHistory';
import { landmarkVisualQuestions } from './generated/contentLandmarkVisual';

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
        prompt: question.prompt.replace('Quel repere stylistique associer a', 'En observant ce monument, quel repère stylistique associer à'),
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
        prompt: question.prompt
          .replace('Quel rôle décrit le mieux', 'En observant ce portrait, quel rôle décrit le mieux')
          .replace('À quel espace historique rattache-t-on', 'En observant ce portrait, à quel espace historique rattache-t-on')
          .replace('Dans quelle période place-t-on surtout', 'En observant ce portrait, dans quelle période place-t-on surtout'),
        explanation: question.explanation.replace('est rattache ici a', 'est rattaché ici à'),
        imageAsset: imageQuestion.imageAsset,
        imageAlt: imageQuestion.imageAlt,
        tags: [...new Set([...question.tags, 'image', 'portrait', 'relecture-visuelle'])],
      }];
    });
}

export const visualImageExpansionQuestions: QuestionSeed[] = [
  ...visualMovementQuestions(),
  ...visualLandmarkStyleQuestions(),
  ...visualHistoryContextQuestions(),
];
