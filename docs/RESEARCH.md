# Recherche open source

Recherche effectuée le 22 juin 2026 via l'API GitHub et les sites officiels. Ces projets servent de références produit ou de sources de données; aucun code applicatif n'est copié.

Mise a jour du 27 juin 2026: revue produit rapide de Quizlet, Kahoot, Anki, Duolingo, GeoGuessr, Seterra et Framed pour nourrir les interactions sans reprendre de contenu protege.

| Projet | Intérêt | Licence observée |
| --- | --- | --- |
| [android/topeka](https://github.com/android/topeka) | Référence Android officielle pour catégories, progression et quiz hors ligne | Apache-2.0 |
| [lohanidamodar/flutter_opentrivia](https://github.com/lohanidamodar/flutter_opentrivia) | Catégories et consommation d'une banque de trivia | Apache-2.0 |
| [desi-programmer/flutter-quizstar](https://github.com/desi-programmer/flutter-quizstar) | Parcours Flutter de quiz | MIT |
| [CodeFoxLk/quizzle_public](https://github.com/CodeFoxLk/quizzle_public) | Architecture d'une application de quiz plus large | MIT |
| [joaomanaia/newquiz](https://github.com/joaomanaia/newquiz) | Interface Jetpack Compose récente | Apache-2.0 |
| [uberspot/OpenTriviaQA](https://github.com/uberspot/OpenTriviaQA) | Banque structurée par catégories et format texte convertible | CC BY-SA 4.0 |

## Reference demandee : La Table des Savoirs - 8 novembre 2026

Site d'Emilien identifie via [ses liens officiels](https://linktr.ee/emilienliens) : [La Table des Savoirs](https://latabledessavoirs.fr/).

Observation directe du reglement public, de l'accueil et du debut du quiz Abordable, sans connexion : deux parcours de dix questions, Abordable et Expert ; saisie libre dans le quiz observe ; possibilite de passer ; reglement prevoyant des variantes de noms, articles et synonymes. Le reglement annonce dix themes par questionnaire. Le parcours Expert n'a pas ete consulte.

Apports retenus pour Kizz : rappel actif, enonces precis, separation entre reperes courants et connaissances plus specialisees, variantes de reponse pertinentes. Kizz conserve ses sessions finies, sa correction explicative et l'absence de chrono impose. Les bonus competitifs, classements mensuels et penalites ne font pas partie de ce lot.

Les [mentions legales](https://latabledessavoirs.fr/mentions-legales) reservent la banque de questions a ZQSD Productions et indiquent qu'une autorisation ecrite est necessaire pour sa reproduction. Aucun enonce ni banque du site n'est importe dans Kizz. Cette reference ne doit pas etre presentee comme une source de textes sous licence ouverte.

## Sources du lot Géographie / France — 8 novembre 2026

Trois packs officiels OpenQuizzDB, rédigés par Philippe Bresoux, ont été
téléchargés : [Bretagne](https://www.openquizzdb.org/download.php?id=219),
[Villes de France](https://www.openquizzdb.org/download.php?id=542) et
[Géo pour tous](https://www.openquizzdb.org/download.php?id=554).
Chaque fichier disponible contenait quatre questions et aucun champ de
difficulté : les niveaux du lot Kizz sont des choix éditoriaux locaux.
Dix adaptations actives, avec corrections et provenance détaillées dans
`external-data/openquizzdb/README.md`.

Les chefs-lieux et rattachements régionaux sont comparés aux fichiers du
[COG Insee 2026](https://www.insee.fr/fr/information/8740222), dont un extrait
indépendant est conservé dans `external-data/insee` pour les tests.
Repères vérifiés pour les reformulations France :
[pont d’Oléron, Département de Charente-Maritime](https://la.charente-maritime.fr/routes-transports/ponts/pont-lile-doleron),
[Tourmalet, office de tourisme](https://www.tourmaletpicdumidi.com/activites-loisirs/velo-dans-les-pyrenees/).
Les rôles institutionnels des capitales sont notamment précisés à partir du
[gouvernement suisse](https://www.aboutswitzerland.eda.admin.ch/fr/systeme-politique),
du [Parlement sri-lankais](https://www.parliament.lk/en/visit-parliament/visiting-parliament/how-to-get-here)
et de la [Knesset](https://m.knesset.gov.il/en/about/pages/building.aspx).

## Décisions MVP

- Les sources externes restent des references de structure et de licence; la banque initiale active est maintenue comme contenu Kizz original.
- Les anciens importeurs OpenTrivia ont ete retires du projet actif pour eviter une dependance editoriale inutile.
- Le dépôt `el-cms/Open-trivia-database` a été examiné mais n'affiche pas de licence dans les métadonnées GitHub.
- Topeka et Flutter OpenTrivia inspirent les frontières techniques; Kizz conserve son architecture Expo/SQLite.
- GeoGuessr, Seterra et Framed inspirent respectivement les interactions spatiales, les cartes répétables et les indices visuels progressifs.
- Quizlet confirme l'interet des cartes aller-retour: Kizz l'applique aux langues, capitales et drapeaux.
- Kahoot confirme l'interet du quiz en groupe; Kizz peut l'adapter plus tard en mode salon local, sans classement public obligatoire.
- Anki confirme la valeur du rappel espace; Kizz garde une version locale simple avant une eventuelle migration SM-2/FSRS.
- Duolingo inspire le decoupage en competences courtes; Kizz doit garder des sessions finies et eviter les series punitives.

## Recommandations retenues pour Kizz

1. Cartes aller-retour par sous-theme: deja applique aux drapeaux et aux langues; a etendre aux dates, artistes, styles et notions scientifiques.
2. Parcours "ecrire la reponse": renforcer les questions texte libre apres chaque QCM important, pour eviter la reconnaissance passive.
3. Mode salon local: s'inspirer des quiz live en gardant un usage sans compte, sans classement public et sans timer obligatoire.
4. Banque modulaire: continuer les imports CSV/JSON et ajouter un editeur local de packs plutot qu'une dependance a une banque externe.
5. Revision espacee lisible: afficher pourquoi une question revient, sans streak punitive ni notification quotidienne.
6. Progression par sous-theme: utiliser les nouveaux tags pour recommander "Histoire > Allemagne", "Geographie > Drapeaux" ou "Cinema > Langage".

## Provenance des médias

Les médias Art et Architecture sont embarqués dans `assets/questions` pour rester disponibles hors ligne. La Joconde est dans le domaine public; la photographie du Penseur est créditée Didier Descouens / Wikimedia Commons, CC BY-SA 4.0.

Le lot visuel du 27 juin 2026 ajoute 15 fichiers issus de Wikimedia Commons: tableaux en domaine public, sculptures et monuments sous licences CC compatibles ou CC0 selon les fichiers. Les crédits, URLs et licences observées sont conservés dans `assets/questions/visual-manifest.json`.

Le lot Arts/Histoire du 27 juin 2026 ajoute 425 questions simples sur peintures, mouvements, artistes et personnages historiques. Le corpus embarque 99 images generees: 49 oeuvres d'art et 50 personnages historiques issus de Wikidata/Wikimedia Commons quand une image JPEG exploitable existe. La generation est centralisee dans `scripts/build-visual-history-content.mjs`, la table Expo/Metro dans `src/generated/questionImages.ts` et la provenance dans `assets/questions/generated/visual-history-manifest.json`.

Le lot Nature du 27 juin 2026 ajoute 93 questions simples d'identification visuelle: animaux, arbres, arbustes, fleurs, fougeres et mousses. Le corpus embarque 31 photos issues de Wikimedia Commons avec provenance dans `assets/questions/nature/nature-manifest.json`; la generation est centralisee dans `scripts/build-nature-content.mjs` et la table Expo/Metro dans `src/generated/natureQuestionImages.ts`.

Le lot Monuments du 27 juin 2026 ajoute 266 questions simples de reconnaissance visuelle: monument, ville/zone, pays, style et choix d'image. Le corpus embarque 59 photos issues de Wikimedia Commons avec provenance dans `assets/questions/landmarks/landmark-manifest.json`; la generation est centralisee dans `scripts/build-landmark-content.mjs` et la table Expo/Metro dans `src/generated/landmarkQuestionImages.ts`.

## Provenance cartes offline

Les fonds cartographiques offline utilisent Natural Earth II avec relief, eau et drainages (`assets/maps/natural-earth-world.jpg` et `assets/maps/natural-earth-france.jpg`). Le monde est embarque en 21600 x 10800, la France en 3600 x 2300 avec reperes urbains; les frontieres pays et departements sont dessinees localement au-dessus depuis `src/mapBoundaries.ts`. La provenance est resumee dans `assets/maps/map-manifest.json`.

