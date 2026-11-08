// Question content adapted from Philippe Bresoux / OpenQuizzDB, CC BY-SA 4.0.
// Wording, distractors, explanations and difficulty modified by Kizz.
// Original files and item-level provenance: external-data/openquizzdb/README.md.
import { Difficulty, QuestionSeed } from './domain';

type AdaptedEntry = {
  pack: number;
  item: number;
  topicId: 'geography' | 'france-map';
  difficulty: Difficulty;
  prompt: string;
  choices: [string, string, string, string];
  answerIndex: number;
  explanation: string;
  tags: string[];
  learnMoreUrl: string;
};

const entries: AdaptedEntry[] = [
  {
    pack: 219, item: 1, topicId: 'france-map', difficulty: 2,
    prompt: 'Dans quelle commune du Morbihan peut-on observer les alignements de menhirs du Ménec et de Kermario ?',
    choices: ['Carnac', 'Quiberon', 'Vannes', 'Locmariaquer'], answerIndex: 0,
    explanation: 'Ces alignements se trouvent à Carnac. Locmariaquer possède aussi des monuments mégalithiques : le nom du site permet donc de distinguer deux lieux proches du Morbihan.',
    tags: ['bretagne', 'patrimoine', 'culture-regionale'],
    learnMoreUrl: 'https://www.menhirs-carnac.fr/',
  },
  {
    pack: 219, item: 2, topicId: 'france-map', difficulty: 1,
    prompt: 'Quel symbole celtique à trois branches courbes est fréquemment associé à la Bretagne ?',
    choices: ['Le triskell', 'L’hermine', 'La croix celtique', 'La fleur de lys'], answerIndex: 0,
    explanation: 'Le triskell possède trois branches. L’hermine est un autre symbole breton, représenté notamment sur le drapeau, mais sa forme est différente.',
    tags: ['bretagne', 'culture-regionale'],
    learnMoreUrl: 'https://fr.wikipedia.org/wiki/Trisk%C3%A8le',
  },
  {
    pack: 219, item: 3, topicId: 'france-map', difficulty: 2,
    prompt: 'Quel ingrédient fournit les sucres fermentés pour élaborer le chouchen breton ?',
    choices: ['Le miel', 'Le jus de pomme', 'Le malt d’orge', 'Le jus de raisin'], answerIndex: 0,
    explanation: 'Le chouchen est issu de la fermentation d’un mélange de miel et d’eau. Il se distingue ainsi du cidre, obtenu à partir de pommes, et de la bière, élaborée à partir de céréales.',
    tags: ['bretagne', 'culture-regionale'],
    learnMoreUrl: 'https://chouchenndarmor.bzh/fabrication/',
  },
  {
    pack: 219, item: 4, topicId: 'france-map', difficulty: 3,
    prompt: 'Dans quel département se trouve le phare de l’île Vierge, au large de Plouguerneau ?',
    choices: ['Le Finistère', 'Les Côtes-d’Armor', 'Le Morbihan', 'L’Ille-et-Vilaine'], answerIndex: 0,
    explanation: 'Le phare se trouve au large de Plouguerneau, sur la côte nord du Finistère. Ce département occupe l’extrémité occidentale de la Bretagne.',
    tags: ['bretagne', 'patrimoine', 'littoral'],
    learnMoreUrl: 'https://fr.wikipedia.org/wiki/Phare_de_l%27%C3%8Ele_Vierge',
  },
  {
    pack: 542, item: 1, topicId: 'france-map', difficulty: 1,
    prompt: 'Quelle ville est traditionnellement associée au personnage de marionnette Guignol ?',
    choices: ['Lyon', 'Lille', 'Marseille', 'Strasbourg'], answerIndex: 0,
    explanation: 'Guignol est une figure du patrimoine lyonnais. Pour situer Lyon, retiens aussi son emplacement au confluent du Rhône et de la Saône, dans le sud-est de la France.',
    tags: ['ville', 'patrimoine', 'culture-regionale'],
    learnMoreUrl: 'https://fr.wikipedia.org/wiki/Guignol',
  },
  {
    pack: 542, item: 2, topicId: 'france-map', difficulty: 2,
    prompt: 'Quelle ville du Lot-et-Garonne a donné son nom à des pruneaux protégés par une IGP ?',
    choices: ['Agen', 'Marmande', 'Villeneuve-sur-Lot', 'Nérac'], answerIndex: 0,
    explanation: 'Les pruneaux d’Agen bénéficient d’une indication géographique protégée, et non d’une AOC. Leur zone de production dépasse la seule ville d’Agen : le nom ne désigne pas une origine limitée à la commune.',
    tags: ['ville', 'culture-regionale', 'nouvelle-aquitaine'],
    learnMoreUrl: 'https://www.inao.gouv.fr/produit/pruneaux-dagen-14179',
  },
  {
    pack: 542, item: 3, topicId: 'france-map', difficulty: 2,
    prompt: 'Les vingt arrondissements municipaux de Paris appartiennent à combien de communes ?',
    choices: ['Une seule', 'Dix', 'Vingt', 'Vingt et une'], answerIndex: 0,
    explanation: 'Paris est une seule commune divisée en vingt arrondissements municipaux. Un arrondissement municipal est une subdivision de la commune, pas une commune supplémentaire.',
    tags: ['paris', 'administration', 'subtheme:france:admin'],
    learnMoreUrl: 'https://www.insee.fr/fr/information/8740222',
  },
  {
    pack: 542, item: 4, topicId: 'france-map', difficulty: 1,
    prompt: 'Quelle ville méditerranéenne française porte le surnom de « cité phocéenne » ?',
    choices: ['Marseille', 'Nice', 'Toulon', 'Sète'], answerIndex: 0,
    explanation: 'Ce surnom renvoie aux Grecs de Phocée qui ont fondé Marseille, appelée Massalia dans l’Antiquité. Phocée était située en Asie Mineure, sur le territoire de l’actuelle Turquie.',
    tags: ['ville', 'patrimoine', 'littoral'],
    learnMoreUrl: 'https://www.marseille.fr/economie/une-ville-de-tourisme',
  },
  {
    pack: 554, item: 3, topicId: 'geography', difficulty: 2,
    prompt: 'Quel fleuve traverse successivement les villes de Bamako et de Niamey ?',
    choices: ['Le Niger', 'Le Sénégal', 'La Volta', 'La Gambie'], answerIndex: 0,
    explanation: 'Le fleuve Niger traverse les deux capitales avant de poursuivre son cours vers le Nigeria et le golfe de Guinée. Attention à distinguer le fleuve Niger, l’État du Niger et le Nigeria.',
    tags: ['fleuve', 'afrique'],
    learnMoreUrl: 'https://fr.wikipedia.org/wiki/Niger_(fleuve)',
  },
  {
    pack: 554, item: 4, topicId: 'geography', difficulty: 2,
    prompt: 'Quelle propriété de la mer Morte empêche les poissons ordinaires d’y vivre ?',
    choices: ['Une salinité extrême', 'Une acidité extrême', 'Une pression très élevée', 'Une température excessive'], answerIndex: 0,
    explanation: 'La très forte salinité perturbe l’équilibre hydrique des poissons ordinaires. Le nom « mer Morte » ne signifie pas absence totale de vie : certains micro-organismes sont adaptés à ce milieu.',
    tags: ['lac', 'salinite', 'asie'],
    learnMoreUrl: 'https://fr.wikipedia.org/wiki/Mer_Morte',
  },
];

export const openQuizzGeoQuestions: QuestionSeed[] = entries.map(({ pack, item, ...entry }) => ({
  ...entry,
  id: `oqdb-${pack}-${String(item).padStart(3, '0')}`,
  type: 'multiple-choice',
  sourceLabel: 'Philippe Bresoux / OpenQuizzDB — CC BY-SA 4.0 — adaptation Kizz',
  sourceUrl: `https://www.openquizzdb.org/download.php?id=${pack}`,
  tags: [...entry.tags, 'source:openquizzdb', `openquizzdb:${pack}:${item}`, 'license:cc-by-sa-4.0', 'adaptation:kizz'],
}));
