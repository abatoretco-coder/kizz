# Kizz

Kizz est une application mobile de quiz hors ligne pensée comme une alternative calme au scroll infini. Aucun compte, serveur ou NAS n'est nécessaire: questions, sessions et progression vivent dans SQLite sur le téléphone.

L'interface utilise un thème sombre sobre et ouvre directement les quiz depuis le dashboard. Les choix pédagogiques et leurs sources sont détaillés dans `docs/LEARNING-DESIGN.md`.

## Fonctionnalités actuelles

- 11 thèmes et 649 questions, dont 250 questions de trivia type jeu télé, des séries inspirées TTMC/Trivial Poursuite/Question pour un champion, 150 exercices dans trois parcours de langues dédiés, un thème Économie et 30 placements géographiques sur carte satellite (dont un bloc carte de France);
- difficulté, tags, explication et provenance par question;
- sessions aléatoires, correction immédiate et retour haptique;
- mode Endurance: difficulté choisie, thème tiré au hasard, 10 questions;
- mode Infini calme: difficulté constante, thèmes aléatoires, sortie explicite;
- statistiques et série quotidienne stockées localement;
- import JSON transactionnel, dédoublonnage et export partageable;
- favoris, recherche, sessions personnalisées et révision des dernières erreurs;
- composition de sessions par thèmes, difficultés et longueur;
- réponses multi-champs avec crédit partiel et répétition espacée locale;
- auto-évaluation facultative de confiance, utilisée uniquement pour planifier la prochaine révision;
- sauvegarde automatique et reprise d'une session interrompue depuis le dashboard;
- treize tests automatisés du moteur, des brouillons et de l'intégrité éditoriale;
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
- `docs/ROADMAP.md`: vision produit et étapes;
- `docs/PRODUCT_NOTES.md`: backlog des apports produit;
- `docs/UX_REFACTOR_NOTES.md`: décisions UX et garde-fous produit;
- `docs/RESEARCH.md`: veille open source et règles de licence.

## Ajouter du contenu

Ajouter des objets conformes à `QuestionSeed` dans `src/content.ts`, avec un identifiant stable et une provenance. Au lancement, l'import SQLite est idempotent. Une future console d'édition importera le même contrat depuis JSON/CSV.

## Format d'échange

L'écran **Banques** importe et exporte le format `kizz.quiz-pack` version 1. Un export de l'application constitue aussi un exemple complet du schéma. Les imports sont validés avant écriture, limités à 50 Mo / 100 000 questions et appliqués dans une transaction SQLite. Un identifiant de question déjà présent est conservé et signalé comme doublon.

Le fichier `examples/sample-pack.json` est un modèle prêt à importer. Les thèmes ajoutés apparaissent sur l'accueil dès la fermeture de l'écran Banques. La banque de quiz fonctionne hors ligne; la carte satellite interactive charge ses tuiles depuis le réseau.

## Enrichir les banques

- `npm run bank:opentdb -- 250` régénère le pack Open Trivia DB, format QCM quatre choix, style jeu télé.
- `npm run bank:opentrivia -- 30` régénère le pack OpenTriviaQA géographie.

Les questions acceptent `type: "multiple-choice"` avec quatre choix, `type: "free-text"` avec une liste `acceptedAnswers`, `type: "multi-text"` avec plusieurs champs, ou `type: "map-point"` avec `geoTarget` (`lat`, `lon`, `label`, `toleranceKm`). `imageUrl` et `imageAlt` ajoutent une illustration facultative; `learnMoreUrl` ouvre la ressource proposée après la correction. Sans lien fourni, Kizz génère une recherche Wikipédia en français.

Le bilan de session croise maintenant score et confiance déclarée: les réponses sont regroupées en `A revoir`, `A consolider` et `Solide`, sans mécanique de récompense supplémentaire.

Créer rapidement un nouveau squelette de banque:

```bash
npm run pack:new -- "Cinéma"
```

Convertir 30 questions Géographie depuis OpenTriviaQA lorsque l'accès réseau est disponible:

```bash
npm run bank:opentrivia -- 30
```
