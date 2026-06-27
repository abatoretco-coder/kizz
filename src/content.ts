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
import { visualRecognitionQuestions } from './contentVisualRecognition';
import { visualHistoryQuestions } from './generated/contentVisualHistory';
import { natureVisualQuestions } from './generated/contentNatureVisual';
import { scienceChemistryQuestions } from './contentScienceChemistry';

const retiredTopicIds = new Set(['daily']);

const rawTopics: Topic[] = [
  { id: 'history', title: 'Histoire', subtitle: 'Dates, peuples et idées', icon: 'H', color: '#E96D4B' },
  { id: 'geography', title: 'Géographie', subtitle: 'Pays, reliefs et cultures', icon: 'G', color: '#3F8F72' },
  { id: 'science', title: 'Sciences', subtitle: 'Comprendre le monde', icon: 'S', color: '#5367C7' },
  { id: 'sport', title: 'Sport', subtitle: 'Règles et grands moments', icon: 'Sp', color: '#B27C2B' },
  { id: 'arts', title: 'Arts', subtitle: 'Œuvres, styles et artistes', icon: 'A', color: '#9A5B9E' },
  { id: 'language', title: 'Langues', subtitle: 'Premiers pas multilingues', icon: 'L', color: '#2E7E9C' },
  economyTopic,
  astronomyTopic,
  franceMapTopic,
  ...mvpTopics,
];

export const topics: Topic[] = rawTopics.filter((topic) => !retiredTopicIds.has(topic.id));

