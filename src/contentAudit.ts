import { QuestionSeed, Topic } from './domain';

export type ContentAuditIssue = {
  id: string;
  severity: 'error' | 'warning';
  message: string;
};

export type ContentAuditReport = {
  topics: number;
  questions: number;
  multipleChoice: number;
  answerIndexCounts: [number, number, number, number];
  issues: ContentAuditIssue[];
};

function addIssue(issues: ContentAuditIssue[], id: string, severity: ContentAuditIssue['severity'], message: string) {
  issues.push({ id, severity, message });
}

export function auditContent(topics: Topic[], questions: QuestionSeed[]): ContentAuditReport {
  const issues: ContentAuditIssue[] = [];
  const topicIds = new Set(topics.map((topic) => topic.id));
  const seenTopicIds = new Set<string>();
  const seenQuestionIds = new Set<string>();
  const answerIndexCounts: [number, number, number, number] = [0, 0, 0, 0];
  let multipleChoice = 0;

  for (const topic of topics) {
    if (seenTopicIds.has(topic.id)) addIssue(issues, topic.id, 'error', 'identifiant de thème dupliqué');
    seenTopicIds.add(topic.id);
    if (!topic.title.trim()) addIssue(issues, topic.id, 'error', 'titre de thème absent');
    if (!topic.subtitle.trim()) addIssue(issues, topic.id, 'warning', 'sous-titre de thème absent');
  }

  for (const question of questions) {
    if (seenQuestionIds.has(question.id)) addIssue(issues, question.id, 'error', 'identifiant de question dupliqué');
    seenQuestionIds.add(question.id);
    if (!topicIds.has(question.topicId)) addIssue(issues, question.id, 'error', `thème absent: ${question.topicId}`);
    if (!question.prompt.trim()) addIssue(issues, question.id, 'error', 'énoncé absent');
    if (!question.explanation.trim()) addIssue(issues, question.id, 'error', 'explication absente');
    if (!question.tags.length) addIssue(issues, question.id, 'warning', 'tag absent');

    const type = question.type ?? 'multiple-choice';
    if (type === 'multiple-choice') {
      multipleChoice += 1;
      if (!question.choices || question.choices.length !== 4) {
        addIssue(issues, question.id, 'error', 'quatre choix requis');
      } else if (new Set(question.choices).size !== 4) {
        addIssue(issues, question.id, 'error', 'choix dupliqués');
      }
      if (!Number.isInteger(question.answerIndex) || question.answerIndex! < 0 || question.answerIndex! > 3) {
        addIssue(issues, question.id, 'error', 'index de réponse invalide');
      } else {
        answerIndexCounts[question.answerIndex!] += 1;
      }
    } else if (type === 'free-text') {
      if (!question.acceptedAnswers?.length) addIssue(issues, question.id, 'error', 'réponse libre sans variante acceptée');
    } else if (type === 'multi-text') {
      if (!question.answerFields || question.answerFields.length < 2) addIssue(issues, question.id, 'error', 'question multi-champs incomplète');
      for (const field of question.answerFields ?? []) {
        if (!field.acceptedAnswers.length) addIssue(issues, question.id, 'error', `champ sans réponse acceptée: ${field.id}`);
      }
    } else if (type === 'map-point') {
      if (!question.geoTarget) addIssue(issues, question.id, 'error', 'cible carte absente');
      else {
        if (question.geoTarget.lat < -90 || question.geoTarget.lat > 90) addIssue(issues, question.id, 'error', 'latitude invalide');
        if (question.geoTarget.lon < -180 || question.geoTarget.lon > 180) addIssue(issues, question.id, 'error', 'longitude invalide');
        if (question.geoTarget.toleranceKm <= 0) addIssue(issues, question.id, 'error', 'tolérance carte invalide');
      }
    }
  }

  return {
    topics: topics.length,
    questions: questions.length,
    multipleChoice,
    answerIndexCounts,
    issues,
  };
}
