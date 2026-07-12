import { CefrLevel, LanguageCode, QuestionSeed } from './domain';

type CourseCard = {
  language: LanguageCode;
  level: CefrLevel;
  id: string;
  prompt: string;
  choices: [string, string, string, string];
  answerIndex: number;
  explanation: string;
  tags: string[];
};

type PracticeCard = {
  language: LanguageCode;
  level: CefrLevel;
  id: string;
  prompt: string;
  acceptedAnswers: string[];
  explanation: string;
  tags: string[];
};

const LEVEL_DIFFICULTY: Record<CefrLevel, 1 | 2 | 3> = { A1: 1, A2: 1, B1: 2, B2: 2, C1: 3 };

function acceptedCourseAnswers(values: string[]) {
  return [...new Set(values.flatMap((value) => {
    const plain = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return [value.toLowerCase(), plain, plain.replace(/-/g, ' '), plain.replace(/\s+/g, ' '), ...(plain.includes(' ') ? [`${plain}.`] : [])];
  }).filter((value) => value.trim().length > 0))];
}

function course(card: CourseCard): QuestionSeed {
  return {
    id: `course-${card.language}-${card.level.toLowerCase()}-${card.id}`,
    topicId: 'language',
    difficulty: LEVEL_DIFFICULTY[card.level],
    prompt: card.prompt,
    choices: card.choices,
    answerIndex: card.answerIndex,
    explanation: card.explanation.length < 38 ? `${card.explanation} Le point vise un automatisme simple du niveau ${card.level}.` : card.explanation,
    tags: [`lang:${card.language}`, `cefr:${card.level}`, 'skill:lesson', 'course:mini', 'course:grammar', ...card.tags],
    sourceLabel: 'Cours langues Kizz',
  };
}

function practice(card: PracticeCard): QuestionSeed {
  return {
    id: `practice-${card.language}-${card.level.toLowerCase()}-${card.id}`,
    topicId: 'language',
    difficulty: LEVEL_DIFFICULTY[card.level],
    type: 'free-text',
    interactionType: 'text',
    prompt: card.prompt,
    acceptedAnswers: acceptedCourseAnswers(card.acceptedAnswers),
    explanation: card.explanation.length < 38 ? `${card.explanation} La pratique sert a fixer la forme attendue sans QCM.` : card.explanation,
    tags: [`lang:${card.language}`, `cefr:${card.level}`, 'skill:lesson', 'skill:writing', 'course:mini', 'course:practice', ...card.tags],
    sourceLabel: 'Cours langues Kizz',
  };
}

const spanish: CourseCard[] = [
  {
    language: 'es', level: 'A1', id: 'ser-estar-01',
    prompt: 'Espagnol A1: dans "Soy francés", pourquoi utilise-t-on "ser" ?',
    choices: ['Identité stable', 'Position temporaire', 'Action en cours', 'Possession'],
    answerIndex: 0,
    explanation: 'Ser sert notamment à parler d’identité, d’origine, de profession ou de caractéristique durable.',
    tags: ['grammar:ser-estar', 'conjugation:ser'],
  },
  {
    language: 'es', level: 'A1', id: 'present-ar-01',
    prompt: 'Complète la règle: au présent, "hablar" avec "yo" devient...',
    choices: ['hablo', 'hablas', 'habla', 'hablan'],
    answerIndex: 0,
    explanation: 'Les verbes réguliers en -ar prennent -o avec yo: hablo, je parle.',
    tags: ['grammar:present', 'conjugation:ar'],
  },
  {
    language: 'es', level: 'A2', id: 'preterito-01',
    prompt: 'Dans "Ayer comí tarde", quel temps porte "comí" ?',
    choices: ['Présent', 'Futur proche', 'Prétérit', 'Imparfait'],
    answerIndex: 2,
    explanation: 'Le prétérit sert souvent à raconter une action ponctuelle et terminée dans le passé.',
    tags: ['grammar:preterite', 'conjugation:past'],
  },
  {
    language: 'es', level: 'B1', id: 'subjunctive-01',
    prompt: 'Après "quiero que...", quel mode est normalement attendu en espagnol ?',
    choices: ['Indicatif', 'Subjonctif', 'Impératif', 'Gérondif'],
    answerIndex: 1,
    explanation: 'Le souhait, la volonté ou le doute déclenchent souvent le subjonctif: quiero que vengas.',
    tags: ['grammar:subjunctive', 'conjugation:subjunctive'],
  },
  {
    language: 'es', level: 'B2', id: 'connectors-01',
    prompt: 'Quel connecteur espagnol introduit une opposition proche de "cependant" ?',
    choices: ['sin embargo', 'por lo tanto', 'además', 'ya que'],
    answerIndex: 0,
    explanation: 'Sin embargo permet d’opposer deux idées et rend l’expression plus structurée.',
    tags: ['grammar:connectors', 'writing:argument'],
  },
  {
    language: 'es', level: 'C1', id: 'concession-01',
    prompt: 'Dans "por muy difícil que sea", pourquoi emploie-t-on "sea" ?',
    choices: ['Futur certain', 'Subjonctif de concession', 'Ordre direct', 'Passé terminé'],
    answerIndex: 1,
    explanation: 'La tournure concessive "por muy... que" appelle fréquemment le subjonctif.',
    tags: ['grammar:concession', 'conjugation:subjunctive'],
  },
];

