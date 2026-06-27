import { CefrLevel, LanguageCode, LanguageProgressCell } from './domain';

export type LanguageProgressSource = {
  tags: string[];
  answered: number;
  score: number;
};

const cefrOrder: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export function summarizeLanguageProgress(rows: LanguageProgressSource[]): LanguageProgressCell[] {
  const byCell = new Map<string, { language: LanguageCode; level: CefrLevel; answered: number; score: number }>();
  for (const row of rows) {
    const language = row.tags.find((tag) => tag.startsWith('lang:'))?.slice(5);
    const level = row.tags.find((tag) => tag.startsWith('cefr:'))?.slice(5);
    if (!isLanguageCode(language) || !isCefrLevel(level)) continue;
    const key = `${language}:${level}`;
    const current = byCell.get(key) ?? { language, level, answered: 0, score: 0 };
    current.answered += row.answered;
    current.score += row.score;
    byCell.set(key, current);
  }
  return [...byCell.values()]
    .map((cell) => ({ ...cell, accuracy: cell.answered ? Math.round((cell.score / cell.answered) * 100) : 0 }))
    .sort((a, b) => a.language.localeCompare(b.language) || cefrOrder.indexOf(a.level) - cefrOrder.indexOf(b.level));
}

function isLanguageCode(value: string | undefined): value is LanguageCode {
  return value === 'es' || value === 'de' || value === 'it';
}

function isCefrLevel(value: string | undefined): value is CefrLevel {
  return value === 'A1' || value === 'A2' || value === 'B1' || value === 'B2' || value === 'C1';
}
