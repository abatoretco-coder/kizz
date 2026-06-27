import { Topic } from './domain';

export type Subtheme = {
  id: string;
  topicId: string;
  title: string;
  tag: string;
};

export const subthemes: Subtheme[] = [
  { id: 'geo-qcm', topicId: 'geography', title: 'Questions', tag: 'subtheme:geo:qcm' },
  { id: 'geo-capitals', topicId: 'geography', title: 'Pays et capitales', tag: 'subtheme:geo:capitals' },
  { id: 'geo-flags', topicId: 'geography', title: 'Drapeaux', tag: 'subtheme:geo:flags' },
  { id: 'geo-world-map', topicId: 'geography', title: 'Carte monde', tag: 'subtheme:geo:map-world' },
  { id: 'france-map-admin', topicId: 'france-map', title: 'France administrative', tag: 'subtheme:france:admin' },
  { id: 'france-map-point', topicId: 'france-map', title: 'Carte France', tag: 'subtheme:france:map' },
  { id: 'history-france', topicId: 'history', title: 'France', tag: 'subtheme:history:france' },
  { id: 'history-world', topicId: 'history', title: 'Monde', tag: 'subtheme:history:world' },
  { id: 'history-italy', topicId: 'history', title: 'Italie', tag: 'subtheme:history:italy' },
  { id: 'history-germany', topicId: 'history', title: 'Allemagne', tag: 'subtheme:history:germany' },
  { id: 'history-prehistory', topicId: 'history', title: 'Prehistoire', tag: 'subtheme:history:prehistory' },
  { id: 'history-antiquity', topicId: 'history', title: 'Antiquite', tag: 'subtheme:history:antiquity' },
  { id: 'history-medieval', topicId: 'history', title: 'Moyen Age', tag: 'subtheme:history:medieval' },
  { id: 'history-modern', topicId: 'history', title: 'Moderne', tag: 'subtheme:history:modern' },
  { id: 'history-contemporary', topicId: 'history', title: 'Contemporain', tag: 'subtheme:history:contemporary' },
  { id: 'science-biology', topicId: 'science', title: 'Biologie', tag: 'subtheme:science:biology' },
  { id: 'science-physics', topicId: 'science', title: 'Physique', tag: 'subtheme:science:physics' },
  { id: 'science-chemistry', topicId: 'science', title: 'Chimie', tag: 'subtheme:science:chemistry' },
  { id: 'science-earth', topicId: 'science', title: 'Terre', tag: 'subtheme:science:earth' },
  { id: 'sport-football', topicId: 'sport', title: 'Football', tag: 'subtheme:sport:football' },
  { id: 'sport-tennis', topicId: 'sport', title: 'Tennis', tag: 'subtheme:sport:tennis' },
  { id: 'sport-rugby', topicId: 'sport', title: 'Rugby', tag: 'subtheme:sport:rugby' },
  { id: 'sport-athletics', topicId: 'sport', title: 'Athletisme', tag: 'subtheme:sport:athletics' },
  { id: 'sport-team', topicId: 'sport', title: 'Sports collectifs', tag: 'subtheme:sport:team' },
  { id: 'arts-painting', topicId: 'arts', title: 'Peinture', tag: 'subtheme:arts:painting' },
  { id: 'arts-sculpture', topicId: 'arts', title: 'Sculpture', tag: 'subtheme:arts:sculpture' },
  { id: 'arts-music', topicId: 'arts', title: 'Musique', tag: 'subtheme:arts:music' },
  { id: 'arts-museums', topicId: 'arts', title: 'Musees', tag: 'subtheme:arts:museums' },
  { id: 'cinema-films', topicId: 'cinema', title: 'Films', tag: 'subtheme:cinema:films' },
  { id: 'cinema-language', topicId: 'cinema', title: 'Langage', tag: 'subtheme:cinema:language' },
  { id: 'cinema-jobs', topicId: 'cinema', title: 'Metiers', tag: 'subtheme:cinema:jobs' },
  { id: 'cinema-movements', topicId: 'cinema', title: 'Mouvements', tag: 'subtheme:cinema:movements' },
  { id: 'architecture-styles', topicId: 'architecture', title: 'Styles', tag: 'subtheme:architecture:styles' },
  { id: 'architecture-buildings', topicId: 'architecture', title: 'Edifices', tag: 'subtheme:architecture:buildings' },
  { id: 'architecture-architects', topicId: 'architecture', title: 'Architectes', tag: 'subtheme:architecture:architects' },
  { id: 'architecture-vocabulary', topicId: 'architecture', title: 'Vocabulaire', tag: 'subtheme:architecture:vocabulary' },
  { id: 'economy-basics', topicId: 'economy', title: 'Bases', tag: 'subtheme:economy:basics' },
  { id: 'economy-prices', topicId: 'economy', title: 'Prix', tag: 'subtheme:economy:prices' },
  { id: 'economy-work', topicId: 'economy', title: 'Emploi', tag: 'subtheme:economy:work' },
  { id: 'economy-finance', topicId: 'economy', title: 'Finance', tag: 'subtheme:economy:finance' },
  { id: 'nature-animals', topicId: 'nature', title: 'Animaux', tag: 'subtheme:nature:animals' },
  { id: 'nature-plants', topicId: 'nature', title: 'Plantes', tag: 'subtheme:nature:plants' },
  { id: 'nature-climate', topicId: 'nature', title: 'Climat', tag: 'subtheme:nature:climate' },
  { id: 'nature-ecology', topicId: 'nature', title: 'Ecologie', tag: 'subtheme:nature:ecology' },
  { id: 'technology-web', topicId: 'technology', title: 'Web', tag: 'subtheme:technology:web' },
  { id: 'technology-hardware', topicId: 'technology', title: 'Materiel', tag: 'subtheme:technology:hardware' },
  { id: 'technology-software', topicId: 'technology', title: 'Logiciel', tag: 'subtheme:technology:software' },
  { id: 'technology-security', topicId: 'technology', title: 'Securite', tag: 'subtheme:technology:security' },
  { id: 'language-spanish', topicId: 'language', title: 'Espagnol', tag: 'subtheme:language:spanish' },
  { id: 'language-german', topicId: 'language', title: 'Allemand', tag: 'subtheme:language:german' },
  { id: 'language-italian', topicId: 'language', title: 'Italien', tag: 'subtheme:language:italian' },
  { id: 'astronomy-solar-system', topicId: 'astronomy', title: 'Systeme solaire', tag: 'subtheme:astronomy:solar-system' },
  { id: 'astronomy-observation', topicId: 'astronomy', title: 'Observation', tag: 'subtheme:astronomy:observation' },
];

export function subthemesForTopics(topicIds: string[], topics: Topic[]) {
  const activeTopicIds = topicIds.length ? topicIds : topics.map((topic) => topic.id);
  return subthemes.filter((subtheme) => activeTopicIds.includes(subtheme.topicId));
}
