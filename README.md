# Kizz

Kizz est une application mobile de quiz hors ligne pensÃ©e comme une alternative calme au scroll infini. Aucun compte, serveur ou NAS n'est nÃ©cessaire: questions, sessions et progression vivent dans SQLite sur le tÃ©lÃ©phone.

L'interface utilise un thÃ¨me sombre sobre et ouvre directement les quiz depuis le dashboard. Les choix pÃ©dagogiques et leurs sources sont dÃ©taillÃ©s dans `docs/LEARNING-DESIGN.md`.

## FonctionnalitÃ©s actuelles

- 13 themes et 1829 questions, dont jeux TV originaux, astronomie, pays/capitales du monde, 585 questions drapeaux, regions/departements/chefs-lieux de France, mini-cours langues, economie et 72 placements geographiques sur carte vectorielle embarquee;
- accueil en trois panneaux: dashboard, quiz culture, parcours langues, avec rail pleine largeur synchronise au geste;
- theme dedie Carte France: 51 questions, dont 30 placements tactiles et 9 numeros de departements en texte libre;
- difficultÃ©, tags, explication et provenance par question;
- sessions alÃ©atoires, correction immÃ©diate et retour haptique;
- mode Endurance: difficultÃ© choisie, thÃ¨me tirÃ© au hasard, 10 questions;
- mode Infini calme: difficultÃ© constante, thÃ¨mes alÃ©atoires, sortie explicite;
- statistiques et sÃ©rie quotidienne stockÃ©es localement;
- import JSON transactionnel, dÃ©doublonnage et export partageable;
- mode admin local pour filtrer les questions, masquer une question, ajuster sa difficulte et voir les signalements;
- favoris, recherche, sessions personnalisÃ©es et rÃ©vision des derniÃ¨res erreurs;
- sous-themes selectionnables pour travailler un axe precis: drapeaux, capitales, cartes, histoire par pays/epoque, sciences, sports, arts, cinema, architecture, nature, technologie, economie et astronomie;
- composition de sessions par thÃ¨mes, difficultÃ©s et longueur;
- rÃ©ponses multi-champs avec crÃ©dit partiel et rÃ©pÃ©tition espacÃ©e locale;
- bilan de session par calibration memoire et type d'interaction;
- auto-Ã©valuation facultative de confiance, utilisÃ©e uniquement pour planifier la prochaine rÃ©vision;
- sauvegarde automatique et reprise d'une session interrompue depuis le dashboard;
- parcours Langues enrichi: mini-cours espagnol/allemand/italien, conjugaisons en texte libre et rituel "10 mots du jour";
- progression Langues separee par langue et niveau CECRL;
- audit automatique de banque avec `npm run audit:content`;
- vingt-quatre tests automatises du moteur, des brouillons, des banques et de l'integrite editoriale;
- configuration Expo pour produire un APK Android autonome.

## DÃ©marrer

```bash
npm install
npm run typecheck
npm test
npm start
```

Pour un APK de test, installer EAS CLI, se connecter Ã  Expo, puis lancer `eas build -p android --profile preview`. Le binaire produit contient l'application et sa banque initiale; il fonctionne ensuite sans rÃ©seau.

### Test USB Android

Avec le SDK Android disponible et un tÃ©lÃ©phone autorisÃ© en dÃ©bogage USB:

```powershell
$env:ANDROID_HOME='D:\Android\Sdk'
npx expo run:android --no-bundler
adb reverse tcp:8081 tcp:8081
```

Les contrÃ´les principaux exposent des identifiants ADB stables (`topic-starter`, `choice-0`, `free-text-answer`, `check-answer`, `continue-quiz`) pour les smoke tests sur appareil rÃ©el.

## Structure

- `App.tsx`: navigation locale et interface des trois parcours;
- `src/content.ts`: banque initiale versionnÃ©e;
- `src/database.ts`: schÃ©ma SQLite, import et statistiques;
- `src/domain.ts`: contrats TypeScript;
- `src/theme.ts`: tokens visuels partages;
- `docs/ROADMAP.md`: vision produit et Ã©tapes;
- `docs/IMPLEMENTATION_PHASES.md`: phases de developpement et criteres de validation;
- `docs/CODE_AUDIT.md`: audit technique court et risques prioritaires;
- `docs/SMOKE_TESTS.md`: checklist Android/ADB avant APK partageable;
- `docs/PRODUCT_NOTES.md`: backlog des apports produit;
- `docs/UX_REFACTOR_NOTES.md`: dÃ©cisions UX et garde-fous produit;
- `docs/RESEARCH.md`: veille open source et rÃ¨gles de licence.

## Ajouter du contenu

Ajouter des objets conformes Ã  `QuestionSeed` dans `src/content.ts`, avec un identifiant stable et une provenance. Au lancement, l'import SQLite est idempotent. Une future console d'Ã©dition importera le mÃªme contrat depuis JSON/CSV.

## Format d'Ã©change

L'Ã©cran **Banques** importe et exporte le format `kizz.quiz-pack` version 1. Un export de l'application constitue aussi un exemple complet du schÃ©ma. Les imports sont validÃ©s avant Ã©criture, limitÃ©s Ã  50 Mo / 100 000 questions et appliquÃ©s dans une transaction SQLite. Un identifiant de question dÃ©jÃ  prÃ©sent est conservÃ© et signalÃ© comme doublon.

Le fichier `examples/sample-pack.json` est un modÃ¨le prÃªt Ã  importer. Les thÃ¨mes ajoutÃ©s apparaissent sur l'accueil dÃ¨s la fermeture de l'Ã©cran Banques. La banque de quiz et les cartes de placement fonctionnent hors ligne avec des frontieres embarquees.

### Import CSV

L'ecran **Banques** accepte aussi un CSV avec previsualisation avant import. Colonnes minimales: `topicId`, `difficulty`, `prompt`, `explanation`.

Pour un QCM, ajouter `choiceA`, `choiceB`, `choiceC`, `choiceD` et `answer` (`A`, `B`, `C`, `D`, `0-3` ou texte exact du bon choix). Pour une reponse libre, mettre `type` a `free-text` et renseigner `acceptedAnswers` avec des valeurs separees par `|`.

Colonnes utiles optionnelles: `id`, `topicTitle`, `topicSubtitle`, `topicIcon`, `topicColor`, `tags`, `sourceLabel`, `sourceUrl`, `learnMoreUrl`.

Le fichier `examples/sample-import.csv` donne un exemple QCM + texte libre.

## Enrichir les banques


Les questions acceptent `type: "multiple-choice"` avec quatre choix, `type: "free-text"` avec une liste `acceptedAnswers`, `type: "multi-text"` avec plusieurs champs, ou `type: "map-point"` avec `geoTarget` (`lat`, `lon`, `label`, `toleranceKm`). `imageUrl` et `imageAlt` ajoutent une illustration facultative; `learnMoreUrl` ouvre la ressource proposÃ©e aprÃ¨s la correction. Sans lien fourni, Kizz gÃ©nÃ¨re une recherche WikipÃ©dia en franÃ§ais.

Le bilan de session croise maintenant score et confiance dÃ©clarÃ©e: les rÃ©ponses sont regroupÃ©es en `A revoir`, `A consolider` et `Solide`, sans mÃ©canique de rÃ©compense supplÃ©mentaire.

CrÃ©er rapidement un nouveau squelette de banque:

```bash
npm run pack:new -- "CinÃ©ma"
```

La banque initiale est maintenue localement dans `src/content*.ts`. Les anciens scripts de generation OpenTrivia ont ete retires pour garder une base editoriale originale, verifiable et en francais.


