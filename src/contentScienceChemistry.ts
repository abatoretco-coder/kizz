import { QuestionSeed } from './domain';

type ElementRow = {
  symbol: string;
  name: string;
  atomicNumber: number;
  family: string;
  clue: string;
};

const elements: ElementRow[] = [
  { symbol: 'H', name: 'hydrogène', atomicNumber: 1, family: 'non-métal', clue: 'l’élément le plus léger et le plus abondant de l’Univers observable' },
  { symbol: 'He', name: 'hélium', atomicNumber: 2, family: 'gaz noble', clue: 'un gaz noble utilisé dans les ballons et la cryogénie' },
  { symbol: 'Li', name: 'lithium', atomicNumber: 3, family: 'métal alcalin', clue: 'un alcalin très utilisé dans les batteries rechargeables' },
  { symbol: 'C', name: 'carbone', atomicNumber: 6, family: 'non-métal', clue: 'la base structurale majeure de la chimie organique' },
  { symbol: 'N', name: 'azote', atomicNumber: 7, family: 'non-métal', clue: 'le principal constituant de l’atmosphère terrestre' },
  { symbol: 'O', name: 'oxygène', atomicNumber: 8, family: 'chalcogène', clue: 'l’élément indispensable à la respiration aérobie' },
  { symbol: 'F', name: 'fluor', atomicNumber: 9, family: 'halogène', clue: 'l’élément le plus électronégatif de l’échelle de Pauling' },
  { symbol: 'Ne', name: 'néon', atomicNumber: 10, family: 'gaz noble', clue: 'un gaz noble célèbre pour les enseignes lumineuses' },
  { symbol: 'Na', name: 'sodium', atomicNumber: 11, family: 'métal alcalin', clue: 'un alcalin dont l’ion Na+ est essentiel en physiologie' },
  { symbol: 'Mg', name: 'magnésium', atomicNumber: 12, family: 'métal alcalino-terreux', clue: 'un alcalino-terreux présent dans la chlorophylle' },
  { symbol: 'Al', name: 'aluminium', atomicNumber: 13, family: 'métal pauvre', clue: 'un métal léger protégé par une couche d’alumine' },
  { symbol: 'Si', name: 'silicium', atomicNumber: 14, family: 'métalloïde', clue: 'un métalloïde central pour les semi-conducteurs' },
  { symbol: 'P', name: 'phosphore', atomicNumber: 15, family: 'pnictogène', clue: 'un élément présent dans ATP, ADN et phosphates' },
  { symbol: 'S', name: 'soufre', atomicNumber: 16, family: 'chalcogène', clue: 'un chalcogène présent dans les ponts disulfure des protéines' },
  { symbol: 'Cl', name: 'chlore', atomicNumber: 17, family: 'halogène', clue: 'un halogène qui forme l’ion chlorure dans le sel de table' },
  { symbol: 'Ar', name: 'argon', atomicNumber: 18, family: 'gaz noble', clue: 'le gaz noble le plus abondant dans l’atmosphère terrestre' },
  { symbol: 'K', name: 'potassium', atomicNumber: 19, family: 'métal alcalin', clue: 'un alcalin dont l’ion K+ est crucial pour les neurones' },
  { symbol: 'Ca', name: 'calcium', atomicNumber: 20, family: 'métal alcalino-terreux', clue: 'un alcalino-terreux majeur des os et du calcaire' },
  { symbol: 'Ti', name: 'titane', atomicNumber: 22, family: 'métal de transition', clue: 'un métal de transition léger, résistant et biocompatible' },
  { symbol: 'Cr', name: 'chrome', atomicNumber: 24, family: 'métal de transition', clue: 'un métal de transition qui rend les aciers inoxydables plus résistants' },
  { symbol: 'Mn', name: 'manganèse', atomicNumber: 25, family: 'métal de transition', clue: 'un métal de transition courant dans les oxydants forts comme le permanganate' },
  { symbol: 'Fe', name: 'fer', atomicNumber: 26, family: 'métal de transition', clue: 'le métal central de l’hémoglobine' },
  { symbol: 'Co', name: 'cobalt', atomicNumber: 27, family: 'métal de transition', clue: 'un métal de transition présent dans la vitamine B12' },
  { symbol: 'Ni', name: 'nickel', atomicNumber: 28, family: 'métal de transition', clue: 'un métal utilisé dans des alliages et certaines batteries' },
  { symbol: 'Cu', name: 'cuivre', atomicNumber: 29, family: 'métal de transition', clue: 'un excellent conducteur électrique de couleur rougeâtre' },
  { symbol: 'Zn', name: 'zinc', atomicNumber: 30, family: 'métal de transition', clue: 'un métal utilisé pour galvaniser l’acier' },
  { symbol: 'Br', name: 'brome', atomicNumber: 35, family: 'halogène', clue: 'le seul non-métal liquide à température ambiante' },
  { symbol: 'Ag', name: 'argent', atomicNumber: 47, family: 'métal de transition', clue: 'le métal élémentaire le plus conducteur électriquement' },
  { symbol: 'I', name: 'iode', atomicNumber: 53, family: 'halogène', clue: 'un halogène nécessaire à la synthèse des hormones thyroïdiennes' },
  { symbol: 'W', name: 'tungstène', atomicNumber: 74, family: 'métal de transition', clue: 'le métal au point de fusion le plus élevé' },
  { symbol: 'Au', name: 'or', atomicNumber: 79, family: 'métal de transition', clue: 'un métal noble, dense et très résistant à l’oxydation' },
  { symbol: 'Hg', name: 'mercure', atomicNumber: 80, family: 'métal de transition', clue: 'un métal liquide à température ambiante' },
  { symbol: 'Pb', name: 'plomb', atomicNumber: 82, family: 'métal pauvre', clue: 'un métal dense historiquement utilisé contre les rayonnements' },
  { symbol: 'U', name: 'uranium', atomicNumber: 92, family: 'actinide', clue: 'un actinide fissile ou fertile selon l’isotope considéré' },
];

