import { CefrLevel, LanguageCode, LanguageSkill, QuestionSeed } from './domain';

type LanguageEntry = {
  level: CefrLevel;
  skill: LanguageSkill;
  prompt: string;
  choices?: [string, string, string, string];
  answerIndex?: number;
  acceptedAnswers?: string[];
  explanation: string;
};

const difficulty = (level: CefrLevel): 1 | 2 | 3 => level === 'A1' || level === 'A2' ? 1 : level === 'B1' || level === 'B2' ? 2 : 3;

function acceptedLanguageAnswers(values?: string[]) {
  if (!values) return undefined;
  return [...new Set(values.flatMap((value) => {
    const plain = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return [value.toLowerCase(), plain, plain.replace(/-/g, ' '), plain.replace(/\s+/g, ' '), ...(plain.includes(' ') ? [`${plain}.`] : [])];
  }).filter((value) => value.trim().length > 0))];
}

function makeLanguageQuestions(language: LanguageCode, entries: LanguageEntry[]): QuestionSeed[] {
  return entries.map((entry, index) => ({
    id: `lang-${language}-${String(index + 1).padStart(2, '0')}`,
    topicId: 'language',
    difficulty: difficulty(entry.level),
    prompt: entry.prompt,
    type: entry.acceptedAnswers ? 'free-text' : 'multiple-choice',
    choices: entry.choices,
    answerIndex: entry.answerIndex,
    acceptedAnswers: acceptedLanguageAnswers(entry.acceptedAnswers),
    explanation: entry.explanation.length < 38 ? `${entry.explanation} Le point vise un automatisme simple du parcours ${entry.level}.` : entry.explanation,
    tags: [`lang:${language}`, `cefr:${entry.level}`, `skill:${entry.skill}`, entry.skill === 'vocabulary' ? 'frequency:core' : 'parcours-langue'],
    sourceLabel: 'Parcours CECRL Kizz',
  }));
}

