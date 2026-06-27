import * as DocumentPicker from 'expo-document-picker';
import { File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { ImportReport, QUIZ_PACK_FORMAT, QuizPack } from './domain';
import { exportQuestionReports, exportQuizPack, importQuizPack } from './database';
import { CsvQuizPackDraft, parseCsvQuizPack } from './csvQuizPack';

const MAX_PACK_BYTES = 50 * 1024 * 1024;

function text(value: unknown, field: string, allowEmpty = false): string {
  if (typeof value !== 'string' || (!allowEmpty && value.trim().length === 0)) throw new Error(`Champ invalide: ${field}`);
  return value;
}

export function parseQuizPack(raw: string): QuizPack {
  let value: unknown;
  try { value = JSON.parse(raw); } catch { throw new Error('Ce fichier ne contient pas de JSON valide.'); }
  if (!value || typeof value !== 'object') throw new Error('La banque doit être un objet JSON.');
  const input = value as Record<string, unknown>;
  if (input.format !== QUIZ_PACK_FORMAT || input.version !== 1) throw new Error('Format de banque Kizz non reconnu.');
  if (!Array.isArray(input.topics) || !Array.isArray(input.questions)) throw new Error('Les listes topics et questions sont obligatoires.');
  if (input.questions.length > 100_000) throw new Error('Une banque est limitée à 100 000 questions.');

  const topics = input.topics.map((item, index) => {
    if (!item || typeof item !== 'object') throw new Error(`Thème ${index + 1} invalide.`);
    const row = item as Record<string, unknown>;
    const color = text(row.color, `topics[${index}].color`);
    if (!/^#[0-9A-Fa-f]{6}$/.test(color)) throw new Error(`Couleur invalide pour le thème ${index + 1}.`);
    return { id: text(row.id, `topics[${index}].id`), title: text(row.title, `topics[${index}].title`), subtitle: text(row.subtitle, `topics[${index}].subtitle`, true), icon: text(row.icon, `topics[${index}].icon`), color };
  });
  const topicIds = new Set(topics.map((topic) => topic.id));
  if (topicIds.size !== topics.length) throw new Error('Deux thèmes utilisent le même identifiant.');

  const questions = input.questions.map((item, index) => {
    if (!item || typeof item !== 'object') throw new Error(`Question ${index + 1} invalide.`);
    const row = item as Record<string, unknown>;
    const topicId = text(row.topicId, `questions[${index}].topicId`);
    if (!topicIds.has(topicId)) throw new Error(`La question ${index + 1} référence un thème absent.`);
    const type: 'free-text' | 'multiple-choice' | 'multi-text' | 'map-point' = row.type === 'free-text' ? 'free-text' : row.type === 'multi-text' ? 'multi-text' : row.type === 'map-point' ? 'map-point' : 'multiple-choice';
    const choices = row.choices;
    const acceptedAnswers = row.acceptedAnswers;
    if (type === 'multiple-choice' && (!Array.isArray(choices) || choices.length !== 4 || choices.some((choice) => typeof choice !== 'string' || !choice.trim()))) throw new Error(`La question ${index + 1} doit avoir exactement 4 choix.`);
    if (type === 'multiple-choice' && (!Number.isInteger(row.answerIndex) || Number(row.answerIndex) < 0 || Number(row.answerIndex) > 3)) throw new Error(`Réponse invalide pour la question ${index + 1}.`);
    if (type === 'free-text' && (!Array.isArray(acceptedAnswers) || acceptedAnswers.length === 0 || acceptedAnswers.some((answer) => typeof answer !== 'string' || !answer.trim()))) throw new Error(`La question libre ${index + 1} doit avoir au moins une réponse acceptée.`);
    const answerFields = row.answerFields;
    if (type === 'multi-text' && (!Array.isArray(answerFields) || answerFields.length < 2 || answerFields.some((field) => !field || typeof field !== 'object' || typeof (field as Record<string, unknown>).id !== 'string' || typeof (field as Record<string, unknown>).label !== 'string' || !Array.isArray((field as Record<string, unknown>).acceptedAnswers)))) throw new Error(`La question multi-champs ${index + 1} doit avoir au moins deux champs valides.`);
    const geoTarget = row.geoTarget as Record<string, unknown> | undefined;
    if (type === 'map-point' && (!geoTarget || typeof geoTarget.label !== 'string' || typeof geoTarget.lat !== 'number' || typeof geoTarget.lon !== 'number' || typeof geoTarget.toleranceKm !== 'number' || geoTarget.lat < -90 || geoTarget.lat > 90 || geoTarget.lon < -180 || geoTarget.lon > 180 || geoTarget.toleranceKm <= 0)) throw new Error(`La question carte ${index + 1} doit avoir une cible géographique valide.`);
    if (![1, 2, 3].includes(Number(row.difficulty))) throw new Error(`Difficulté invalide pour la question ${index + 1}.`);
    if (!Array.isArray(row.tags) || row.tags.some((tag) => typeof tag !== 'string')) throw new Error(`Tags invalides pour la question ${index + 1}.`);
    return {
      id: text(row.id, `questions[${index}].id`), topicId, difficulty: Number(row.difficulty) as 1 | 2 | 3,
      prompt: text(row.prompt, `questions[${index}].prompt`), type,
      choices: type === 'multiple-choice' ? choices as [string, string, string, string] : undefined,
      answerIndex: type === 'multiple-choice' ? Number(row.answerIndex) : undefined,
      acceptedAnswers: type === 'free-text' ? acceptedAnswers as string[] : undefined,
      answerFields: type === 'multi-text' ? answerFields as Array<{ id: string; label: string; acceptedAnswers: string[] }> : undefined,
      geoTarget: type === 'map-point' ? geoTarget as { label: string; lat: number; lon: number; toleranceKm: number } : undefined,
      interactionType: type === 'map-point' ? 'map-point' as const : undefined,
      promptBlocks: Array.isArray(row.promptBlocks) ? row.promptBlocks as Array<{ type: 'text' | 'image' | 'map'; value: string }> : undefined,
      answerSchema: row.answerSchema && typeof row.answerSchema === 'object' ? row.answerSchema as Record<string, unknown> : undefined,
      explanation: text(row.explanation, `questions[${index}].explanation`),
      tags: row.tags as string[], sourceLabel: text(row.sourceLabel, `questions[${index}].sourceLabel`),
      sourceUrl: typeof row.sourceUrl === 'string' ? row.sourceUrl : undefined,
      imageUrl: typeof row.imageUrl === 'string' ? row.imageUrl : undefined,
      imageAsset: typeof row.imageAsset === 'string' ? row.imageAsset : undefined,
      imageAlt: typeof row.imageAlt === 'string' ? row.imageAlt : undefined,
      learnMoreUrl: typeof row.learnMoreUrl === 'string' ? row.learnMoreUrl : undefined,
    };
  });
  if (new Set(questions.map((question) => question.id)).size !== questions.length) throw new Error('Deux questions utilisent le même identifiant.');

  return {
    format: QUIZ_PACK_FORMAT, version: 1, id: text(input.id, 'id'), name: text(input.name, 'name'),
    description: typeof input.description === 'string' ? input.description : undefined,
    language: text(input.language, 'language'), exportedAt: typeof input.exportedAt === 'string' ? input.exportedAt : undefined,
    topics, questions,
  };
}

export async function pickAndImportQuizPack(): Promise<ImportReport | null> {
  const result = await DocumentPicker.getDocumentAsync({ type: 'application/json', copyToCacheDirectory: true, multiple: false });
  if (result.canceled) return null;
  const asset = result.assets[0];
  if (asset.size && asset.size > MAX_PACK_BYTES) throw new Error('Le fichier dépasse la limite de 50 Mo.');
  const file = new File(asset.uri);
  return importQuizPack(parseQuizPack(await file.text()));
}

export async function pickCsvQuizPackDraft(): Promise<CsvQuizPackDraft | null> {
  const result = await DocumentPicker.getDocumentAsync({ type: ['text/csv', 'text/comma-separated-values', 'application/vnd.ms-excel'], copyToCacheDirectory: true, multiple: false });
  if (result.canceled) return null;
  const asset = result.assets[0];
  if (asset.size && asset.size > MAX_PACK_BYTES) throw new Error('Le fichier dÃ©passe la limite de 50 Mo.');
  const file = new File(asset.uri);
  return parseCsvQuizPack(await file.text(), asset.name ?? 'import.csv');
}

export async function importCsvQuizPackDraft(draft: CsvQuizPackDraft): Promise<ImportReport> {
  return importQuizPack(draft.pack);
}

export async function createAndShareQuizPack(): Promise<string> {
  const pack = await exportQuizPack();
  const stamp = new Date().toISOString().slice(0, 10);
  const file = new File(Paths.cache, `kizz-bank-${stamp}.json`);
  file.create({ overwrite: true });
  file.write(JSON.stringify(pack, null, 2));
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(file.uri, { mimeType: 'application/json', dialogTitle: 'Exporter ma banque Kizz', UTI: 'public.json' });
  }
  return file.uri;
}

export async function createAndShareQuestionReports(): Promise<string> {
  const report = await exportQuestionReports();
  const stamp = new Date().toISOString().slice(0, 10);
  const file = new File(Paths.cache, `kizz-question-reports-${stamp}.json`);
  file.create({ overwrite: true });
  file.write(JSON.stringify(report, null, 2));
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(file.uri, { mimeType: 'application/json', dialogTitle: 'Exporter les signalements Kizz', UTI: 'public.json' });
  }
  return file.uri;
}