const formulas = [
  ['eau', 'H2O', '2 atomes d’hydrogène et 1 atome d’oxygène', 'molécule polaire capable de former des liaisons hydrogène'],
  ['dioxyde de carbone', 'CO2', '1 atome de carbone et 2 atomes d’oxygène', 'molécule linéaire dont le carbone est à l’état d’oxydation +IV'],
  ['ammoniac', 'NH3', '1 atome d’azote et 3 atomes d’hydrogène', 'base de Lewis avec un doublet libre sur l’azote'],
  ['méthane', 'CH4', '1 atome de carbone et 4 atomes d’hydrogène', 'alcane tétraédrique où le carbone est hybridé sp3'],
  ['acide sulfurique', 'H2SO4', '2 atomes d’hydrogène, 1 atome de soufre et 4 atomes d’oxygène', 'diacide fort pour la première acidité'],
  ['hydroxyde de sodium', 'NaOH', '1 atome de sodium, 1 atome d’oxygène et 1 atome d’hydrogène', 'base forte totalement dissociée en solution diluée'],
  ['chlorure de sodium', 'NaCl', '1 sodium et 1 chlore', 'solide ionique de structure type halite'],
  ['carbonate de calcium', 'CaCO3', '1 atome de calcium, 1 atome de carbone et 3 atomes d’oxygène', 'composé majeur du calcaire et du marbre'],
] as const;

