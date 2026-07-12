import { QuestionSeed, Topic } from './domain';

export type ContentAuditIssue = {
  id: string;
  severity: 'error' | 'warning';
  message: string;
};

export type TopicAuditSummary = {
  topicId: string;
  title: string;
  total: number;
  byDifficulty: Record<1 | 2 | 3, number>;
  byType: Record<string, number>;
  subthemeCount: number;
  answerIndexCounts: [number, number, number, number, number];
  dominantType?: string;
  dominantTypeRatio: number;
};

export type ContentAuditReport = {
  topics: number;
  questions: number;
  multipleChoice: number;
  answerIndexCounts: [number, number, number, number];
  topicSummaries: TopicAuditSummary[];
  issues: ContentAuditIssue[];
};

function addIssue(issues: ContentAuditIssue[], id: string, severity: ContentAuditIssue['severity'], message: string) {
  issues.push({ id, severity, message });
}

function normalizeText(value: string) {
  return value.trim().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

function textWords(value: string) {
  return normalizeText(value).match(/[\p{L}\p{N}]+/gu) ?? [];
}

function isAnswerStopword(word: string) {
  return ['de', 'du', 'des', 'la', 'le', 'les', 'l', 'd', 'a', 'au', 'aux', 'en', 'et', 'ou'].includes(word);
}

function hasMojibake(value: string) {
  return ['Ã', 'â€™', 'â€œ', 'â€', '�'].some((sequence) => value.includes(sequence));
}

function isVisualQuestion(question: QuestionSeed) {
  return !!question.imageAsset || !!question.imageUrl || !!question.choiceImageAssets?.length || question.promptBlocks?.some((block) => block.type === 'image');
}

function isMapOnlyTopic(topicId: string) {
  return topicId === 'france-map';
}

function numericValue(value: string) {
  const normalized = value.trim().replace(',', '.');
  if (!/^-?\d+(\.\d+)?$/.test(normalized)) return undefined;
  return Number(normalized);
}

function isCompactAnswer(value: string) {
  const normalized = normalizeText(value).replace(/[\s.,;:°%+-]/g, '');
  return normalized.length <= 4 || numericValue(value) !== undefined;
}

function hasAmbiguousFreeTextAnswer(value: string) {
  const normalized = normalizeText(value);
  return /[-'’]/.test(value) || /[^\u0000-\u007f]/.test(value) || normalized.length >= 18;
}

function auditPromptAndExplanation(question: QuestionSeed, issues: ContentAuditIssue[]) {
  const prompt = question.prompt.trim();
  const explanation = question.explanation.trim();
  if (prompt.length < 18) addIssue(issues, question.id, 'warning', 'enonce trop court pour etre vraiment contextualise');
  if (prompt.length > 180) addIssue(issues, question.id, 'warning', 'enonce trop long, risque de lisibilite mobile');
  if (explanation.length < 38) addIssue(issues, question.id, 'warning', 'explication trop courte pour ancrer la reponse');
  if (isVisualQuestion(question)) {
    const visualWords = ['image', 'photo', 'visuel', 'tableau', 'oeuvre', 'portrait', 'drapeau', 'carte', 'monument', 'animal', 'plante'];
    if (question.choiceImageAssets?.length && !visualWords.some((word) => normalizeText(prompt).includes(word))) addIssue(issues, question.id, 'warning', 'question a choix image sans indice de format dans l enonce');
  }
}

function auditLanguageTags(question: QuestionSeed, issues: ContentAuditIssue[]) {
  if (question.topicId !== 'language') return;
  const hasLanguage = question.tags.some((tag) => tag.startsWith('lang:')) || question.tags.some((tag) => ['anglais', 'espagnol', 'allemand', 'italien'].includes(tag));
  if (!hasLanguage) addIssue(issues, question.id, 'warning', 'question de langue sans langue identifiable');
  if (question.tags.some((tag) => tag.startsWith('lang:')) && !question.tags.some((tag) => tag.startsWith('cefr:'))) addIssue(issues, question.id, 'warning', 'question de langue sans niveau CEFR');
  if (question.tags.some((tag) => tag.startsWith('lang:')) && !question.tags.some((tag) => tag.startsWith('skill:'))) addIssue(issues, question.id, 'warning', 'question de langue sans competence');
}

function auditDifficulty(question: QuestionSeed, issues: ContentAuditIssue[]) {
  const prompt = normalizeText(question.prompt);
  const tags = new Set(question.tags.map(normalizeText));
  const easyKnownCountries = ['italie', 'france', 'espagne', 'allemagne', 'royaume-uni', 'japon', 'bresil', 'canada', 'etats-unis'];
  if (question.difficulty === 3 && question.tags.some((tag) => ['drapeaux', 'drapeau', 'coverage:world-flags'].includes(tag))) {
    if (easyKnownCountries.some((country) => prompt.includes(country))) addIssue(issues, question.id, 'warning', 'difficulte 3 suspecte pour un drapeau tres connu');
  }
  if (question.difficulty === 3 && prompt.includes('atomium')) addIssue(issues, question.id, 'warning', 'difficulte 3 suspecte pour un monument tres reconnaissable');
  if (question.difficulty === 1 && [...tags].some((tag) => ['configuration-electronique', 'oxydoreduction', 'raisonnement', 'isotopes'].includes(tag))) {
    addIssue(issues, question.id, 'warning', 'difficulte 1 suspecte pour une notion scientifique technique');
  }
  if (question.type === 'map-point' && question.geoTarget) {
    if (question.difficulty === 1 && question.geoTarget.toleranceKm < 40) addIssue(issues, question.id, 'warning', 'tolerance carte serree pour un niveau 1');
    if (question.difficulty === 3 && !question.tags.includes('region-monde') && question.geoTarget.toleranceKm > 350) addIssue(issues, question.id, 'warning', 'tolerance carte large pour un niveau 3');
  }
}

function auditMultipleChoice(question: QuestionSeed, issues: ContentAuditIssue[], answerIndexCounts: [number, number, number, number]) {
  if (!question.choices || question.choices.length !== 4) {
    addIssue(issues, question.id, 'error', 'quatre choix requis');
    return;
  }
  const normalizedChoices = question.choices.map(normalizeText);
  if (new Set(normalizedChoices).size !== question.choices.length) addIssue(issues, question.id, 'error', 'choix dupliques');
  if (question.choices.some((choice) => !choice.trim())) addIssue(issues, question.id, 'error', 'choix vide');
  if (!Number.isInteger(question.answerIndex) || question.answerIndex! < 0 || question.answerIndex! > 3) {
    addIssue(issues, question.id, 'error', 'index de reponse invalide');
    return;
  }

  answerIndexCounts[question.answerIndex!] += 1;
  const correctChoice = question.choices[question.answerIndex!];
  const correctWords = textWords(correctChoice);
  const promptWords = new Set(textWords(question.prompt));
  const meaningfulCorrectWords = correctWords.filter((word) => !isAnswerStopword(word));
  const fullAnswerIsInPrompt = meaningfulCorrectWords.length > 0 && meaningfulCorrectWords.every((word) => promptWords.has(word));
  if (!question.tags.includes('image-choice') && !question.tags.includes('skill:reading') && correctChoice.trim().length > 4 && fullAnswerIsInPrompt) addIssue(issues, question.id, 'warning', 'la bonne reponse apparait dans l enonce');

  const numbers = question.choices.map(numericValue);
  const numericCount = numbers.filter((value) => value !== undefined).length;
  if (numericCount > 0 && numericCount < question.choices.length && !question.tags.includes('oxydoreduction')) addIssue(issues, question.id, 'warning', 'QCM melange distracteurs numeriques et non numeriques');
  if (numbers.every((value) => value !== undefined)) {
    const correct = numbers[question.answerIndex!]!;
    const distractors = numbers.filter((_, index) => index !== question.answerIndex) as number[];
    if (correct > 10 && distractors.every((value) => [1, 2, 3].includes(value))) addIssue(issues, question.id, 'warning', 'distracteurs numeriques trop triviaux');
    const maxGap = Math.max(...distractors.map((value) => Math.abs(value - correct)));
    if (correct > 0 && maxGap > Math.max(25, Math.abs(correct) * 2.5)) addIssue(issues, question.id, 'warning', 'distracteurs numeriques trop eloignes');
  }
}

function auditFreeText(question: QuestionSeed, issues: ContentAuditIssue[]) {
  const acceptedAnswers = question.acceptedAnswers ?? [];
  if (!acceptedAnswers.length) {
    addIssue(issues, question.id, 'error', 'reponse libre sans variante acceptee');
    return;
  }
  const normalizedAnswers = acceptedAnswers.map((answer) => answer.trim().toLowerCase());
  if (new Set(normalizedAnswers).size !== normalizedAnswers.length) addIssue(issues, question.id, 'warning', 'variantes de reponse libre dupliquees');
  const needsVariants = acceptedAnswers.some((answer) => !isCompactAnswer(answer) && hasAmbiguousFreeTextAnswer(answer));
  if (needsVariants && acceptedAnswers.length < 2) addIssue(issues, question.id, 'warning', 'reponse libre ambigue avec une seule variante acceptee');
}

function buildTopicSummaries(topics: Topic[], questions: QuestionSeed[], issues: ContentAuditIssue[]) {
  const topicSummaries = topics.map<TopicAuditSummary>((topic) => {
    const topicQuestions = questions.filter((question) => question.topicId === topic.id);
    const summary: TopicAuditSummary = {
      topicId: topic.id,
      title: topic.title,
      total: topicQuestions.length,
      byDifficulty: { 1: 0, 2: 0, 3: 0 },
      byType: {},
      subthemeCount: 0,
      answerIndexCounts: [0, 0, 0, 0, 0],
      dominantTypeRatio: 0,
    };
    const subthemes = new Set<string>();
    for (const question of topicQuestions) {
      summary.byDifficulty[question.difficulty] += 1;
      const type = question.type ?? 'multiple-choice';
      summary.byType[type] = (summary.byType[type] ?? 0) + 1;
      question.tags.filter((tag) => tag.startsWith('subtheme:')).forEach((tag) => subthemes.add(tag));
      if (type === 'multiple-choice' && Number.isInteger(question.answerIndex) && question.answerIndex! >= 0 && question.answerIndex! <= 4) summary.answerIndexCounts[question.answerIndex!] += 1;
    }
    summary.subthemeCount = subthemes.size;
    const typeEntries = Object.entries(summary.byType).sort((left, right) => right[1] - left[1]);
    if (typeEntries.length) {
      summary.dominantType = typeEntries[0][0];
      summary.dominantTypeRatio = typeEntries[0][1] / Math.max(1, summary.total);
    }
    return summary;
  });

  for (const summary of topicSummaries) {
    const multipleChoiceTotal = summary.byType['multiple-choice'] ?? 0;
    if (multipleChoiceTotal >= 12) {
      const usedCounts = summary.answerIndexCounts.slice(0, 4);
      const max = Math.max(...usedCounts);
      const min = Math.min(...usedCounts);
      if (max - min > Math.max(3, Math.ceil(multipleChoiceTotal * 0.16))) addIssue(issues, summary.topicId, 'warning', `repartition A/B/C/D desequilibree dans le theme (${usedCounts.join('/')})`);
      for (const difficulty of [1, 2, 3] as const) {
        const difficultyQuestions = questions.filter((question) => question.topicId === summary.topicId && question.difficulty === difficulty && (question.type ?? 'multiple-choice') === 'multiple-choice');
        if (difficultyQuestions.length >= 16) {
          const byIndex = [0, 0, 0, 0];
          for (const question of difficultyQuestions) byIndex[question.answerIndex ?? 4] += 1;
          const difficultyMax = Math.max(...byIndex);
          const difficultyMin = Math.min(...byIndex);
          if (difficultyMax - difficultyMin > Math.max(3, Math.ceil(difficultyQuestions.length * 0.22))) {
            addIssue(issues, summary.topicId, 'warning', `repartition A/B/C/D desequilibree au niveau ${difficulty} (${byIndex.join('/')})`);
          }
        }
      }
    }
    if (summary.total >= 20 && summary.dominantType && !isMapOnlyTopic(summary.topicId)) {
      const visualHeavyTopics = new Set(['arts', 'nature', 'architecture']);
      const allowedDominantRatio = visualHeavyTopics.has(summary.topicId) ? 0.97 : 0.9;
      if (summary.dominantTypeRatio > allowedDominantRatio && summary.topicId !== 'geography') addIssue(issues, summary.topicId, 'warning', `theme trop concentre sur le format ${summary.dominantType}`);
      if (summary.topicId === 'geography' && (summary.byType['map-point'] ?? 0) < 20) addIssue(issues, summary.topicId, 'warning', 'geographie devrait garder une proportion visible de questions carte');
    }
    if (summary.total >= 30 && summary.subthemeCount < 3) addIssue(issues, summary.topicId, 'warning', 'theme trop pauvre en sous-themes distincts');
    if (summary.total >= 12) {
      for (const difficulty of [1, 2, 3] as const) {
        if (summary.byDifficulty[difficulty] === 0) addIssue(issues, summary.topicId, 'warning', `niveau ${difficulty} absent dans le theme`);
      }
    }
  }

  return topicSummaries;
}

export function auditContent(topics: Topic[], questions: QuestionSeed[]): ContentAuditReport {
  const issues: ContentAuditIssue[] = [];
  const topicIds = new Set(topics.map((topic) => topic.id));
  const seenTopicIds = new Set<string>();
  const seenQuestionIds = new Set<string>();
  const answerIndexCounts: [number, number, number, number] = [0, 0, 0, 0];
  let multipleChoice = 0;

  for (const topic of topics) {
    if (seenTopicIds.has(topic.id)) addIssue(issues, topic.id, 'error', 'identifiant de theme duplique');
    seenTopicIds.add(topic.id);
    if (!topic.title.trim()) addIssue(issues, topic.id, 'error', 'titre de theme absent');
    if (!topic.subtitle.trim()) addIssue(issues, topic.id, 'warning', 'sous-titre de theme absent');
    if ([topic.title, topic.subtitle, topic.icon].some(hasMojibake)) addIssue(issues, topic.id, 'error', 'texte de theme mal encode');
  }

  for (const question of questions) {
    if (seenQuestionIds.has(question.id)) addIssue(issues, question.id, 'error', 'identifiant de question duplique');
    seenQuestionIds.add(question.id);
    if (!topicIds.has(question.topicId)) addIssue(issues, question.id, 'error', `theme absent: ${question.topicId}`);
    if (!question.prompt.trim()) addIssue(issues, question.id, 'error', 'enonce absent');
    if ([question.prompt, question.explanation, question.sourceLabel, ...(question.choices ?? []), ...(question.acceptedAnswers ?? [])].some(hasMojibake)) addIssue(issues, question.id, 'error', 'texte mal encode');
    if (!question.explanation.trim()) addIssue(issues, question.id, 'error', 'explication absente');
    auditPromptAndExplanation(question, issues);
    if (!question.tags.length) addIssue(issues, question.id, 'warning', 'tag absent');
    if (!question.tags.some((tag) => tag.startsWith('subtheme:'))) addIssue(issues, question.id, 'warning', 'sous-theme absent');
    auditLanguageTags(question, issues);
    auditDifficulty(question, issues);

    const type = question.type ?? 'multiple-choice';
    if (type === 'multiple-choice') {
      multipleChoice += 1;
      auditMultipleChoice(question, issues, answerIndexCounts);
    } else if (type === 'free-text') {
      auditFreeText(question, issues);
    } else if (type === 'multi-text') {
      if (!question.answerFields || question.answerFields.length < 2) addIssue(issues, question.id, 'error', 'question multi-champs incomplete');
      for (const field of question.answerFields ?? []) {
        if (!field.acceptedAnswers.length) addIssue(issues, question.id, 'error', `champ sans reponse acceptee: ${field.id}`);
      }
    } else if (type === 'map-point') {
      if (!question.geoTarget) addIssue(issues, question.id, 'error', 'cible carte absente');
      else {
        if (question.geoTarget.lat < -90 || question.geoTarget.lat > 90) addIssue(issues, question.id, 'error', 'latitude invalide');
        if (question.geoTarget.lon < -180 || question.geoTarget.lon > 180) addIssue(issues, question.id, 'error', 'longitude invalide');
        if (question.geoTarget.toleranceKm <= 0) addIssue(issues, question.id, 'error', 'tolerance carte invalide');
      }
    }
  }
  const topicSummaries = buildTopicSummaries(topics, questions, issues);

  return {
    topics: topics.length,
    questions: questions.length,
    multipleChoice,
    answerIndexCounts,
    topicSummaries,
    issues,
  };
}
