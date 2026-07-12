import { Difficulty, QuestionSeed } from './domain';

type Entry = [prompt: string, choices: [string, string, string, string], answerIndex: number, explanation: string];

function build(topicId: string, prefix: string, difficulty: Difficulty, entries: Entry[]): QuestionSeed[] {
  return entries.map(([prompt, choices, answerIndex, explanation], index) => ({
    id: `x-${prefix}-${difficulty}-${String(index + 1).padStart(2, '0')}`,
    topicId,
    difficulty,
    prompt,
    choices,
    answerIndex,
    explanation: explanation.length < 38 ? `${explanation} Ce repere court aide a automatiser la reconnaissance dans le theme.` : explanation,
    tags: ['pack-etendu', topicId],
    sourceLabel: 'Sélection éditoriale Kizz',
    learnMoreUrl: `https://fr.wikipedia.org/w/index.php?search=${encodeURIComponent(prompt)}`,
  }));
}

export const expandedQuestions: QuestionSeed[] = [
  ...build('history', 'his', 1, [
    ['Quel peuple antique a fondé Rome selon la tradition ?', ['Les Grecs', 'Les Romains', 'Les Égyptiens', 'Les Perses'], 1, 'La tradition romaine attribue la fondation de Rome à Romulus en 753 av. J.-C.'],
    ['Qui fut le premier empereur romain ?', ['Auguste', 'Néron', 'César', 'Trajan'], 0, 'Octave reçoit le titre d’Auguste en 27 av. J.-C. et inaugure le principat.'],
    ['Quel navigateur atteint les Amériques en 1492 ?', ['Magellan', 'Vasco de Gama', 'Christophe Colomb', 'James Cook'], 2, 'Christophe Colomb atteint les Caraïbes en octobre 1492 au service de la Castille.'],
    ['Quel roi français était surnommé le Roi-Soleil ?', ['Louis IX', 'Louis XIV', 'Henri IV', 'François Ier'], 1, 'Louis XIV utilise le Soleil comme symbole de son pouvoir et de son rayonnement.'],
  ]),
  ...build('history', 'his', 2, [
    ['Quelle cité grecque a développé une démocratie directe au Ve siècle av. J.-C. ?', ['Sparte', 'Athènes', 'Corinthe', 'Thèbes'], 1, 'À Athènes, les citoyens participaient directement à l’assemblée appelée Ecclésia.'],
    ['En quelle année Constantinople tombe-t-elle aux mains des Ottomans ?', ['1204', '1453', '1492', '1517'], 1, 'Mehmed II prend Constantinople en 1453, marquant la fin de l’Empire byzantin.'],
    ['Quelle invention de Gutenberg accélère la diffusion des livres en Europe ?', ['La boussole', 'Le papier', 'L’imprimerie à caractères mobiles', 'Le télégraphe'], 2, 'Les caractères métalliques mobiles permettent de reproduire rapidement les textes au XVe siècle.'],
    ['Quel événement déclenche directement la Première Guerre mondiale ?', ['La crise de 1929', 'L’assassinat de François-Ferdinand', 'La révolution russe', 'La bataille de Verdun'], 1, 'L’assassinat de l’archiduc à Sarajevo déclenche le jeu des alliances en 1914.'],
  ]),
  ...build('history', 'his', 3, [
    ['Quel texte anglais de 1215 limite le pouvoir royal ?', ['Bill of Rights', 'Magna Carta', 'Habeas Corpus', 'Acte de Suprématie'], 1, 'La Magna Carta impose au roi Jean sans Terre des limites reconnues par écrit.'],
    ['Quelle dynastie chinoise règne lors des voyages de Marco Polo ?', ['Han', 'Tang', 'Yuan', 'Ming'], 2, 'Marco Polo décrit la Chine dominée par les Yuan mongols de Kubilai Khan.'],
    ['Quel congrès redessine l’Europe après la chute de Napoléon Ier ?', ['Congrès de Vienne', 'Congrès de Berlin', 'Congrès de Paris', 'Congrès de La Haye'], 0, 'Le congrès de Vienne de 1814-1815 restaure un équilibre entre puissances européennes.'],
    ['Quel empire avait Tenochtitlan pour capitale ?', ['Inca', 'Maya', 'Aztèque', 'Toltèque'], 2, 'Tenochtitlan était la capitale insulaire de l’Empire aztèque, sur le site de Mexico.'],
  ]),

  ...build('geography', 'geo', 1, [
    ['Quelle est la capitale de l’Australie ?', ['Sydney', 'Melbourne', 'Canberra', 'Perth'], 2, 'Canberra fut choisie comme compromis entre Sydney et Melbourne.'],
    ['Sur quel continent se trouve le désert du Sahara ?', ['Asie', 'Afrique', 'Amérique du Sud', 'Océanie'], 1, 'Le Sahara couvre une grande partie de l’Afrique du Nord.'],
    ['Quel fleuve traverse Paris ?', ['La Loire', 'Le Rhône', 'La Seine', 'La Garonne'], 2, 'La Seine traverse Paris avant de rejoindre la Manche au Havre.'],
    ['Quel pays a la forme d’une botte sur les cartes ?', ['Grèce', 'Italie', 'Portugal', 'Croatie'], 1, 'La péninsule italienne possède une silhouette caractéristique en forme de botte.'],
  ]),
  ...build('geography', 'geo', 2, [
    ['Quel détroit sépare l’Espagne du Maroc ?', ['Béring', 'Gibraltar', 'Ormuz', 'Malacca'], 1, 'Le détroit de Gibraltar relie l’Atlantique à la Méditerranée.'],
    ['Quel est le plus long fleuve d’Europe ?', ['Danube', 'Rhin', 'Volga', 'Dniepr'], 2, 'La Volga parcourt environ 3 530 km avant de se jeter dans la mer Caspienne.'],
    ['Dans quel pays se trouve le salar d’Uyuni ?', ['Chili', 'Pérou', 'Bolivie', 'Argentine'], 2, 'Le salar d’Uyuni est un immense désert de sel de l’Altiplano bolivien.'],
    ['Quelle mer borde à la fois la Jordanie et Israël ?', ['Mer Noire', 'Mer Morte', 'Mer d’Aral', 'Mer Rouge uniquement'], 1, 'La mer Morte occupe une dépression entre Israël, la Cisjordanie et la Jordanie.'],
  ]),
  ...build('geography', 'geo', 3, [
    ['Quelle capitale européenne est traversée par le Vltava ?', ['Prague', 'Vienne', 'Budapest', 'Bratislava'], 0, 'Le Vltava traverse Prague avant de rejoindre l’Elbe.'],
    ['Quel pays possède l’enclave de Cabinda ?', ['Angola', 'Congo', 'Gabon', 'Cameroun'], 0, 'Cabinda est séparée du reste de l’Angola par une bande de territoire congolais.'],
    ['Quel sommet est le point culminant de l’Afrique ?', ['Mont Kenya', 'Kilimandjaro', 'Ras Dashan', 'Toubkal'], 1, 'Le pic Uhuru du Kilimandjaro atteint 5 895 mètres en Tanzanie.'],
    ['Dans quel océan se trouve l’archipel des Kerguelen ?', ['Atlantique Nord', 'Indien austral', 'Pacifique Nord', 'Arctique'], 1, 'Les Kerguelen sont des îles françaises isolées du sud de l’océan Indien.'],
  ]),

  ...build('science', 'sci', 1, [
    ['Quelle force nous maintient au sol ?', ['Magnétisme', 'Gravitation', 'Friction', 'Pression'], 1, 'La gravitation attire les masses entre elles et nous maintient à la surface terrestre.'],
    ['Combien de pattes possède un insecte adulte ?', ['Quatre', 'Six', 'Huit', 'Dix'], 1, 'Les insectes ont trois paires de pattes fixées au thorax.'],
    ['Quel organe pompe le sang dans le corps humain ?', ['Le foie', 'Le poumon', 'Le cœur', 'Le rein'], 2, 'Les contractions du cœur propulsent le sang dans la circulation.'],
    ['À quelle température l’eau pure gèle-t-elle à pression normale ?', ['0 °C', '10 °C', '-10 °C', '100 °C'], 0, 'À pression atmosphérique normale, l’équilibre eau-glace se situe à 0 °C.'],
  ]),
  ...build('science', 'sci', 2, [
    ['Quel élément chimique a pour symbole Fe ?', ['Fluor', 'Fer', 'Francium', 'Fermium'], 1, 'Fe vient du latin ferrum et désigne le fer.'],
    ['Quelle molécule porte principalement l’information génétique ?', ['ATP', 'ADN', 'Glucose', 'Collagène'], 1, 'L’ADN contient la plupart des instructions génétiques des organismes.'],
    ['Quelle particule possède une charge électrique négative ?', ['Proton', 'Neutron', 'Électron', 'Photon'], 2, 'L’électron porte une charge élémentaire négative.'],
    ['Quel scientifique formule les lois classiques du mouvement ?', ['Newton', 'Darwin', 'Pasteur', 'Mendel'], 0, 'Isaac Newton expose trois lois du mouvement dans les Principia en 1687.'],
  ]),
  ...build('science', 'sci', 3, [
    ['Quel nombre quantique décrit la forme d’une orbitale atomique ?', ['Principal', 'Azimutal', 'Magnétique uniquement', 'De spin uniquement'], 1, 'Le nombre quantique azimutal l détermine le type et la forme générale de l’orbitale.'],
    ['Quel processus produit deux cellules filles génétiquement proches ?', ['Méiose', 'Mitose', 'Transcription', 'Traduction'], 1, 'La mitose répartit les chromosomes dupliqués entre deux cellules filles.'],
    ['Quelle loi relie pression et volume d’un gaz à température constante ?', ['Loi de Boyle-Mariotte', 'Loi d’Ohm', 'Loi de Hooke', 'Loi de Hubble'], 0, 'La loi de Boyle-Mariotte indique que le produit pression-volume reste constant.'],
    ['Quel boson est associé au mécanisme donnant leur masse à des particules ?', ['Photon', 'Gluon', 'Boson de Higgs', 'Graviton'], 2, 'Le champ de Higgs et son boson participent à l’origine de la masse de particules élémentaires.'],
  ]),

  ...build('sport', 'spo', 1, [
    ['Combien de points vaut un panier derrière la ligne dédiée au basket ?', ['Un', 'Deux', 'Trois', 'Quatre'], 2, 'Un tir réussi derrière la ligne à trois points rapporte trois points.'],
    ['Quel sport utilise un volant ?', ['Squash', 'Badminton', 'Tennis', 'Padel'], 1, 'Le badminton se joue avec une raquette et un volant.'],
    ['Dans quel sport porte-t-on souvent un kimono appelé judogi ?', ['Judo', 'Cyclisme', 'Escrime', 'Aviron'], 0, 'Le judogi est la tenue robuste utilisée pour la pratique du judo.'],
    ['Combien d’anneaux comporte le symbole olympique ?', ['Quatre', 'Cinq', 'Six', 'Sept'], 1, 'Le symbole olympique est formé de cinq anneaux entrelacés.'],
  ]),
  ...build('sport', 'spo', 2, [
    ['Quelle nation a remporté la première Coupe du monde de football en 1930 ?', ['Brésil', 'Uruguay', 'Italie', 'Argentine'], 1, 'L’Uruguay remporte à domicile la première Coupe du monde contre l’Argentine.'],
    ['Quelle épreuve combine natation, cyclisme et course ?', ['Décathlon', 'Triathlon', 'Pentathlon', 'Heptathlon'], 1, 'Le triathlon enchaîne natation, cyclisme puis course à pied.'],
    ['Au tennis, comment appelle-t-on un score de 40-40 ?', ['Égalité', 'Avantage', 'Jeu blanc', 'Tie-break'], 0, 'À 40-40, le score est annoncé égalité et il faut ensuite deux points d’écart.'],
    ['Combien de joueurs sont sur le terrain dans une équipe de handball ?', ['Cinq', 'Six', 'Sept', 'Huit'], 2, 'Une équipe aligne six joueurs de champ et un gardien.'],
  ]),
  ...build('sport', 'spo', 3, [
    ['Dans quelle discipline trouve-t-on un ippon ?', ['Judo', 'Boxe anglaise', 'Lutte libre', 'Taekwondo uniquement'], 0, 'Au judo, un ippon donne immédiatement la victoire.'],
    ['Quelle distance mesure un tour de piste d’athlétisme standard ?', ['200 m', '300 m', '400 m', '500 m'], 2, 'La piste extérieure standard mesure 400 mètres à la corde.'],
    ['Quel trophée oppose historiquement les équipes masculines de golf des États-Unis et d’Europe ?', ['Ryder Cup', 'Davis Cup', 'Stanley Cup', 'America’s Cup'], 0, 'La Ryder Cup est une compétition biennale de golf par équipes.'],
    ['Au rugby à XV, quel terme anglais désigne la remise en jeu ordonnée après un en-avant ?', ['Scrum', 'Ruck', 'Maul', 'Line-out'], 0, 'Le scrum correspond à la mêlée ordonnée, notamment après certains en-avants.'],
  ]),

  ...build('arts', 'art', 1, [
    ['Qui a peint Guernica ?', ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Henri Matisse'], 0, 'Picasso peint Guernica en 1937 en réaction au bombardement de la ville basque.'],
    ['Dans quel musée peut-on voir La Joconde ?', ['Prado', 'Louvre', 'Orsay', 'Uffizi'], 1, 'La Joconde est exposée au musée du Louvre à Paris.'],
    ['Quel instrument possède généralement 88 touches ?', ['Violon', 'Piano', 'Flûte', 'Harpe'], 1, 'Le piano moderne standard comporte 52 touches blanches et 36 noires.'],
    ['Qui a sculpté David à Florence ?', ['Michel-Ange', 'Rodin', 'Bernin', 'Donatello uniquement'], 0, 'Michel-Ange réalise son monumental David en marbre entre 1501 et 1504.'],
  ]),
  ...build('arts', 'art', 2, [
    ['Quel peintre est célèbre pour ses montres molles ?', ['Dalí', 'Magritte', 'Kandinsky', 'Munch'], 0, 'Les montres molles apparaissent dans La Persistance de la mémoire de Salvador Dalí.'],
    ['Quel compositeur devient sourd à la fin de sa vie ?', ['Beethoven', 'Vivaldi', 'Ravel', 'Debussy'], 0, 'La surdité de Beethoven progresse alors qu’il continue de composer des œuvres majeures.'],
    ['À quel mouvement appartient Piet Mondrian ?', ['De Stijl', 'Baroque', 'Romantisme', 'Rococo'], 0, 'Mondrian est une figure de De Stijl et de l’abstraction géométrique.'],
    ['Qui a peint Le Cri ?', ['Edvard Munch', 'Gustav Klimt', 'Egon Schiele', 'Paul Klee'], 0, 'Edvard Munch crée plusieurs versions du Cri à partir de 1893.'],
  ]),
  ...build('arts', 'art', 3, [
    ['Quel artiste est associé au suprématisme ?', ['Kasimir Malevitch', 'Marcel Duchamp', 'Paul Gauguin', 'Giorgio de Chirico'], 0, 'Malevitch fonde le suprématisme, centré sur des formes géométriques élémentaires.'],
    ['Qui compose l’opéra Wozzeck ?', ['Alban Berg', 'Gustav Mahler', 'Anton Bruckner', 'Richard Strauss'], 0, 'Alban Berg compose Wozzeck, œuvre majeure de l’opéra du XXe siècle.'],
    ['Quel sculpteur réalise L’Extase de sainte Thérèse ?', ['Le Bernin', 'Canova', 'Donatello', 'Brancusi'], 0, 'Le Bernin réalise ce groupe baroque pour la chapelle Cornaro à Rome.'],
    ['Quelle technique consiste à peindre sur un enduit frais ?', ['Fresque', 'Tempera', 'Gravure', 'Encaustique'], 0, 'La fresque fixe les pigments dans l’enduit humide pendant son séchage.'],
  ]),

  ...build('language', 'lan', 1, [
    ['Que signifie « thank you » en français ?', ['Bonjour', 'Merci', 'Pardon', 'Au revoir'], 1, 'Thank you est la formule anglaise courante pour remercier.'],
    ['Comment dit-on « oui » en allemand ?', ['Nein', 'Ja', 'Bitte', 'Danke'], 1, 'Ja signifie oui en allemand.'],
    ['Quel mot espagnol signifie « maison » ?', ['Casa', 'Mesa', 'Calle', 'Silla'], 0, 'Casa désigne une maison ou un foyer en espagnol.'],
    ['Quel est l’article anglais devant « apple » ?', ['A', 'An', 'Thee', 'One'], 1, 'On emploie an devant le son vocalique initial de apple.'],
  ]),
  ...build('language', 'lan', 2, [
    ['Quel est le prétérit anglais de « go » ?', ['Goed', 'Gone', 'Went', 'Goes'], 2, 'Went est la forme irrégulière du prétérit de go.'],
    ['Que signifie l’italien « buongiorno » ?', ['Bonne nuit', 'Bonjour', 'Merci', 'À bientôt'], 1, 'Buongiorno est une salutation italienne utilisée dans la journée.'],
    ['Quel mot est un faux ami anglais de « actuellement » ?', ['Actually', 'Currently', 'Eventually', 'Nowadays'], 0, 'Actually signifie en réalité, tandis que currently signifie actuellement.'],
    ['Comment forme-t-on généralement le pluriel en espagnol après une voyelle ?', ['Avec -s', 'Avec -en', 'Sans changement', 'Avec -i'], 0, 'La plupart des noms espagnols terminés par une voyelle prennent un s au pluriel.'],
  ]),
  ...build('language', 'lan', 3, [
    ['Quel cas allemand marque généralement le complément d’objet direct ?', ['Nominatif', 'Accusatif', 'Datif', 'Génitif'], 1, 'L’accusatif marque notamment le complément d’objet direct en allemand.'],
    ['Quel temps espagnol correspond à « he comido » ?', ['Prétérit parfait composé', 'Imparfait', 'Futur', 'Subjonctif imparfait'], 0, 'He comido est formé de haber au présent et du participe passé.'],
    ['En anglais, quelle proposition contient un conditionnel irréel présent ?', ['If I were you', 'If I am you', 'If I will be you', 'If I was tomorrow'], 0, 'If I were you emploie le prétérit modal pour une situation hypothétique.'],
    ['Quel système d’écriture est utilisé pour le japonais avec les kanji ?', ['Deux syllabaires kana', 'L’alphabet cyrillique', 'Le devanagari', 'Le hangul'], 0, 'Le japonais combine les kanji avec les syllabaires hiragana et katakana.'],
  ]),

  ...build('nature', 'nat', 1, [
    ['Quel animal est le plus grand mammifère vivant ?', ['Éléphant', 'Baleine bleue', 'Girafe', 'Requin-baleine'], 1, 'La baleine bleue peut dépasser 25 mètres et 100 tonnes.'],
    ['Comment appelle-t-on un animal qui mange surtout des plantes ?', ['Carnivore', 'Herbivore', 'Omnivore', 'Détritivore'], 1, 'Un herbivore tire l’essentiel de son alimentation des végétaux.'],
    ['Quel arbre produit des glands ?', ['Chêne', 'Hêtre', 'Érable', 'Bouleau'], 0, 'Le gland est le fruit caractéristique des chênes.'],
    ['Quelle saison suit l’été dans l’hémisphère Nord ?', ['Printemps', 'Automne', 'Hiver', 'Mousson'], 1, 'L’automne commence après l’été et avant l’hiver.'],
  ]),
  ...build('nature', 'nat', 2, [
    ['Quel animal réalise la plus longue migration connue parmi les oiseaux ?', ['Sterne arctique', 'Albatros', 'Cigogne', 'Manchot'], 0, 'La sterne arctique voyage chaque année entre les régions arctiques et antarctiques.'],
    ['Quel pigment donne leur couleur verte aux plantes ?', ['Mélanine', 'Chlorophylle', 'Kératine', 'Hémoglobine'], 1, 'La chlorophylle absorbe la lumière nécessaire à la photosynthèse.'],
    ['Comment nomme-t-on la relation bénéfique aux deux espèces ?', ['Parasitisme', 'Mutualisme', 'Prédation', 'Compétition'], 1, 'Dans un mutualisme, chaque partenaire retire un bénéfice de l’association.'],
    ['Quel milieu mélange eau douce et eau salée à l’embouchure d’un fleuve ?', ['Estuaire', 'Glacier', 'Dune', 'Plateau'], 0, 'Un estuaire est soumis aux apports fluviaux et aux marées marines.'],
  ]),
  ...build('nature', 'nat', 3, [
    ['Quel terme désigne les animaux actifs au crépuscule ?', ['Diurnes', 'Nocturnes', 'Crépusculaires', 'Sessiles'], 2, 'Les espèces crépusculaires sont surtout actives à l’aube et au coucher du soleil.'],
    ['Quel embranchement regroupe les étoiles de mer ?', ['Mollusques', 'Échinodermes', 'Cnidaires', 'Annélides'], 1, 'Les étoiles de mer sont des échinodermes à symétrie radiaire adulte.'],
    ['Quel processus transforme l’azote atmosphérique en formes assimilables ?', ['Fixation de l’azote', 'Osmose', 'Fermentation', 'Sublimation'], 0, 'Des microorganismes fixateurs convertissent le diazote en composés azotés utilisables.'],
    ['Quel étage forestier est formé par la cime des grands arbres ?', ['Litière', 'Canopée', 'Sous-bois', 'Rhizosphère'], 1, 'La canopée constitue la couche supérieure continue d’une forêt.'],
  ]),

  ...build('technology', 'tech', 1, [
    ['Que signifie l’abréviation GPS ?', ['Global Positioning System', 'General Phone Service', 'Graphic Power Signal', 'Global Private Server'], 0, 'Le Global Positioning System calcule une position grâce à des satellites.'],
    ['Quel composant affiche les images d’un ordinateur ?', ['Écran', 'Clavier', 'Routeur', 'Microphone'], 0, 'L’écran convertit le signal vidéo en une image visible.'],
    ['À quoi sert un mot de passe ?', ['Identifier un fichier', 'Protéger un accès', 'Accélérer le Wi-Fi', 'Refroidir le processeur'], 1, 'Un mot de passe aide à vérifier l’identité d’une personne avant un accès.'],
    ['Quel appareil distribue souvent le Wi-Fi à domicile ?', ['Routeur', 'Scanner', 'Projecteur', 'Onduleur'], 0, 'Le routeur relie le réseau local à Internet et peut fournir un accès Wi-Fi.'],
  ]),
  ...build('technology', 'tech', 2, [
    ['Que chiffre HTTPS entre un navigateur et un site ?', ['La communication réseau', 'L’écran', 'Le processeur', 'Le clavier'], 0, 'HTTPS utilise TLS pour protéger les données échangées et authentifier le serveur.'],
    ['Quel format est couramment utilisé pour échanger des données structurées sur le Web ?', ['JSON', 'JPEG', 'MP3', 'EXE'], 0, 'JSON représente des objets, tableaux et valeurs dans un format textuel.'],
    ['Que fait une sauvegarde incrémentielle ?', ['Copie tout à chaque fois', 'Copie les changements depuis la dernière sauvegarde', 'Supprime les doublons seulement', 'Compresse la mémoire vive'], 1, 'Elle ne copie que les données modifiées depuis la précédente sauvegarde.'],
    ['Quel composant exécute principalement les instructions d’un programme ?', ['CPU', 'SSD', 'Écran', 'Modem'], 0, 'Le processeur central exécute les instructions et coordonne les calculs.'],
  ]),
  ...build('technology', 'tech', 3, [
    ['Quel protocole traduit généralement un nom de domaine en adresse IP ?', ['DNS', 'SSH', 'SMTP', 'NTP'], 0, 'Le DNS résout les noms lisibles en adresses utilisées sur le réseau.'],
    ['Quelle structure de données suit le principe dernier entré, premier sorti ?', ['Pile', 'File', 'Arbre', 'Graphe'], 0, 'Une pile suit le principe LIFO : le dernier élément ajouté sort en premier.'],
    ['Quel type de chiffrement utilise une paire de clés publique et privée ?', ['Asymétrique', 'Symétrique', 'Par substitution simple', 'Compression sans perte'], 0, 'La cryptographie asymétrique sépare la clé publique de la clé privée.'],
    ['Dans une base relationnelle, quelle clé identifie une ligne de façon unique ?', ['Clé primaire', 'Clé étrangère', 'Index partiel', 'Vue'], 0, 'La clé primaire impose un identifiant unique à chaque enregistrement.'],
  ]),

  ...build('cinema', 'cin', 1, [
    ['Qui réalise Titanic sorti en 1997 ?', ['James Cameron', 'Steven Spielberg', 'Ridley Scott', 'Peter Jackson'], 0, 'James Cameron écrit et réalise Titanic, sorti en 1997.'],
    ['Quel objet récompense les lauréats des Oscars ?', ['Une statuette dorée', 'Un lion ailé', 'Une palme', 'Un ours'], 0, 'Les Academy Awards remettent une statuette surnommée Oscar.'],
    ['Comment appelle-t-on la musique composée spécialement pour un film ?', ['Bande originale', 'Générique uniquement', 'Doublage', 'Montage'], 0, 'La bande originale rassemble la musique associée au film.'],
    ['Quel métier assemble les plans tournés ?', ['Monteur', 'Décorateur', 'Cascadeur', 'Régisseur'], 0, 'Le monteur sélectionne et ordonne les prises pour construire le film.'],
  ]),
  ...build('cinema', 'cin', 2, [
    ['Qui a réalisé Le Voyage de Chihiro ?', ['Hayao Miyazaki', 'Akira Kurosawa', 'Satoshi Kon', 'Mamoru Hosoda'], 0, 'Hayao Miyazaki réalise ce film d’animation du Studio Ghibli.'],
    ['Quel film de science-fiction met en scène le vaisseau Nostromo ?', ['Alien', 'Blade Runner', 'Solaris', 'Dune'], 0, 'Le Nostromo est le remorqueur spatial de l’équipage d’Alien.'],
    ['Que mesure la focale d’un objectif ?', ['Son angle de champ', 'Le volume sonore', 'La durée du plan', 'La cadence du montage'], 0, 'La distance focale influence l’angle de champ et le grossissement apparent.'],
    ['Quel réalisateur est associé au film Les Sept Samouraïs ?', ['Akira Kurosawa', 'Yasujirō Ozu', 'Kenji Mizoguchi', 'Takeshi Kitano'], 0, 'Akira Kurosawa réalise Les Sept Samouraïs en 1954.'],
  ]),
  ...build('cinema', 'cin', 3, [
    ['Quel mouvement français est associé à Godard et Truffaut ?', ['Nouvelle Vague', 'Réalisme poétique', 'Expressionnisme', 'Dogme 95'], 0, 'La Nouvelle Vague renouvelle les formes et la production du cinéma français autour de 1960.'],
    ['Qui signe la photographie de Blade Runner 2049 ?', ['Roger Deakins', 'Emmanuel Lubezki', 'Vittorio Storaro', 'Janusz Kamiński'], 0, 'Roger Deakins reçoit un Oscar pour la photographie de Blade Runner 2049.'],
    ['Quel effet de montage rapproche deux images pour produire une idée ?', ['Effet Koulechov', 'Effet Doppler', 'Effet Vertigo', 'Effet stroboscopique'], 0, 'L’effet Koulechov montre que le sens d’un plan dépend de celui qui le précède ou le suit.'],
    ['Quel film ouvre par la découverte du mot « Rosebud » ?', ['Citizen Kane', 'Vertigo', 'Casablanca', 'Le Troisième Homme'], 0, 'Rosebud est le dernier mot de Charles Foster Kane dans Citizen Kane.'],
  ]),

  ...build('daily', 'day', 1, [
    ['Quelle unité indique généralement la puissance d’un appareil électrique ?', ['Watt', 'Litre', 'Mètre', 'Pascal'], 0, 'Le watt mesure une puissance, donc un débit d’énergie.'],
    ['Quelle couleur de feu autorise normalement le passage ?', ['Rouge', 'Orange', 'Vert', 'Bleu'], 2, 'Le feu vert autorise le passage si la voie est libre et sûre.'],
    ['Où conserve-t-on idéalement les aliments surgelés ?', ['À température ambiante', 'Au congélateur', 'Dans un placard', 'Au soleil'], 1, 'Le congélateur maintient une température adaptée à la conservation des surgelés.'],
    ['Quel document détaille les entrées et sorties d’argent prévues ?', ['Budget', 'Ordonnance', 'Plan cadastral', 'Billet'], 0, 'Un budget aide à anticiper recettes, dépenses et capacité d’épargne.'],
  ]),
  ...build('daily', 'day', 2, [
    ['Que signifie un taux annuel effectif global pour un crédit ?', ['Le coût annuel total comparable', 'La durée uniquement', 'Le capital restant uniquement', 'Le salaire requis'], 0, 'Le TAEG agrège intérêts et frais obligatoires pour comparer les crédits.'],
    ['Quelle action limite le risque de phishing ?', ['Vérifier le domaine du lien', 'Réutiliser son mot de passe', 'Ouvrir toute pièce jointe', 'Désactiver les mises à jour'], 0, 'Contrôler soigneusement l’adresse et le domaine aide à repérer une imitation.'],
    ['Pourquoi aérer brièvement un logement en hiver ?', ['Renouveler l’air sans trop refroidir les murs', 'Augmenter l’humidité', 'Chauffer la rue', 'Éteindre le compteur'], 0, 'Une aération courte évacue humidité et polluants tout en limitant les pertes.'],
    ['Que compare le prix au kilogramme ?', ['Des conditionnements différents', 'Les marques uniquement', 'Les dates uniquement', 'Les couleurs'], 0, 'Le prix unitaire permet de comparer équitablement des quantités différentes.'],
  ]),
  ...build('daily', 'day', 3, [
    ['Quel fonds sert à couvrir des dépenses imprévues ?', ['Épargne de précaution', 'Crédit renouvelable', 'Dépôt de garantie', 'Plus-value'], 0, 'L’épargne de précaution reste disponible pour les urgences et dépenses inattendues.'],
    ['Que protège principalement l’authentification à deux facteurs ?', ['L’accès au compte après un mot de passe compromis', 'La batterie', 'La vitesse réseau', 'Le stockage physique'], 0, 'Un second facteur rend le mot de passe seul insuffisant pour se connecter.'],
    ['Quel indicateur d’un appareil exprime souvent sa consommation annuelle ?', ['kWh/an', 'km/h', 'dB seulement', 'lux'], 0, 'Le kilowattheure par an estime l’énergie consommée sur une année type.'],
    ['Pourquoi laisser une distance de sécurité en voiture ?', ['Pouvoir réagir et freiner', 'Réduire la visibilité', 'Empêcher les dépassements', 'Économiser les clignotants'], 0, 'La distance absorbe le temps de réaction puis la distance de freinage.'],
  ]),

  ...build('architecture', 'arc', 1, [
    ['Dans quelle ville se trouve la tour Eiffel ?', ['Lyon', 'Paris', 'Bruxelles', 'Londres'], 1, 'La tour Eiffel est construite à Paris pour l’Exposition universelle de 1889.'],
    ['Quel matériau compose principalement le Panthéon de Rome ?', ['Béton romain', 'Bois', 'Acier', 'Verre'], 0, 'La coupole du Panthéon utilise un béton romain allégé vers son sommet.'],
    ['Comment appelle-t-on la partie supérieure triangulaire d’un temple grec ?', ['Fronton', 'Nef', 'Transept', 'Minaret'], 0, 'Le fronton couronne la façade et encadre souvent un décor sculpté.'],
    ['Quel édifice religieux possède généralement une nef ?', ['Église', 'Stade', 'Aqueduc', 'Phare'], 0, 'La nef est l’espace longitudinal principal de nombreuses églises.'],
  ]),
  ...build('architecture', 'arc', 2, [
    ['Qui a conçu la Maison sur la cascade ?', ['Frank Lloyd Wright', 'Le Corbusier', 'Mies van der Rohe', 'Alvar Aalto'], 0, 'Frank Lloyd Wright intègre Fallingwater au-dessus d’une cascade en Pennsylvanie.'],
    ['Quel ordre grec possède des chapiteaux à volutes ?', ['Ionique', 'Dorique', 'Toscan', 'Composite uniquement'], 0, 'Le chapiteau ionique se reconnaît notamment à ses deux grandes volutes.'],
    ['Quel architecte a conçu le musée Guggenheim de Bilbao ?', ['Frank Gehry', 'Norman Foster', 'Tadao Ando', 'Jean Nouvel'], 0, 'Frank Gehry dessine ses volumes courbes recouverts de titane.'],
    ['Quel élément ferme le sommet d’un arc en pierre ?', ['Clé de voûte', 'Linteau', 'Corniche', 'Pilastre'], 0, 'La clé placée au sommet bloque les voussoirs et stabilise l’arc.'],
  ]),
  ...build('architecture', 'arc', 3, [
    ['Quel architecte théorise « Less is more » ?', ['Mies van der Rohe', 'Robert Venturi', 'Gaudí', 'Viollet-le-Duc'], 0, 'La formule résume la recherche de simplicité et de rigueur de Mies van der Rohe.'],
    ['Quel traité antique de Vitruve influence durablement l’architecture ?', ['De architectura', 'La République', 'Poétique', 'Histoire naturelle'], 0, 'De architectura est le seul grand traité architectural de l’Antiquité conservé.'],
    ['Comment nomme-t-on l’espace central ouvert d’une maison romaine ?', ['Atrium', 'Abside', 'Déambulatoire', 'Loggia'], 0, 'L’atrium organise la maison romaine et apporte lumière et eau.'],
    ['Quel groupe japonais a développé le métabolisme architectural ?', ['Kenzō Tange et de jeunes architectes', 'Bauhaus', 'Arts and Crafts', 'De Stijl'], 0, 'Le métabolisme japonais imagine dès 1960 des structures évolutives et modulaires.'],
  ]),
];
