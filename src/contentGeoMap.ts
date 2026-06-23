import { Difficulty, QuestionSeed } from './domain';

type GeoEntry = {
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

const entries: GeoEntry[] = [
  { id: 'geo-map-001', difficulty: 1, prompt: 'Carte de France : place Paris.', label: 'Paris', lat: 48.8566, lon: 2.3522, toleranceKm: 350, explanation: 'Paris se situe dans le nord de la France, sur la Seine.', tags: ['carte', 'carte-france', 'capitale'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Paris' },
  { id: 'geo-map-002', difficulty: 1, prompt: 'Carte de France : place Lyon.', label: 'Lyon', lat: 45.764, lon: 4.8357, toleranceKm: 180, explanation: 'Lyon se trouve dans le sud-est de la France, au confluent du Rhône et de la Saône.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Lyon' },
  { id: 'geo-map-003', difficulty: 1, prompt: 'Carte de France : place Marseille.', label: 'Marseille', lat: 43.2965, lon: 5.3698, toleranceKm: 180, explanation: 'Marseille est sur la côte méditerranéenne française.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Marseille' },
  { id: 'geo-map-004', difficulty: 1, prompt: 'Carte de France : place Lille.', label: 'Lille', lat: 50.6292, lon: 3.0573, toleranceKm: 180, explanation: 'Lille se situe au nord de la France, proche de la Belgique.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Lille' },
  { id: 'geo-map-005', difficulty: 1, prompt: 'Carte de France : place Bordeaux.', label: 'Bordeaux', lat: 44.8378, lon: -0.5792, toleranceKm: 180, explanation: 'Bordeaux se situe dans le sud-ouest de la France, sur la Garonne.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bordeaux' },
  { id: 'geo-map-006', difficulty: 1, prompt: 'Carte de France : place Toulouse.', label: 'Toulouse', lat: 43.6047, lon: 1.4442, toleranceKm: 180, explanation: 'Toulouse est dans le sud-ouest de la France, sur la Garonne.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Toulouse' },
  { id: 'geo-map-007', difficulty: 1, prompt: 'Carte de France : place Nantes.', label: 'Nantes', lat: 47.2184, lon: -1.5536, toleranceKm: 180, explanation: 'Nantes est dans l’ouest de la France, près de l’estuaire de la Loire.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Nantes' },
  { id: 'geo-map-008', difficulty: 1, prompt: 'Carte de France : place Strasbourg.', label: 'Strasbourg', lat: 48.5734, lon: 7.7521, toleranceKm: 180, explanation: 'Strasbourg est dans l’est de la France, proche de l’Allemagne.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Strasbourg' },
  { id: 'geo-map-009', difficulty: 1, prompt: 'Carte de France : place Nice.', label: 'Nice', lat: 43.7102, lon: 7.262, toleranceKm: 180, explanation: 'Nice est sur la Côte d’Azur, au sud-est de la France.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Nice' },
  { id: 'geo-map-010', difficulty: 1, prompt: 'Carte de France : place Rennes.', label: 'Rennes', lat: 48.1173, lon: -1.6778, toleranceKm: 180, explanation: 'Rennes est en Bretagne, dans l’ouest de la France.', tags: ['carte', 'carte-france', 'ville'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Rennes' },
  { id: 'geo-map-011', difficulty: 2, prompt: 'Place Reykjavik sur la carte du monde.', label: 'Reykjavik', lat: 64.1466, lon: -21.9426, toleranceKm: 300, explanation: 'Reykjavik est la capitale de l’Islande, dans l’Atlantique Nord.', tags: ['carte', 'capitale', 'europe'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Reykjavik' },
  { id: 'geo-map-012', difficulty: 2, prompt: 'Place Marrakech sur la carte du monde.', label: 'Marrakech', lat: 31.6295, lon: -7.9811, toleranceKm: 350, explanation: 'Marrakech se trouve au pied de l’Atlas, dans l’ouest du Maroc.', tags: ['carte', 'ville', 'afrique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Marrakech' },
  { id: 'geo-map-013', difficulty: 2, prompt: 'Place Istanbul sur la carte du monde.', label: 'Istanbul', lat: 41.0082, lon: 28.9784, toleranceKm: 350, explanation: 'Istanbul est à cheval entre Europe et Asie, autour du Bosphore.', tags: ['carte', 'ville', 'eurasie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Istanbul' },
  { id: 'geo-map-014', difficulty: 2, prompt: 'Place Nairobi sur la carte du monde.', label: 'Nairobi', lat: -1.2921, lon: 36.8219, toleranceKm: 450, explanation: 'Nairobi est située dans les hautes terres du Kenya.', tags: ['carte', 'capitale', 'afrique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Nairobi' },
  { id: 'geo-map-015', difficulty: 2, prompt: 'Place Rio de Janeiro sur la carte du monde.', label: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729, toleranceKm: 450, explanation: 'Rio de Janeiro est sur la côte sud-est du Brésil.', tags: ['carte', 'ville', 'amerique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Rio_de_Janeiro' },
  { id: 'geo-map-016', difficulty: 2, prompt: 'Place Mexico sur la carte du monde.', label: 'Mexico', lat: 19.4326, lon: -99.1332, toleranceKm: 450, explanation: 'Mexico se trouve sur le haut plateau central mexicain.', tags: ['carte', 'capitale', 'amerique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Mexico' },
  { id: 'geo-map-017', difficulty: 2, prompt: 'Place Bangkok sur la carte du monde.', label: 'Bangkok', lat: 13.7563, lon: 100.5018, toleranceKm: 450, explanation: 'Bangkok est dans la plaine centrale de la Thaïlande.', tags: ['carte', 'capitale', 'asie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Bangkok' },
  { id: 'geo-map-018', difficulty: 2, prompt: 'Place Séoul sur la carte du monde.', label: 'Séoul', lat: 37.5665, lon: 126.978, toleranceKm: 400, explanation: 'Séoul est dans le nord-ouest de la Corée du Sud.', tags: ['carte', 'capitale', 'asie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Seoul' },
  { id: 'geo-map-019', difficulty: 2, prompt: 'Place Le Cap sur la carte du monde.', label: 'Le Cap', lat: -33.9249, lon: 18.4241, toleranceKm: 450, explanation: 'Le Cap est près de l’extrémité sud-ouest de l’Afrique du Sud.', tags: ['carte', 'ville', 'afrique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Le_Cap' },
  { id: 'geo-map-020', difficulty: 2, prompt: 'Place Vancouver sur la carte du monde.', label: 'Vancouver', lat: 49.2827, lon: -123.1207, toleranceKm: 450, explanation: 'Vancouver est sur la côte pacifique du Canada.', tags: ['carte', 'ville', 'amerique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Vancouver' },
  { id: 'geo-map-021', difficulty: 3, prompt: 'Place Oulan-Bator sur la carte du monde.', label: 'Oulan-Bator', lat: 47.8864, lon: 106.9057, toleranceKm: 350, explanation: 'Oulan-Bator est au nord de la Mongolie, dans la vallée de la Toula.', tags: ['carte', 'capitale', 'asie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Oulan-Bator' },
  { id: 'geo-map-022', difficulty: 3, prompt: 'Place La Paz sur la carte du monde.', label: 'La Paz', lat: -16.4897, lon: -68.1193, toleranceKm: 350, explanation: 'La Paz est dans les Andes boliviennes, à très haute altitude.', tags: ['carte', 'capitale', 'amerique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/La_Paz' },
  { id: 'geo-map-023', difficulty: 3, prompt: 'Place Tbilissi sur la carte du monde.', label: 'Tbilissi', lat: 41.7151, lon: 44.8271, toleranceKm: 320, explanation: 'Tbilissi est dans le Caucase, sur la rivière Koura.', tags: ['carte', 'capitale', 'caucase'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Tbilissi' },
  { id: 'geo-map-024', difficulty: 3, prompt: 'Place Phnom Penh sur la carte du monde.', label: 'Phnom Penh', lat: 11.5564, lon: 104.9282, toleranceKm: 350, explanation: 'Phnom Penh se situe au confluent du Mékong et du Tonlé Sap.', tags: ['carte', 'capitale', 'asie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Phnom_Penh' },
  { id: 'geo-map-025', difficulty: 3, prompt: 'Place Mascate sur la carte du monde.', label: 'Mascate', lat: 23.588, lon: 58.3829, toleranceKm: 350, explanation: 'Mascate est sur le golfe d’Oman, au nord-est de la péninsule Arabique.', tags: ['carte', 'capitale', 'asie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Mascate' },
  { id: 'geo-map-026', difficulty: 3, prompt: 'Place Antananarivo sur la carte du monde.', label: 'Antananarivo', lat: -18.8792, lon: 47.5079, toleranceKm: 350, explanation: 'Antananarivo est sur les hautes terres centrales de Madagascar.', tags: ['carte', 'capitale', 'afrique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Antananarivo' },
  { id: 'geo-map-027', difficulty: 3, prompt: 'Place Montevideo sur la carte du monde.', label: 'Montevideo', lat: -34.9011, lon: -56.1645, toleranceKm: 320, explanation: 'Montevideo est sur la rive nord du Rio de la Plata.', tags: ['carte', 'capitale', 'amerique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Montevideo' },
  { id: 'geo-map-028', difficulty: 3, prompt: 'Place Ljubljana sur la carte du monde.', label: 'Ljubljana', lat: 46.0569, lon: 14.5058, toleranceKm: 260, explanation: 'Ljubljana est au centre de la Slovénie, entre Alpes et Balkans.', tags: ['carte', 'capitale', 'europe'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Ljubljana' },
  { id: 'geo-map-029', difficulty: 3, prompt: 'Place Wellington sur la carte du monde.', label: 'Wellington', lat: -41.2865, lon: 174.7762, toleranceKm: 450, explanation: 'Wellington est à l’extrémité sud de l’île du Nord en Nouvelle-Zélande.', tags: ['carte', 'capitale', 'oceanie'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Wellington' },
  { id: 'geo-map-030', difficulty: 3, prompt: 'Place Anchorage sur la carte du monde.', label: 'Anchorage', lat: 61.2181, lon: -149.9003, toleranceKm: 450, explanation: 'Anchorage est dans le sud de l’Alaska, près du golfe d’Alaska.', tags: ['carte', 'ville', 'amerique'], learnMoreUrl: 'https://fr.wikipedia.org/wiki/Anchorage' },
];

export const geoMapQuestions: QuestionSeed[] = entries.map((entry) => ({
  id: entry.id,
  topicId: 'geography',
  difficulty: entry.difficulty,
  type: 'map-point',
  interactionType: 'map-point',
  prompt: entry.prompt,
  geoTarget: { label: entry.label, lat: entry.lat, lon: entry.lon, toleranceKm: entry.toleranceKm },
  explanation: entry.explanation,
  tags: ['map-point', ...entry.tags],
  sourceLabel: 'Contenu original Kizz',
  learnMoreUrl: entry.learnMoreUrl,
}));
