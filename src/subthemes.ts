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
  { id: 'history-antiquity', topicId: 'history', title: 'Antiquite', tag: 'subtheme:history:antiquity' },
  { id: 'history-modern', topicId: 'history', title: 'Moderne', tag: 'subtheme:history:modern' },
  { id: 'sport-football', topicId: 'sport', title: 'Football', tag: 'subtheme:sport:football' },
  { id: 'sport-tennis', topicId: 'sport', title: 'Tennis', tag: 'subtheme:sport:tennis' },
  { id: 'sport-rugby', topicId: 'sport', title: 'Rugby', tag: 'subtheme:sport:rugby' },
  { id: 'arts-painting', topicId: 'arts', title: 'Peinture', tag: 'subtheme:arts:painting' },
  { id: 'arts-sculpture', topicId: 'arts', title: 'Sculpture', tag: 'subtheme:arts:sculpture' },
  { id: 'arts-music', topicId: 'arts', title: 'Musique', tag: 'subtheme:arts:music' },
  { id: 'cinema-films', topicId: 'cinema', title: 'Films', tag: 'subtheme:cinema:films' },
  { id: 'cinema-scenes', topicId: 'cinema', title: 'Scenes', tag: 'subtheme:cinema:scenes' },
  { id: 'architecture-styles', topicId: 'architecture', title: 'Styles', tag: 'subtheme:architecture:styles' },
  { id: 'economy-basics', topicId: 'economy', title: 'Bases', tag: 'subtheme:economy:basics' },
  { id: 'astronomy-solar-system', topicId: 'astronomy', title: 'Systeme solaire', tag: 'subtheme:astronomy:solar-system' },
  { id: 'astronomy-observation', topicId: 'astronomy', title: 'Observation', tag: 'subtheme:astronomy:observation' },
];

export function subthemesForTopics(topicIds: string[], topics: Topic[]) {
  const activeTopicIds = topicIds.length ? topicIds : topics.map((topic) => topic.id);
  return subthemes.filter((subtheme) => activeTopicIds.includes(subtheme.topicId));
}
