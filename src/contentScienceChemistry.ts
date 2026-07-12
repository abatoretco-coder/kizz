import { QuestionSeed } from './domain';

type ElementRow = {
  symbol: string;
  name: string;
  atomicNumber: number;
  family: string;
  clue: string;
};

const elements: ElementRow[] = [
  { symbol: 'H', name: 'hydrogene', atomicNumber: 1, family: 'non-metal', clue: 'l element le plus leger et le plus abondant de l Univers observable' },
  { symbol: 'He', name: 'helium', atomicNumber: 2, family: 'gaz noble', clue: 'un gaz noble utilise dans les ballons et la cryogenie' },
  { symbol: 'Li', name: 'lithium', atomicNumber: 3, family: 'metal alcalin', clue: 'un alcalin tres utilise dans les batteries rechargeables' },
  { symbol: 'C', name: 'carbone', atomicNumber: 6, family: 'non-metal', clue: 'la base structurale majeure de la chimie organique' },
  { symbol: 'N', name: 'azote', atomicNumber: 7, family: 'non-metal', clue: 'le principal constituant de l atmosphere terrestre' },
  { symbol: 'O', name: 'oxygene', atomicNumber: 8, family: 'chalcogene', clue: 'l element indispensable a la respiration aerobie' },
  { symbol: 'F', name: 'fluor', atomicNumber: 9, family: 'halogene', clue: 'l element le plus electronegatif de l echelle de Pauling' },
  { symbol: 'Ne', name: 'neon', atomicNumber: 10, family: 'gaz noble', clue: 'un gaz noble celebre pour les enseignes lumineuses' },
  { symbol: 'Na', name: 'sodium', atomicNumber: 11, family: 'metal alcalin', clue: 'un alcalin dont l ion Na+ est essentiel en physiologie' },
  { symbol: 'Mg', name: 'magnesium', atomicNumber: 12, family: 'metal alcalino-terreux', clue: 'un alcalino-terreux present dans la chlorophylle' },
  { symbol: 'Al', name: 'aluminium', atomicNumber: 13, family: 'metal pauvre', clue: 'un metal leger protege par une couche d alumine' },
  { symbol: 'Si', name: 'silicium', atomicNumber: 14, family: 'metalloide', clue: 'un metalloide central pour les semi-conducteurs' },
  { symbol: 'P', name: 'phosphore', atomicNumber: 15, family: 'pnictogene', clue: 'un element present dans ATP, ADN et phosphates' },
  { symbol: 'S', name: 'soufre', atomicNumber: 16, family: 'chalcogene', clue: 'un chalcogene present dans les ponts disulfure des proteines' },
  { symbol: 'Cl', name: 'chlore', atomicNumber: 17, family: 'halogene', clue: 'un halogene qui forme l ion chlorure dans le sel de table' },
  { symbol: 'Ar', name: 'argon', atomicNumber: 18, family: 'gaz noble', clue: 'le gaz noble le plus abondant dans l atmosphere terrestre' },
  { symbol: 'K', name: 'potassium', atomicNumber: 19, family: 'metal alcalin', clue: 'un alcalin dont l ion K+ est crucial pour les neurones' },
  { symbol: 'Ca', name: 'calcium', atomicNumber: 20, family: 'metal alcalino-terreux', clue: 'un alcalino-terreux majeur des os et du calcaire' },
  { symbol: 'Ti', name: 'titane', atomicNumber: 22, family: 'metal de transition', clue: 'un metal de transition leger, resistant et biocompatible' },
  { symbol: 'Cr', name: 'chrome', atomicNumber: 24, family: 'metal de transition', clue: 'un metal de transition qui rend les aciers inoxydables plus resistants' },
  { symbol: 'Mn', name: 'manganese', atomicNumber: 25, family: 'metal de transition', clue: 'un metal de transition courant dans les oxydants forts comme permanganate' },
  { symbol: 'Fe', name: 'fer', atomicNumber: 26, family: 'metal de transition', clue: 'le metal central de l hemoglobine' },
  { symbol: 'Co', name: 'cobalt', atomicNumber: 27, family: 'metal de transition', clue: 'un metal de transition present dans la vitamine B12' },
  { symbol: 'Ni', name: 'nickel', atomicNumber: 28, family: 'metal de transition', clue: 'un metal utilise dans des alliages et certaines batteries' },
  { symbol: 'Cu', name: 'cuivre', atomicNumber: 29, family: 'metal de transition', clue: 'un excellent conducteur electrique de couleur rougeatre' },
  { symbol: 'Zn', name: 'zinc', atomicNumber: 30, family: 'metal de transition', clue: 'un metal utilise pour galvaniser l acier' },
  { symbol: 'Br', name: 'brome', atomicNumber: 35, family: 'halogene', clue: 'le seul non-metal liquide a temperature ambiante' },
  { symbol: 'Ag', name: 'argent', atomicNumber: 47, family: 'metal de transition', clue: 'le metal elementaire le plus conducteur electriquement' },
  { symbol: 'I', name: 'iode', atomicNumber: 53, family: 'halogene', clue: 'un halogene necessaire a la synthese des hormones thyroidiennes' },
  { symbol: 'W', name: 'tungstene', atomicNumber: 74, family: 'metal de transition', clue: 'le metal au point de fusion le plus eleve' },
  { symbol: 'Au', name: 'or', atomicNumber: 79, family: 'metal de transition', clue: 'un metal noble, dense et tres resistant a l oxydation' },
  { symbol: 'Hg', name: 'mercure', atomicNumber: 80, family: 'metal de transition', clue: 'un metal liquide a temperature ambiante' },
  { symbol: 'Pb', name: 'plomb', atomicNumber: 82, family: 'metal pauvre', clue: 'un metal dense historiquement utilise contre les rayonnements' },
  { symbol: 'U', name: 'uranium', atomicNumber: 92, family: 'actinide', clue: 'un actinide fissile ou fertile selon l isotope considere' },
];

