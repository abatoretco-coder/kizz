# Kizz

Kizz est une application mobile de quiz hors ligne pensée comme une alternative calme au scroll infini. Aucun compte, serveur ou NAS n'est nécessaire: questions, sessions et progression vivent dans SQLite sur le téléphone.

L'interface utilise un thème sombre sobre et ouvre directement les quiz depuis le dashboard. Les choix pédagogiques et leurs sources sont détaillés dans `docs/LEARNING-DESIGN.md`.

## Fonctionnalités actuelles

- 13 themes et 2807 questions, dont jeux TV originaux, astronomie, chimie/tableau periodique niveau ingenieur, pays/capitales du monde, 585 questions drapeaux, regions/departements/chefs-lieux de France, reconnaissance visuelle, personnages historiques, nature visuelle, monuments, mini-cours langues, economie et 72 placements geographiques sur carte satellite offline avec frontieres embarquees;
- accueil en trois panneaux: dashboard, quiz culture, parcours langues, avec rail pleine largeur synchronise au geste et aux onglets tactiles;
- theme dedie Carte France: 51 questions, dont 30 placements tactiles et 9 numeros de departements en texte libre;
- difficulté, tags, explication et provenance par question;
- sessions aléatoires, correction immédiate et retour haptique;
- mode Endurance: difficulté choisie, thème tiré au hasard, 10 questions;
- mode Infini calme: difficulté constante, thèmes aléatoires, sortie explicite;
- statistiques et série quotidienne stockées localement;
- import JSON transactionnel, dédoublonnage et export partageable;
- mode admin local pour filtrer les questions, masquer une question, ajuster sa difficulte et voir les signalements;
- favoris, recherche, sessions personnalisées et révision des dernières erreurs;
- sous-themes selectionnables pour travailler un axe precis: drapeaux, capitales, cartes, histoire par pays/epoque, sciences, sports, arts, cinema, architecture, nature, technologie, economie et astronomie;
- questions visuelles embarquees pour tableaux, sculptures, monuments, architecture, personnages historiques, animaux, arbres et fleurs, dont 99 images generees pour Arts/Histoire, 31 photos Nature et 59 photos Monuments, avec QCM image -> reponse, reponse -> choix d'image, zoom et attribution media;
- composition de sessions par thèmes, difficultés et longueur;
- réponses multi-champs avec crédit partiel et répétition espacée locale;
- bilan de session par calibration memoire et type d'interaction;
- auto-évaluation facultative de confiance, utilisée uniquement pour planifier la prochaine révision;
- sauvegarde automatique et reprise d'une session interrompue depuis le dashboard;
- parcours Langues enrichi: mini-cours espagnol/allemand/italien, conjugaisons en texte libre et rituel "10 mots du jour";
- progression Langues separee par langue et niveau CECRL;
- audit automatique de banque avec `npm run audit:content`;
- trente-neuf tests automatises du moteur, des brouillons, des banques, des assets visuels, de l'encodage et de l'integrite editoriale;
- configuration Expo pour produire un APK Android autonome.

## Démarrer

```bash
npm install
npm run typecheck
npm test
npm start
```

Pour un APK de test, installer EAS CLI, se connecter à Expo, puis lancer `eas build -p android --profile preview`. Le binaire produit contient l'application et sa banque initiale; il fonctionne ensuite sans réseau.

### Test USB Android

Avec le SDK Android disponible et un téléphone autorisé en débogage USB:

```powershell
$env:ANDROID_HOME='D:\Android\Sdk'
npx expo run:android --no-bundler
adb reverse tcp:8081 tcp:8081
```

Les contrôles principaux exposent des identifiants ADB stables (`topic-starter`, `choice-0`, `free-text-answer`, `check-answer`, `continue-quiz`) pour les smoke tests sur appareil réel.

## Structure