const rawQuestions: QuestionSeed[] = [
  { id: 'his-01', topicId: 'history', difficulty: 1, prompt: 'En quelle année débute la Révolution française ?', choices: ['1789', '1815', '1776', '1848'], answerIndex: 0, explanation: 'La prise de la Bastille, le 14 juillet 1789, devient le symbole du début de la Révolution française.', tags: ['france', 'révolution'], sourceLabel: 'Contenu original Kizz' },
  { id: 'his-02', topicId: 'history', difficulty: 1, prompt: 'Quelle civilisation a construit Machu Picchu ?', choices: ['Les Mayas', 'Les Incas', 'Les Aztèques', 'Les Olmèques'], answerIndex: 1, explanation: 'Machu Picchu fut bâti par les Incas au XVe siècle, dans l’actuel Pérou.', tags: ['amériques', 'antiquité'], sourceLabel: 'Contenu original Kizz' },
  { id: 'his-03', topicId: 'history', difficulty: 2, prompt: 'Quel traité met officiellement fin à la Première Guerre mondiale avec l’Allemagne ?', choices: ['Le traité de Rome', 'Le traité de Versailles', 'Le traité de Paris', 'Le traité de Maastricht'], answerIndex: 1, explanation: 'Le traité de Versailles est signé le 28 juin 1919 entre l’Allemagne et les Alliés.', tags: ['xxe-siècle', 'europe'], sourceLabel: 'Contenu original Kizz' },
  { id: 'his-04', topicId: 'history', difficulty: 3, prompt: 'Quel souverain promulgue l’édit de Nantes en 1598 ?', choices: ['Louis XIV', 'François Ier', 'Henri IV', 'Louis XIII'], answerIndex: 2, explanation: 'Henri IV promulgue l’édit de Nantes afin d’accorder des droits aux protestants du royaume.', tags: ['france', 'religions'], sourceLabel: 'Contenu original Kizz' },
  { id: 'geo-01', topicId: 'geography', difficulty: 1, prompt: 'Quel est le plus grand océan de la planète ?', choices: ['Atlantique', 'Indien', 'Arctique', 'Pacifique'], answerIndex: 3, explanation: 'Le Pacifique couvre environ un tiers de la surface terrestre.', tags: ['océans'], sourceLabel: 'Contenu original Kizz' },
  { id: 'geo-02', topicId: 'geography', difficulty: 1, prompt: 'Quelle est la capitale du Canada ?', choices: ['Toronto', 'Ottawa', 'Montréal', 'Vancouver'], answerIndex: 1, explanation: 'Ottawa est la capitale fédérale du Canada depuis 1867.', tags: ['capitales', 'amérique'], sourceLabel: 'Contenu original Kizz' },
  { id: 'geo-03', topicId: 'geography', difficulty: 2, prompt: 'Dans quelle chaîne de montagnes se trouve l’Aconcagua ?', choices: ['Les Alpes', 'Les Rocheuses', 'Les Andes', 'L’Himalaya'], answerIndex: 2, explanation: 'L’Aconcagua, en Argentine, est le plus haut sommet des Andes et des Amériques.', tags: ['relief', 'amérique'], sourceLabel: 'Contenu original Kizz' },
  { id: 'geo-04', topicId: 'geography', difficulty: 3, prompt: 'Quel pays est entièrement enclavé dans l’Afrique du Sud ?', choices: ['Eswatini', 'Lesotho', 'Botswana', 'Namibie'], answerIndex: 1, explanation: 'Le Lesotho est un Ã‰tat enclavé dont tout le territoire est entouré par l’Afrique du Sud.', tags: ['afrique', 'frontières'], sourceLabel: 'Contenu original Kizz' },
  { id: 'sci-01', topicId: 'science', difficulty: 1, prompt: 'Quelle planète est la plus proche du Soleil ?', choices: ['Vénus', 'Terre', 'Mercure', 'Mars'], answerIndex: 2, explanation: 'Mercure orbite à une distance moyenne d’environ 58 millions de kilomètres du Soleil.', tags: ['astronomie'], sourceLabel: 'Contenu original Kizz' },
  { id: 'sci-02', topicId: 'science', difficulty: 1, prompt: 'Quel gaz les plantes absorbent-elles principalement pour la photosynthèse ?', choices: ['Oxygène', 'Dioxyde de carbone', 'Azote', 'Hydrogène'], answerIndex: 1, explanation: 'La photosynthèse utilise notamment le dioxyde de carbone, l’eau et l’énergie lumineuse.', tags: ['biologie'], sourceLabel: 'Contenu original Kizz' },
  { id: 'sci-03', topicId: 'science', difficulty: 2, prompt: 'Quelle unité mesure la résistance électrique ?', choices: ['Le volt', 'Le watt', 'L’ohm', 'L’ampère'], answerIndex: 2, explanation: 'La résistance électrique se mesure en ohms, symbole Ω.', tags: ['physique'], sourceLabel: 'Contenu original Kizz' },
  { id: 'sci-04', topicId: 'science', difficulty: 3, prompt: 'Quel organite produit l’essentiel de l’énergie utilisable par une cellule humaine ?', choices: ['Le ribosome', 'La mitochondrie', 'Le lysosome', 'Le noyau'], answerIndex: 1, explanation: 'La mitochondrie produit l’ATP par respiration cellulaire, principale monnaie énergétique de la cellule.', tags: ['biologie', 'cellule'], sourceLabel: 'Contenu original Kizz' },
  { id: 'spo-01', topicId: 'sport', difficulty: 1, prompt: 'Combien de joueurs une équipe de football aligne-t-elle au coup d’envoi ?', choices: ['9', '10', '11', '12'], answerIndex: 2, explanation: 'Une équipe aligne onze joueurs, gardien compris.', tags: ['football'], sourceLabel: 'Contenu original Kizz' },
  { id: 'spo-02', topicId: 'sport', difficulty: 1, prompt: 'Dans quel sport marque-t-on un « essai » ?', choices: ['Le rugby', 'Le tennis', 'Le handball', 'Le hockey'], answerIndex: 0, explanation: 'Au rugby, aplatir le ballon dans l’en-but adverse permet de marquer un essai.', tags: ['rugby'], sourceLabel: 'Contenu original Kizz' },
  { id: 'spo-03', topicId: 'sport', difficulty: 2, prompt: 'Quelle est la distance officielle d’un marathon ?', choices: ['40 km', '41,195 km', '42,195 km', '43 km'], answerIndex: 2, explanation: 'La distance officielle du marathon est de 42,195 kilomètres.', tags: ['athlétisme'], sourceLabel: 'Contenu original Kizz' },
  { id: 'spo-04', topicId: 'sport', difficulty: 3, prompt: 'Quelle surface du Grand Chelem de Roland-Garros est utilisée ?', choices: ['Gazon', 'Dur extérieur', 'Terre battue', 'Moquette'], answerIndex: 2, explanation: 'Roland-Garros se joue sur terre battue, une surface plus lente et sensible aux effets.', tags: ['tennis'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-01', topicId: 'arts', difficulty: 1, prompt: 'Qui a peint La Nuit étoilée ?', choices: ['Claude Monet', 'Vincent van Gogh', 'Paul Cézanne', 'Gustav Klimt'], answerIndex: 1, explanation: 'Vincent van Gogh peint La Nuit étoilée en 1889, durant son séjour à Saint-Rémy-de-Provence.', tags: ['peinture'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-02', topicId: 'arts', difficulty: 2, prompt: 'Ã€ quel mouvement artistique Claude Monet est-il associé ?', choices: ['Cubisme', 'Surréalisme', 'Impressionnisme', 'Fauvisme'], answerIndex: 2, explanation: 'Le tableau Impression, soleil levant de Monet a donné son nom à l’impressionnisme.', tags: ['peinture', 'mouvements'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-03', topicId: 'arts', difficulty: 2, prompt: 'Qui a composé Les Quatre Saisons ?', choices: ['Mozart', 'Vivaldi', 'Bach', 'Chopin'], answerIndex: 1, explanation: 'Antonio Vivaldi publie les quatre concertos pour violon vers 1725.', tags: ['musique'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-04', topicId: 'arts', difficulty: 3, prompt: 'Quel architecte est à l’origine de la Sagrada Família ?', choices: ['Le Corbusier', 'Antoni Gaudí', 'Frank Lloyd Wright', 'Oscar Niemeyer'], answerIndex: 1, explanation: 'Antoni Gaudí consacre une grande partie de sa vie à cette basilique barcelonaise.', tags: ['architecture'], sourceLabel: 'Contenu original Kizz' },
  { id: 'art-05', topicId: 'arts', difficulty: 1, prompt: 'Qui a peint cette œuvre ?', choices: ['Sandro Botticelli', 'Léonard de Vinci', 'Raphaël', 'Titien'], answerIndex: 1, explanation: 'La Joconde, ou Mona Lisa, est un portrait peint par Léonard de Vinci au début du XVIe siècle.', tags: ['peinture', 'renaissance', 'image'], sourceLabel: 'Wikimedia Commons — domaine public', imageAsset: 'mona-lisa', imageAlt: 'La Joconde de Léonard de Vinci', learnMoreUrl: 'https://fr.wikipedia.org/wiki/La_Joconde' },
  { id: 'art-06', topicId: 'arts', difficulty: 2, type: 'free-text', prompt: 'Quel est le nom de cette sculpture ?', acceptedAnswers: ['le penseur', 'penseur', 'the thinker'], explanation: 'Le Penseur est une sculpture d’Auguste Rodin conçue à l’origine pour La Porte de l’Enfer.', tags: ['sculpture', 'rodin', 'image'], sourceLabel: 'Didier Descouens / Wikimedia Commons — CC BY-SA 4.0', imageAsset: 'the-thinker', imageAlt: 'Le Penseur d’Auguste Rodin', learnMoreUrl: 'https://fr.wikipedia.org/wiki/Le_Penseur' },
  { id: 'art-07', topicId: 'arts', difficulty: 2, type: 'multi-text', prompt: 'Identifie cette œuvre et son artiste.', answerFields: [{ id: 'work', label: 'Nom de l’œuvre', acceptedAnswers: ['la joconde', 'joconde', 'mona lisa'] }, { id: 'artist', label: 'Artiste', acceptedAnswers: ['léonard de vinci', 'leonard de vinci', 'leonardo da vinci', 'de vinci'] }], explanation: 'La Joconde est un portrait de Léonard de Vinci conservé au musée du Louvre.', tags: ['peinture', 'renaissance', 'multi-champs'], sourceLabel: 'Wikimedia Commons — domaine public', imageAsset: 'mona-lisa', imageAlt: 'La Joconde de Léonard de Vinci', learnMoreUrl: 'https://fr.wikipedia.org/wiki/La_Joconde' },
  { id: 'lan-01', topicId: 'language', difficulty: 1, type: 'free-text', prompt: 'Comment dit-on « bonjour » en espagnol ?', acceptedAnswers: ['hola'], explanation: '« Hola » est la salutation courante en espagnol.', tags: ['espagnol', 'salutations'], sourceLabel: 'Contenu original Kizz', learnMoreUrl: 'https://fr.wikipedia.org/wiki/Espagnol' },
  { id: 'lan-02', topicId: 'language', difficulty: 1, prompt: 'Quel mot anglais signifie « bibliothèque » ?', choices: ['Bookshop', 'Library', 'Bakery', 'School'], answerIndex: 1, explanation: '« Library » signifie bibliothèque; « bookshop » désigne une librairie.', tags: ['anglais', 'faux-amis'], sourceLabel: 'Contenu original Kizz' },
  { id: 'lan-03', topicId: 'language', difficulty: 2, prompt: 'Quel est le pluriel anglais de « child » ?', choices: ['Childs', 'Childes', 'Children', 'Childrens'], answerIndex: 2, explanation: '« Children » est un pluriel irrégulier; il ne prend pas de s supplémentaire.', tags: ['anglais', 'grammaire'], sourceLabel: 'Contenu original Kizz' },
  { id: 'lan-04', topicId: 'language', difficulty: 2, prompt: 'Que signifie le mot espagnol « mañana » ?', choices: ['Hier', 'Aujourd’hui', 'Demain', 'Toujours'], answerIndex: 2, explanation: '« Mañana » signifie demain, ou matin selon le contexte et l’article employé.', tags: ['espagnol', 'vocabulaire'], sourceLabel: 'Contenu original Kizz' },
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
  ...visualRecognitionQuestions,
  ...visualHistoryQuestions,
  ...natureVisualQuestions,
  ...scienceChemistryQuestions,
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
    const rows = question.choices.map((choice, index) => ({
      choice,
      choiceImageAsset: question.choiceImageAssets?.[index],
      choiceImageAlt: question.choiceImageAlts?.[index],
    }));
    const correctRow = rows[question.answerIndex];
    const distractors = rows.filter((_, index) => index !== question.answerIndex);
    const tieBreaker = hashQuestionId(question.id);
    const targetIndex = [0, 1, 2, 3].sort((left, right) => (
      answerCounts[left] - answerCounts[right] || ((left + tieBreaker) % 4) - ((right + tieBreaker) % 4)
    ))[0];
    answerCounts[targetIndex] += 1;
    const orderedRows = [...distractors];
    orderedRows.splice(targetIndex, 0, correctRow);
    return {
      ...question,
      choices: orderedRows.map((row) => row.choice) as [string, string, string, string],
      choiceImageAssets: question.choiceImageAssets ? orderedRows.map((row) => row.choiceImageAsset ?? '') as [string, string, string, string] : undefined,
      choiceImageAlts: question.choiceImageAlts ? orderedRows.map((row) => row.choiceImageAlt ?? '') as [string, string, string, string] : undefined,
      answerIndex: targetIndex,
    };
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