export const dedicatedLanguageQuestions: QuestionSeed[] = [
  ...makeLanguageQuestions('es', [
    { level: 'A1', skill: 'vocabulary', prompt: 'Que signifie « agua » ?', choices: ['Pain', 'Eau', 'Maison', 'Rue'], answerIndex: 1, explanation: 'Agua est un mot très fréquent qui signifie eau.' },
    { level: 'A1', skill: 'reading', prompt: '« Me llamo Ana y vivo en Madrid. » Où vit Ana ?', choices: ['À Séville', 'À Madrid', 'À Rome', 'À Berlin'], answerIndex: 1, explanation: '« Vivo en Madrid » signifie « je vis à Madrid ».' },
    { level: 'A1', skill: 'writing', prompt: 'Écris « merci » en espagnol.', acceptedAnswers: ['gracias'], explanation: 'Gracias est la formule usuelle pour remercier.' },
    { level: 'A1', skill: 'culture', prompt: 'Quelle ville est la capitale de l’Espagne ?', choices: ['Barcelone', 'Madrid', 'Valence', 'Séville'], answerIndex: 1, explanation: 'Madrid est la capitale politique et la ville la plus peuplée d’Espagne.' },
    { level: 'A2', skill: 'vocabulary', prompt: 'Que signifie « todavía » ?', choices: ['Toujours / encore', 'Jamais', 'Peut-être', 'Hier'], answerIndex: 0, explanation: 'Todavía signifie encore ou toujours selon le contexte.' },
    { level: 'A2', skill: 'reading', prompt: '« El tren sale a las ocho, pero llega a las diez. » À quelle heure arrive le train ?', choices: ['À 8 h', 'À 9 h', 'À 10 h', 'À 12 h'], answerIndex: 2, explanation: '« Llega a las diez » indique une arrivée à dix heures.' },
    { level: 'A2', skill: 'writing', prompt: 'Traduis « Je veux un café » en espagnol.', acceptedAnswers: ['quiero un café', 'quiero un cafe', 'yo quiero un café', 'yo quiero un cafe'], explanation: 'Quiero est la première personne du verbe querer au présent.' },
    { level: 'A2', skill: 'culture', prompt: 'Comment appelle-t-on les petites portions servies dans les bars espagnols ?', choices: ['Tapas', 'Gelati', 'Bretzels', 'Mezze'], answerIndex: 0, explanation: 'Les tapas sont de petites préparations partagées ou servies avec une boisson.' },
    { level: 'B1', skill: 'vocabulary', prompt: 'Dans « echar de menos », que fait la personne ?', choices: ['Elle oublie', 'Quelqu’un lui manque', 'Elle renvoie', 'Elle réduit'], answerIndex: 1, explanation: 'Echar de menos signifie ressentir le manque de quelqu’un ou quelque chose.' },
    { level: 'B1', skill: 'reading', prompt: '« Aunque llovía, decidimos salir. » Pourquoi la sortie est-elle remarquable ?', choices: ['Il faisait beau', 'Ils sont sortis malgré la pluie', 'Ils ont oublié de sortir', 'La pluie a cessé'], answerIndex: 1, explanation: 'Aunque introduit ici une concession : ils sortent malgré la pluie.' },
    { level: 'B1', skill: 'writing', prompt: 'Complète : « Ayer ___ al cine. » (ir, nosotros)', acceptedAnswers: ['fuimos'], explanation: 'Fuimos est le prétérit de ir à la première personne du pluriel.' },
    { level: 'B1', skill: 'culture', prompt: 'Quel auteur espagnol a créé Don Quichotte ?', choices: ['Cervantes', 'Lorca', 'Neruda', 'Borges'], answerIndex: 0, explanation: 'Miguel de Cervantes publie les deux parties de Don Quichotte au XVIIe siècle.' },
    { level: 'B2', skill: 'vocabulary', prompt: 'Quel sens a « sin embargo » ?', choices: ['Par conséquent', 'Cependant', 'En plus', 'À condition que'], answerIndex: 1, explanation: 'Sin embargo est un connecteur d’opposition équivalent à cependant.' },
    { level: 'B2', skill: 'reading', prompt: '« De haberlo sabido, no habría venido. » Quelle idée exprime la phrase ?', choices: ['Un projet futur', 'Un regret hypothétique passé', 'Une habitude', 'Un ordre'], answerIndex: 1, explanation: 'La structure évoque une condition passée irréalisée et sa conséquence.' },
    { level: 'B2', skill: 'writing', prompt: 'Complète : « Espero que ___ mañana. » (venir, tú)', acceptedAnswers: ['vengas'], explanation: 'Après esperar que, le souhait appelle ici le subjonctif présent : vengas.' },
    { level: 'B2', skill: 'culture', prompt: 'Dans quelle ville se déroule la fête de San Fermín ?', choices: ['Bilbao', 'Pampelune', 'Grenade', 'Tolède'], answerIndex: 1, explanation: 'Les fêtes de San Fermín et leurs encierros ont lieu à Pampelune.' },
    { level: 'C1', skill: 'vocabulary', prompt: 'Que signifie « soslayar un problema » ?', choices: ['L’exagérer', 'L’éluder', 'Le résoudre', 'Le documenter'], answerIndex: 1, explanation: 'Soslayar signifie éviter ou éluder une difficulté.' },
    { level: 'C1', skill: 'reading', prompt: '« No por mucho madrugar amanece más temprano. » Quel message porte ce proverbe ?', choices: ['Se lever tôt garantit tout', 'On ne peut pas forcer le rythme des choses', 'La nuit est trop courte', 'Il faut travailler la nuit'], answerIndex: 1, explanation: 'Le proverbe rappelle que certains processus ne peuvent pas être accélérés par la seule volonté.' },
    { level: 'C1', skill: 'writing', prompt: 'Complète : « Por muy difícil que ___, lo intentaré. » (ser)', acceptedAnswers: ['sea'], explanation: 'La concession hypothétique « por muy… que » appelle le subjonctif sea.' },
    { level: 'C1', skill: 'culture', prompt: 'Quel mouvement littéraire réunit notamment Lorca et Alberti ?', choices: ['Génération de 27', 'Génération de 98', 'Modernisme catalan', 'Boom latino-américain'], answerIndex: 0, explanation: 'La Génération de 27 rassemble des poètes espagnols autour d’un hommage à Góngora.' },
  ]),
  ...makeLanguageQuestions('de', [
    { level: 'A1', skill: 'vocabulary', prompt: 'Que signifie « Haus » ?', choices: ['Voiture', 'Maison', 'École', 'Jardin'], answerIndex: 1, explanation: 'Haus est le mot allemand courant pour maison.' },
    { level: 'A1', skill: 'reading', prompt: '« Ich heiße Tom und komme aus Berlin. » D’où vient Tom ?', choices: ['De Munich', 'De Vienne', 'De Berlin', 'De Bonn'], answerIndex: 2, explanation: '« Ich komme aus Berlin » signifie « je viens de Berlin ».' },
    { level: 'A1', skill: 'writing', prompt: 'Écris « bonjour » en allemand.', acceptedAnswers: ['hallo', 'guten tag'], explanation: 'Hallo est informel ; Guten Tag convient dans un registre plus neutre.' },
    { level: 'A1', skill: 'culture', prompt: 'Quelle ville est la capitale de l’Allemagne ?', choices: ['Francfort', 'Berlin', 'Munich', 'Hambourg'], answerIndex: 1, explanation: 'Berlin est redevenue capitale de l’Allemagne réunifiée.' },
    { level: 'A2', skill: 'vocabulary', prompt: 'Que signifie « einkaufen » ?', choices: ['Faire les courses', 'Dormir', 'Voyager', 'Cuisiner'], answerIndex: 0, explanation: 'Einkaufen est un verbe séparable qui signifie faire des achats.' },
    { level: 'A2', skill: 'reading', prompt: '« Der Laden ist montags geschlossen. » Quand le magasin est-il fermé ?', choices: ['Le dimanche', 'Le lundi', 'Le mardi', 'Tous les matins'], answerIndex: 1, explanation: 'Montags signifie le lundi ou tous les lundis.' },
    { level: 'A2', skill: 'writing', prompt: 'Traduis « J’ai un frère » en allemand.', acceptedAnswers: ['ich habe einen bruder'], explanation: 'Bruder est masculin et prend einen à l’accusatif.' },
    { level: 'A2', skill: 'culture', prompt: 'Quelle fête populaire est associée à Munich ?', choices: ['Oktoberfest', 'Carnaval de Venise', 'San Fermín', 'Fallas'], answerIndex: 0, explanation: 'L’Oktoberfest se tient chaque année à Munich.' },
    { level: 'B1', skill: 'vocabulary', prompt: 'Que signifie « sich entscheiden » ?', choices: ['Se souvenir', 'Décider', 'Se dépêcher', 'Se tromper'], answerIndex: 1, explanation: 'Sich entscheiden für signifie se décider pour quelque chose.' },
    { level: 'B1', skill: 'reading', prompt: '« Wegen des Streiks fährt heute kein Zug. » Pourquoi aucun train ne circule ?', choices: ['À cause de la neige', 'À cause d’une grève', 'À cause de travaux', 'Parce que c’est dimanche'], answerIndex: 1, explanation: 'Wegen des Streiks signifie à cause de la grève.' },
    { level: 'B1', skill: 'writing', prompt: 'Complète : « Gestern ___ ich lange gearbeitet. »', acceptedAnswers: ['habe'], explanation: 'Le parfait de arbeiten se forme avec haben : ich habe gearbeitet.' },
    { level: 'B1', skill: 'culture', prompt: 'Qui a écrit Faust ?', choices: ['Goethe', 'Kafka', 'Brecht', 'Hesse'], answerIndex: 0, explanation: 'Johann Wolfgang von Goethe consacre une grande partie de sa vie à Faust.' },
    { level: 'B2', skill: 'vocabulary', prompt: 'Que signifie « Voraussetzung » ?', choices: ['Conséquence', 'Condition préalable', 'Contradiction', 'Récompense'], answerIndex: 1, explanation: 'Eine Voraussetzung est une condition qui doit être remplie au préalable.' },
    { level: 'B2', skill: 'reading', prompt: '« Je mehr man übt, desto leichter wird es. » Quelle relation est exprimée ?', choices: ['Une opposition', 'Une progression corrélée', 'Une cause passée', 'Une interdiction'], answerIndex: 1, explanation: 'Je… desto… relie deux évolutions proportionnelles : plus on pratique, plus cela devient facile.' },
    { level: 'B2', skill: 'writing', prompt: 'Complète : « Wenn ich mehr Zeit hätte, ___ ich reisen. »', acceptedAnswers: ['würde', 'wuerde'], explanation: 'Le conditionnel avec würde exprime ici une conséquence hypothétique.' },
    { level: 'B2', skill: 'culture', prompt: 'Quel mouvement artistique et école fut fondé à Weimar en 1919 ?', choices: ['Bauhaus', 'Dada', 'Der Blaue Reiter', 'Sécession'], answerIndex: 0, explanation: 'Walter Gropius fonde le Bauhaus à Weimar en 1919.' },
    { level: 'C1', skill: 'vocabulary', prompt: 'Que signifie « etwas in Kauf nehmen » ?', choices: ['Acheter au rabais', 'Accepter un inconvénient', 'Annuler un contrat', 'Faire un bénéfice'], answerIndex: 1, explanation: 'L’expression signifie accepter consciemment une conséquence négative.' },
    { level: 'C1', skill: 'reading', prompt: '« Das Vorhaben steht und fällt mit der Finanzierung. » Que comprend-on ?', choices: ['Le financement est secondaire', 'La réussite dépend entièrement du financement', 'Le projet est déjà abandonné', 'Le budget est excédentaire'], answerIndex: 1, explanation: 'Mit etwas stehen und fallen signifie dépendre entièrement de cette chose.' },
    { level: 'C1', skill: 'writing', prompt: 'Complète : « Er tut so, als ___ er alles. » (wissen)', acceptedAnswers: ['wüsste', 'wuesste'], explanation: 'Als ob ou als avec une comparaison irréelle appelle le Konjunktiv II : wüsste.' },
    { level: 'C1', skill: 'culture', prompt: 'Quel concept désigne le travail allemand de confrontation au passé nazi ?', choices: ['Vergangenheitsbewältigung', 'Wirtschaftswunder', 'Zeitgeist', 'Weltschmerz'], answerIndex: 0, explanation: 'Vergangenheitsbewältigung désigne le processus critique de confrontation et de mémoire du passé.' },
  ]),
  ...makeLanguageQuestions('it', [
    { level: 'A1', skill: 'vocabulary', prompt: 'Que signifie « pane » ?', choices: ['Pain', 'Pâtes', 'Poisson', 'Pomme'], answerIndex: 0, explanation: 'Pane est le mot italien très fréquent pour pain.' },
    { level: 'A1', skill: 'reading', prompt: '« Mi chiamo Luca e abito a Roma. » Où habite Luca ?', choices: ['À Milan', 'À Rome', 'À Naples', 'À Turin'], answerIndex: 1, explanation: '« Abito a Roma » signifie « j’habite à Rome ».' },
    { level: 'A1', skill: 'writing', prompt: 'Écris « merci » en italien.', acceptedAnswers: ['grazie'], explanation: 'Grazie permet de remercier une ou plusieurs personnes.' },
    { level: 'A1', skill: 'culture', prompt: 'Quelle ville est la capitale de l’Italie ?', choices: ['Milan', 'Rome', 'Florence', 'Venise'], answerIndex: 1, explanation: 'Rome est la capitale de l’Italie depuis 1871.' },
    { level: 'A2', skill: 'vocabulary', prompt: 'Que signifie « spesso » ?', choices: ['Rarement', 'Souvent', 'Jamais', 'Tard'], answerIndex: 1, explanation: 'Spesso est un adverbe de fréquence signifiant souvent.' },
    { level: 'A2', skill: 'reading', prompt: '« Il museo apre alle nove e chiude alle cinque. » Quand ouvre le musée ?', choices: ['À 5 h', 'À 8 h', 'À 9 h', 'À 10 h'], answerIndex: 2, explanation: '« Apre alle nove » signifie qu’il ouvre à neuf heures.' },
    { level: 'A2', skill: 'writing', prompt: 'Traduis « Je voudrais une pizza » en italien.', acceptedAnswers: ['vorrei una pizza'], explanation: 'Vorrei est le conditionnel de volere, couramment utilisé pour une demande polie.' },
    { level: 'A2', skill: 'culture', prompt: 'Dans quelle ville se trouve la galerie des Offices ?', choices: ['Rome', 'Florence', 'Bologne', 'Palerme'], answerIndex: 1, explanation: 'La galerie des Offices est un grand musée de la Renaissance à Florence.' },
    { level: 'B1', skill: 'vocabulary', prompt: 'Que signifie « accorgersi » ?', choices: ['S’apercevoir', 'S’endormir', 'S’approcher', 'S’excuser'], answerIndex: 0, explanation: 'Accorgersi di signifie se rendre compte de quelque chose.' },
    { level: 'B1', skill: 'reading', prompt: '« Nonostante il traffico, siamo arrivati in orario. » Que s’est-il passé ?', choices: ['Ils sont arrivés en retard', 'Ils sont arrivés à l’heure malgré la circulation', 'Ils ont évité le voyage', 'La route était vide'], answerIndex: 1, explanation: 'Nonostante introduit une concession : malgré la circulation, ils étaient à l’heure.' },
    { level: 'B1', skill: 'writing', prompt: 'Complète : « Ieri ___ al mercato. » (andare, io)', acceptedAnswers: ['sono andato', 'sono andata'], explanation: 'Andare forme le passato prossimo avec essere et accorde le participe avec le sujet.' },
    { level: 'B1', skill: 'culture', prompt: 'Qui a écrit La Divine Comédie ?', choices: ['Dante', 'Pétrarque', 'Boccace', 'Leopardi'], answerIndex: 0, explanation: 'Dante Alighieri compose la Divine Comédie au début du XIVe siècle.' },
    { level: 'B2', skill: 'vocabulary', prompt: 'Que signifie « tuttavia » ?', choices: ['Par conséquent', 'Cependant', 'D’ailleurs', 'Autrefois'], answerIndex: 1, explanation: 'Tuttavia est un connecteur concessif équivalent à cependant.' },
    { level: 'B2', skill: 'reading', prompt: '« Se l’avessi saputo, sarei rimasto a casa. » Quelle idée est exprimée ?', choices: ['Un ordre présent', 'Un regret sur une situation passée', 'Une habitude', 'Une certitude future'], answerIndex: 1, explanation: 'La phrase exprime une condition irréalisée dans le passé et son résultat hypothétique.' },
    { level: 'B2', skill: 'writing', prompt: 'Complète : « Penso che lui ___ ragione. » (avere)', acceptedAnswers: ['abbia'], explanation: 'Après penso che, l’italien soigné emploie ici le subjonctif présent abbia.' },
    { level: 'B2', skill: 'culture', prompt: 'Quel réalisateur italien a signé La dolce vita ?', choices: ['Federico Fellini', 'Luchino Visconti', 'Roberto Rossellini', 'Vittorio De Sica'], answerIndex: 0, explanation: 'Federico Fellini réalise La dolce vita, sorti en 1960.' },
    { level: 'C1', skill: 'vocabulary', prompt: 'Que signifie « prendere atto » ?', choices: ['Prendre des notes', 'Prendre acte / constater', 'Signer un acte', 'Apprendre par cœur'], answerIndex: 1, explanation: 'Prendere atto di signifie reconnaître ou constater officiellement un fait.' },
    { level: 'C1', skill: 'reading', prompt: '« Chi troppo vuole nulla stringe. » Quel message porte ce proverbe ?', choices: ['L’ambition garantit le succès', 'À trop vouloir, on risque de ne rien obtenir', 'Il faut agir vite', 'L’union fait la force'], answerIndex: 1, explanation: 'Le proverbe met en garde contre une ambition dispersée ou excessive.' },
    { level: 'C1', skill: 'writing', prompt: 'Complète : « Benché ___ stanco, continuò. » (essere)', acceptedAnswers: ['fosse'], explanation: 'Benché appelle le subjonctif ; fosse est ici l’imparfait du subjonctif.' },
    { level: 'C1', skill: 'culture', prompt: 'Quel mouvement littéraire italien est associé à Marinetti ?', choices: ['Futurisme', 'Vérisme', 'Hermétisme', 'Décadentisme'], answerIndex: 0, explanation: 'Filippo Tommaso Marinetti publie en 1909 le manifeste fondateur du futurisme.' },
  ]),
];
