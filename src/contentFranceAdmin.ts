import { Difficulty, QuestionSeed } from './domain';
import { franceMapTopic } from './contentFranceMap';

export type FranceRegion = { name: string; chiefTown: string; kind: 'metropole' | 'outre-mer' };
export type FranceDepartment = { code: string; name: string; chiefTown: string; region: string };

export const franceRegionData: FranceRegion[] = [
  { name: 'Auvergne-Rhône-Alpes', chiefTown: 'Lyon', kind: 'metropole' },
  { name: 'Bourgogne-Franche-Comté', chiefTown: 'Dijon', kind: 'metropole' },
  { name: 'Bretagne', chiefTown: 'Rennes', kind: 'metropole' },
  { name: 'Centre-Val de Loire', chiefTown: 'Orléans', kind: 'metropole' },
  { name: 'Corse', chiefTown: 'Ajaccio', kind: 'metropole' },
  { name: 'Grand Est', chiefTown: 'Strasbourg', kind: 'metropole' },
  { name: 'Hauts-de-France', chiefTown: 'Lille', kind: 'metropole' },
  { name: 'Île-de-France', chiefTown: 'Paris', kind: 'metropole' },
  { name: 'Normandie', chiefTown: 'Rouen', kind: 'metropole' },
  { name: 'Nouvelle-Aquitaine', chiefTown: 'Bordeaux', kind: 'metropole' },
  { name: 'Occitanie', chiefTown: 'Toulouse', kind: 'metropole' },
  { name: 'Pays de la Loire', chiefTown: 'Nantes', kind: 'metropole' },
  { name: "Provence-Alpes-Côte d'Azur", chiefTown: 'Marseille', kind: 'metropole' },
  { name: 'Guadeloupe', chiefTown: 'Basse-Terre', kind: 'outre-mer' },
  { name: 'Martinique', chiefTown: 'Fort-de-France', kind: 'outre-mer' },
  { name: 'Guyane', chiefTown: 'Cayenne', kind: 'outre-mer' },
  { name: 'La Réunion', chiefTown: 'Saint-Denis', kind: 'outre-mer' },
  { name: 'Mayotte', chiefTown: 'Mamoudzou', kind: 'outre-mer' },
];