const formulas = [
  ['eau', 'H2O', '2 atomes d hydrogene et 1 atome d oxygene', 'molecule polaire capable de former des liaisons hydrogene'],
  ['dioxyde de carbone', 'CO2', '1 atome de carbone et 2 atomes d oxygene', 'molecule lineaire dont le carbone est a l etat d oxydation +IV'],
  ['ammoniac', 'NH3', '1 atome d azote et 3 atomes d hydrogene', 'base de Lewis avec un doublet libre sur l azote'],
  ['methane', 'CH4', '1 atome de carbone et 4 atomes d hydrogene', 'alcane tetraedrique ou le carbone est hybridise sp3'],
  ['acide sulfurique', 'H2SO4', '2 hydrogene, 1 soufre et 4 oxygene', 'diacide fort pour la premiere acidite'],
  ['hydroxyde de sodium', 'NaOH', '1 sodium, 1 oxygene et 1 hydrogene', 'base forte totalement dissociee en solution diluee'],
  ['chlorure de sodium', 'NaCl', '1 sodium et 1 chlore', 'solide ionique de structure type halite'],
  ['carbonate de calcium', 'CaCO3', '1 calcium, 1 carbone et 3 oxygene', 'compose majeur du calcaire et du marbre'],
] as const;

const advancedEntries: [string, [string, string, string, string], number, string, string[]][] = [
  ['Quelle configuration electronique correspond au sodium neutre ?', ['1s2 2s2 2p6 3s1', '1s2 2s2 2p5', '1s2 2s2 2p6 3p1', '1s2 2s2 2p6 3s2'], 0, 'Le sodium Z=11 remplit les couches jusqu a neon puis place un electron en 3s.', ['configuration-electronique']],
  ['Pourquoi le fluor est-il tres reactif ?', ['Il attire fortement les electrons et complete facilement son octet', 'Il possede une couche 3d pleine', 'Il est un metal alcalin', 'Son noyau ne contient pas de protons'], 0, 'Le fluor est tres electronegatif et gagne facilement un electron pour atteindre la configuration du neon.', ['electronegativite']],
  ['Quel ion forme typiquement le calcium dans un compose ionique simple ?', ['Ca2+', 'Ca+', 'Ca2-', 'Ca4+'], 0, 'Le calcium perd souvent deux electrons de valence pour former Ca2+.', ['ions']],
  ['Dans H2SO4, quel est le nombre d oxydation du soufre ?', ['+VI', '+IV', '0', '-II'], 0, 'Avec H a +I et O a -II, on obtient 2(+1)+x+4(-2)=0, donc x=+6.', ['oxydoreduction']],
  ['Quel couple acide-base est associe a l acide acetique ?', ['CH3COOH / CH3COO-', 'HCl / Cl2', 'NH4+ / NH2-', 'H2O / O2'], 0, 'La base conjuguee de l acide acetique est l ion acetate CH3COO-.', ['acide-base']],
  ['Dans une solution tampon, quel couple est necessaire ?', ['Un acide faible et sa base conjuguee', 'Un acide fort seul', 'Un oxydant fort seul', 'Un gaz noble dissous'], 0, 'Un tampon resiste au pH grace a un couple acide faible/base conjuguee ou inversement.', ['acide-base']],
  ['Combien de moles de H2O sont produites par combustion complete de 1 mole de CH4 ?', ['2 mol', '1 mol', '4 mol', '0,5 mol'], 0, 'CH4 + 2 O2 -> CO2 + 2 H2O : une mole de methane donne deux moles d eau.', ['stoechiometrie']],
  ['Quelle grandeur vaut n/V en solution ?', ['La concentration molaire', 'La masse molaire', 'La fraction massique', 'Le pH'], 0, 'La concentration molaire c est la quantite de matiere par volume, souvent en mol.L-1.', ['concentration']],
  ['Quel est le pH approximatif d une solution de HCl a 10^-3 mol.L-1 ?', ['3', '1', '7', '11'], 0, 'HCl est fort: [H3O+] vaut environ 10^-3 mol.L-1, donc pH = 3.', ['ph']],
  ['Quel precipite attend-on avec Ag+ et Cl- ?', ['AgCl', 'NaCl', 'Ag2O', 'Cl2'], 0, 'Le chlorure d argent AgCl est peu soluble et precipite en presence de Ag+ et Cl-.', ['precipitation']],
  ['Quelle liaison domine dans NaCl solide ?', ['Ionique', 'Covalente apolaire', 'Metallique pure', 'Hydrogene uniquement'], 0, 'NaCl est un reseau d ions Na+ et Cl- lies par interactions electrostatiques.', ['liaison-chimique']],
  ['Quelle geometrie VSEPR decrit CH4 ?', ['Tetraedrique', 'Lineaire', 'Plane trigonale', 'Coudee'], 0, 'Le carbone du methane porte quatre doublets liants et adopte une geometrie tetraedrique.', ['vsepr']],
  ['Quelle geometrie VSEPR decrit CO2 ?', ['Lineaire', 'Coudee', 'Tetraedrique', 'Pyramidale'], 0, 'CO2 possede deux domaines electroniques autour du carbone, donc une geometrie lineaire.', ['vsepr']],
  ['Quelle interaction explique en grande partie le point d ebullition eleve de l eau ?', ['Liaisons hydrogene', 'Liaisons metalliques', 'Forces nucleaires', 'Interaction gravitationnelle'], 0, 'Les liaisons hydrogene entre molecules d eau augmentent fortement la cohesion du liquide.', ['liaisons-hydrogene']],
  ['Dans une pile galvanique, ou se produit l oxydation ?', ['A l anode', 'A la cathode', 'Dans le pont salin uniquement', 'Dans l electrolyte seulement'], 0, 'Oxydation a l anode, reduction a la cathode: c est le moyen mnemo classique.', ['electrochimie']],
  ['Quel element a la plus grande electronegativite parmi ces choix ?', ['Fluor', 'Carbone', 'Sodium', 'Calcium'], 0, 'Le fluor est l element le plus electronegatif du tableau periodique.', ['electronegativite']],
  ['Quelle famille contient chlore, brome et iode ?', ['Halogenes', 'Gaz nobles', 'Alcalins', 'Actinides'], 0, 'Cl, Br et I appartiennent a la colonne des halogenes.', ['familles']],
  ['Quelle famille contient helium, neon et argon ?', ['Gaz nobles', 'Halogenes', 'Alcalino-terreux', 'Lanthanides'], 0, 'He, Ne et Ar ont une couche de valence stable et sont des gaz nobles.', ['familles']],
  ['Quel element est central dans l hemoglobine ?', ['Fer', 'Sodium', 'Iode', 'Silicium'], 0, 'L hemoglobine contient du fer dans son groupe heme, ce qui permet la fixation du dioxygene.', ['biochimie']],
  ['Quel element est central dans la chlorophylle ?', ['Magnesium', 'Fer', 'Cuivre', 'Plomb'], 0, 'La chlorophylle comporte un ion magnesium au centre de son cycle porphyrinique.', ['biochimie']],
  ['Quelle loi relie absorbance et concentration en spectrophotometrie diluee ?', ['Beer-Lambert', 'Boyle-Mariotte', 'Raoult', 'Faraday-Lenz'], 0, 'La loi de Beer-Lambert donne A = epsilon l c dans son domaine de validite.', ['analyse']],
  ['Quel type de reaction convertit un alcool primaire en aldehyde puis acide carboxylique ?', ['Oxydation', 'Neutralisation', 'Precipitation', 'Hydratation nucleaire'], 0, 'Un alcool primaire peut etre oxyde en aldehyde puis en acide carboxylique selon les conditions.', ['organique']],
  ['Quel groupe fonctionnel caracterise un acide carboxylique ?', ['-COOH', '-OH seul', '-NH2', '-CHO seulement'], 0, 'Le groupe carboxyle -COOH combine carbonyle et hydroxyle sur le meme carbone.', ['organique']],
  ['Quel polymere est associe au motif -CH2-CH2- repete ?', ['Polyethylene', 'Nylon-6,6', 'PVC', 'Kevlar'], 0, 'Le polyethylene resulte de la polymerisation de l ethylene CH2=CH2.', ['polymeres']],
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
    sourceLabel: 'Banque Kizz chimie - niveau ingenieur',
    learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(prompt)}`,
  };
}

const symbols = elements.map((element) => element.symbol);
const names = elements.map((element) => element.name);
const families = [...new Set(elements.map((element) => element.family))];

function formulaDifficulty(index: number): 1 | 2 | 3 {
  return (1 + (index % 3)) as 1 | 2 | 3;
}

function advancedDifficulty(index: number): 2 | 3 {
  return index < 6 ? 2 : 3;
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

export const scienceChemistryQuestions: QuestionSeed[] = [
  ...elements.flatMap((element) => [
    q(`sci-chem-el-${element.symbol.toLowerCase()}-symbol`, elementDifficulty(element, 'symbol'), `Quel est le symbole chimique de ${element.name} ?`, rotate(symbols, element.symbol), `${element.name} a pour symbole ${element.symbol}; c est l abreviation normalisee utilisee dans le tableau periodique.`, ['element', 'symbole']),
    q(`sci-chem-el-${element.symbol.toLowerCase()}-z`, elementDifficulty(element, 'z'), `Quel est le numero atomique de ${element.name} ?`, nearbyNumberChoices(element.atomicNumber), `Le numero atomique Z de ${element.name} est ${element.atomicNumber}: c est le nombre de protons du noyau.`, ['element', 'numero-atomique']),
    q(`sci-chem-el-${element.symbol.toLowerCase()}-family`, elementDifficulty(element, 'family'), `A quelle famille rattache-t-on surtout ${element.name} ?`, rotate(families, element.family), `${element.name} est classe ici comme ${element.family}; cette famille donne un repere sur ses proprietes chimiques usuelles.`, ['element', 'famille']),
    q(`sci-chem-el-${element.symbol.toLowerCase()}-clue`, elementDifficulty(element, 'clue'), `Quel element correspond a cet indice : ${element.clue} ?`, rotate(names, element.name), `L indice renvoie a ${element.name}, symbole ${element.symbol}, Z=${element.atomicNumber}; il combine usage, propriete ou famille chimique.`, ['element', 'indice']),
  ]),
  ...formulas.flatMap(([name, formula, composition, note], index) => [
    q(`sci-chem-formula-${index + 1}-formula`, formulaDifficulty(index), `Quelle est la formule de ${name} ?`, rotate(formulas.map((row) => row[1]), formula), `${name} s ecrit ${formula}: ${composition}; ce format oblige a relier nom usuel et composition atomique.`, ['formule', 'composition']),
    q(`sci-chem-formula-${index + 1}-composition`, 2, `Quelle composition correspond a ${formula} ?`, rotate(formulas.map((row) => row[2]), composition), `${formula} correspond a ${composition}; ${note}.`, ['formule', 'composition']),
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
    sourceLabel: 'Banque Kizz chimie - niveau ingenieur',
    learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(prompt)}`,
  })),
];
