import { SessionDraft } from './domain';

export function parseSessionDraftPayload(payload: string, updatedAt: string): SessionDraft | null {
  try {
    const draft = JSON.parse(payload) as Omit<SessionDraft, 'updatedAt'>;
    if (!draft || !draft.topic?.id || !Array.isArray(draft.questions) || !draft.questions.length || !Array.isArray(draft.answers)) return null;
    if (draft.questions.some((question) => !question?.id || !question.prompt)) return null;
    const mode = draft.mode?.kind === 'infinite' && [1, 2, 3].includes(draft.mode.difficulty) ? draft.mode : undefined;
    const rawIndex = Number.isInteger(draft.questionIndex) ? draft.questionIndex : 0;
    return {
      ...draft,
      mode,
      questionIndex: Math.min(Math.max(0, rawIndex), draft.questions.length - 1),
      updatedAt,
    };
  } catch {
    return null;
  }
}