export const franceDepartmentData: FranceDepartment[] = [
  { code: '01', name: 'Ain', chiefTown: 'Bourg-en-Bresse', region: 'Auvergne-Rhône-Alpes' },
  { code: '02', name: 'Aisne', chiefTown: 'Laon', region: 'Hauts-de-France' },
  { code: '03', name: 'Allier', chiefTown: 'Moulins', region: 'Auvergne-Rhône-Alpes' },
  { code: '04', name: 'Alpes-de-Haute-Provence', chiefTown: 'Digne-les-Bains', region: "Provence-Alpes-Côte d'Azur" },
  { code: '05', name: 'Hautes-Alpes', chiefTown: 'Gap', region: "Provence-Alpes-Côte d'Azur" },
  { code: '06', name: 'Alpes-Maritimes', chiefTown: 'Nice', region: "Provence-Alpes-Côte d'Azur" },
  { code: '07', name: 'Ardèche', chiefTown: 'Privas', region: 'Auvergne-Rhône-Alpes' },
  { code: '08', name: 'Ardennes', chiefTown: 'Charleville-Mézières', region: 'Grand Est' },
  { code: '09', name: 'Ariège', chiefTown: 'Foix', region: 'Occitanie' },
  { code: '10', name: 'Aube', chiefTown: 'Troyes', region: 'Grand Est' },
  { code: '11', name: 'Aude', chiefTown: 'Carcassonne', region: 'Occitanie' },
  { code: '12', name: 'Aveyron', chiefTown: 'Rodez', region: 'Occitanie' },
  { code: '13', name: 'Bouches-du-Rhône', chiefTown: 'Marseille', region: "Provence-Alpes-Côte d'Azur" },
  { code: '14', name: 'Calvados', chiefTown: 'Caen', region: 'Normandie' },
  { code: '15', name: 'Cantal', chiefTown: 'Aurillac', region: 'Auvergne-Rhône-Alpes' },
  { code: '16', name: 'Charente', chiefTown: 'Angoulême', region: 'Nouvelle-Aquitaine' },
  { code: '17', name: 'Charente-Maritime', chiefTown: 'La Rochelle', region: 'Nouvelle-Aquitaine' },
  { code: '18', name: 'Cher', chiefTown: 'Bourges', region: 'Centre-Val de Loire' },
  { code: '19', name: 'Corrèze', chiefTown: 'Tulle', region: 'Nouvelle-Aquitaine' },
  { code: '2A', name: 'Corse-du-Sud', chiefTown: 'Ajaccio', region: 'Corse' },
  { code: '2B', name: 'Haute-Corse', chiefTown: 'Bastia', region: 'Corse' },
  { code: '21', name: "Côte-d'Or", chiefTown: 'Dijon', region: 'Bourgogne-Franche-Comté' },
  { code: '22', name: "Côtes-d'Armor", chiefTown: 'Saint-Brieuc', region: 'Bretagne' },
  { code: '23', name: 'Creuse', chiefTown: 'Guéret', region: 'Nouvelle-Aquitaine' },
  { code: '24', name: 'Dordogne', chiefTown: 'Périgueux', region: 'Nouvelle-Aquitaine' },
  { code: '25', name: 'Doubs', chiefTown: 'Besançon', region: 'Bourgogne-Franche-Comté' },
  { code: '26', name: 'Drôme', chiefTown: 'Valence', region: 'Auvergne-Rhône-Alpes' },
  { code: '27', name: 'Eure', chiefTown: 'Évreux', region: 'Normandie' },
  { code: '28', name: 'Eure-et-Loir', chiefTown: 'Chartres', region: 'Centre-Val de Loire' },
  { code: '29', name: 'Finistère', chiefTown: 'Quimper', region: 'Bretagne' },
  { code: '30', name: 'Gard', chiefTown: 'Nîmes', region: 'Occitanie' },
  { code: '31', name: 'Haute-Garonne', chiefTown: 'Toulouse', region: 'Occitanie' },
  { code: '32', name: 'Gers', chiefTown: 'Auch', region: 'Occitanie' },
  { code: '33', name: 'Gironde', chiefTown: 'Bordeaux', region: 'Nouvelle-Aquitaine' },
  { code: '34', name: 'Hérault', chiefTown: 'Montpellier', region: 'Occitanie' },
  { code: '35', name: 'Ille-et-Vilaine', chiefTown: 'Rennes', region: 'Bretagne' },
  { code: '36', name: 'Indre', chiefTown: 'Châteauroux', region: 'Centre-Val de Loire' },
  { code: '37', name: 'Indre-et-Loire', chiefTown: 'Tours', region: 'Centre-Val de Loire' },
  { code: '38', name: 'Isère', chiefTown: 'Grenoble', region: 'Auvergne-Rhône-Alpes' },
  { code: '39', name: 'Jura', chiefTown: 'Lons-le-Saunier', region: 'Bourgogne-Franche-Comté' },
  { code: '40', name: 'Landes', chiefTown: 'Mont-de-Marsan', region: 'Nouvelle-Aquitaine' },
  { code: '41', name: 'Loir-et-Cher', chiefTown: 'Blois', region: 'Centre-Val de Loire' },
  { code: '42', name: 'Loire', chiefTown: 'Saint-Étienne', region: 'Auvergne-Rhône-Alpes' },
  { code: '43', name: 'Haute-Loire', chiefTown: 'Le Puy-en-Velay', region: 'Auvergne-Rhône-Alpes' },
  { code: '44', name: 'Loire-Atlantique', chiefTown: 'Nantes', region: 'Pays de la Loire' },
  { code: '45', name: 'Loiret', chiefTown: 'Orléans', region: 'Centre-Val de Loire' },
  { code: '46', name: 'Lot', chiefTown: 'Cahors', region: 'Occitanie' },
  { code: '47', name: 'Lot-et-Garonne', chiefTown: 'Agen', region: 'Nouvelle-Aquitaine' },
  { code: '48', name: 'Lozère', chiefTown: 'Mende', region: 'Occitanie' },
  { code: '49', name: 'Maine-et-Loire', chiefTown: 'Angers', region: 'Pays de la Loire' },
  { code: '50', name: 'Manche', chiefTown: 'Saint-Lô', region: 'Normandie' },
  { code: '51', name: 'Marne', chiefTown: 'Châlons-en-Champagne', region: 'Grand Est' },
  { code: '52', name: 'Haute-Marne', chiefTown: 'Chaumont', region: 'Grand Est' },
  { code: '53', name: 'Mayenne', chiefTown: 'Laval', region: 'Pays de la Loire' },
  { code: '54', name: 'Meurthe-et-Moselle', chiefTown: 'Nancy', region: 'Grand Est' },
  { code: '55', name: 'Meuse', chiefTown: 'Bar-le-Duc', region: 'Grand Est' },
  { code: '56', name: 'Morbihan', chiefTown: 'Vannes', region: 'Bretagne' },
  { code: '57', name: 'Moselle', chiefTown: 'Metz', region: 'Grand Est' },
  { code: '58', name: 'Nièvre', chiefTown: 'Nevers', region: 'Bourgogne-Franche-Comté' },
  { code: '59', name: 'Nord', chiefTown: 'Lille', region: 'Hauts-de-France' },
  { code: '60', name: 'Oise', chiefTown: 'Beauvais', region: 'Hauts-de-France' },
  { code: '61', name: 'Orne', chiefTown: 'Alençon', region: 'Normandie' },
  { code: '62', name: 'Pas-de-Calais', chiefTown: 'Arras', region: 'Hauts-de-France' },
  { code: '63', name: 'Puy-de-Dôme', chiefTown: 'Clermont-Ferrand', region: 'Auvergne-Rhône-Alpes' },
  { code: '64', name: 'Pyrénées-Atlantiques', chiefTown: 'Pau', region: 'Nouvelle-Aquitaine' },
  { code: '65', name: 'Hautes-Pyrénées', chiefTown: 'Tarbes', region: 'Occitanie' },
  { code: '66', name: 'Pyrénées-Orientales', chiefTown: 'Perpignan', region: 'Occitanie' },
  { code: '67', name: 'Bas-Rhin', chiefTown: 'Strasbourg', region: 'Grand Est' },
  { code: '68', name: 'Haut-Rhin', chiefTown: 'Colmar', region: 'Grand Est' },
  { code: '69', name: 'Rhône', chiefTown: 'Lyon', region: 'Auvergne-Rhône-Alpes' },
  { code: '70', name: 'Haute-Saône', chiefTown: 'Vesoul', region: 'Bourgogne-Franche-Comté' },
  { code: '71', name: 'Saône-et-Loire', chiefTown: 'Mâcon', region: 'Bourgogne-Franche-Comté' },
  { code: '72', name: 'Sarthe', chiefTown: 'Le Mans', region: 'Pays de la Loire' },
  { code: '73', name: 'Savoie', chiefTown: 'Chambéry', region: 'Auvergne-Rhône-Alpes' },
  { code: '74', name: 'Haute-Savoie', chiefTown: 'Annecy', region: 'Auvergne-Rhône-Alpes' },
  { code: '75', name: 'Paris', chiefTown: 'Paris', region: 'Île-de-France' },
  { code: '76', name: 'Seine-Maritime', chiefTown: 'Rouen', region: 'Normandie' },
  { code: '77', name: 'Seine-et-Marne', chiefTown: 'Melun', region: 'Île-de-France' },
  { code: '78', name: 'Yvelines', chiefTown: 'Versailles', region: 'Île-de-France' },
  { code: '79', name: 'Deux-Sèvres', chiefTown: 'Niort', region: 'Nouvelle-Aquitaine' },
  { code: '80', name: 'Somme', chiefTown: 'Amiens', region: 'Hauts-de-France' },
  { code: '81', name: 'Tarn', chiefTown: 'Albi', region: 'Occitanie' },
  { code: '82', name: 'Tarn-et-Garonne', chiefTown: 'Montauban', region: 'Occitanie' },
  { code: '83', name: 'Var', chiefTown: 'Toulon', region: "Provence-Alpes-Côte d'Azur" },
  { code: '84', name: 'Vaucluse', chiefTown: 'Avignon', region: "Provence-Alpes-Côte d'Azur" },
  { code: '85', name: 'Vendée', chiefTown: 'La Roche-sur-Yon', region: 'Pays de la Loire' },
  { code: '86', name: 'Vienne', chiefTown: 'Poitiers', region: 'Nouvelle-Aquitaine' },
  { code: '87', name: 'Haute-Vienne', chiefTown: 'Limoges', region: 'Nouvelle-Aquitaine' },
  { code: '88', name: 'Vosges', chiefTown: 'Épinal', region: 'Grand Est' },
  { code: '89', name: 'Yonne', chiefTown: 'Auxerre', region: 'Bourgogne-Franche-Comté' },
  { code: '90', name: 'Territoire de Belfort', chiefTown: 'Belfort', region: 'Bourgogne-Franche-Comté' },
  { code: '91', name: 'Essonne', chiefTown: 'Évry-Courcouronnes', region: 'Île-de-France' },
  { code: '92', name: 'Hauts-de-Seine', chiefTown: 'Nanterre', region: 'Île-de-France' },
  { code: '93', name: 'Seine-Saint-Denis', chiefTown: 'Bobigny', region: 'Île-de-France' },
  { code: '94', name: 'Val-de-Marne', chiefTown: 'Créteil', region: 'Île-de-France' },
  { code: '95', name: "Val-d'Oise", chiefTown: 'Pontoise', region: 'Île-de-France' },
  { code: '971', name: 'Guadeloupe', chiefTown: 'Basse-Terre', region: 'Guadeloupe' },
  { code: '972', name: 'Martinique', chiefTown: 'Fort-de-France', region: 'Martinique' },
  { code: '973', name: 'Guyane', chiefTown: 'Cayenne', region: 'Guyane' },
  { code: '974', name: 'La Réunion', chiefTown: 'Saint-Denis', region: 'La Réunion' },
  { code: '976', name: 'Mayotte', chiefTown: 'Mamoudzou', region: 'Mayotte' },
];