const italian: CourseCard[] = [
  {
    language: 'it', level: 'A1', id: 'essere-avere-01',
    prompt: 'Italien A1: "sono francese" utilise quel verbe ?',
    choices: ['essere', 'avere', 'fare', 'andare'],
    answerIndex: 0,
    explanation: 'Essere sert à exprimer l’identité, la nationalité, l’état ou la localisation.',
    tags: ['grammar:essere-avere', 'conjugation:essere'],
  },
  {
    language: 'it', level: 'A1', id: 'present-are-01',
    prompt: 'Au présent, "parlare" avec "io" devient...',
    choices: ['parlo', 'parli', 'parla', 'parlano'],
    answerIndex: 0,
    explanation: 'Les verbes réguliers en -are prennent -o avec io: parlo, je parle.',
    tags: ['grammar:present', 'conjugation:are'],
  },
  {
    language: 'it', level: 'A2', id: 'passato-prossimo-01',
    prompt: 'Dans "sono andato", quel auxiliaire porte le passato prossimo ?',
    choices: ['essere', 'avere', 'fare', 'stare'],
    answerIndex: 0,
    explanation: 'Les verbes de mouvement comme andare utilisent souvent essere au passato prossimo.',
    tags: ['grammar:passato-prossimo', 'conjugation:past'],
  },
  {
    language: 'it', level: 'B1', id: 'pronouns-01',
    prompt: 'Dans "lo vedo", que remplace "lo" ?',
    choices: ['Un complément masculin singulier', 'Un sujet féminin', 'Une négation', 'Un lieu'],
    answerIndex: 0,
    explanation: 'Lo est un pronom complément direct masculin singulier: je le vois.',
    tags: ['grammar:pronouns', 'syntax:object'],
  },
  {
    language: 'it', level: 'B2', id: 'congiuntivo-01',
    prompt: 'Après "penso che", l’italien soigné emploie souvent...',
    choices: ['Le subjonctif', 'L’impératif', 'Le futur simple obligatoire', 'Le passé simple'],
    answerIndex: 0,
    explanation: 'Penso che lui abbia ragione: le congiuntivo rend l’énoncé moins catégorique.',
    tags: ['grammar:subjunctive', 'conjugation:congiuntivo'],
  },
  {
    language: 'it', level: 'C1', id: 'periodo-ipotetico-01',
    prompt: 'Dans "se l’avessi saputo, sarei rimasto", quelle structure reconnaît-on ?',
    choices: ['Hypothèse irréelle passée', 'Habitude présente', 'Ordre poli', 'Futur proche'],
    answerIndex: 0,
    explanation: 'Cette structure exprime un regret ou une condition non réalisée dans le passé.',
    tags: ['grammar:condition', 'conjugation:conditional'],
  },
];

