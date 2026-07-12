import { Difficulty, QuizQuestion } from './domain';

export type QuestionReviewSeverity = 'ok' | 'warning' | 'error';

export type QuestionReviewCheck = {
  severity: QuestionReviewSeverity;
  label: string;
};

export type QuestionReviewSummary = {
  status: QuestionReviewSeverity;
  checks: QuestionReviewCheck[];
  difficultyLabel: string;
};

const difficultyLabels: Record<Difficulty, string> = {
  1: 'Découverte',
  2: 'Intermédiaire',
  3: 'Avancé',
};

function normalized(value: string) {
  return value.trim().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function add(checks: QuestionReviewCheck[], severity: QuestionReviewSeverity, label: string) {
  checks.push({ severity, label });
}

function hasVisual(question: QuizQuestion) {
  return !!question.imageAsset || !!question.imageUrl || !!question.choiceImageAssets?.length || question.promptBlocks?.some((block) => block.type === 'image');
}

function hasMap(question: QuizQuestion) {
  return question.type === 'map-point' || question.interactionType === 'map-point' || question.promptBlocks?.some((block) => block.type === 'map');
}

function answerText(question: QuizQuestion) {
  if ((question.type ?? 'multiple-choice') === 'multiple-choice') return question.choices?.[question.answerIndex ?? -1] ?? '';
  return question.acceptedAnswers?.[0] ?? '';
}

function isCompactChoice(choice: string) {
  return /^[\d.,+\-%°\s]+$/.test(choice) || /^[A-Z][a-z]?$/.test(choice) || choice.trim().length <= 2;
}

export function reviewQuestionQuality(question: QuizQuestion): QuestionReviewSummary {
  const checks: QuestionReviewCheck[] = [];
  const type = question.type ?? 'multiple-choice';

  if (question.prompt.trim().length < 12) add(checks, 'warning', 'Énoncé très court');
  else add(checks, 'ok', 'Énoncé lisible');

  if (!question.explanation.trim()) add(checks, 'error', 'Explication absente');
  else if (question.explanation.trim().length < 35) add(checks, 'warning', 'Explication courte');
  else add(checks, 'ok', 'Contexte présent');

  if (!question.tags.length) add(checks, 'warning', 'Tags absents');
  if (!question.sourceLabel.trim()) add(checks, 'warning', 'Source non libellée');

  if (type === 'multiple-choice') {
    if (!question.choices || question.choices.length !== 4) {
      add(checks, 'error', 'QCM sans 4 propositions');
    } else {
      const uniqueChoices = new Set(question.choices.map(normalized));
      if (uniqueChoices.size !== question.choices.length) add(checks, 'error', 'Propositions dupliquées');
      else add(checks, 'ok', '4 propositions distinctes');
      const expectsCompactChoices = question.choices.every(isCompactChoice) || /article|nombre d oxydation/i.test(question.prompt);
      if (question.choices.some((choice) => choice.trim().length < 2) && !expectsCompactChoices) add(checks, 'warning', 'Proposition trop courte');
    }
    if (!Number.isInteger(question.answerIndex) || question.answerIndex === undefined || question.answerIndex < 0 || question.answerIndex > 3) add(checks, 'error', 'Bonne réponse invalide');
    else add(checks, 'ok', `Bonne réponse: ${String.fromCharCode(65 + question.answerIndex)}`);
  } else if (type === 'free-text') {
    if (!question.acceptedAnswers?.length) add(checks, 'error', 'Réponse libre sans variante');
    else add(checks, 'ok', `${question.acceptedAnswers.length} variante(s) acceptée(s)`);
  } else if (type === 'multi-text') {
    if (!question.answerFields || question.answerFields.length < 2) add(checks, 'error', 'Champs de réponse incomplets');
    else if (question.answerFields.some((field) => !field.acceptedAnswers.length)) add(checks, 'error', 'Champ sans réponse acceptée');
    else add(checks, 'ok', `${question.answerFields.length} champs validés`);
  } else if (type === 'map-point') {
    if (!question.geoTarget) add(checks, 'error', 'Cible carte absente');
    else if (question.geoTarget.toleranceKm <= 0) add(checks, 'error', 'Tolérance carte invalide');
    else add(checks, 'ok', `Carte: ${question.geoTarget.label}`);
  }

  if (hasVisual(question)) {
    if (question.choiceImageAssets?.length && question.choiceImageAssets.length !== 4) add(checks, 'error', 'Choix image incomplets');
    if (question.choiceImageAssets?.length && question.choiceImageAlts?.length !== 4) add(checks, 'warning', 'Textes alternatifs image incomplets');
    else add(checks, 'ok', 'Média embarqué');
  }

  if (hasMap(question) && !question.geoTarget) add(checks, 'warning', 'Question carte sans cible exploitable');

  const easyFlagAnswer = /allemagne|bresil|canada|chine|espagne|etats-unis|france|italie|japon|royaume-uni/i.test(`${question.prompt} ${answerText(question)}`);
  if (question.difficulty === 3 && easyFlagAnswer && question.tags.some((tag) => ['drapeau', 'flag', 'coverage:world-flags'].includes(tag))) {
    add(checks, 'warning', 'Drapeau en niveau avancé: vérifier la rareté réelle');
  }
  if (question.difficulty === 3 && (/\bitalie\b/i.test(question.prompt) || /atomium/i.test(question.prompt))) {
    add(checks, 'warning', 'Niveau avancé suspect pour une notion très connue');
  }
  if (question.tags.includes('numero-atomique') && question.choices?.slice(1).join(' ') === '1 2 3') {
    add(checks, 'warning', 'Distracteurs de chimie trop triviaux');
  }

  const hasError = checks.some((check) => check.severity === 'error');
  const hasWarning = checks.some((check) => check.severity === 'warning');
  return {
    status: hasError ? 'error' : hasWarning ? 'warning' : 'ok',
    checks,
    difficultyLabel: difficultyLabels[question.difficulty],
  };
}

export function countReviewStatus(questions: QuizQuestion[]) {
  return questions.reduce(
    (accumulator, question) => {
      accumulator[reviewQuestionQuality(question).status] += 1;
      return accumulator;
    },
    { ok: 0, warning: 0, error: 0 } as Record<QuestionReviewSeverity, number>,
  );
}