function slug(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function difficulty(index: number): Difficulty {
  if (index % 3 === 0) return 1;
  if (index % 3 === 1) return 2;
  return 3;
}

function choicesFrom<T>(rows: T[], index: number, selector: (row: T) => string) {
  const correct = selector(rows[index]);
  const choices = [correct];
  let offset = 5;
  while (choices.length < 4) {
    const candidate = selector(rows[(index + offset) % rows.length]);
    if (!choices.includes(candidate)) choices.push(candidate);
    offset += 7;
  }
  return choices as [string, string, string, string];
}

const regionQuestions: QuestionSeed[] = franceRegionData.map((region, index) => ({
  id: `fr-region-cheflieu-${slug(region.name)}`,
  topicId: franceMapTopic.id,
  difficulty: difficulty(index),
  prompt: `Régions de France : quel est le chef-lieu de la région ${region.name} ?`,
  choices: choicesFrom(franceRegionData, index, (item) => item.chiefTown),
  answerIndex: 0,
  explanation: `${region.chiefTown} est le chef-lieu de la région ${region.name}.`,
  tags: ['france', 'region', 'chef-lieu', 'coverage:france-regions', region.kind],
  sourceLabel: 'Code officiel géographique / contenu original Kizz',
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`région ${region.name}`)}`,
}));

const departmentChiefTownQuestions: QuestionSeed[] = franceDepartmentData.map((department, index) => ({
  id: `fr-dept-cheflieu-${department.code.toLowerCase()}`,
  topicId: franceMapTopic.id,
  difficulty: difficulty(index + 1),
  prompt: `Départements de France : quel est le chef-lieu du département ${department.name} (${department.code}) ?`,
  choices: choicesFrom(franceDepartmentData, index, (item) => item.chiefTown),
  answerIndex: 0,
  explanation: `${department.chiefTown} est le chef-lieu du département ${department.name}, dans la région ${department.region}.`,
  tags: ['france', 'departement', 'chef-lieu', 'coverage:france-departements-cheflieux'],
  sourceLabel: 'Code officiel géographique / contenu original Kizz',
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`département ${department.name}`)}`,
}));

const departmentCodeQuestions: QuestionSeed[] = franceDepartmentData.map((department, index) => ({
  id: `fr-dept-code-${department.code.toLowerCase()}`,
  topicId: franceMapTopic.id,
  difficulty: difficulty(index + 2),
  prompt: `Départements de France : quel département porte le code ${department.code} ?`,
  choices: choicesFrom(franceDepartmentData, index, (item) => item.name),
  answerIndex: 0,
  explanation: `Le code ${department.code} correspond au département ${department.name}; son chef-lieu est ${department.chiefTown}.`,
  tags: ['france', 'departement', 'code-departement', 'coverage:france-departements'],
  sourceLabel: 'Code officiel géographique / contenu original Kizz',
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(`département ${department.name}`)}`,
}));

export const franceAdminQuestions: QuestionSeed[] = [
  ...regionQuestions,
  ...departmentChiefTownQuestions,
  ...departmentCodeQuestions,
];