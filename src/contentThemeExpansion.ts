import { Difficulty, QuestionSeed } from './domain';

type Entry = {
  topicId: string;
  difficulty: Difficulty;
  prompt: string;
  choices: [string, string, string, string];
  answerIndex: number;
  explanation: string;
  tags: string[];
};

const sourceLabel = 'Banque thématique originale Kizz';

const entries: Entry[] = [
  { topicId: 'history', difficulty: 1, prompt: 'Repères historiques : quel événement français est associé au 14 juillet 1789 ?', choices: ['La prise de la Bastille', 'Le sacre de Napoléon', 'La Commune de Paris', 'L’appel du 18 juin'], answerIndex: 0, explanation: 'La prise de la Bastille devient un symbole fort du début de la Révolution française.', tags: ['histoire', 'france', 'repere'] },
  { topicId: 'history', difficulty: 2, prompt: 'Quel traité de 1957 fonde la Communauté économique européenne ?', choices: ['Traité de Rome', 'Traité de Lisbonne', 'Traité de Maastricht', 'Traité de Nice'], answerIndex: 0, explanation: 'Les traités de Rome de 1957 créent notamment la Communauté économique européenne.', tags: ['histoire', 'europe'] },
  { topicId: 'history', difficulty: 3, prompt: 'Quelle période japonaise commence avec la restauration impériale de 1868 ?', choices: ['Meiji', 'Edo', 'Heian', 'Kamakura'], answerIndex: 0, explanation: 'L’ère Meiji marque une modernisation rapide du Japon après la fin du shogunat Tokugawa.', tags: ['histoire', 'asie'] },

  { topicId: 'science', difficulty: 1, prompt: 'Sciences : quel organe permet principalement les échanges d’oxygène avec le sang ?', choices: ['Les poumons', 'Le foie', 'L’estomac', 'La rate'], answerIndex: 0, explanation: 'Les alvéoles pulmonaires permettent les échanges gazeux entre l’air et le sang.', tags: ['science', 'corps-humain'] },
  { topicId: 'science', difficulty: 2, prompt: 'Quelle grandeur mesure-t-on en newtons ?', choices: ['Une force', 'Une tension électrique', 'Une température', 'Une fréquence'], answerIndex: 0, explanation: 'Le newton est l’unité SI de force.', tags: ['science', 'physique'] },
  { topicId: 'science', difficulty: 3, prompt: 'Quel phénomène explique la séparation des couleurs par un prisme ?', choices: ['La dispersion', 'La sublimation', 'La fission', 'La convection'], answerIndex: 0, explanation: 'La dispersion vient du fait que les longueurs d’onde ne sont pas réfractées de la même manière.', tags: ['science', 'optique'] },

  { topicId: 'sport', difficulty: 1, prompt: 'Sport : dans quel sport utilise-t-on un panier et un ballon orange ?', choices: ['Basket-ball', 'Volley-ball', 'Baseball', 'Escrime'], answerIndex: 0, explanation: 'Le basket-ball se joue en marquant dans un panier placé en hauteur.', tags: ['sport', 'regles'] },
  { topicId: 'sport', difficulty: 2, prompt: 'Quel tournoi de tennis se joue traditionnellement sur gazon ?', choices: ['Wimbledon', 'Roland-Garros', 'US Open', 'Open d’Australie'], answerIndex: 0, explanation: 'Wimbledon est le tournoi du Grand Chelem historiquement associé au gazon.', tags: ['sport', 'tennis'] },
  { topicId: 'sport', difficulty: 3, prompt: 'En athlétisme, quelle discipline combine dix épreuves masculines ?', choices: ['Décathlon', 'Heptathlon', 'Triathlon', 'Pentathlon moderne'], answerIndex: 0, explanation: 'Le décathlon additionne les performances de dix épreuves d’athlétisme.', tags: ['sport', 'athletisme'] },

  { topicId: 'arts', difficulty: 1, prompt: 'Arts : quel musée parisien conserve La Joconde ?', choices: ['Le Louvre', 'Le Centre Pompidou', 'Le musée d’Orsay', 'Le musée Rodin'], answerIndex: 0, explanation: 'La Joconde est exposée au musée du Louvre.', tags: ['arts', 'musee'] },
  { topicId: 'arts', difficulty: 2, prompt: 'Quel mouvement pictural cherche souvent à capter les effets fugitifs de lumière ?', choices: ['Impressionnisme', 'Cubisme', 'Baroque', 'Classicisme'], answerIndex: 0, explanation: 'L’impressionnisme s’intéresse beaucoup aux variations de lumière et d’atmosphère.', tags: ['arts', 'peinture'] },
  { topicId: 'arts', difficulty: 3, prompt: 'Quel compositeur est associé au Sacre du printemps ?', choices: ['Igor Stravinsky', 'Claude Debussy', 'Gustav Mahler', 'Maurice Ravel'], answerIndex: 0, explanation: 'Le Sacre du printemps de Stravinsky marque fortement la musique du XXe siècle.', tags: ['arts', 'musique'] },

  { topicId: 'nature', difficulty: 1, prompt: 'Nature : quel animal pond des œufs mais allaite ses petits ?', choices: ['L’ornithorynque', 'Le dauphin', 'Le koala', 'Le manchot'], answerIndex: 0, explanation: 'L’ornithorynque est un mammifère monotrème : il pond des œufs et allaite ses petits.', tags: ['nature', 'animaux'] },
  { topicId: 'nature', difficulty: 2, prompt: 'Quel écosystème côtier protège souvent les littoraux tropicaux ?', choices: ['La mangrove', 'La toundra', 'La taïga', 'La steppe'], answerIndex: 0, explanation: 'Les mangroves amortissent les vagues, abritent des espèces et stabilisent les côtes.', tags: ['nature', 'ecosysteme'] },
  { topicId: 'nature', difficulty: 3, prompt: 'Quel terme désigne l’ensemble des êtres vivants d’un milieu ?', choices: ['Biocénose', 'Latitude', 'Isobare', 'Lithosphère'], answerIndex: 0, explanation: 'La biocénose regroupe les organismes vivant dans un même milieu.', tags: ['nature', 'ecologie'] },

  { topicId: 'technology', difficulty: 1, prompt: 'Technologie : quel objet permet de stocker des fichiers sur mémoire flash amovible ?', choices: ['Une clé USB', 'Un routeur', 'Un écran', 'Un capteur GPS'], answerIndex: 0, explanation: 'Une clé USB contient une mémoire flash et se branche sur un port USB.', tags: ['technologie', 'materiel'] },
  { topicId: 'technology', difficulty: 2, prompt: 'Quel terme désigne un programme qui corrige une faille ou un bug ?', choices: ['Un correctif', 'Un capteur', 'Un câble', 'Un codec audio'], answerIndex: 0, explanation: 'Un correctif, ou patch, modifie un logiciel pour résoudre un problème précis.', tags: ['technologie', 'logiciel'] },
  { topicId: 'technology', difficulty: 3, prompt: 'Quel principe sépare une application en services autonomes communiquant par API ?', choices: ['Microservices', 'Monolithe papier', 'Pixel art', 'Overclocking'], answerIndex: 0, explanation: 'Une architecture en microservices découpe une application en services spécialisés.', tags: ['technologie', 'architecture-logicielle'] },

  { topicId: 'cinema', difficulty: 1, prompt: 'Cinéma : qui choisit le cadre et la lumière avec le réalisateur ?', choices: ['Le directeur de la photographie', 'Le figurant', 'Le caissier', 'Le distributeur'], answerIndex: 0, explanation: 'Le directeur de la photographie construit l’image : lumière, optiques, exposition et ambiance.', tags: ['cinema', 'metier'] },
  { topicId: 'cinema', difficulty: 2, prompt: 'Quel terme désigne une image filmée sans coupe apparente pendant toute une scène ?', choices: ['Plan-séquence', 'Fondu noir', 'Champ-contrechamp', 'Voix off'], answerIndex: 0, explanation: 'Le plan-séquence garde une continuité de prise pour toute une action ou une scène.', tags: ['cinema', 'langage'] },
  { topicId: 'cinema', difficulty: 3, prompt: 'Quel mouvement italien d’après-guerre privilégie décors réels et sujets sociaux ?', choices: ['Néoréalisme', 'Expressionnisme', 'Nouvelle Vague', 'Cinéma direct québécois'], answerIndex: 0, explanation: 'Le néoréalisme italien filme souvent la vie quotidienne et les difficultés sociales.', tags: ['cinema', 'mouvement'] },

  { topicId: 'architecture', difficulty: 1, prompt: 'Architecture : quel élément vertical soutient souvent une toiture ou un entablement ?', choices: ['Une colonne', 'Une verrière', 'Une rampe', 'Une gargouille'], answerIndex: 0, explanation: 'La colonne est un support vertical utilisé dans de nombreuses architectures.', tags: ['architecture', 'vocabulaire'] },
  { topicId: 'architecture', difficulty: 2, prompt: 'Quel architecte est associé à la chapelle Notre-Dame-du-Haut à Ronchamp ?', choices: ['Le Corbusier', 'Antoni Gaudí', 'Jean Nouvel', 'Zaha Hadid'], answerIndex: 0, explanation: 'Le Corbusier conçoit la chapelle de Ronchamp, achevée en 1955.', tags: ['architecture', 'moderne'] },
  { topicId: 'architecture', difficulty: 3, prompt: 'Quel mouvement valorise formes simples, production artisanale et réaction à l’industrialisation ?', choices: ['Arts and Crafts', 'Brutalisme', 'High-tech', 'Déconstructivisme'], answerIndex: 0, explanation: 'Arts and Crafts naît au Royaume-Uni avec une critique de la production industrielle standardisée.', tags: ['architecture', 'mouvement'] },

  { topicId: 'economy', difficulty: 1, prompt: 'Économie : comment appelle-t-on une hausse générale et durable des prix ?', choices: ['Inflation', 'Déflation', 'Subvention', 'Exportation'], answerIndex: 0, explanation: 'L’inflation réduit le pouvoir d’achat d’une même somme d’argent.', tags: ['economie', 'prix'] },
  { topicId: 'economy', difficulty: 2, prompt: 'Quel indicateur compare le nombre de chômeurs à la population active ?', choices: ['Le taux de chômage', 'Le taux de change', 'Le taux de marge', 'Le taux de natalité'], answerIndex: 0, explanation: 'Le taux de chômage rapporte les personnes sans emploi à la population active.', tags: ['economie', 'emploi'] },
  { topicId: 'economy', difficulty: 3, prompt: 'Quel concept décrit le coût de l’option abandonnée quand on choisit ?', choices: ['Coût d’opportunité', 'Valeur faciale', 'Taux directeur', 'Actif circulant'], answerIndex: 0, explanation: 'Le coût d’opportunité mesure ce à quoi l’on renonce en choisissant une autre option.', tags: ['economie', 'decision'] },
];

export const thematicExpansionQuestions: QuestionSeed[] = entries.map((entry, index) => ({
  id: `theme-plus-${entry.topicId}-${String(index + 1).padStart(3, '0')}`,
  topicId: entry.topicId,
  difficulty: entry.difficulty,
  prompt: entry.prompt,
  choices: entry.choices,
  answerIndex: entry.answerIndex,
  explanation: entry.explanation.length < 38 ? `${entry.explanation} Ce repere donne le minimum utile pour fixer la notion.` : entry.explanation,
  tags: ['theme-expansion', ...entry.tags],
  sourceLabel,
  learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(entry.prompt)}`,
}));