const advancedEntries: [string, [string, string, string, string], number, string, string[]][] = [
  ['Quelle configuration électronique correspond au sodium neutre ?', ['1s2 2s2 2p6 3s1', '1s2 2s2 2p5', '1s2 2s2 2p6 3p1', '1s2 2s2 2p6 3s2'], 0, 'Le sodium Z=11 remplit les couches jusqu’au néon puis place un électron en 3s.', ['configuration-electronique']],
  ['Pourquoi le fluor est-il très réactif ?', ['Il attire fortement les électrons et complète facilement son octet', 'Il possède une couche 3d pleine', 'Il est un métal alcalin', 'Son noyau ne contient pas de protons'], 0, 'Le fluor est très électronégatif et gagne facilement un électron pour atteindre la configuration du néon.', ['electronegativite']],
  ['Quel ion forme typiquement le calcium dans un composé ionique simple ?', ['Ca2+', 'Ca+', 'Ca2-', 'Ca4+'], 0, 'Le calcium perd souvent deux électrons de valence pour former Ca2+.', ['ions']],
  ['Dans H2SO4, quel est le nombre d’oxydation du soufre ?', ['+VI, soit +6', '+IV, soit +4', '0, état neutre', '-II, soit -2'], 0, 'Avec H à +I et O à -II, on obtient 2(+1)+x+4(-2)=0, donc x=+6.', ['oxydoreduction']],
  ['Quel couple acide-base est associé à l’acide acétique ?', ['CH3COOH / CH3COO-', 'HCl / Cl2', 'NH4+ / NH2-', 'H2O / O2'], 0, 'La base conjuguée de l’acide acétique est l’ion acétate CH3COO-.', ['acide-base']],
  ['Dans une solution tampon, quel couple est nécessaire ?', ['Un acide faible et sa base conjuguée', 'Un acide fort seul', 'Un oxydant fort seul', 'Un gaz noble dissous'], 0, 'Un tampon résiste au pH grâce à un couple acide faible/base conjuguée ou inversement.', ['acide-base']],
  ['Combien de moles de H2O sont produites par combustion complète de 1 mole de CH4 ?', ['2 mol', '1 mol', '4 mol', '0,5 mol'], 0, 'L’équation CH4 + 2 O2 donne CO2 + 2 H2O : une mole de méthane produit donc deux moles d’eau.', ['stoechiometrie']],
  ['Quelle grandeur vaut n/V en solution ?', ['La concentration molaire', 'La masse molaire', 'La fraction massique', 'Le pH'], 0, 'La concentration molaire est la quantité de matière par volume, souvent exprimée en mol.L-1.', ['concentration']],
  ['Quel est le pH approximatif d’une solution de HCl à 10^-3 mol.L-1 ?', ['3', '1', '7', '11'], 0, 'HCl est un acide fort : [H3O+] vaut environ 10^-3 mol.L-1, donc pH = 3.', ['ph']],
  ['Quel précipité attend-on avec Ag+ et Cl- ?', ['AgCl', 'NaCl', 'Ag2O', 'Cl2'], 0, 'Le chlorure d’argent AgCl est peu soluble et précipite en présence de Ag+ et Cl-.', ['precipitation']],
  ['Quelle liaison domine dans NaCl solide ?', ['Ionique', 'Covalente apolaire', 'Métallique pure', 'Hydrogène uniquement'], 0, 'NaCl est un réseau d’ions Na+ et Cl- liés par interactions électrostatiques.', ['liaison-chimique']],
  ['Quelle géométrie VSEPR décrit CH4 ?', ['Tétraédrique', 'Linéaire', 'Plane trigonale', 'Coudée'], 0, 'Le carbone du méthane porte quatre doublets liants et adopte une géométrie tétraédrique.', ['vsepr']],
  ['Quelle géométrie VSEPR décrit CO2 ?', ['Linéaire', 'Coudée', 'Tétraédrique', 'Pyramidale'], 0, 'CO2 possède deux domaines électroniques autour du carbone, donc une géométrie linéaire.', ['vsepr']],
  ['Quelle interaction explique en grande partie le point d’ébullition élevé de l’eau ?', ['Liaisons hydrogène', 'Liaisons métalliques', 'Forces nucléaires', 'Interaction gravitationnelle'], 0, 'Les liaisons hydrogène entre molécules d’eau augmentent fortement la cohésion du liquide.', ['liaisons-hydrogene']],
  ['Dans une pile galvanique, où se produit l’oxydation ?', ['À l’anode', 'À la cathode', 'Dans le pont salin uniquement', 'Dans l’électrolyte seulement'], 0, 'Oxydation à l’anode, réduction à la cathode: c’est le moyen mnémotechnique classique.', ['electrochimie']],
  ['Quel élément a la plus grande électronégativité parmi ces choix ?', ['Fluor', 'Carbone', 'Sodium', 'Calcium'], 0, 'Le fluor est l’élément le plus électronégatif du tableau périodique.', ['electronegativite']],
  ['Quelle famille contient chlore, brome et iode ?', ['Halogènes', 'Gaz nobles', 'Alcalins', 'Actinides'], 0, 'Cl, Br et I appartiennent à la colonne des halogènes.', ['familles']],
  ['Quelle famille contient hélium, néon et argon ?', ['Gaz nobles', 'Halogènes', 'Alcalino-terreux', 'Lanthanides'], 0, 'He, Ne et Ar ont une couche de valence stable et sont des gaz nobles.', ['familles']],
  ['Quel élément est central dans l’hémoglobine ?', ['Fer', 'Sodium', 'Iode', 'Silicium'], 0, 'L’hémoglobine contient du fer dans son groupe hème, ce qui permet la fixation du dioxygène.', ['biochimie']],
  ['Quel élément est central dans la chlorophylle ?', ['Magnésium', 'Fer', 'Cuivre', 'Plomb'], 0, 'La chlorophylle comporte un ion magnésium au centre de son cycle porphyrinique.', ['biochimie']],
  ['Quelle loi relie absorbance et concentration en spectrophotométrie diluée ?', ['Beer-Lambert', 'Boyle-Mariotte', 'Raoult', 'Faraday-Lenz'], 0, 'La loi de Beer-Lambert donne A = epsilon l c dans son domaine de validité.', ['analyse']],
  ['Quel type de réaction convertit un alcool primaire en aldéhyde puis acide carboxylique ?', ['Oxydation', 'Neutralisation', 'Précipitation', 'Hydratation nucléaire'], 0, 'Un alcool primaire peut être oxydé en aldéhyde puis en acide carboxylique selon les conditions.', ['organique']],
  ['Quel groupe fonctionnel caractérise un acide carboxylique ?', ['-COOH', '-OH seul', '-NH2', '-CHO seulement'], 0, 'Le groupe carboxyle -COOH combine carbonyle et hydroxyle sur le même carbone.', ['organique']],
  ['Quel polymère est associé au motif -CH2-CH2- répété ?', ['Polyéthylène', 'Nylon-6,6', 'PVC', 'Kevlar'], 0, 'Le polyéthylène résulte de la polymérisation de l’éthylène CH2=CH2.', ['polymeres']],
];