const german: CourseCard[] = [
  {
    language: 'de', level: 'A1', id: 'sein-01',
    prompt: 'Allemand A1 : dans "Ich bin müde", quel verbe est utilisé ?',
    choices: ['sein', 'haben', 'werden', 'machen'],
    answerIndex: 0,
    explanation: 'Sein signifie être. Au présent : ich bin, du bist, er/sie/es ist.',
    tags: ['grammar:sein', 'conjugation:sein'],
  },
  {
    language: 'de', level: 'A1', id: 'verb-second-01',
    prompt: 'Allemand A1 : dans une phrase déclarative simple, où se place souvent le verbe conjugué ?',
    choices: ['En deuxième position', 'Toujours à la fin', 'Avant chaque nom', 'Jamais après le sujet'],
    answerIndex: 0,
    explanation: 'L’allemand place souvent le verbe conjugué en deuxième position : Heute lerne ich.',
    tags: ['grammar:syntax', 'syntax:v2'],
  },
  {
    language: 'de', level: 'A2', id: 'accusative-01',
    prompt: 'Allemand A2 : dans "Ich sehe den Mann", pourquoi dit-on "den" ?',
    choices: ['Accusatif masculin', 'Datif pluriel', 'Génitif féminin', 'Nominatif neutre'],
    answerIndex: 0,
    explanation: 'Mann est masculin et complément direct : der devient den à l’accusatif.',
    tags: ['grammar:case', 'case:accusative'],
  },
  {
    language: 'de', level: 'B1', id: 'perfect-01',
    prompt: 'Allemand B1 : dans "Ich habe gelernt", quel temps est formé ?',
    choices: ['Parfait', 'Futur', 'Subjonctif II', 'Impératif'],
    answerIndex: 0,
    explanation: 'Le parfait courant se forme avec haben ou sein + participe passé.',
    tags: ['grammar:perfect', 'conjugation:past'],
  },
  {
    language: 'de', level: 'B2', id: 'subordinate-01',
    prompt: 'Allemand B2 : après "weil", où va le verbe conjugué ?',
    choices: ['À la fin de la subordonnée', 'Toujours en première position', 'Juste après le sujet', 'Il disparaît'],
    answerIndex: 0,
    explanation: 'Dans une subordonnée introduite par weil, le verbe conjugué se place à la fin.',
    tags: ['grammar:subordinate', 'syntax:verb-final'],
  },
  {
    language: 'de', level: 'C1', id: 'nominalization-01',
    prompt: 'Allemand C1 : que permet souvent la nominalisation dans un texte argumentatif ?',
    choices: ['Densifier l’information', 'Supprimer les articles', 'Éviter tous les verbes conjugués', 'Transformer les noms en adjectifs'],
    answerIndex: 0,
    explanation: 'La nominalisation condense des idées complexes, mais doit rester lisible.',
    tags: ['grammar:nominalization', 'writing:argument'],
  },
];

const spanishExtra: CourseCard[] = [
  {
    language: 'es', level: 'A2', id: 'por-para-01',
    prompt: 'Espagnol A2 : dans "Trabajo para aprender", pourquoi utilise-t-on "para" ?',
    choices: ['But', 'Cause passée', 'Prix', 'Durée approximative'],
    answerIndex: 0,
    explanation: 'Para introduit souvent un but : je travaille pour apprendre.',
    tags: ['grammar:por-para', 'preposition:para'],
  },
  {
    language: 'es', level: 'B1', id: 'object-pronoun-01',
    prompt: 'Espagnol B1 : dans "Lo conozco", que remplace "lo" ?',
    choices: ['Un complément masculin singulier', 'Un sujet pluriel', 'Une heure', 'Un lieu'],
    answerIndex: 0,
    explanation: 'Lo est un pronom complément direct masculin singulier.',
    tags: ['grammar:pronouns', 'syntax:object'],
  },
  {
    language: 'es', level: 'B2', id: 'reported-speech-01',
    prompt: 'Espagnol B2 : dans un récit au passé, que devient souvent "mañana" au discours indirect ?',
    choices: ['Al día siguiente', 'Ayer', 'Ahora', 'Todavía'],
    answerIndex: 0,
    explanation: 'Le repère temporel se décale : mañana devient souvent al día siguiente.',
    tags: ['grammar:reported-speech', 'writing:narration'],
  },
  {
    language: 'es', level: 'C1', id: 'register-01',
    prompt: 'Espagnol C1 : quel choix convient le mieux dans un registre soutenu pour nuancer une affirmation ?',
    choices: ['Cabe matizar que...', 'O sea, bueno...', 'Mira que...', 'Venga ya...'],
    answerIndex: 0,
    explanation: 'Cabe matizar que introduit une nuance avec un registre formel et argumentatif.',
    tags: ['grammar:register', 'writing:argument'],
  },
];

