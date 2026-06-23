import { CefrLevel, LanguageCode, QuestionSeed } from './domain';

type Lexeme = [level: CefrLevel, target: string, french: string, distractors: [string, string, string]];

const LEVEL_DIFFICULTY: Record<CefrLevel, 1 | 2 | 3> = { A1: 1, A2: 1, B1: 2, B2: 2, C1: 3 };

function buildLexicon(language: LanguageCode, languageName: string, lexemes: Lexeme[]): QuestionSeed[] {
  return lexemes.flatMap(([level, target, french, distractors], index) => {
    const rank = index + 1;
    const tags = [`lang:${language}`, `cefr:${level}`, `frequency-rank:${String(rank).padStart(4, '0')}`, 'frequency:core'];
    return [
      {
        id: `lex-${language}-${String(rank).padStart(4, '0')}-recognition`,
        topicId: 'language', difficulty: LEVEL_DIFFICULTY[level],
        prompt: `Que signifie « ${target} » en français ?`,
        choices: [french, ...distractors] as [string, string, string, string], answerIndex: 0,
        explanation: `« ${target} » signifie « ${french} ». Ce lemme appartient au noyau fréquentiel ${level}.`,
        tags: [...tags, 'skill:vocabulary', 'mode:recognition'], sourceLabel: 'Lexique fréquentiel progressif Kizz',
      },
      {
        id: `lex-${language}-${String(rank).padStart(4, '0')}-recall`,
        topicId: 'language', difficulty: LEVEL_DIFFICULTY[level], type: 'free-text' as const,
        prompt: `Écris « ${french} » en ${languageName}.`, acceptedAnswers: [target],
        explanation: `La forme attendue est « ${target} ». Le rappel écrit est plus exigeant que la simple reconnaissance.`,
        tags: [...tags, 'skill:writing', 'mode:recall'], sourceLabel: 'Lexique fréquentiel progressif Kizz',
      },
    ];
  });
}

const spanish: Lexeme[] = [
  ['A1', 'ser', 'être', ['avoir', 'faire', 'aller']], ['A1', 'tener', 'avoir', ['être', 'venir', 'voir']], ['A1', 'hacer', 'faire', ['dire', 'savoir', 'prendre']],
  ['A2', 'llegar', 'arriver', ['partir', 'rester', 'attendre']], ['A2', 'buscar', 'chercher', ['trouver', 'oublier', 'porter']], ['A2', 'volver', 'revenir', ['sortir', 'tomber', 'ouvrir']],
  ['B1', 'lograr', 'réussir à', ['renoncer à', 'éviter', 'remplacer']], ['B1', 'aunque', 'bien que', ['parce que', 'donc', 'pendant']], ['B1', 'entorno', 'environnement', ['entretien', 'entrée', 'distance']],
  ['B2', 'plantear', 'soulever une question', ['cacher un fait', 'terminer', 'mesurer']], ['B2', 'ámbito', 'domaine', ['preuve', 'rythme', 'frontière']], ['B2', 'llevar a cabo', 'mener à bien', ['laisser tomber', 'mettre en doute', 'faire semblant']],
  ['C1', 'mermar', 'amoindrir', ['accroître', 'consolider', 'révéler']], ['C1', 'hincapié', 'insistance', ['indifférence', 'hasard', 'désaccord']], ['C1', 'enmarañado', 'enchevêtré', ['limpide', 'éphémère', 'immobile']],
];

const german: Lexeme[] = [
  ['A1', 'sein', 'être', ['avoir', 'venir', 'rester']], ['A1', 'haben', 'avoir', ['faire', 'dire', 'aller']], ['A1', 'machen', 'faire', ['voir', 'boire', 'dormir']],
  ['A2', 'brauchen', 'avoir besoin de', ['se souvenir de', 'avoir peur de', 'rêver de']], ['A2', 'warten', 'attendre', ['choisir', 'répondre', 'commencer']], ['A2', 'erklären', 'expliquer', ['oublier', 'fermer', 'vendre']],
  ['B1', 'trotzdem', 'pourtant', ['ensuite', 'autrefois', 'presque']], ['B1', 'Erfahrung', 'expérience', ['permission', 'direction', 'habitude']], ['B1', 'vermeiden', 'éviter', ['autoriser', 'augmenter', 'découvrir']],
  ['B2', 'Zusammenhang', 'lien / contexte', ['rupture', 'jugement', 'quantité']], ['B2', 'berücksichtigen', 'prendre en compte', ['mettre de côté', 'contredire', 'résumer']], ['B2', 'nachweisen', 'démontrer', ['supposer', 'dissimuler', 'interrompre']],
  ['C1', 'unerlässlich', 'indispensable', ['facultatif', 'incertain', 'provisoire']], ['C1', 'veranschaulichen', 'illustrer clairement', ['rendre confus', 'minimiser', 'désapprouver']], ['C1', 'Zwiespalt', 'dilemme intérieur', ['accord unanime', 'routine', 'soulagement']],
];

const italian: Lexeme[] = [
  ['A1', 'essere', 'être', ['avoir', 'faire', 'venir']], ['A1', 'avere', 'avoir', ['aller', 'dire', 'voir']], ['A1', 'fare', 'faire', ['prendre', 'savoir', 'rester']],
  ['A2', 'trovare', 'trouver', ['perdre', 'attendre', 'apporter']], ['A2', 'scegliere', 'choisir', ['refuser', 'payer', 'fermer']], ['A2', 'succedere', 'arriver / se produire', ['décider', 'terminer', 'voyager']],
  ['B1', 'invece', 'en revanche', ['de plus', 'autrefois', 'peut-être']], ['B1', 'raggiungere', 'atteindre', ['abandonner', 'cacher', 'réduire']], ['B1', 'svolgere', 'effectuer', ['interdire', 'oublier', 'renverser']],
  ['B2', 'affrontare', 'faire face à', ['éviter', 'ignorer', 'reporter']], ['B2', 'consapevole', 'conscient', ['inquiet', 'imprécis', 'solitaire']], ['B2', 'nonostante', 'malgré', ['grâce à', 'avant', 'sauf']],
  ['C1', 'avvalersi', 'se prévaloir / recourir à', ['se passer de', 'renoncer à', 'se plaindre de']], ['C1', 'lungimirante', 'clairvoyant', ['imprudent', 'hésitant', 'éphémère']], ['C1', 'sfaccettatura', 'facette / nuance', ['certitude', 'obstacle', 'résumé']],
];

export const frequencyLanguageQuestions: QuestionSeed[] = [
  ...buildLexicon('es', 'espagnol', spanish),
  ...buildLexicon('de', 'allemand', german),
  ...buildLexicon('it', 'italien', italian),
];
