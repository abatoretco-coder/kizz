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
  { id: 'fr-map-001', difficulty: 1, prompt: 'Carte de France dédiée : place Paris.', label: 'Paris', lat: 48.8566, lon: 2.3522, toleranceKm: 80, explanation: 'Paris se situe en Île-de-France, dans le nord du pays.', tags: ['ville', 'capitale'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Paris' },
  { id: 'fr-map-002', difficulty: 1, prompt: 'Carte de France dédiée : place Lyon.', label: 'Lyon', lat: 45.764, lon: 4.8357, toleranceKm: 75, explanation: 'Lyon est au confluent du Rhône et de la Saône.', tags: ['ville', 'rhone'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Lyon' },
  { id: 'fr-map-003', difficulty: 1, prompt: 'Carte de France dédiée : place Marseille.', label: 'Marseille', lat: 43.2965, lon: 5.3698, toleranceKm: 75, explanation: 'Marseille est sur le littoral méditerranéen.', tags: ['ville', 'littoral'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Marseille' },
  { id: 'fr-map-004', difficulty: 1, prompt: 'Carte de France dédiée : place Bordeaux.', label: 'Bordeaux', lat: 44.8378, lon: -0.5792, toleranceKm: 75, explanation: 'Bordeaux est dans le sud-ouest, sur la Garonne.', tags: ['ville', 'garonne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bordeaux' },
  { id: 'fr-map-005', difficulty: 1, prompt: 'Carte de France dédiée : place Lille.', label: 'Lille', lat: 50.6292, lon: 3.0573, toleranceKm: 75, explanation: 'Lille est proche de la frontière belge.', tags: ['ville', 'nord'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Lille' },
  { id: 'fr-map-006', difficulty: 1, prompt: 'Carte de France dédiée : place Toulouse.', label: 'Toulouse', lat: 43.6047, lon: 1.4442, toleranceKm: 75, explanation: 'Toulouse est en Occitanie, dans le sud-ouest.', tags: ['ville', 'occitanie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Toulouse' },
  { id: 'fr-map-007', difficulty: 1, prompt: 'Carte de France dédiée : place Nantes.', label: 'Nantes', lat: 47.2184, lon: -1.5536, toleranceKm: 75, explanation: 'Nantes est dans l’ouest, près de la Loire.', tags: ['ville', 'loire'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Nantes' },
  { id: 'fr-map-008', difficulty: 1, prompt: 'Carte de France dédiée : place Strasbourg.', label: 'Strasbourg', lat: 48.5734, lon: 7.7521, toleranceKm: 75, explanation: 'Strasbourg est en Alsace, près de l’Allemagne.', tags: ['ville', 'alsace'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Strasbourg' },
  { id: 'fr-map-009', difficulty: 2, prompt: 'Carte de France dédiée : place Brest.', label: 'Brest', lat: 48.3904, lon: -4.4861, toleranceKm: 65, explanation: 'Brest se situe à la pointe occidentale de la Bretagne.', tags: ['ville', 'bretagne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Brest' },
  { id: 'fr-map-010', difficulty: 2, prompt: 'Carte de France dédiée : place Montpellier.', label: 'Montpellier', lat: 43.6108, lon: 3.8767, toleranceKm: 65, explanation: 'Montpellier est proche du golfe du Lion.', tags: ['ville', 'occitanie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Montpellier' },
  { id: 'fr-map-011', difficulty: 2, prompt: 'Carte de France dédiée : place Clermont-Ferrand.', label: 'Clermont-Ferrand', lat: 45.7772, lon: 3.087, toleranceKm: 65, explanation: 'Clermont-Ferrand est au pied de la chaîne des Puys.', tags: ['ville', 'massif-central'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Clermont-Ferrand' },
  { id: 'fr-map-012', difficulty: 2, prompt: 'Carte de France dédiée : place Dijon.', label: 'Dijon', lat: 47.322, lon: 5.0415, toleranceKm: 65, explanation: 'Dijon est en Bourgogne, au nord de la Saône.', tags: ['ville', 'bourgogne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Dijon' },
  { id: 'fr-map-013', difficulty: 2, prompt: 'Carte de France dédiée : place Ajaccio.', label: 'Ajaccio', lat: 41.9192, lon: 8.7386, toleranceKm: 70, explanation: 'Ajaccio est sur la côte occidentale de la Corse.', tags: ['ville', 'corse', 'ile'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Ajaccio' },
  { id: 'fr-map-014', difficulty: 2, prompt: 'Carte de France dédiée : place le mont Saint-Michel.', label: 'Mont Saint-Michel', lat: 48.636, lon: -1.5115, toleranceKm: 55, explanation: 'Le mont Saint-Michel est dans une baie entre Normandie et Bretagne.', tags: ['monument', 'normandie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Mont_Saint-Michel' },
  { id: 'fr-map-015', difficulty: 2, prompt: 'Carte de France dédiée : place le mont Blanc.', label: 'Mont Blanc', lat: 45.8326, lon: 6.8652, toleranceKm: 55, explanation: 'Le mont Blanc est dans les Alpes, près de la frontière italienne.', tags: ['relief', 'alpes'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Mont_Blanc' },
  { id: 'fr-map-016', difficulty: 2, prompt: 'Carte de France dédiée : place le bassin d’Arcachon.', label: 'Bassin d’Arcachon', lat: 44.661, lon: -1.168, toleranceKm: 55, explanation: 'Le bassin d’Arcachon est sur la côte atlantique, au sud-ouest de Bordeaux.', tags: ['littoral', 'aquitaine'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bassin_d%27Arcachon' },
  { id: 'fr-map-017', difficulty: 3, prompt: 'Carte de France dédiée : place la pointe du Raz.', label: 'Pointe du Raz', lat: 48.037, lon: -4.744, toleranceKm: 45, explanation: 'La pointe du Raz est à l’extrémité occidentale du Finistère.', tags: ['littoral', 'bretagne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Pointe_du_Raz' },
  { id: 'fr-map-018', difficulty: 3, prompt: 'Carte de France dédiée : place les gorges du Verdon.', label: 'Gorges du Verdon', lat: 43.748, lon: 6.328, toleranceKm: 50, explanation: 'Les gorges du Verdon se trouvent en Provence-Alpes-Côte d’Azur.', tags: ['relief', 'provence'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Gorges_du_Verdon' },
  { id: 'fr-map-019', difficulty: 3, prompt: 'Carte de France dédiée : place le Puy de Dôme.', label: 'Puy de Dôme', lat: 45.772, lon: 2.965, toleranceKm: 45, explanation: 'Le Puy de Dôme appartient à la chaîne des Puys, dans le Massif central.', tags: ['relief', 'massif-central'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Puy_de_D%C3%B4me' },
  { id: 'fr-map-020', difficulty: 2, prompt: 'Carte de France dédiée : place la Camargue.', label: 'Camargue', lat: 43.53, lon: 4.5, toleranceKm: 55, explanation: 'La Camargue est le delta du Rhône, entre Arles et la Méditerranée.', tags: ['delta', 'rhone'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Camargue' },
  { id: 'fr-map-021', difficulty: 3, prompt: 'Carte de France dédiée : place l’île d’Oléron.', label: 'Île d’Oléron', lat: 45.93, lon: -1.31, toleranceKm: 45, explanation: 'L’île d’Oléron est au large de la Charente-Maritime.', tags: ['ile', 'atlantique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/%C3%8Ele_d%27Ol%C3%A9ron' },
  { id: 'fr-map-022', difficulty: 3, prompt: 'Carte de France dédiée : place le cap Corse.', label: 'Cap Corse', lat: 42.94, lon: 9.43, toleranceKm: 45, explanation: 'Le cap Corse forme la pointe nord de la Corse.', tags: ['corse', 'littoral'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Cap_Corse' },
  { id: 'fr-map-023', difficulty: 3, prompt: 'Carte de France dédiée : place la baie de Somme.', label: 'Baie de Somme', lat: 50.22, lon: 1.58, toleranceKm: 45, explanation: 'La baie de Somme se situe sur la Manche, en Hauts-de-France.', tags: ['littoral', 'manche'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Baie_de_Somme' },
  { id: 'fr-map-024', difficulty: 3, prompt: 'Carte de France dédiée : place le col du Tourmalet.', label: 'Col du Tourmalet', lat: 42.908, lon: 0.145, toleranceKm: 45, explanation: 'Le col du Tourmalet est un col célèbre des Pyrénées.', tags: ['relief', 'pyrenees'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Col_du_Tourmalet' },
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
  textQuestion('fr-quiz-001', 1, 'Style jeu TV : quelle ville est la capitale de la France ?', ['Lyon', 'Paris', 'Marseille', 'Lille'], 1, 'Paris est la capitale politique et administrative de la France.', ['capitale'], 'https://fr.wikipedia.org/wiki/Paris'),
  textQuestion('fr-quiz-002', 1, 'Pays & repères : quel fleuve traverse Paris ?', ['La Loire', 'La Seine', 'La Garonne', 'Le Rhône'], 1, 'La Seine traverse Paris avant de rejoindre la Manche.', ['fleuve'], 'https://fr.wikipedia.org/wiki/Seine'),
  textQuestion('fr-quiz-003', 1, 'Style Trivial : quelle mer borde Nice ?', ['La Méditerranée', 'La Manche', 'La mer du Nord', 'La mer Baltique'], 0, 'Nice est située sur la Côte d’Azur, au bord de la Méditerranée.', ['littoral'], 'https://fr.wikipedia.org/wiki/Nice'),
  textQuestion('fr-quiz-004', 1, 'Format TTMC niveau 2 : quelle ville est associée à la basilique Notre-Dame de la Garde ?', ['Marseille', 'Nantes', 'Dijon', 'Rouen'], 0, 'Notre-Dame de la Garde domine Marseille.', ['ville', 'monument'], 'https://fr.wikipedia.org/wiki/Notre-Dame-de-la-Garde'),
  textQuestion('fr-quiz-005', 2, 'Question pour un champion : je suis la région de Strasbourg. Qui suis-je ?', ['Bretagne', 'Alsace', 'Provence', 'Normandie'], 1, 'Strasbourg est la grande ville historique de l’Alsace.', ['region'], 'https://fr.wikipedia.org/wiki/Alsace'),
  textQuestion('fr-quiz-006', 2, 'Placement France : quelle ville est la plus à l’ouest ?', ['Strasbourg', 'Lyon', 'Brest', 'Nice'], 2, 'Brest est située à la pointe occidentale de la Bretagne.', ['placement', 'ville'], 'https://fr.wikipedia.org/wiki/Brest'),
  textQuestion('fr-quiz-007', 2, 'Capitales régionales : quelle ville est le chef-lieu de la région Bretagne ?', ['Rennes', 'Brest', 'Vannes', 'Quimper'], 0, 'Rennes est la préfecture de la région Bretagne.', ['region', 'prefecture'], 'https://fr.wikipedia.org/wiki/Rennes'),
  textQuestion('fr-quiz-008', 2, 'Relief : dans quel massif se trouve le mont Blanc ?', ['Massif central', 'Alpes', 'Vosges', 'Jura'], 1, 'Le mont Blanc est le sommet emblématique des Alpes.', ['relief'], 'https://fr.wikipedia.org/wiki/Mont_Blanc'),
  textQuestion('fr-quiz-009', 2, 'Style TTMC niveau 5 : quelle île est au large de la Charente-Maritime ?', ['Île d’Oléron', 'Belle-Île-en-Mer', 'Porquerolles', 'Île de Bréhat'], 0, 'L’île d’Oléron se trouve sur la façade atlantique, en Charente-Maritime.', ['ile'], 'https://fr.wikipedia.org/wiki/%C3%8Ele_d%27Ol%C3%A9ron'),
  textQuestion('fr-quiz-010', 2, 'Question pour un champion : je suis le delta du Rhône. Qui suis-je ?', ['La Sologne', 'La Camargue', 'Le Morvan', 'La Beauce'], 1, 'La Camargue correspond au delta du Rhône.', ['delta', 'rhone'], 'https://fr.wikipedia.org/wiki/Camargue'),
  textQuestion('fr-quiz-011', 1, 'Placement France : quelle ville est la plus proche de la frontière allemande ?', ['Bordeaux', 'Nantes', 'Strasbourg', 'Toulouse'], 2, 'Strasbourg est située sur le Rhin, face à l’Allemagne.', ['frontiere', 'placement'], 'https://fr.wikipedia.org/wiki/Strasbourg'),
  textQuestion('fr-quiz-012', 3, 'Jeu TV : quel col pyrénéen est un classique du Tour de France ?', ['Tourmalet', 'Galibier', 'Iseran', 'Joux Plane'], 0, 'Le col du Tourmalet est l’un des cols pyrénéens les plus célèbres du Tour.', ['relief', 'sport'], 'https://fr.wikipedia.org/wiki/Col_du_Tourmalet'),
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
  freeTextQuestion('fr-dept-002', 1, 'Quel est le numéro du département du Rhône ?', ['69'], 'Le Rhône est le département 69; ce code sert de repère administratif pour Lyon et sa métropole historique.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Rh%C3%B4ne_(d%C3%A9partement)'),
  freeTextQuestion('fr-dept-003', 1, 'Quel est le numéro du département du Nord ?', ['59'], 'Le Nord porte le numéro 59; c’est le repère administratif du département autour de Lille.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Nord_(d%C3%A9partement_fran%C3%A7ais)'),
  freeTextQuestion('fr-dept-004', 2, 'Quel est le numéro du département de la Gironde ?', ['33'], 'La Gironde porte le numéro 33; ce code est associé au département de Bordeaux en Nouvelle-Aquitaine.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Gironde_(d%C3%A9partement)'),
  freeTextQuestion('fr-dept-005', 2, 'Quel est le numéro du département de la Haute-Garonne ?', ['31'], 'La Haute-Garonne porte le numéro 31; son chef-lieu Toulouse aide à mémoriser ce repère.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Haute-Garonne'),
  freeTextQuestion('fr-dept-006', 2, 'Quel est le numéro du département du Bas-Rhin ?', ['67'], 'Le Bas-Rhin porte le numéro 67; c’est le département alsacien associé à Strasbourg.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Bas-Rhin'),
  freeTextQuestion('fr-dept-007', 2, 'Quel est le numéro du département du Finistère ?', ['29'], 'Le Finistère porte le numéro 29; ce code identifie la pointe occidentale de la Bretagne.', ['departement', 'numero'], 'https://fr.wikipedia.org/wiki/Finist%C3%A8re'),
  freeTextQuestion('fr-dept-008', 2, 'Quel code départemental désigne la Corse-du-Sud ?', ['2a'], 'La Corse-du-Sud utilise le code 2A; la lettre distingue ce département de la Haute-Corse.', ['departement', 'numero', 'corse'], 'https://fr.wikipedia.org/wiki/Corse-du-Sud'),
  freeTextQuestion('fr-dept-009', 2, 'Quel code départemental désigne la Haute-Corse ?', ['2b'], 'La Haute-Corse utilise le code 2B; la lettre distingue ce département de la Corse-du-Sud.', ['departement', 'numero', 'corse'], 'https://fr.wikipedia.org/wiki/Haute-Corse'),
];

const regionMapEntries: MapEntry[] = [
  { id: 'fr-region-map-001', difficulty: 1, prompt: 'Carte de France dédiée : place la Bretagne.', label: 'Bretagne', lat: 48.2, lon: -2.9, toleranceKm: 120, explanation: 'La Bretagne occupe la péninsule occidentale de la France.', tags: ['region', 'bretagne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bretagne' },
  { id: 'fr-region-map-002', difficulty: 1, prompt: 'Carte de France dédiée : place l’Île-de-France.', label: 'Île-de-France', lat: 48.7, lon: 2.5, toleranceKm: 90, explanation: 'L’Île-de-France entoure Paris et concentre une forte part de la population française.', tags: ['region', 'ile-de-france'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/%C3%8Ele-de-France' },
  { id: 'fr-region-map-003', difficulty: 2, prompt: 'Carte de France dédiée : place l’Occitanie.', label: 'Occitanie', lat: 43.8, lon: 2.2, toleranceKm: 150, explanation: 'L’Occitanie s’étend de Toulouse à Montpellier, entre Pyrénées et Méditerranée.', tags: ['region', 'occitanie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Occitanie_(r%C3%A9gion_administrative)' },
  { id: 'fr-region-map-004', difficulty: 2, prompt: 'Carte de France dédiée : place la Nouvelle-Aquitaine.', label: 'Nouvelle-Aquitaine', lat: 45.2, lon: 0.2, toleranceKm: 170, explanation: 'La Nouvelle-Aquitaine couvre une grande partie du sud-ouest français.', tags: ['region', 'nouvelle-aquitaine'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Nouvelle-Aquitaine' },
  { id: 'fr-region-map-005', difficulty: 3, prompt: 'Carte de France dédiée : place la Bourgogne-Franche-Comté.', label: 'Bourgogne-Franche-Comté', lat: 47.1, lon: 5.2, toleranceKm: 130, explanation: 'La Bourgogne-Franche-Comté se situe dans l’est de la France.', tags: ['region', 'bourgogne'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bourgogne-Franche-Comt%C3%A9' },
  { id: 'fr-region-map-006', difficulty: 2, prompt: 'Carte de France dédiée : place Provence-Alpes-Côte d’Azur.', label: 'Provence-Alpes-Côte d’Azur', lat: 44.0, lon: 6.0, toleranceKm: 130, explanation: 'La région PACA associe littoral méditerranéen, Provence et Alpes du Sud.', tags: ['region', 'paca'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Provence-Alpes-C%C3%B4te_d%27Azur' },
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