const italianExtra: CourseCard[] = [
  {
    language: 'it', level: 'A2', id: 'articles-01',
    prompt: 'Italien A2 : quel article défini convient devant "studente" au masculin singulier ?',
    choices: ['lo', 'il', 'la', 'gli'],
    answerIndex: 0,
    explanation: 'On emploie lo devant certains groupes initiaux comme s + consonne : lo studente.',
    tags: ['grammar:articles', 'article:definite'],
  },
  {
    language: 'it', level: 'B1', id: 'ci-01',
    prompt: 'Italien B1 : dans "Ci vado domani", que peut remplacer "ci" ?',
    choices: ['Un lieu déjà mentionné', 'Une personne masculine', 'Une négation', 'Un adjectif'],
    answerIndex: 0,
    explanation: 'Ci peut reprendre un lieu : j’y vais demain.',
    tags: ['grammar:pronouns', 'syntax:place'],
  },
  {
    language: 'it', level: 'B2', id: 'ne-01',
    prompt: 'Italien B2 : dans "Ne ho comprati due", que reprend "ne" ?',
    choices: ['Une quantité de quelque chose', 'Le sujet', 'Un ordre', 'Une date'],
    answerIndex: 0,
    explanation: 'Ne reprend une quantité ou une partie d’un ensemble déjà mentionné.',
    tags: ['grammar:pronouns', 'syntax:quantity'],
  },
  {
    language: 'it', level: 'C1', id: 'register-01',
    prompt: 'Italien C1 : quelle tournure introduit une réserve dans un texte argumentatif ?',
    choices: ['Va tuttavia precisato che...', 'Dai, allora...', 'Mica male...', 'Boh, forse...'],
    answerIndex: 0,
    explanation: 'Va tuttavia precisato che est une formule soutenue pour ajouter une précision ou une réserve.',
    tags: ['grammar:register', 'writing:argument'],
  },
];

const spanishPractice: PracticeCard[] = [
  { language: 'es', level: 'A1', id: 'hablar-yo-present', prompt: 'Espagnol A1 : conjugue "hablar" au present avec "yo".', acceptedAnswers: ['hablo'], explanation: 'Au present, les verbes reguliers en -ar prennent -o avec yo : yo hablo.', tags: ['conjugation:practice', 'grammar:present'] },
  { language: 'es', level: 'A1', id: 'ser-nosotros-present', prompt: 'Espagnol A1 : conjugue "ser" au present avec "nosotros".', acceptedAnswers: ['somos'], explanation: 'Ser est irregulier : soy, eres, es, somos, sois, son.', tags: ['conjugation:practice', 'conjugation:ser'] },
  { language: 'es', level: 'A2', id: 'tener-tu-present', prompt: 'Espagnol A2 : conjugue "tener" au present avec "tu".', acceptedAnswers: ['tienes'], explanation: 'Tener devient tienes avec tu : tu tienes.', tags: ['conjugation:practice', 'conjugation:tener'] },
  { language: 'es', level: 'B1', id: 'ir-nosotros-preterite', prompt: 'Espagnol B1 : conjugue "ir" au preterit avec "nosotros".', acceptedAnswers: ['fuimos'], explanation: 'Au preterit, ir et ser partagent la forme fuimos avec nosotros.', tags: ['conjugation:practice', 'grammar:preterite'] },
  { language: 'es', level: 'B2', id: 'venir-subjunctive-tu', prompt: 'Espagnol B2 : complete "Espero que tu ___." avec venir au subjonctif present.', acceptedAnswers: ['vengas'], explanation: 'Apres un souhait comme espero que, on emploie souvent le subjonctif : que tu vengas.', tags: ['conjugation:practice', 'grammar:subjunctive'] },
  { language: 'es', level: 'C1', id: 'matizar-register', prompt: 'Espagnol C1 : complète "___ matizar que el resultado no es definitivo." avec le verbe impersonnel attendu.', acceptedAnswers: ['cabe'], explanation: 'Cabe matizar que est une tournure formelle pour introduire une nuance.', tags: ['conjugation:practice', 'writing:argument'] },
];

