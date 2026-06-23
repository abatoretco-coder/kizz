import { GeoPoint, QuizQuestion } from './domain';

export function normalizeAnswer(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLocaleLowerCase('fr').replace(/\s+/g, ' ');
}

export function isFreeTextCorrect(question: QuizQuestion, value: string): boolean {
  return (question.acceptedAnswers ?? []).some((answer) => normalizeAnswer(answer) === normalizeAnswer(value));
}

export function gradeMultiText(question: QuizQuestion, values: Record<string, string>) {
  const fields = question.answerFields ?? [];
  const fieldResults = Object.fromEntries(fields.map((field) => [
    field.id,
    field.acceptedAnswers.some((answer) => normalizeAnswer(answer) === normalizeAnswer(values[field.id] ?? '')),
  ]));
  const correctCount = Object.values(fieldResults).filter(Boolean).length;
  const credit = fields.length ? correctCount / fields.length : 0;
  return { credit, correct: credit === 1, fieldResults };
}

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

export function distanceKm(a: GeoPoint, b: GeoPoint): number {
  const earthRadiusKm = 6371;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const haversine = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * earthRadiusKm * Math.asin(Math.min(1, Math.sqrt(haversine)));
}

export function bearingDegrees(from: GeoPoint, to: GeoPoint): number {
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const dLon = toRadians(to.lon - from.lon);
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}

export function cardinalDirection(degrees: number): string {
  const labels = ['nord', 'nord-est', 'est', 'sud-est', 'sud', 'sud-ouest', 'ouest', 'nord-ouest'];
  return labels[Math.round((((degrees % 360) + 360) % 360) / 45) % labels.length];
}

export function gradeMapPoint(question: QuizQuestion, guess: GeoPoint | null | undefined) {
  if (!question.geoTarget || !guess) return { credit: 0, correct: false, distanceKm: undefined, direction: undefined };
  const distance = distanceKm(guess, question.geoTarget);
  const tolerance = Math.max(1, question.geoTarget.toleranceKm);
  const credit = distance <= tolerance ? 1 : distance <= tolerance * 2 ? 0.5 : 0;
  return { credit, correct: credit === 1, distanceKm: Math.round(distance), direction: cardinalDirection(bearingDegrees(guess, question.geoTarget)) };
}

export function shuffleQuestions<T>(values: T[], random = Math.random): T[] {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

export function sessionScore(correct: boolean[]): number {
  if (correct.length === 0) return 0;
  return Math.round((correct.filter(Boolean).length / correct.length) * 100);
}

export type ReviewState = { repetitions: number; intervalDays: number; ease: number };

export function nextReviewState(current: ReviewState | undefined, credit: number, now = new Date(), confidence?: 1 | 2 | 3) {
  const previous = current ?? { repetitions: 0, intervalDays: 0, ease: 2.3 };
  let repetitions = previous.repetitions;
  let intervalDays = previous.intervalDays;
  let ease = previous.ease;
  if (credit >= 0.99) {
    repetitions += 1;
    intervalDays = repetitions === 1 ? 1 : repetitions === 2 ? 3 : Math.max(4, Math.round(intervalDays * ease));
    ease = Math.min(2.8, ease + 0.05);
  } else if (credit >= 0.5) {
    repetitions = Math.max(1, repetitions);
    intervalDays = 1;
    ease = Math.max(1.3, ease - 0.1);
  } else {
    repetitions = 0;
    intervalDays = 0;
    ease = Math.max(1.3, ease - 0.2);
  }
  if (confidence === 1) {
    intervalDays = Math.min(intervalDays, 1);
    ease = Math.max(1.3, ease - 0.05);
  } else if (confidence === 3 && credit >= 0.99) {
    intervalDays = Math.max(intervalDays, repetitions === 1 ? 2 : Math.round(intervalDays * 1.25));
    ease = Math.min(2.8, ease + 0.03);
  } else if (confidence === 3 && credit < 0.99) {
    ease = Math.max(1.3, ease - 0.1);
  }
  const dueAt = new Date(now);
  dueAt.setDate(dueAt.getDate() + intervalDays);
  return { repetitions, intervalDays, ease, dueAt: dueAt.toISOString() };
}
