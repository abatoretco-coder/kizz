import { Difficulty, QuestionSeed, Topic } from './domain';

export const franceMapTopic: Topic = {
  id: 'france-map',
  title: 'Carte France',
  subtitle: 'Villes, régions, reliefs et repères',
  icon: 'FR',
  color: '#4C8FBD',
};

type MapEntry = {
  id: string;
  difficulty: Difficulty;
  prompt: string;
  label: string;
  lat: number;
  lon: number;
  toleranceKm: number;
  explanation: string;
  tags: string[];
  learnMoreUrl: string;
};

const mapEntries: MapEntry[] = [
  { id: 'fr-map-001', difficulty: 1, prompt: 'Localise Paris sur la carte.', label: 'Paris', lat: 48.8566, lon: 2.3522, toleranceKm: 80, explanation: 'Paris se trouve dans le bassin parisien, sur la Seine. Sur la carte, cherche le nord du pays, au sud de Lille et à l’est de Rouen.', tags: ['ville', 'capitale'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Paris' },
  { id: 'fr-map-002', difficulty: 1, prompt: 'Localise Lyon sur la carte.', label: 'Lyon', lat: 45.764, lon: 4.8357, toleranceKm: 75, explanation: 'Lyon se situe au confluent de la Saône et du Rhône. Repère-la dans le quart sud-est, au nord de Marseille et à l’ouest des Alpes.', tags: ['ville', 'rhone'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Lyon' },
  { id: 'fr-map-003', difficulty: 1, prompt: 'Localise Marseille sur la carte.', label: 'Marseille', lat: 43.2965, lon: 5.3698, toleranceKm: 75, explanation: 'Marseille est sur la Méditerranée, à l’est du delta du Rhône. Elle se trouve au sud de Lyon et à l’ouest de Toulon.', tags: ['ville', 'littoral'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Marseille' },
  { id: 'fr-map-004', difficulty: 1, prompt: 'Localise Bordeaux sur la carte.', label: 'Bordeaux', lat: 44.8378, lon: -0.5792, toleranceKm: 75, explanation: 'Bordeaux est sur la Garonne, dans le Sud-Ouest. Elle se trouve à l’intérieur des terres, à l’est du bassin d’Arcachon et au nord-ouest de Toulouse.', tags: ['ville', 'garonne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bordeaux' },
  { id: 'fr-map-005', difficulty: 1, prompt: 'Localise Lille sur la carte.', label: 'Lille', lat: 50.6292, lon: 3.0573, toleranceKm: 75, explanation: 'Lille se trouve dans le Nord, près de la frontière belge. Repère-la au nord de Paris, à l’intérieur des terres plutôt que sur le littoral de Dunkerque.', tags: ['ville', 'nord'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Lille' },
  { id: 'fr-map-006', difficulty: 1, prompt: 'Localise Toulouse sur la carte.', label: 'Toulouse', lat: 43.6047, lon: 1.4442, toleranceKm: 75, explanation: 'Toulouse est sur la Garonne, au nord des Pyrénées. Elle se situe au sud-est de Bordeaux et à l’ouest de Montpellier.', tags: ['ville', 'occitanie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Toulouse' },
  { id: 'fr-map-007', difficulty: 1, prompt: 'Localise Nantes sur la carte.', label: 'Nantes', lat: 47.2184, lon: -1.5536, toleranceKm: 75, explanation: 'Nantes se trouve sur la Loire, à l’intérieur des terres, au sud de Rennes et à l’est de Saint-Nazaire. Le fleuve relie la ville à l’Atlantique par son estuaire.', tags: ['ville', 'loire'], learnMoreUrl: 'https://patrimonia.nantes.fr/fiches-encyclopediques/estuaire/' },
  { id: 'fr-map-008', difficulty: 1, prompt: 'Localise Strasbourg sur la carte.', label: 'Strasbourg', lat: 48.5734, lon: 7.7521, toleranceKm: 75, explanation: 'Strasbourg se trouve dans la plaine d’Alsace, près du Rhin et de la frontière allemande. Cherche l’est du pays, au nord de Mulhouse.', tags: ['ville', 'alsace'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Strasbourg' },
  { id: 'fr-map-009', difficulty: 2, prompt: 'Localise Brest sur la carte.', label: 'Brest', lat: 48.3904, lon: -4.4861, toleranceKm: 65, explanation: 'Brest se situe dans le Finistère, à l’ouest de la Bretagne. Attention à ne pas la confondre avec Quimper, plus au sud.', tags: ['ville', 'bretagne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Brest' },
  { id: 'fr-map-010', difficulty: 2, prompt: 'Localise Montpellier sur la carte.', label: 'Montpellier', lat: 43.6108, lon: 3.8767, toleranceKm: 65, explanation: 'Montpellier se trouve dans l’Hérault, près de la Méditerranée mais en retrait du rivage. Elle est entre Béziers à l’ouest et Nîmes au nord-est.', tags: ['ville', 'occitanie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Montpellier' },
  { id: 'fr-map-011', difficulty: 2, prompt: 'Localise Clermont-Ferrand sur la carte.', label: 'Clermont-Ferrand', lat: 45.7772, lon: 3.087, toleranceKm: 65, explanation: 'Clermont-Ferrand se trouve dans le Massif central, à l’est de la chaîne des Puys. Le puy de Dôme est juste à l’ouest de la ville.', tags: ['ville', 'massif-central'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Clermont-Ferrand' },
  { id: 'fr-map-012', difficulty: 2, prompt: 'Localise Dijon sur la carte.', label: 'Dijon', lat: 47.322, lon: 5.0415, toleranceKm: 65, explanation: 'Dijon est en Bourgogne-Franche-Comté, au nord de Lyon et à l’ouest de Besançon. C’est un repère de l’est intérieur, loin du Rhin.', tags: ['ville', 'bourgogne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Dijon' },
  { id: 'fr-map-013', difficulty: 2, prompt: 'Localise Ajaccio sur la carte.', label: 'Ajaccio', lat: 41.9192, lon: 8.7386, toleranceKm: 70, explanation: 'Ajaccio se trouve sur la côte ouest de la Corse, au fond d’un golfe. Bastia est plus au nord et sur la côte opposée.', tags: ['ville', 'corse', 'ile'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Ajaccio' },
  { id: 'fr-map-014', difficulty: 2, prompt: 'Localise le mont Saint-Michel sur la carte.', label: 'Mont Saint-Michel', lat: 48.636, lon: -1.5115, toleranceKm: 55, explanation: 'Le mont Saint-Michel se trouve dans la Manche, en Normandie. Sa baie est proche de la Bretagne, mais le monument est bien du côté normand.', tags: ['monument', 'normandie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Mont_Saint-Michel' },
  { id: 'fr-map-015', difficulty: 2, prompt: 'Localise le mont Blanc sur la carte.', label: 'Mont Blanc', lat: 45.8326, lon: 6.8652, toleranceKm: 55, explanation: 'Le mont Blanc se trouve dans les Alpes, près de Chamonix et de la frontière italienne. Cherche l’est de la Haute-Savoie, au sud-est de Genève.', tags: ['relief', 'alpes'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Mont_Blanc' },
  { id: 'fr-map-016', difficulty: 2, prompt: 'Localise le bassin d’Arcachon sur la carte.', label: 'Bassin d’Arcachon', lat: 44.661, lon: -1.168, toleranceKm: 55, explanation: 'Le bassin d’Arcachon est une lagune de la côte atlantique, à l’ouest de Bordeaux. Il s’ouvre sur l’océan au nord de la dune du Pilat.', tags: ['littoral', 'aquitaine'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bassin_d%27Arcachon' },
  { id: 'fr-map-017', difficulty: 3, prompt: 'Localise la pointe du Raz sur la carte.', label: 'Pointe du Raz', lat: 48.037, lon: -4.744, toleranceKm: 45, explanation: 'La pointe du Raz est un cap du Finistère, à l’ouest de Quimper. Elle se situe au sud de Brest, face à l’île de Sein.', tags: ['littoral', 'bretagne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Pointe_du_Raz' },
  { id: 'fr-map-018', difficulty: 3, prompt: 'Localise les gorges du Verdon sur la carte.', label: 'Gorges du Verdon', lat: 43.748, lon: 6.328, toleranceKm: 50, explanation: 'Les gorges du Verdon sont dans l’arrière-pays provençal, entre le Var et les Alpes-de-Haute-Provence. Elles se trouvent au nord-est de Marseille, loin du littoral.', tags: ['relief', 'provence'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Gorges_du_Verdon' },
  { id: 'fr-map-019', difficulty: 3, prompt: 'Localise le Puy de Dôme sur la carte.', label: 'Puy de Dôme', lat: 45.772, lon: 2.965, toleranceKm: 45, explanation: 'Le puy de Dôme est un volcan de la chaîne des Puys, à l’ouest de Clermont-Ferrand. Le sommet et le département portent le même nom.', tags: ['relief', 'massif-central'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Puy_de_D%C3%B4me' },
  { id: 'fr-map-020', difficulty: 2, prompt: 'Localise la Camargue sur la carte.', label: 'Camargue', lat: 43.53, lon: 4.5, toleranceKm: 55, explanation: 'La Camargue occupe le delta du Rhône, au sud d’Arles. Repère cette zone basse du littoral entre Montpellier et Marseille.', tags: ['delta', 'rhone'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Camargue' },
  { id: 'fr-map-021', difficulty: 3, prompt: 'Localise l’île d’Oléron sur la carte.', label: 'Île d’Oléron', lat: 45.93, lon: -1.31, toleranceKm: 45, explanation: 'Oléron se trouve au large de la Charente-Maritime, à l’ouest de Rochefort. L’île de Ré est plus au nord, devant La Rochelle.', tags: ['ile', 'atlantique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/%C3%8Ele_d%27Ol%C3%A9ron' },
  { id: 'fr-map-022', difficulty: 3, prompt: 'Localise le cap Corse sur la carte.', label: 'Cap Corse', lat: 42.94, lon: 9.43, toleranceKm: 45, explanation: 'Le cap Corse forme la longue péninsule au nord de l’île. Repère le prolongement au-dessus de Bastia, plutôt que la pointe sud près de Bonifacio.', tags: ['corse', 'littoral'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Cap_Corse' },
  { id: 'fr-map-023', difficulty: 3, prompt: 'Localise la baie de Somme sur la carte.', label: 'Baie de Somme', lat: 50.22, lon: 1.58, toleranceKm: 45, explanation: 'La baie de Somme est l’estuaire de la Somme sur la Manche. Elle se trouve entre Dieppe au sud-ouest et Boulogne-sur-Mer au nord.', tags: ['littoral', 'manche'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Baie_de_Somme' },
  { id: 'fr-map-024', difficulty: 3, prompt: 'Localise le col du Tourmalet sur la carte.', label: 'Col du Tourmalet', lat: 42.908, lon: 0.145, toleranceKm: 45, explanation: 'Le Tourmalet se trouve dans les Hautes-Pyrénées, au sud de Tarbes. Il relie les versants de Barèges et de La Mongie, près du pic du Midi de Bigorre.', tags: ['relief', 'pyrenees'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Col_du_Tourmalet' },
];

function textQuestion(id: string, difficulty: Difficulty, prompt: string, choices: [string, string, string, string], answerIndex: number, explanation: string, tags: string[], learnMoreUrl?: string): QuestionSeed {
  return {
    id,
    topicId: franceMapTopic.id,
    difficulty,
    prompt,
    choices,
    answerIndex,
    explanation,
    tags: ['france', 'quiz-france', ...tags],
    sourceLabel: 'Contenu original Kizz (formats quiz populaires)',
    learnMoreUrl,
  };
}

const textQuestions: QuestionSeed[] = [
  textQuestion('fr-quiz-001', 1, 'Quelle ville accueille le palais de l’Élysée, résidence du président de la République ?', ['Lyon', 'Paris', 'Marseille', 'Lille'], 1, 'Le palais de l’Élysée est à Paris, capitale de la France. Lyon est une ancienne capitale des Gaules : ces deux statuts correspondent à des époques différentes.', ['capitale'], 'https://fr.wikipedia.org/wiki/Paris'),
  textQuestion('fr-quiz-002', 1, 'Quel fleuve traverse Paris puis Rouen avant de rejoindre la Manche ?', ['La Loire', 'La Seine', 'La Garonne', 'Le Rhône'], 1, 'La Seine traverse Paris puis Rouen avant son estuaire près du Havre. La Loire et la Garonne rejoignent l’Atlantique ; le Rhône rejoint la Méditerranée.', ['fleuve'], 'https://fr.wikipedia.org/wiki/Seine'),
  textQuestion('fr-quiz-003', 1, 'Quelle mer borde Nice, sur la Côte d’Azur ?', ['La Méditerranée', 'La Manche', 'La mer du Nord', 'La mer Adriatique'], 0, 'Nice se trouve dans le sud-est de la France, sur la Méditerranée. La Manche et la mer du Nord bordent le nord du pays ; l’Adriatique est à l’est de l’Italie.', ['littoral'], 'https://fr.wikipedia.org/wiki/Nice'),
  textQuestion('fr-quiz-004', 1, 'Dans quelle ville la basilique Notre-Dame de la Garde domine-t-elle le Vieux-Port ?', ['Marseille', 'Toulon', 'Nice', 'Montpellier'], 0, 'Notre-Dame de la Garde domine Marseille. Le Vieux-Port est un repère du centre de cette ville, sur la côte méditerranéenne à l’est du delta du Rhône.', ['ville', 'monument'], 'https://fr.wikipedia.org/wiki/Notre-Dame-de-la-Garde'),
  textQuestion('fr-quiz-005', 2, 'À quelle région historique Strasbourg appartient-elle ?', ['Lorraine', 'Alsace', 'Champagne', 'Franche-Comté'], 1, 'Strasbourg appartient à l’Alsace historique. Pour l’organisation administrative actuelle, elle est le chef-lieu du Grand Est : les deux noms désignent des périmètres différents.', ['region'], 'https://fr.wikipedia.org/wiki/Alsace'),
  textQuestion('fr-quiz-006', 2, 'Parmi ces villes bretonnes, laquelle se situe le plus à l’ouest ?', ['Rennes', 'Quimper', 'Brest', 'Lorient'], 2, 'Brest est plus à l’ouest que Quimper, Lorient et Rennes. Elle se situe près de l’extrémité occidentale de la Bretagne, dans le Finistère.', ['placement', 'ville'], 'https://fr.wikipedia.org/wiki/Brest'),
  textQuestion('fr-quiz-007', 2, 'Quelle ville est le chef-lieu de la région Bretagne ?', ['Rennes', 'Brest', 'Vannes', 'Quimper'], 0, 'Rennes est le chef-lieu régional et celui de l’Ille-et-Vilaine. Quimper et Vannes sont aussi des préfectures, mais à l’échelle de leur département.', ['region', 'prefecture'], 'https://fr.wikipedia.org/wiki/Rennes'),
  textQuestion('fr-quiz-008', 1, 'Dans quel massif se trouve le mont Blanc ?', ['Massif central', 'Alpes', 'Vosges', 'Jura'], 1, 'Le mont Blanc se trouve dans les Alpes, près de Chamonix. Le Jura est plus au nord, les Vosges au nord-est et le Massif central plus à l’ouest.', ['relief'], 'https://fr.wikipedia.org/wiki/Mont_Blanc'),
  textQuestion('fr-quiz-009', 2, 'Quelle île est reliée au continent par le pont de Bourcefranc-le-Chapus, en Charente-Maritime ?', ['Île d’Oléron', 'Île de Ré', 'Noirmoutier', 'Île d’Yeu'], 0, 'Le pont relie Bourcefranc-le-Chapus à l’île d’Oléron. Ré possède aussi un pont, mais son accès continental est près de La Rochelle, plus au nord.', ['ile'], 'https://fr.wikipedia.org/wiki/%C3%8Ele_d%27Ol%C3%A9ron'),
  textQuestion('fr-quiz-010', 2, 'Quelle région naturelle correspond au delta du Rhône ?', ['La Brière', 'La Camargue', 'La Dombes', 'La Sologne'], 1, 'La Camargue occupe le delta du Rhône, entre Arles et la Méditerranée. Les autres choix sont aussi des territoires de zones humides, mais se trouvent dans d’autres bassins.', ['delta', 'rhone'], 'https://fr.wikipedia.org/wiki/Camargue'),
  textQuestion('fr-quiz-011', 1, 'Quelle ville française fait face à Kehl, de l’autre côté du Rhin en Allemagne ?', ['Metz', 'Nancy', 'Strasbourg', 'Colmar'], 2, 'Strasbourg fait face à Kehl sur le Rhin. Metz et Nancy sont en Lorraine ; Colmar est en Alsace, mais plus au sud et en retrait du fleuve.', ['frontiere', 'placement'], 'https://fr.wikipedia.org/wiki/Strasbourg'),
  textQuestion('fr-quiz-012', 3, 'Quel col relie Barèges à La Mongie, au pied du pic du Midi de Bigorre ?', ['Tourmalet', 'Aspin', 'Peyresourde', 'Aubisque'], 0, 'Le Tourmalet relie les versants de Barèges et de La Mongie. Les quatre cols proposés sont pyrénéens : ici, les localités permettent de reconnaître le bon passage.', ['relief', 'sport'], 'https://fr.wikipedia.org/wiki/Col_du_Tourmalet'),
];

const mapQuestions: QuestionSeed[] = mapEntries.map((entry) => ({
  id: entry.id,
  topicId: franceMapTopic.id,
  difficulty: entry.difficulty,
  type: 'map-point',
  interactionType: 'map-point',
  prompt: entry.prompt,
  geoTarget: { label: entry.label, lat: entry.lat, lon: entry.lon, toleranceKm: entry.toleranceKm },
  explanation: entry.explanation,
  tags: ['map-point', 'carte-france-dediee', ...entry.tags],
  sourceLabel: 'Contenu original Kizz',
  learnMoreUrl: entry.learnMoreUrl,
}));

function freeTextQuestion(id: string, difficulty: Difficulty, prompt: string, acceptedAnswers: string[], explanation: string, tags: string[], learnMoreUrl?: string): QuestionSeed {
  return {
    id,
    topicId: franceMapTopic.id,
    difficulty,
    type: 'free-text',
    interactionType: 'text',
    prompt,
    acceptedAnswers,
    explanation,
    tags: ['france', 'texte-libre', ...tags],
    sourceLabel: 'Contenu original Kizz',
    learnMoreUrl,
  };
}

const departmentQuestions: QuestionSeed[] = [
  freeTextQuestion('fr-dept-001', 1, 'Quel est le numéro du département de Paris ?', ['75'], 'Paris porte le numéro 75 dans la nomenclature des départements.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Paris_(d%C3%A9partement)'),
  freeTextQuestion('fr-dept-002', 1, 'Quel est le code géographique du département du Rhône ?', ['69'], 'Le département du Rhône porte le code 69. La Métropole de Lyon forme une collectivité distincte, identifiée par le code 69M dans le Code officiel géographique.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Rh%C3%B4ne_(d%C3%A9partement)'),
  freeTextQuestion('fr-dept-003', 1, 'Quel est le numéro du département du Nord ?', ['59'], 'Le Nord porte le numéro 59 ; c’est le repère administratif du département autour de Lille.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Nord_(d%C3%A9partement_fran%C3%A7ais)'),
  freeTextQuestion('fr-dept-004', 2, 'Quel est le numéro du département de la Gironde ?', ['33'], 'La Gironde porte le numéro 33 ; ce code est associé au département de Bordeaux en Nouvelle-Aquitaine.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Gironde_(d%C3%A9partement)'),
  freeTextQuestion('fr-dept-005', 2, 'Quel est le numéro du département de la Haute-Garonne ?', ['31'], 'La Haute-Garonne porte le numéro 31 ; son chef-lieu Toulouse aide à mémoriser ce repère.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Haute-Garonne'),
  freeTextQuestion('fr-dept-006', 2, 'Quel est le numéro du département du Bas-Rhin ?', ['67'], 'Le Bas-Rhin porte le numéro 67 ; c’est le département alsacien associé à Strasbourg.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Bas-Rhin'),
  freeTextQuestion('fr-dept-007', 2, 'Quel est le numéro du département du Finistère ?', ['29'], 'Le Finistère porte le numéro 29 ; ce code identifie la pointe occidentale de la Bretagne.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Finist%C3%A8re'),
  freeTextQuestion('fr-dept-008', 2, 'Quel code départemental désigne la Corse-du-Sud ?', ['2a'], 'La Corse-du-Sud utilise le code 2A ; la lettre distingue ce département de la Haute-Corse.', ['departement', 'numero', 'corse'], 'https://fr.wikipedia.org/wiki/Corse-du-Sud'),
  freeTextQuestion('fr-dept-009', 2, 'Quel code départemental désigne la Haute-Corse ?', ['2b'], 'La Haute-Corse utilise le code 2B ; la lettre distingue ce département de la Corse-du-Sud.', ['departement', 'numero', 'corse'], 'https://fr.wikipedia.org/wiki/Haute-Corse'),
];

const regionMapEntries: MapEntry[] = [
  { id: 'fr-region-map-001', difficulty: 1, prompt: 'Vise le centre approximatif de la Bretagne.', label: 'Bretagne', lat: 48.2, lon: -2.9, toleranceKm: 120, explanation: 'La Bretagne administrative occupe l’ouest de la péninsule, autour de Rennes, Brest et Quimper. Nantes appartient aux Pays de la Loire. Le placement vise un point représentatif de la région.', tags: ['region', 'bretagne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bretagne' },
  { id: 'fr-region-map-002', difficulty: 1, prompt: 'Vise le centre approximatif de l’Île-de-France.', label: 'Île-de-France', lat: 48.7, lon: 2.5, toleranceKm: 90, explanation: 'L’Île-de-France entoure Paris, dans le nord intérieur du pays. Elle comprend aussi Versailles, Évry et Melun. Le point attendu représente la région, pas ses limites.', tags: ['region', 'ile-de-france'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/%C3%8Ele-de-France' },
  { id: 'fr-region-map-003', difficulty: 2, prompt: 'Vise le centre approximatif de l’Occitanie.', label: 'Occitanie', lat: 43.8, lon: 2.2, toleranceKm: 150, explanation: 'L’Occitanie s’étend de Toulouse à Montpellier, au nord des Pyrénées et jusqu’à la Méditerranée. Vise sa partie centrale, entre ces deux grandes villes.', tags: ['region', 'occitanie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Occitanie_(r%C3%A9gion_administrative)' },
  { id: 'fr-region-map-004', difficulty: 2, prompt: 'Vise le centre approximatif de la Nouvelle-Aquitaine.', label: 'Nouvelle-Aquitaine', lat: 45.2, lon: 0.2, toleranceKm: 170, explanation: 'La Nouvelle-Aquitaine s’étend du nord de Poitiers jusqu’à la frontière espagnole, avec Bordeaux pour chef-lieu. Vise sa partie centrale, à l’est de l’estuaire de la Gironde.', tags: ['region', 'nouvelle-aquitaine'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Nouvelle-Aquitaine' },
  { id: 'fr-region-map-005', difficulty: 3, prompt: 'Vise le centre approximatif de la Bourgogne-Franche-Comté.', label: 'Bourgogne-Franche-Comté', lat: 47.1, lon: 5.2, toleranceKm: 130, explanation: 'La Bourgogne-Franche-Comté réunit les territoires autour de Dijon et Besançon, jusqu’à la frontière suisse. Vise sa partie centrale, entre le bassin parisien et le Jura.', tags: ['region', 'bourgogne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bourgogne-Franche-Comt%C3%A9' },
  { id: 'fr-region-map-006', difficulty: 2, prompt: 'Vise le centre approximatif de Provence-Alpes-Côte d’Azur.', label: 'Provence-Alpes-Côte d’Azur', lat: 44.0, lon: 6.0, toleranceKm: 130, explanation: 'Provence-Alpes-Côte d’Azur s’étend de la Méditerranée aux Alpes du Sud. Marseille et Nice sont sur sa côte ; vise l’intérieur de la région, au nord-est de Marseille.', tags: ['region', 'paca'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Provence-Alpes-C%C3%B4te_d%27Azur' },
];

const regionMapQuestions: QuestionSeed[] = regionMapEntries.map((entry) => ({
  id: entry.id,
  topicId: franceMapTopic.id,
  difficulty: entry.difficulty,
  type: 'map-point',
  interactionType: 'map-point',
  prompt: entry.prompt,
  geoTarget: { label: entry.label, lat: entry.lat, lon: entry.lon, toleranceKm: entry.toleranceKm },
  explanation: entry.explanation,
  tags: ['map-point', 'carte-france-dediee', ...entry.tags],
  sourceLabel: 'Contenu original Kizz',
  learnMoreUrl: entry.learnMoreUrl,
}));

export const franceMapQuestions: QuestionSeed[] = [...mapQuestions, ...regionMapQuestions, ...textQuestions, ...departmentQuestions];