- `App.tsx`: navigation locale et interface des trois parcours;
- `src/content.ts`: banque initiale versionnée;
- `src/database.ts`: schéma SQLite, import et statistiques;
- `src/domain.ts`: contrats TypeScript;
- `src/theme.ts`: tokens visuels partages;
- `docs/ACCOMPLISHMENTS.md`: état livré et vérifications récentes;
- `docs/ROADMAP.md`: vision produit et étapes;
- `docs/IMPLEMENTATION_PHASES.md`: phases de developpement et criteres de validation;
- `docs/CODE_AUDIT.md`: audit technique court et risques prioritaires;
- `docs/SMOKE_TESTS.md`: checklist Android/ADB avant APK partageable;
- `docs/PRODUCT_NOTES.md`: backlog des apports produit;
- `docs/UX_REFACTOR_NOTES.md`: décisions UX et garde-fous produit;
- `docs/RESEARCH.md`: veille open source et règles de licence.

## Ajouter du contenu

Ajouter des objets conformes à `QuestionSeed` dans `src/content.ts`, avec un identifiant stable et une provenance. Au lancement, l'import SQLite est idempotent. Une future console d'édition importera le même contrat depuis JSON/CSV.

## Format d'échange

L'écran **Banques** importe et exporte le format `kizz.quiz-pack` version 1. Un export de l'application constitue aussi un exemple complet du schéma. Les imports sont validés avant écriture, limités à 50 Mo / 100 000 questions et appliqués dans une transaction SQLite. Un identifiant de question déjà présent est conservé et signalé comme doublon.

Le fichier `examples/sample-pack.json` est un modèle prêt à importer. Les thèmes ajoutés apparaissent sur l'accueil dès la fermeture de l'écran Banques. La banque de quiz et les cartes de placement fonctionnent hors ligne avec des frontieres embarquees.

### Import CSV

L'ecran **Banques** accepte aussi un CSV avec previsualisation avant import. Colonnes minimales: `topicId`, `difficulty`, `prompt`, `explanation`.

Pour un QCM, ajouter `choiceA`, `choiceB`, `choiceC`, `choiceD` et `answer` (`A`, `B`, `C`, `D`, `0-3` ou texte exact du bon choix). Pour une reponse libre, mettre `type` a `free-text` et renseigner `acceptedAnswers` avec des valeurs separees par `|`.

Colonnes utiles optionnelles: `id`, `topicTitle`, `topicSubtitle`, `topicIcon`, `topicColor`, `tags`, `sourceLabel`, `sourceUrl`, `learnMoreUrl`.

Le fichier `examples/sample-import.csv` donne un exemple QCM + texte libre.

## Enrichir les banques


Les questions acceptent `type: "multiple-choice"` avec quatre choix, `type: "free-text"` avec une liste `acceptedAnswers`, `type: "multi-text"` avec plusieurs champs, ou `type: "map-point"` avec `geoTarget` (`lat`, `lon`, `label`, `toleranceKm`). `imageAsset`/`imageAlt` ajoutent une illustration locale; `choiceImageAssets`/`choiceImageAlts` ajoutent quatre images de réponse pour les QCM visuels. `imageUrl` reste réservé aux packs externes; la banque initiale utilise des médias embarqués pour fonctionner hors ligne. `learnMoreUrl` ouvre la ressource proposée après la correction. Sans lien fourni, Kizz génère une recherche Wikipédia en français.

Le bilan de session croise maintenant score et confiance déclarée: les réponses sont regroupées en `A revoir`, `A consolider` et `Solide`, sans mécanique de récompense supplémentaire.

La session de révision priorise les questions dont la réussite globale reste sous 80% ou qui ont une erreur dans les 5 dernières tentatives. Une question sort de ce mode quand elle atteint au moins 80%, sans erreur récente, avec 5 bonnes réponses de consolidation.

Créer rapidement un nouveau squelette de banque:

```bash
npm run pack:new -- "Cinéma"
```

La banque initiale est maintenue localement dans `src/content*.ts`. Les anciens scripts de generation OpenTrivia ont ete retires pour garder une base editoriale originale, verifiable et en francais. Le fond de carte satellite est embarque dans `assets/maps/blue-marble-world.jpg`; les frontieres pays/departements restent en GeoJSON local.


