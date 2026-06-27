import { QuestionSeed, Topic } from './domain';
import { mvpQuestions, mvpTopics } from './contentMvp';
import { openTriviaGeographyQuestions } from './generated/openTriviaGeography';
import { expandedQuestions } from './contentExpanded';
import { dedicatedLanguageQuestions } from './contentLanguages';
import { frequencyLanguageQuestions } from './languageLexicon';
import { languageCourseQuestions } from './contentLanguageCourses';
import { geoMapQuestions } from './contentGeoMap';
import { economyQuestions, economyTopic } from './contentEconomy';
import { gameStyleQuestions } from './contentGameStyles';
import { franceMapQuestions, franceMapTopic } from './contentFranceMap';
import { quizShowExpansionQuestions } from './contentQuizShowExpansion';
import { worldCountryQuestions } from './contentWorldCountries';
import { worldFlagQuestions } from './contentWorldFlags';
import { franceAdminQuestions } from './contentFranceAdmin';
import { thematicExpansionQuestions } from './contentThemeExpansion';
import { astronomyQuestions, astronomyTopic } from './contentAstronomy';
import { subthemeExpansionQuestions } from './contentSubthemeExpansion';

const retiredTopicIds = new Set(['daily']);

const rawTopics: Topic[] = [
  { id: 'history', title: 'Histoire', subtitle: 'Dates, peuples et idÃ©es', icon: 'H', color: '#E96D4B' },
  { id: 'geography', title: 'GÃ©ographie', subtitle: 'Pays, reliefs et cultures', icon: 'G', color: '#3F8F72' },
  { id: 'science', title: 'Sciences', subtitle: 'Comprendre le monde', icon: 'S', color: '#5367C7' },
  { id: 'sport', title: 'Sport', subtitle: 'RÃ¨gles et grands moments', icon: 'Sp', color: '#B27C2B' },
  { id: 'arts', title: 'Arts', subtitle: 'Å’uvres, styles et artistes', icon: 'A', color: '#9A5B9E' },
  { id: 'language', title: 'Langues', subtitle: 'Premiers pas multilingues', icon: 'L', color: '#2E7E9C' },
  economyTopic,
  astronomyTopic,
  franceMapTopic,
  ...mvpTopics,
];

export const topics: Topic[] = rawTopics.filter((topic) => !retiredTopicIds.has(topic.id));

