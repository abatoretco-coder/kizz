import { QuizQuestion, SessionAnswer } from './domain';

export type InteractionSummary = {
  type: 'multiple-choice' | 'free-text' | 'multi-text' | 'map-point';
  label: string;
  answered: number;
  score: number;
  accuracy: number;
};

const labels: Record<InteractionSummary['type'], string> = {
  'multiple-choice': 'QCM',
  'free-text': 'Texte',
  'multi-text': 'Multi-champs',
  'map-point': 'Carte',
};

export function summarizeForReview(answers: SessionAnswer[]) {
  const counts = { review: 0, consolidate: 0, solid: 0 };
  for (const answer of answers) {
    const credit = answer.credit ?? (answer.correct ? 1 : 0);
    if (credit < 1 || answer.confidence === 1) counts.review += 1;
    else if (answer.confidence === 3) counts.solid += 1;
    else counts.consolidate += 1;
  }
  return [
    { label: 'À revoir', value: counts.review },
    { label: 'À consolider', value: counts.consolidate },
    { label: 'Solide', value: counts.solid },
  ];
}

export function summarizeByInteraction(questions: QuizQuestion[], answers: SessionAnswer[]): InteractionSummary[] {
  const questionById = new Map(questions.map((question) => [question.id, question]));
  const byType = new Map<InteractionSummary['type'], { answered: number; score: number }>();

  for (const answer of answers) {
    const question = questionById.get(answer.questionId);
    const type = (question?.type ?? 'multiple-choice') as InteractionSummary['type'];
    const current = byType.get(type) ?? { answered: 0, score: 0 };
    current.answered += 1;
    current.score += answer.credit ?? (answer.correct ? 1 : 0);
    byType.set(type, current);
  }

  return [...byType.entries()]
    .map(([type, stat]) => ({
      type,
      label: labels[type],
      answered: stat.answered,
      score: stat.score,
      accuracy: stat.answered ? Math.round((stat.score / stat.answered) * 100) : 0,
    }))
    .sort((a, b) => b.answered - a.answered || a.label.localeCompare(b.label));
}
