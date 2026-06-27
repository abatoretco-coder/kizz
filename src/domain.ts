export type Difficulty = 1 | 2 | 3;

export type GeoPoint = {
  lat: number;
  lon: number;
};

export type GeoTarget = GeoPoint & {
  label: string;
  toleranceKm: number;
};

export type Topic = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
};

export type QuestionSeed = {
  id: string;
  topicId: string;
  difficulty: Difficulty;
  prompt: string;
  type?: 'multiple-choice' | 'free-text' | 'multi-text' | 'map-point';
  choices?: [string, string, string, string];
  answerIndex?: number;
  acceptedAnswers?: string[];
  answerFields?: Array<{ id: string; label: string; acceptedAnswers: string[] }>;
  geoTarget?: GeoTarget;
  interactionType?: 'choice' | 'text' | 'multi-text' | 'map-point';
  promptBlocks?: Array<{ type: 'text' | 'image' | 'map'; value: string }>;
  answerSchema?: Record<string, unknown>;
  explanation: string;
  tags: string[];
  sourceLabel: string;
  sourceUrl?: string;
  imageUrl?: string;
  imageAsset?: string;
  imageAlt?: string;
  learnMoreUrl?: string;
};

export type QuizQuestion = QuestionSeed & { favorite?: boolean };

export type DashboardStats = {
  answered: number;
  correct: number;
  sessions: number;
  streakDays: number;
  dueReview: number;
};

export type ProgressCell = {
  difficulty: Difficulty;
  answered: number;
  score: number;
};

export type TopicProgress = {
  topic: Topic;
  totalAnswered: number;
  totalScore: number;
  accuracy: number;
  cells: ProgressCell[];
};

export type RecentSession = {
  id: number;
  topicId: string;
  topicTitle: string;
  score: number;
  total: number;
  completedAt: string;
};

export type LanguageProgressCell = {
  language: LanguageCode;
  level: CefrLevel;
  answered: number;
  score: number;
  accuracy: number;
};

export type SessionAnswer = {
  questionId: string;
  selectedIndex: number;
  selectedText?: string;
  correct: boolean;
  credit?: number;
  confidence?: 1 | 2 | 3;
};

export type SessionMode = {
  kind: 'infinite';
  difficulty: Difficulty;
};

export type SessionDraft = {
  topic: Topic;
  questions: QuizQuestion[];
  questionIndex: number;
  answers: SessionAnswer[];
  mode?: SessionMode;
  updatedAt: string;
};

export const QUIZ_PACK_FORMAT = 'kizz.quiz-pack' as const;

export type QuizPack = {
  format: typeof QUIZ_PACK_FORMAT;
  version: 1;
  id: string;
  name: string;
  description?: string;
  language: string;
  exportedAt?: string;
  topics: Topic[];
  questions: QuestionSeed[];
};

export type ImportReport = {
  bankName: string;
  topicsAdded: number;
  questionsAdded: number;
  questionsSkipped: number;
};

export type LibraryStats = {
  topics: number;
  questions: number;
  imports: number;
};

export type SessionFilters = {
  topicIds: string[];
  difficulties: Difficulty[];
  subthemes?: string[];
  limit: 5 | 10 | 20;
};

export type LanguageCode = 'es' | 'de' | 'it';
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
export type LanguageSkill = 'vocabulary' | 'reading' | 'writing' | 'culture' | 'lesson';

export type LanguageSessionFilters = {
  language: LanguageCode;
  level: CefrLevel;
  skills: LanguageSkill[];
  limit: 5 | 10 | 20;
};