const rawQuestions: QuestionSeed[] = [
  { id: 'his-01', topicId: 'history', difficulty: 1, prompt: 'En quelle annÃ©e dÃ©bute la RÃ©volution franÃ§aise ?', choices: ['1789', '1815', '1776', '1848'], answerIndex: 0, explanation: 'La prise de la Bastille, le 14 juillet 1789, devient le symbole du dÃ©but de la RÃ©volution franÃ§aise.', tags: ['france', 'rÃ©volution'], sourceLabel: 'Contenu original Kizz' },
  { id: 'his-02', topicId: 'history', difficulty: 1, prompt: 'Quelle civilisation a construit Machu Picchu ?', choices: ['Les Mayas', 'Les Incas', 'Les AztÃ¨ques', 'Les OlmÃ¨ques'], answerIndex: 1, explanation: 'Machu Picchu fut bÃ¢ti par les Incas au XVe siÃ¨cle, dans lâ€™actuel PÃ©rou.', tags: ['amÃ©riques', 'antiquitÃ©'], sourceLabel: 'Contenu original Kizz' },
  { id: 'his-03', topicId: 'history', difficulty: 2, prompt: 'Quel traitÃ© met officiellement fin Ã  la PremiÃ¨re Guerre mondiale avec lâ€™Allemagne ?', choices: ['Le traitÃ© de Rome', 'Le traitÃ© de Versailles', 'Le traitÃ© de Paris', 'Le traitÃ© de Maastricht'], answerIndex: 1, explanation: 'Le traitÃ© de Versailles est signÃ© le 28 juin 1919 entre lâ€™Allemagne et les AlliÃ©s.', tags: ['xxe-siÃ¨cle', 'europe'], sourceLabel: 'Contenu original Kizz' },
  { id: 'his-04', topicId: 'history', difficulty: 3, prompt: 'Quel souverain promulgue lâ€™Ã©dit de Nantes en 1598 ?', choices: ['Louis XIV', 'FranÃ§ois Ier', 'Henri IV', 'Louis XIII'], answerIndex: 2, explanation: 'Henri IV promulgue lâ€™Ã©dit de Nantes afin dâ€™accorder des droits aux protestants du royaume.', tags: ['france', 'religions'], sourceLabel: 'Contenu original Kizz' },
  { id: 'geo-01', topicId: 'geography', difficulty: 1, prompt: 'Quel est le plus grand ocÃ©an de la planÃ¨te ?', choices: ['Atlantique', 'Indien', 'Arctique', 'Pacifique'], answerIndex: 3, explanation: 'Le Pacifique couvre environ un tiers de la surface terrestre.', tags: ['ocÃ©ans'], sourceLabel: 'Contenu original Kizz' },
  { id: 'geo-02', topicId: 'geography', difficulty: 1, prompt: 'Quelle est la capitale du Canada ?', choices: ['Toronto', 'Ottawa', 'MontrÃ©al', 'Vancouver'], answerIndex: 1, explanation: 'Ottawa est la capitale fÃ©dÃ©rale du Canada depuis 1867.', tags: ['capitales', 'amÃ©rique'], sourceLabel: 'Contenu original Kizz' },
  { id: 'geo-03', topicId: 'geography', difficulty: 2, prompt: 'Dans quelle chaÃ®ne de montagnes se trouve lâ€™Aconcagua ?', choices: ['Les Alpes', 'Les Rocheuses', 'Les Andes', 'Lâ€™Himalaya'], answerIndex: 2, explanation: 'Lâ€™Aconcagua, en Argentine, est le plus haut sommet des Andes et des AmÃ©riques.', tags: ['relief', 'amÃ©rique'], sourceLabel: 'Contenu original Kizz' },
  { id: 'geo-04', topicId: 'geography', difficulty: 3, prompt: 'Quel pays est entiÃ¨rement enclavÃ© dans lâ€™Afrique du Sud ?', choices: ['Eswatini', 'Lesotho', 'Botswana', 'Namibie'], answerIndex: 1, explanation: 'Le Lesotho est un Ã‰tat enclavÃ© dont tout le territoire est entourÃ© par lâ€™Afrique du Sud.', tags: ['afrique', 'frontiÃ¨res'], sourceLabel: 'Contenu original Kizz' },
  { id: 'sci-01', topicId: 'science', difficulty: 1, prompt: 'Quelle planÃ¨te est la plus proche du Soleil ?', choices: ['VÃ©nus', 'Terre', 'Mercure', 'Mars'], answerIndex: 2, explanation: 'Mercure orbite Ã  une distance moyenne dâ€™environ 58 millions de kilomÃ¨tres du Soleil.', tags: ['astronomie'], sourceLabel: 'Contenu original Kizz' },
  { id: 'sci-02', topicId: 'science', difficulty: 1, prompt: 'Quel gaz les plantes absorbent-elles principalement pour la photosynthÃ¨se ?', choices: ['OxygÃ¨ne', 'Dioxyde de carbone', 'Azote', 'HydrogÃ¨ne'], answerIndex: 1, explanation: 'La photosynthÃ¨se utilise notamment le dioxyde de carbone, lâ€™eau et lâ€™Ã©nergie lumineuse.', tags: ['biologie'], sourceLabel: 'Contenu original Kizz' },
  { id: 'sci-03', topicId: 'science', difficulty: 2, prompt: 'Quelle unitÃ© mesure la rÃ©sistance Ã©lectrique ?', choices: ['Le volt', 'Le watt', 'Lâ€™ohm', 'Lâ€™ampÃ¨re'], answerIndex: 2, explanation: 'La rÃ©sistance Ã©lectrique se mesure en ohms, symbole Î©.', tags: ['physique'], sourceLabel: 'Contenu original Kizz' },
  { id: 'sci-04', topicId: 'science', difficulty: 3, prompt: 'Quel organite produit lâ€™essentiel de lâ€™Ã©nergie utilisable par une cellule humaine ?', choices: ['Le ribosome', 'La mitochondrie', 'Le lysosome', 'Le noyau'], answerIndex: 1, explanation: 'La mitochondrie produit lâ€™ATP par respiration cellulaire, principale monnaie Ã©nergÃ©tique de la cellule.', tags: ['biologie', 'cellule'], sourceLabel: 'Contenu original Kizz' },
  { id: 'spo-01', topicId: 'sport', difficulty: 1, prompt: 'Combien de joueurs une Ã©quipe de football aligne-t-elle au coup dâ€™envoi ?', choices: ['9', '10', '11', '12'], answerIndex: 2, explanation: 'Une Ã©quipe aligne onze joueurs, gardien compris.', tags: ['football'], sourceLabel: 'Contenu original Kizz' },
  { id: 'spo-02', topicId: 'sport', difficulty: 1, prompt: 'Dans quel sport marque-t-on un Â« essai Â» ?', choices: ['Le rugby', 'Le tennis', 'Le handball', 'Le hockey'], answerIndex: 0, explanation: 'Au rugby, aplatir le ballon dans lâ€™en-but adverse permet de marquer un essai.', tags: ['rugby'], sourceLabel: 'Contenu original Kizz' },
  { id: 'spo-03', topicId: 'sport', difficulty: 2, prompt: 'Quelle est la distance officielle dâ€™un marathon ?', choices: ['40 km', '41,195 km', '42,195 km', '43 km'], answerIndex: 2, explanation: 'La distance officielle du marathon est de 42,195 kilomÃ¨tres.', tags: ['athlÃ©tisme'], sourceLabel: 'Contenu original Kizz' },
  { id: 'spo-04', topicId: 'sport', difficulty: 3, prompt: 'Quelle surface du Grand Chelem de Roland-Garros est utilisÃ©e ?', choices: ['Gazon', 'Dur extÃ©rieur', 'Terre battue', 'Moquette'], answerIndex: 2, explanation: 'Roland-Garros se joue sur terre battue, une surface plus lente et sensible aux effets.', tags: ['tennis'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-01', topicId: 'arts', difficulty: 1, prompt: 'Qui a peint La Nuit Ã©toilÃ©e ?', choices: ['Claude Monet', 'Vincent van Gogh', 'Paul CÃ©zanne', 'Gustav Klimt'], answerIndex: 1, explanation: 'Vincent van Gogh peint La Nuit Ã©toilÃ©e en 1889, durant son sÃ©jour Ã  Saint-RÃ©my-de-Provence.', tags: ['peinture'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-02', topicId: 'arts', difficulty: 2, prompt: 'Ã€ quel mouvement artistique Claude Monet est-il associÃ© ?', choices: ['Cubisme', 'SurrÃ©alisme', 'Impressionnisme', 'Fauvisme'], answerIndex: 2, explanation: 'Le tableau Impression, soleil levant de Monet a donnÃ© son nom Ã  lâ€™impressionnisme.', tags: ['peinture', 'mouvements'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-03', topicId: 'arts', difficulty: 2, prompt: 'Qui a composÃ© Les Quatre Saisons ?', choices: ['Mozart', 'Vivaldi', 'Bach', 'Chopin'], answerIndex: 1, explanation: 'Antonio Vivaldi publie les quatre concertos pour violon vers 1725.', tags: ['musique'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-04', topicId: 'arts', difficulty: 3, prompt: 'Quel architecte est Ã  lâ€™origine de la Sagrada FamÃ­lia ?', choices: ['Le Corbusier', 'Antoni GaudÃ­', 'Frank Lloyd Wright', 'Oscar Niemeyer'], answerIndex: 1, explanation: 'Antoni GaudÃ­ consacre une grande partie de sa vie Ã  cette basilique barcelonaise.', tags: ['architecture'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-05', topicId: 'arts', difficulty: 1, prompt: 'Qui a peint cette Å“uvre ?', choices: ['Sandro Botticelli', 'LÃ©onard de Vinci', 'RaphaÃ«l', 'Titien'], answerIndex: 1, explanation: 'La Joconde, ou Mona Lisa, est un portrait peint par LÃ©onard de Vinci au dÃ©but du XVIe siÃ¨cle.', tags: ['peinture', 'renaissance', 'image'], sourceLabel: 'Wikimedia Commons â€” domaine public', imageAsset: 'mona-lisa', imageAlt: 'La Joconde de LÃ©onard de Vinci', learnMoreUrl: 'https://fr.wikipedia.org/wiki/La_Joconde' },
  { id: 'art-06', topicId: 'arts', difficulty: 2, type: 'free-text', prompt: 'Quel est le nom de cette sculpture ?', acceptedAnswers: ['le penseur', 'penseur', 'the thinker'], explanation: 'Le Penseur est une sculpture dâ€™Auguste Rodin conÃ§ue Ã  lâ€™origine pour La Porte de lâ€™Enfer.', tags: ['sculpture', 'rodin', 'image'], sourceLabel: 'Didier Descouens / Wikimedia Commons â€” CC BY-SA 4.0', imageAsset: 'the-thinker', imageAlt: 'Le Penseur dâ€™Auguste Rodin', learnMoreUrl: 'https://fr.wikipedia.org/wiki/Le_Penseur' },
  { id: 'art-07', topicId: 'arts', difficulty: 2, type: 'multi-text', prompt: 'Identifie cette Å“uvre et son artiste.', answerFields: [{ id: 'work', label: 'Nom de lâ€™Å“uvre', acceptedAnswers: ['la joconde', 'joconde', 'mona lisa'] }, { id: 'artist', label: 'Artiste', acceptedAnswers: ['lÃ©onard de vinci', 'leonard de vinci', 'leonardo da vinci', 'de vinci'] }], explanation: 'La Joconde est un portrait de LÃ©onard de Vinci conservÃ© au musÃ©e du Louvre.', tags: ['peinture', 'renaissance', 'multi-champs'], sourceLabel: 'Wikimedia Commons â€” domaine public', imageAsset: 'mona-lisa', imageAlt: 'La Joconde de LÃ©onard de Vinci', learnMoreUrl: 'https://fr.wikipedia.org/wiki/La_Joconde' },
  { id: 'lan-01', topicId: 'language', difficulty: 1, type: 'free-text', prompt: 'Comment dit-on Â« bonjour Â» en espagnol ?', acceptedAnswers: ['hola'], explanation: 'Â« Hola Â» est la salutation courante en espagnol.', tags: ['espagnol', 'salutations'], sourceLabel: 'Contenu original Kizz', learnMoreUrl: 'https://fr.wikipedia.org/wiki/Espagnol' },
  { id: 'lan-02', topicId: 'language', difficulty: 1, prompt: 'Quel mot anglais signifie Â« bibliothÃ¨que Â» ?', choices: ['Bookshop', 'Library', 'Bakery', 'School'], answerIndex: 1, explanation: 'Â« Library Â» signifie bibliothÃ¨que; Â« bookshop Â» dÃ©signe une librairie.', tags: ['anglais', 'faux-amis'], sourceLabel: 'Contenu original Kizz' },
  { id: 'lan-03', topicId: 'language', difficulty: 2, prompt: 'Quel est le pluriel anglais de Â« child Â» ?', choices: ['Childs', 'Childes', 'Children', 'Childrens'], answerIndex: 2, explanation: 'Â« Children Â» est un pluriel irrÃ©gulier; il ne prend pas de s supplÃ©mentaire.', tags: ['anglais', 'grammaire'], sourceLabel: 'Contenu original Kizz' },
  { id: 'lan-04', topicId: 'language', difficulty: 2, prompt: 'Que signifie le mot espagnol Â« maÃ±ana Â» ?', choices: ['Hier', 'Aujourdâ€™hui', 'Demain', 'Toujours'], answerIndex: 2, explanation: 'Â« MaÃ±ana Â» signifie demain, ou matin selon le contexte et lâ€™article employÃ©.', tags: ['espagnol', 'vocabulaire'], sourceLabel: 'Contenu original Kizz' },
  ...mvpQuestions,
  ...expandedQuestions,
  ...dedicatedLanguageQuestions,
  ...frequencyLanguageQuestions,
  ...languageCourseQuestions,
  ...geoMapQuestions,
  ...economyQuestions,
  ...franceMapQuestions,
  ...openTriviaGeographyQuestions,
  ...gameStyleQuestions,
  ...quizShowExpansionQuestions,
  ...worldCountryQuestions,
  ...worldFlagQuestions,
  ...franceAdminQuestions,
  ...thematicExpansionQuestions,
  ...astronomyQuestions,
  ...subthemeExpansionQuestions,
];

function hashQuestionId(id: string) {
  let hash = 0;
  for (let index = 0; index < id.length; index += 1) hash = (hash * 31 + id.charCodeAt(index)) >>> 0;
  return hash;
}

function balancedAnswerOrder(seed: QuestionSeed[]) {
  const answerCounts = [0, 0, 0, 0];
  return seed.map((question) => {
    if (!question.choices || question.choices.length !== 4 || question.answerIndex === undefined) return question;
    const correctChoice = question.choices[question.answerIndex];
    const distractors = question.choices.filter((_, index) => index !== question.answerIndex);
    const tieBreaker = hashQuestionId(question.id);
    const targetIndex = [0, 1, 2, 3].sort((left, right) => (
      answerCounts[left] - answerCounts[right] || ((left + tieBreaker) % 4) - ((right + tieBreaker) % 4)
    ))[0];
    answerCounts[targetIndex] += 1;
    const choices = [...distractors];
    choices.splice(targetIndex, 0, correctChoice);
    return { ...question, choices: choices as [string, string, string, string], answerIndex: targetIndex };
  });
}

function hasAny(tags: Set<string>, values: string[]) {
  return values.some((value) => tags.has(value));
}

function hasPrefix(tags: Set<string>, prefix: string) {
  return [...tags].some((tag) => tag.startsWith(prefix));
}

function enrichSubthemeTags(question: QuestionSeed): QuestionSeed {
  const tags = new Set(question.tags);
  if (question.topicId === 'geography') {
    if (tags.has('drapeaux') || tags.has('coverage:world-flags')) tags.add('subtheme:geo:flags');
    else if (question.type === 'map-point') tags.add('subtheme:geo:map-world');
    else if (hasAny(tags, ['capitales', 'capital', 'pays']) || question.id.startsWith('world-')) tags.add('subtheme:geo:capitals');
    else tags.add('subtheme:geo:qcm');
  }
  if (question.topicId === 'france-map') {
    if (question.type === 'map-point') tags.add('subtheme:france:map');
    else tags.add('subtheme:france:admin');
  }
  if (question.topicId === 'history') {
    if (tags.has('france')) tags.add('subtheme:history:france');
    if (tags.has('italie')) tags.add('subtheme:history:italy');
    if (tags.has('allemagne')) tags.add('subtheme:history:germany');
    if (hasAny(tags, ['prehistoire', 'neolithique'])) tags.add('subtheme:history:prehistory');
    if (hasAny(tags, ['antiquite', 'antiquité'])) tags.add('subtheme:history:antiquity');
    if (hasAny(tags, ['moyen-age', 'moyen-âge'])) tags.add('subtheme:history:medieval');
    if (hasAny(tags, ['xixe-siecle', 'xixe-siècle', 'moderne'])) tags.add('subtheme:history:modern');
    if (hasAny(tags, ['xxe-siècle', 'xxe-siecle', 'contemporain'])) tags.add('subtheme:history:contemporary');
    if (!hasPrefix(tags, 'subtheme:history:')) tags.add('subtheme:history:world');
  }
  if (question.topicId === 'science') {
    if (hasAny(tags, ['biologie', 'cellule', 'corps-humain'])) tags.add('subtheme:science:biology');
    else if (tags.has('chimie')) tags.add('subtheme:science:chemistry');
    else if (hasAny(tags, ['terre', 'geologie'])) tags.add('subtheme:science:earth');
    else tags.add('subtheme:science:physics');
  }
  if (question.topicId === 'sport') {
    if (tags.has('football')) tags.add('subtheme:sport:football');
    else if (tags.has('tennis')) tags.add('subtheme:sport:tennis');
    else if (tags.has('rugby')) tags.add('subtheme:sport:rugby');
    else if (hasAny(tags, ['athletisme', 'athlétisme'])) tags.add('subtheme:sport:athletics');
    else tags.add('subtheme:sport:team');
  }
  if (question.topicId === 'arts') {
    if (tags.has('sculpture')) tags.add('subtheme:arts:sculpture');
    else if (tags.has('musique')) tags.add('subtheme:arts:music');
    else if (hasAny(tags, ['musee', 'musée', 'musees', 'musées'])) tags.add('subtheme:arts:museums');
    else tags.add('subtheme:arts:painting');
  }
  if (question.topicId === 'cinema') {
    if (hasAny(tags, ['metier', 'métier', 'métiers'])) tags.add('subtheme:cinema:jobs');
    else if (hasAny(tags, ['langage', 'technique', 'écriture'])) tags.add('subtheme:cinema:language');
    else if (tags.has('mouvement')) tags.add('subtheme:cinema:movements');
    else tags.add('subtheme:cinema:films');
  }
  if (question.topicId === 'architecture') {
    if (tags.has('vocabulaire')) tags.add('subtheme:architecture:vocabulary');
    else if (hasAny(tags, ['france', 'espagne', 'paris', 'musées', 'gaudí'])) tags.add('subtheme:architecture:buildings');
    else if (hasAny(tags, ['moderne', 'modernisme', 'gothique', 'brutalisme', 'styles', 'mouvement'])) tags.add('subtheme:architecture:styles');
    else tags.add('subtheme:architecture:architects');
  }
  if (question.topicId === 'economy') {
    if (hasAny(tags, ['prix', 'inflation'])) tags.add('subtheme:economy:prices');
    else if (hasAny(tags, ['emploi', 'chomage', 'chômage'])) tags.add('subtheme:economy:work');
    else if (tags.has('finance')) tags.add('subtheme:economy:finance');
    else tags.add('subtheme:economy:basics');
  }
  if (question.topicId === 'nature') {
    if (tags.has('animaux')) tags.add('subtheme:nature:animals');
    else if (tags.has('botanique')) tags.add('subtheme:nature:plants');
    else if (hasAny(tags, ['climat', 'atmosphère', 'biomes'])) tags.add('subtheme:nature:climate');
    else tags.add('subtheme:nature:ecology');
  }
  if (question.topicId === 'technology') {
    if (hasAny(tags, ['web', 'code'])) tags.add('subtheme:technology:web');
    else if (hasAny(tags, ['matériel', 'materiel', 'navigation'])) tags.add('subtheme:technology:hardware');
    else if (hasAny(tags, ['sécurité', 'securite'])) tags.add('subtheme:technology:security');
    else tags.add('subtheme:technology:software');
  }
  if (question.topicId === 'language') {
    if (hasAny(tags, ['lang:es', 'espagnol'])) tags.add('subtheme:language:spanish');
    else if (hasAny(tags, ['lang:de', 'allemand'])) tags.add('subtheme:language:german');
    else if (hasAny(tags, ['lang:it', 'italien'])) tags.add('subtheme:language:italian');
  }
  return { ...question, tags: [...tags] };
}
export const questions: QuestionSeed[] = balancedAnswerOrder(rawQuestions.filter((question) => !retiredTopicIds.has(question.topicId)).map(enrichSubthemeTags));