const italianPractice: PracticeCard[] = [
  { language: 'it', level: 'A1', id: 'parlare-io-present', prompt: 'Italien A1 : conjugue "parlare" au present avec "io".', acceptedAnswers: ['parlo'], explanation: 'Au present, les verbes reguliers en -are prennent -o avec io : io parlo.', tags: ['conjugation:practice', 'grammar:present'] },
  { language: 'it', level: 'A1', id: 'essere-noi-present', prompt: 'Italien A1 : conjugue "essere" au present avec "noi".', acceptedAnswers: ['siamo'], explanation: 'Essere est irregulier : sono, sei, e, siamo, siete, sono.', tags: ['conjugation:practice', 'conjugation:essere'] },
  { language: 'it', level: 'A2', id: 'avere-tu-present', prompt: 'Italien A2 : conjugue "avere" au present avec "tu".', acceptedAnswers: ['hai'], explanation: 'Avere donne tu hai.', tags: ['conjugation:practice', 'conjugation:avere'] },
  { language: 'it', level: 'B1', id: 'andare-passato-io', prompt: 'Italien B1 : complete "Ieri io ___ al mercato." avec andare au passato prossimo.', acceptedAnswers: ['sono andato', 'sono andata'], explanation: 'Andare utilise essere au passato prossimo : sono andato / sono andata selon le locuteur.', tags: ['conjugation:practice', 'grammar:passato-prossimo'] },
  { language: 'it', level: 'B2', id: 'avere-congiuntivo-lui', prompt: 'Italien B2 : complete "Penso che lui ___ ragione." avec avere au congiuntivo presente.', acceptedAnswers: ['abbia'], explanation: 'Apres penso che, l italien soigne emploie souvent le congiuntivo : lui abbia.', tags: ['conjugation:practice', 'grammar:congiuntivo'] },
  { language: 'it', level: 'C1', id: 'precisare-register', prompt: 'Italien C1 : complète "Va tuttavia ___ che il dato resta provvisorio." avec precisare.', acceptedAnswers: ['precisato'], explanation: 'Va tuttavia precisato che introduit une réserve dans un registre formel.', tags: ['conjugation:practice', 'writing:argument'] },
];

const germanPractice: PracticeCard[] = [
  { language: 'de', level: 'A1', id: 'sein-ich-present', prompt: 'Allemand A1 : conjugue "sein" au présent avec "ich".', acceptedAnswers: ['bin'], explanation: 'Sein est irrégulier : ich bin.', tags: ['conjugation:practice', 'conjugation:sein'] },
  { language: 'de', level: 'A1', id: 'haben-du-present', prompt: 'Allemand A1 : conjugue "haben" au présent avec "du".', acceptedAnswers: ['hast'], explanation: 'Haben donne du hast à la deuxième personne du singulier.', tags: ['conjugation:practice', 'conjugation:haben'] },
  { language: 'de', level: 'A2', id: 'sehen-accusative', prompt: 'Allemand A2 : complète "Ich sehe ___ Hund." avec l’article correct.', acceptedAnswers: ['den'], explanation: 'Hund est masculin et COD : der devient den.', tags: ['conjugation:practice', 'case:accusative'] },
  { language: 'de', level: 'B1', id: 'lernen-perfect', prompt: 'Allemand B1 : complète "Ich ___ Deutsch gelernt." avec l’auxiliaire.', acceptedAnswers: ['habe'], explanation: 'Le parfait de lernen se forme avec haben : ich habe gelernt.', tags: ['conjugation:practice', 'grammar:perfect'] },
  { language: 'de', level: 'B2', id: 'weil-final-verb', prompt: 'Allemand B2 : complète "..., weil ich keine Zeit ___." avec haben.', acceptedAnswers: ['habe'], explanation: 'Avec weil, le verbe conjugué se place en fin de subordonnée.', tags: ['conjugation:practice', 'syntax:verb-final'] },
  { language: 'de', level: 'C1', id: 'konjunktiv-wissen', prompt: 'Allemand C1 : complète "Wenn ich das ___, ..." avec wissen au Konjunktiv II.', acceptedAnswers: ['wüsste', 'wuesste'], explanation: 'Wüsste exprime ici une hypothèse irréelle.', tags: ['conjugation:practice', 'grammar:konjunktiv-ii'] },
];

export const languageCourseQuestions: QuestionSeed[] = [
  ...spanish.map(course),
  ...spanishExtra.map(course),
  ...german.map(course),
  ...italian.map(course),
  ...italianExtra.map(course),
  ...spanishPractice.map(practice),
  ...germanPractice.map(practice),
  ...italianPractice.map(practice),
];