function rotate<T>(items: T[], answer: T): [T, T, T, T] {
  const distractors = items.filter((item) => item !== answer).slice(0, 3);
  return [answer, distractors[0], distractors[1], distractors[2]];
}

function nearbyNumberChoices(answer: number): [string, string, string, string] {
  const values = elements.map((element) => element.atomicNumber);
  const ordered = values
    .filter((value) => value !== answer)
    .sort((left, right) => Math.abs(left - answer) - Math.abs(right - answer) || left - right);
  return [String(answer), ...ordered.slice(0, 3).map(String)] as [string, string, string, string];
}

function q(id: string, difficulty: 1 | 2 | 3, prompt: string, choices: [string, string, string, string], explanation: string, tags: string[]): QuestionSeed {
  return {
    id,
    topicId: 'science',
    difficulty,
    prompt,
    choices,
    answerIndex: 0,
    explanation,
    tags: ['chimie', 'tableau-periodique', 'science-ingenieur', ...tags],
    sourceLabel: 'Banque Kizz chimie - niveau ingénieur',
    learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(prompt)}`,
  };
}

const symbols = elements.map((element) => element.symbol);
const names = elements.map((element) => element.name);
const families = [...new Set(elements.map((element) => element.family))];

const easyFormulaNames = new Set(['eau', 'dioxyde de carbone', 'méthane', 'chlorure de sodium']);
const mediumFormulaNames = new Set(['ammoniac', 'acide sulfurique', 'hydroxyde de sodium', 'carbonate de calcium']);

function formulaDifficulty(name: string): 1 | 2 | 3 {
  if (easyFormulaNames.has(name)) return 1;
  if (mediumFormulaNames.has(name)) return 2;
  return 3;
}

const mediumAdvancedQuestionIndexes = new Set([0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 22, 23]);

function advancedDifficulty(index: number): 2 | 3 {
  return mediumAdvancedQuestionIndexes.has(index) ? 2 : 3;
}

const easyElementSymbols = new Set(['H', 'He', 'C', 'N', 'O', 'Na', 'Mg', 'Fe', 'Cu', 'Ag', 'Au']);
const mediumElementSymbols = new Set(['Li', 'F', 'Ne', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Zn', 'I', 'Hg', 'Pb']);
const easyAtomicNumbers = new Set(['H', 'He', 'C', 'N', 'O']);
const mediumAtomicNumbers = new Set(['Li', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'Cl', 'Ar', 'K', 'Ca', 'Fe', 'Cu', 'Ag', 'Au']);

function elementDifficulty(element: ElementRow, kind: 'symbol' | 'z' | 'family' | 'clue'): 1 | 2 | 3 {
  if (kind === 'symbol') {
    if (easyElementSymbols.has(element.symbol)) return 1;
    if (mediumElementSymbols.has(element.symbol)) return 2;
    return 3;
  }
  if (kind === 'z') {
    if (easyAtomicNumbers.has(element.symbol)) return 1;
    if (mediumAtomicNumbers.has(element.symbol)) return 2;
    return 3;
  }
  if (kind === 'family') {
    if (['H', 'C', 'N', 'O', 'Na', 'Mg', 'Cl', 'Ar', 'K', 'Ca', 'Fe', 'Cu', 'Ag', 'Au'].includes(element.symbol)) return 2;
    return 3;
  }
  if (['H', 'He', 'C', 'N', 'O', 'Na', 'Fe', 'Cu', 'Ag', 'Au'].includes(element.symbol)) return 2;
  return 3;
}

const vowelSoundElementNames = new Set(['hydrogène', 'hélium', 'azote', 'oxygène', 'aluminium', 'argon', 'argent', 'iode', 'or', 'uranium']);
const vowelSoundFormulaNames = new Set(['eau', 'acide sulfurique', 'ammoniac', 'hydroxyde de sodium']);

function elementWithArticle(name: string) {
  if (vowelSoundElementNames.has(name)) return `l’${name}`;
  return `le ${name}`;
}

function elementWithDe(name: string) {
  if (vowelSoundElementNames.has(name)) return `de l’${name}`;
  return `du ${name}`;
}

function capitalized(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formulaWithDe(name: string) {
  if (vowelSoundFormulaNames.has(name)) return `de l’${name}`;
  return `du ${name}`;
}

function formulaSubject(name: string) {
  if (vowelSoundFormulaNames.has(name)) return `L’${name}`;
  return capitalized(name);
}

export const scienceChemistryQuestions: QuestionSeed[] = [
  ...elements.flatMap((element) => [
    q(`sci-chem-el-${element.symbol.toLowerCase()}-symbol`, elementDifficulty(element, 'symbol'), `Quel est le symbole chimique ${elementWithDe(element.name)} ?`, rotate(symbols, element.symbol), `${capitalized(elementWithArticle(element.name))} a pour symbole ${element.symbol} ; c’est l’abréviation normalisée utilisée dans le tableau périodique.`, ['element', 'symbole']),
    q(`sci-chem-el-${element.symbol.toLowerCase()}-z`, elementDifficulty(element, 'z'), `Quel est le numéro atomique ${elementWithDe(element.name)} ?`, nearbyNumberChoices(element.atomicNumber), `Le numéro atomique Z ${elementWithDe(element.name)} est ${element.atomicNumber} : c’est le nombre de protons du noyau.`, ['element', 'numero-atomique']),
    q(`sci-chem-el-${element.symbol.toLowerCase()}-family`, elementDifficulty(element, 'family'), `À quelle famille rattache-t-on surtout ${elementWithArticle(element.name)} ?`, rotate(families, element.family), `${capitalized(elementWithArticle(element.name))} est classé ici comme ${element.family} ; cette famille donne un repère sur ses propriétés chimiques usuelles.`, ['element', 'famille']),
    q(`sci-chem-el-${element.symbol.toLowerCase()}-clue`, elementDifficulty(element, 'clue'), `Quel élément correspond à cet indice : ${element.clue} ?`, rotate(names, element.name), `L’indice renvoie à ${elementWithArticle(element.name)}, symbole ${element.symbol}, Z=${element.atomicNumber} ; il combine usage, propriété ou famille chimique.`, ['element', 'indice']),
  ]),
  ...formulas.flatMap(([name, formula, composition, note], index) => [
    q(`sci-chem-formula-${index + 1}-formula`, formulaDifficulty(name), `Quelle est la formule ${formulaWithDe(name)} ?`, rotate(formulas.map((row) => row[1]), formula), `${formulaSubject(name)} s’écrit ${formula} : ${composition} ; ce format oblige à relier nom usuel et composition atomique.`, ['formule', 'composition']),
    q(`sci-chem-formula-${index + 1}-composition`, 2, `Quelle composition correspond à ${formula} ?`, rotate(formulas.map((row) => row[2]), composition), `${formula} correspond à ${composition} ; ${note}.`, ['formule', 'composition']),
  ]),
  ...advancedEntries.map(([prompt, choices, answerIndex, explanation, tags], index) => ({
    id: `sci-chem-advanced-${String(index + 1).padStart(2, '0')}`,
    topicId: 'science',
    difficulty: advancedDifficulty(index),
    prompt,
    choices,
    answerIndex,
    explanation,
    tags: ['chimie', 'tableau-periodique', 'science-ingenieur', 'raisonnement', ...tags],
    sourceLabel: 'Banque Kizz chimie - niveau ingénieur',
    learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(prompt)}`,
  })),
];
