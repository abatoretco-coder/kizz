import { Difficulty, QuestionSeed } from './domain';

const sourceLabel = 'Contenu original Kizz (inspire des formats TTMC, Trivial et jeux TV)';

type ChoiceEntry = [
  id: string,
  topicId: string,
  difficulty: Difficulty,
  prompt: string,
  choices: [string, string, string, string],
  answerIndex: number,
  explanation: string,
  tags: string[],
  learnMoreUrl?: string,
];

function choice([id, topicId, difficulty, prompt, choices, answerIndex, explanation, tags, learnMoreUrl]: ChoiceEntry): QuestionSeed {
  return { id, topicId, difficulty, prompt, choices, answerIndex, explanation, tags: ['quiz-show', ...tags], sourceLabel, learnMoreUrl };
}

export const quizShowExpansionQuestions: QuestionSeed[] = [
  choice(['show-geo-cap-001', 'geography', 1, 'Jeu TV : quelle est la capitale du Maroc ?', ['Casablanca', 'Rabat', 'Marrakech', 'Fes'], 1, 'Rabat est la capitale politique du Maroc.', ['capitales', 'afrique'], 'https://fr.wikipedia.org/wiki/Rabat']),
  choice(['show-geo-cap-002', 'geography', 1, 'Trivial express : quelle est la capitale de la Grece ?', ['Athenes', 'Sparte', 'Thessalonique', 'Patras'], 0, 'Athenes est la capitale de la Grece.', ['capitales', 'europe'], 'https://fr.wikipedia.org/wiki/Ath%C3%A8nes']),
  choice(['show-geo-cap-003', 'geography', 1, 'Pays et capitales : quelle est la capitale de l Irlande ?', ['Cork', 'Dublin', 'Galway', 'Belfast'], 1, 'Dublin est la capitale de la Republique d Irlande.', ['capitales', 'europe'], 'https://fr.wikipedia.org/wiki/Dublin']),
  choice(['show-geo-cap-004', 'geography', 1, 'Reponse rapide : quelle est la capitale du Senegal ?', ['Dakar', 'Bamako', 'Conakry', 'Abidjan'], 0, 'Dakar est la capitale du Senegal.', ['capitales', 'afrique'], 'https://fr.wikipedia.org/wiki/Dakar']),
  choice(['show-geo-cap-005', 'geography', 2, 'Format TTMC niveau 5 : quelle est la capitale de la Croatie ?', ['Split', 'Zagreb', 'Dubrovnik', 'Rijeka'], 1, 'Zagreb est la capitale de la Croatie.', ['capitales', 'europe'], 'https://fr.wikipedia.org/wiki/Zagreb']),
  choice(['show-geo-cap-006', 'geography', 2, 'Question pour un champion : capitale de la Coree du Sud ?', ['Busan', 'Seoul', 'Incheon', 'Daegu'], 1, 'Seoul est la capitale de la Coree du Sud.', ['capitales', 'asie'], 'https://fr.wikipedia.org/wiki/S%C3%A9oul']),
  choice(['show-geo-cap-007', 'geography', 2, 'Pays et capitales : quelle est la capitale du Chili ?', ['Santiago', 'Valparaiso', 'Lima', 'Quito'], 0, 'Santiago est la capitale du Chili.', ['capitales', 'amerique'], 'https://fr.wikipedia.org/wiki/Santiago']),
  choice(['show-geo-cap-008', 'geography', 2, 'Jeu TV : quelle capitale est sur le Danube ?', ['Madrid', 'Budapest', 'Lisbonne', 'Oslo'], 1, 'Budapest est traversee par le Danube.', ['capitales', 'fleuves'], 'https://fr.wikipedia.org/wiki/Budapest']),
  choice(['show-geo-cap-009', 'geography', 3, 'Format TTMC niveau 8 : quelle est la capitale de la Georgie ?', ['Erevan', 'Bakou', 'Tbilissi', 'Kichinev'], 2, 'Tbilissi est la capitale de la Georgie.', ['capitales', 'caucase'], 'https://fr.wikipedia.org/wiki/Tbilissi']),
  choice(['show-geo-cap-010', 'geography', 3, 'Question pour un champion : capitale du Kazakhstan ?', ['Almaty', 'Astana', 'Bichkek', 'Tachkent'], 1, 'Astana est la capitale du Kazakhstan.', ['capitales', 'asie-centrale'], 'https://fr.wikipedia.org/wiki/Astana']),
  choice(['show-geo-cap-011', 'geography', 3, 'Trivial expert : quelle est la capitale de l Uruguay ?', ['Montevideo', 'Asuncion', 'Cordoba', 'Rosario'], 0, 'Montevideo est la capitale de l Uruguay.', ['capitales', 'amerique'], 'https://fr.wikipedia.org/wiki/Montevideo']),
  choice(['show-geo-cap-012', 'geography', 3, 'Pays et capitales : quelle est la capitale d Oman ?', ['Doha', 'Mascate', 'Manama', 'Koweit'], 1, 'Mascate est la capitale d Oman.', ['capitales', 'moyen-orient'], 'https://fr.wikipedia.org/wiki/Mascate']),

  choice(['show-geo-pos-001', 'geography', 1, 'Placement de pays : lequel est au sud de la France ?', ['Belgique', 'Espagne', 'Pays-Bas', 'Danemark'], 1, 'L Espagne borde la France au sud-ouest.', ['placement-pays', 'europe'], 'https://fr.wikipedia.org/wiki/Espagne']),
  choice(['show-geo-pos-002', 'geography', 1, 'Placement de pays : lequel est frontalier de l Allemagne ?', ['Portugal', 'Pologne', 'Islande', 'Irlande'], 1, 'La Pologne partage une frontiere avec l Allemagne.', ['placement-pays', 'europe'], 'https://fr.wikipedia.org/wiki/Pologne']),
  choice(['show-geo-pos-003', 'geography', 1, 'Carte mentale : quel pays est une ile ?', ['Autriche', 'Hongrie', 'Islande', 'Serbie'], 2, 'L Islande est une ile de l Atlantique Nord.', ['placement-pays', 'ile'], 'https://fr.wikipedia.org/wiki/Islande']),
  choice(['show-geo-pos-004', 'geography', 1, 'Jeu TV : quel pays est traverse par le Nil ?', ['Egypte', 'Portugal', 'Norvege', 'Japon'], 0, 'Le Nil traverse notamment l Egypte.', ['fleuves', 'afrique'], 'https://fr.wikipedia.org/wiki/Nil']),
  choice(['show-geo-pos-005', 'geography', 2, 'Placement de pays : lequel est au nord de l Espagne ?', ['Maroc', 'France', 'Algerie', 'Tunisie'], 1, 'La France est au nord de l Espagne, de l autre cote des Pyrenees.', ['placement-pays', 'europe'], 'https://fr.wikipedia.org/wiki/France']),
  choice(['show-geo-pos-006', 'geography', 2, 'Carte mentale : quel pays touche la mer Caspienne ?', ['Suisse', 'Azerbaidjan', 'Belgique', 'Slovenie'], 1, 'L Azerbaidjan a une facade sur la mer Caspienne.', ['placement-pays', 'asie'], 'https://fr.wikipedia.org/wiki/Azerba%C3%AFdjan']),
  choice(['show-geo-pos-007', 'geography', 2, 'Placement de pays : lequel est dans la peninsule scandinave ?', ['Norvege', 'Grece', 'Roumanie', 'Portugal'], 0, 'La Norvege occupe l ouest de la peninsule scandinave.', ['placement-pays', 'europe'], 'https://fr.wikipedia.org/wiki/Norv%C3%A8ge']),
  choice(['show-geo-pos-008', 'geography', 2, 'Trivial geo : quel pays a une frontiere avec le Mexique ?', ['Canada', 'Etats-Unis', 'Bresil', 'Argentine'], 1, 'Les Etats-Unis partagent une frontiere avec le Mexique.', ['placement-pays', 'amerique'], 'https://fr.wikipedia.org/wiki/Fronti%C3%A8re_entre_les_%C3%89tats-Unis_et_le_Mexique']),
  choice(['show-geo-pos-009', 'geography', 3, 'Placement expert : quel pays est enclave dans l Afrique du Sud ?', ['Lesotho', 'Zimbabwe', 'Mozambique', 'Zambie'], 0, 'Le Lesotho est entierement entoure par l Afrique du Sud.', ['placement-pays', 'afrique'], 'https://fr.wikipedia.org/wiki/Lesotho']),
  choice(['show-geo-pos-010', 'geography', 3, 'Carte mentale : quel pays se situe entre l Inde et la Chine ?', ['Nepal', 'Laos', 'Qatar', 'Liban'], 0, 'Le Nepal se trouve dans l Himalaya, entre l Inde et la Chine.', ['placement-pays', 'asie'], 'https://fr.wikipedia.org/wiki/N%C3%A9pal']),
  choice(['show-geo-pos-011', 'geography', 3, 'Format TTMC niveau 8 : quel pays controle l archipel des Feroe ?', ['Norvege', 'Danemark', 'Islande', 'Suede'], 1, 'Les iles Feroe sont un territoire autonome du royaume du Danemark.', ['placement-pays', 'europe'], 'https://fr.wikipedia.org/wiki/%C3%8Eles_F%C3%A9ro%C3%A9']),
  choice(['show-geo-pos-012', 'geography', 3, 'Trivial expert : quel pays est au sud immediat du Mali ?', ['Algerie', 'Cote d Ivoire', 'Libye', 'Egypte'], 1, 'La Cote d Ivoire est au sud du Mali.', ['placement-pays', 'afrique'], 'https://fr.wikipedia.org/wiki/Mali']),

  choice(['show-his-001', 'history', 1, 'Jeu TV : en quelle annee commence la Seconde Guerre mondiale en Europe ?', ['1914', '1939', '1945', '1957'], 1, 'La guerre commence en Europe avec l invasion de la Pologne en 1939.', ['histoire', 'xxe'], 'https://fr.wikipedia.org/wiki/Seconde_Guerre_mondiale']),
  choice(['show-his-002', 'history', 2, 'Trivial : quel roi est associe a Versailles ?', ['Henri IV', 'Louis XIV', 'Louis XVI', 'Francois Ier'], 1, 'Louis XIV transforme Versailles en centre du pouvoir royal.', ['france', 'monarchie'], 'https://fr.wikipedia.org/wiki/Louis_XIV']),
  choice(['show-his-003', 'history', 2, 'Question pour un champion : quel empire avait Rome pour capitale ?', ['Empire inca', 'Empire romain', 'Empire ottoman', 'Empire perse'], 1, 'Rome est la capitale historique de l Empire romain.', ['antiquite'], 'https://fr.wikipedia.org/wiki/Empire_romain']),
  choice(['show-his-004', 'history', 3, 'Format TTMC niveau 7 : quel traite cree la CEE en 1957 ?', ['Traite de Rome', 'Traite de Versailles', 'Traite de Nice', 'Traite de Lisbonne'], 0, 'Le traite de Rome fonde la Communaute economique europeenne.', ['europe', 'traites'], 'https://fr.wikipedia.org/wiki/Trait%C3%A9_de_Rome']),

  choice(['show-sci-001', 'science', 1, 'Reponse rapide : quelle planete est surnommee la planete rouge ?', ['Mars', 'Venus', 'Jupiter', 'Mercure'], 0, 'Mars est surnommee la planete rouge a cause de ses oxydes de fer.', ['astronomie'], 'https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)']),
  choice(['show-sci-002', 'science', 2, 'Trivial sciences : quel organe filtre le sang et produit l urine ?', ['Poumon', 'Rein', 'Foie', 'Estomac'], 1, 'Les reins filtrent le sang et produisent l urine.', ['biologie'], 'https://fr.wikipedia.org/wiki/Rein']),
  choice(['show-sci-003', 'science', 2, 'Jeu TV : quelle particule porte une charge negative ?', ['Proton', 'Neutron', 'Electron', 'Photon'], 2, 'L electron porte une charge electrique negative.', ['physique'], 'https://fr.wikipedia.org/wiki/%C3%89lectron']),
  choice(['show-sci-004', 'science', 3, 'Format expert : quel gaz est majoritaire dans l atmosphere terrestre ?', ['Oxygene', 'Azote', 'Argon', 'Dioxyde de carbone'], 1, 'L azote represente environ 78 % de l atmosphere terrestre.', ['chimie', 'atmosphere'], 'https://fr.wikipedia.org/wiki/Atmosph%C3%A8re_terrestre']),

  choice(['show-art-001', 'arts', 1, 'Trivial arts : qui a peint Guernica ?', ['Pablo Picasso', 'Claude Monet', 'Rembrandt', 'Matisse'], 0, 'Guernica est une oeuvre majeure de Pablo Picasso.', ['peinture'], 'https://fr.wikipedia.org/wiki/Guernica_(Picasso)']),
  choice(['show-art-002', 'arts', 2, 'Jeu TV : quel mouvement est associe a Salvador Dali ?', ['Impressionnisme', 'Surrealisme', 'Pointillisme', 'Baroque'], 1, 'Dali est l une des figures les plus connues du surrealisme.', ['peinture', 'mouvement'], 'https://fr.wikipedia.org/wiki/Salvador_Dal%C3%AD']),
  choice(['show-sport-001', 'sport', 1, 'Reponse rapide : combien de sets faut-il gagner en general pour remporter un match de tennis en deux sets gagnants ?', ['1', '2', '3', '4'], 1, 'Dans un format en deux sets gagnants, il faut remporter deux sets.', ['tennis']]),
  choice(['show-sport-002', 'sport', 2, 'Trivial sport : dans quel sport utilise-t-on un kimono appele judogi ?', ['Judo', 'Escrime', 'Cyclisme', 'Natation'], 0, 'Le judogi est la tenue portee au judo.', ['judo'], 'https://fr.wikipedia.org/wiki/Judogi']),
];
