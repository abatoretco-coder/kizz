# Smoke tests Android

Checklist courte pour verifier un APK Kizz sur telephone reel apres un lot mobile.

## Composition depuis plusieurs recherches — 8 novembre 2026

- Typecheck OK, 78 tests réussis. Les cinq nouveaux scénarios exécutent les
  vrais composants Search et SessionConfigurator avec hooks simulés : sélection
  entre recherches, réponse obsolète, remise à zéro des sous-thèmes, retrait
  d’une sélection et échec/réessai de recherche.
- APK release x86_64 compilé et installé sans effacement sur Android 36,
  AVD `Kizz_Geo_Final` (5556), hors ligne.
- Recherche `60 kg`, sélection de la question sur la masse lunaire ; nouvelle
  recherche `Morbihan`, ajout de Carnac ; onglet Sélection conservant les deux
  questions ; lancement affichant bien 1/2. Vérifié à 100 % puis 130 %.
- Captures inspectées : `.expo/composer-selection.png` et
  `.expo/composer-selection-large.png`. Le pied de page reste hors de la zone
  de défilement ; le texte long peut défiler à taille agrandie.
- Aucun crash applicatif ni erreur JS dans le journal du parcours. Taille du
  texte restaurée à 100 % après vérification.
- Les états d’erreur/réessai sont couverts automatiquement ; aucune panne de
  base n’a été provoquée sur l’émulateur pour cette revue.

## Conservation de la base et lot Sciences/Histoire — 8 novembre 2026

- Typecheck OK ; 73 tests réussis, dont huit sur SQLite réel et deux sur les
  actions de fin de session. Audit éditorial : 0 erreur, 25 avertissements de
  prédominance du format QCM. Relevé : `DATABASE_AUDIT.json`.
- APK release x86_64 compilé et installé sans effacement sur l’AVD
  `Kizz_Geo_Final` (5556), réseau désactivé.
- Nouveau QCM sur la masse lunaire : ajout en favori, choix volontairement
  erroné « Elle devient de 10 kg », correction « Elle reste de 60 kg », bilan
  puis accueil. Les compteurs passent de 2 à 3 sessions et de 1 à 2 révisions.
- Après mise à jour de l’APK et arrêt/redémarrage forcé : toujours 3 sessions,
  3 réponses, 2 questions à revoir ; la même question affiche « Retirer des
  favoris », preuve que le favori a survécu à l’initialisation de la banque.
- La recherche du tag technique `source:quizzapi` donne zéro résultat ; la
  recherche du texte `60 kg` retrouve bien le nouveau QCM.
- Pas d’erreur JS ni de crash applicatif dans le journal de ce parcours.
- Captures locales : `.expo/database-mass-correction.png`,
  `.expo/database-favorite-after-restart.png`.
- La validation native porte sur les parcours visibles ; les contrôles SQL
  détaillés et les rollbacks sont exécutés dans les tests Node/SQLite.

## Lot Géographie / France — 8 novembre 2026

Complément QuizzAPI : 66 nouveaux QCM actifs issus d’un réservoir de 943 QCM
français. Typecheck OK, 62 tests réussis, audit : 0 erreur / 24 avertissements
existants. APK x86_64 compilé avec un worker Gradle, installé et ouvert hors
ligne sur `Kizz_Geo_Final` (5556). Recherche et lancement du QCM sur les lacs
endoréiques, bonne réponse, explication, attribution, passage au bilan et retour
à l’accueil contrôlés. Capture locale : `.expo/quizzapi-endorheic-correction.png`.

- `npm run typecheck` : OK ; `npm test` : 59/59.
- Audit : 0 erreur ; 24 avertissements existants de prédominance du format QCM.
- Données : 101 départements et 18 régions comparés à un extrait indépendant
  du COG Insee 2026 ; choix administratifs et capitales contrôlés par tests.
- APK release x86_64 compilé et installé sur l’émulateur Android 36 ; réseau
  désactivé. Aucune validation ARM ou sur téléphone réel pour ce lot.
- QCM Carnac : quatre choix visibles à taille de texte 130 %, bonne réponse,
  explication, crédit de source et passage au bilan fonctionnels.
- Carte Ajaccio : explication après validation ; bouton « Voir mon bilan »
  accessible à 100 % et 130 % ; reprise de la correction après recréation
  d’activité lors du changement de taille du texte.
- Captures locales ignorées par Git : `.expo/geo-carnac-correction.png` et
  `.expo/geo-large-correction.png`.
- Une compilation supplémentaire a rencontré une exception native du compilateur
  Hermes sous Windows ; la relance avec un seul worker Gradle a réussi, sans
  changement de dépendances.
- Contrôle final du dernier APK sur l’AVD isolé `Kizz_Geo_Final`, port 5556 :
  recherche avec format/niveau lisibles, placement Ajaccio volontairement faux,
  recadrage montrant simultanément les deux points à 130 %, explication et bilan.
  Pas d’erreur JS ou de crash applicatif dans le journal de ce parcours.
  Captures : `.expo/geo-search-final.png`, `.expo/geo-map-final-correction.png`.
  Taille du texte restaurée à 100 % après le contrôle.

## Preparation

```powershell
# Utiliser le SDK installe sur cette machine, indique par ANDROID_HOME.
& "$env:ANDROID_HOME\platform-tools\adb.exe" devices
# Seulement pour une version de developpement utilisant Metro :
& "$env:ANDROID_HOME\platform-tools\adb.exe" reverse tcp:8081 tcp:8081
```

Installer puis ouvrir l'APK. Verifier que l'app arrive directement sur le dashboard sans compte, sans demande reseau obligatoire et sans boucle de connexion.

## Parcours critiques

1. Dashboard
   - voir l'accueil, sa recommandation, ses modes et l'acces aux langues;
   - ouvrir une action recommandee;
   - revenir a l'accueil sans perte visible.

2. Quiz fini
   - lancer un theme depuis `topic-*`;
   - repondre a un QCM avec `choice-0`;
   - verifier correction et explication apres chaque reponse, confiance facultative, puis passage explicite a la question suivante;
   - terminer la session et voir le bilan.

3. Texte libre et multi-champs
   - lancer Recherche ou une session Langues;
   - saisir une reponse dans `free-text-answer`;
   - verifier credit total, partiel ou refus clair.

4. Carte
   - lancer `map-session` ou Carte France;
   - zoomer/deplacer la carte;
   - poser un point;
   - verifier distance, direction et tolerance apres correction.

5. Modes calmes
   - lancer Endurance niveau 2: confirmer 10 questions maximum;
   - lancer Infini niveau 1: confirmer sortie visible par croix et sauvegarde au retour.

6. Banques
   - ouvrir Banques;
   - exporter la bibliotheque JSON;
   - importer `examples/sample-pack.json` si besoin;
   - importer `examples/sample-import.csv` et verifier la previsualisation;
   - exporter les signalements.

7. Admin
   - ouvrir Mode admin questions;
   - filtrer par theme et difficulte;
   - verifier le compteur de signalements;
   - ne masquer une question que sur APK de test.

## Commandes de validation locale

```bash
npm run typecheck
npm test
npm run audit:content
```

Critere attendu: aucune erreur, audit contenu a 0 error et 0 warning.

## Reprise locale du 8 novembre 2026

- Dossier verifie : `D:\Projets\Kizz`, branche `main`, arbre propre avant intervention.
- Dependances reinstallees avec `npm ci`, sans modification du lockfile.
- `npm run typecheck` : OK.
- `npm test` : 43 tests reussis.
- `npm run audit:content` : 34 themes, 7 152 questions, 0 erreur et 24 avertissements de predominance des QCM. Le critere de zero avertissement ci-dessus n'est donc pas atteint.
- `npx expo export --platform android --output-dir .expo-export-check` : OK, bundle Hermes et 270 assets exportes. Cela ne prouve pas le fonctionnement sur appareil.
- `npx expo-doctor` : 19 controles sur 22 reussis. Ecarts : option `androidNavigationBar` invalide, quatre mises a jour correctives SDK 56 recommandees, alerte de regression memoire Hermes V1. Aucune migration SDK effectuee pendant ce diagnostic.
- `npm audit --omit=dev` : 28 vulnerabilites signalees (2 faibles, 13 moderees, 12 elevees, 1 critique sur `shell-quote`). Ce resultat concerne les dependances installees, dont l'outillage Expo ; il ne demontre pas leur exploitabilite dans l'APK. Pas de correction automatique forcee.

### Configuration locale apres deplacement du projet

Le SDK actuel est `D:\Outils\Android\Sdk`. Le fichier ignore `android/local.properties` pointait encore vers `D:/Android/Sdk` : son champ `sdk.dir` a ete corrige localement.

La premiere compilation a ensuite echoue parce que `android/build/generated/autolinking/autolinking.json` contenait encore `D:\Kizz`. La suppression de ce seul fichier genere permet a Gradle de recalculer les chemins depuis le dossier courant. Ne pas modifier les fichiers source pour compenser un ancien cache.

L'emulateur existant `Codex_QA_LG_Gadz` avait egalement un ancien chemin de disque dans son fichier `.ini`. Ce chemin a ete corrige vers `D:\Outils\Android\.android\avd\Codex_QA_LG_Gadz.avd` ; l'emulateur demarre et apparait dans ADB. Aucun telephone physique connecte lors du diagnostic initial.

### Compilation avec memoire limitee

La compilation parallele initiale a epuise la memoire (arret du daemon Kotlin, echec d'allocation Java et worker Metro interrompu). Pour la relance locale, l'emulateur a ete arrete pendant le build et `extraPackagerArgs = ["--max-workers", "2"]` ajoute dans le bloc `react` du fichier genere et ignore `android/app/build.gradle`.

Commande utilisee depuis `android`, pour une cible **emulateur x86_64 uniquement** :

```powershell
$env:NODE_ENV='production'
$env:NODE_OPTIONS='--max-old-space-size=4096'
$env:CMAKE_BUILD_PARALLEL_LEVEL='2'
.\gradlew.bat :app:assembleRelease '-PreactNativeArchitectures=x86_64' --max-workers=2 '-Pkotlin.compiler.execution.strategy=in-process' --console=plain
```

Les proprietes Gradle contenant des points doivent etre citees dans PowerShell. Pour un telephone ARM, utiliser son architecture plutot que `x86_64` ; ce build de verification ne constitue pas un APK universel.

Premier build, avant correctif applicatif : `BUILD SUCCESSFUL in 5m 51s`, 279 taches, APK produit dans `android/app/build/outputs/apk/release/app-release.apk` (153 333 907 octets). Les versions des dependances sont conservees.

L'installation sur l'ancien emulateur a ete refusee avec `INSTALL_FAILED_INSUFFICIENT_STORAGE` (530 Mo disponibles sur `/data`). Aucune application ni donnee existante supprimee. Un AVD de test isole `Kizz_QA`, avec une partition de donnees de 10 Go, est prepare sous `.expo/qa-avd` a partir de l'image Android 36 x86_64 deja installee.

### Defaut trouve pendant le parcours sur APK

Le premier APK s'installe et affiche l'accueil sans Metro. L'initialisation de la banque a dure environ 1 min 50 sur l'AVD neuf (Android 36, 2 Go de RAM, 2 coeurs). Cette mesure en emulation, pendant le premier demarrage Android, ne permet pas de conclure sur le temps d'ouverture d'un telephone reel.

En mode avion, le parcours Endurance Technologie niveau 1 propose 8 questions disponibles. Les QCM, le passage automatique apres une bonne reponse, la correction apres erreur et la saisie libre sont utilisables. En fin de session, toucher `Continuer` provoquait un crash `TypeError: undefined is not a function`, remonte par la sourcemap a `App.tsx`, lors de la recherche dans les reponses.

Cause : `onContinue={continueQuiz}` laissait l'evenement `Pressable` remplacer le premier parametre optionnel `nextAnswers`. Le correctif appelle explicitement `continueQuiz()` sans evenement. Le test `tests/quizInteraction.test.ts` execute le branchement JSX reel avec un evenement tactile simule : il echoue sur la version Git initiale et passe avec le correctif. TypeScript et les 44 tests passent apres modification.

### Verification du correctif sur APK

- Deuxieme build release x86_64 : OK en 2 min 25, APK reinstalle sans effacer les donnees.
- Reprise de la session ayant plante : question 8/8 et correction restaurees.
- Appui sur `Voir mon bilan` : bilan affiche, score 3/8 (38 %), detail 7 QCM et 1 texte libre. Aucun nouveau crash JavaScript ou Android dans les journaux.
- Retour Android vers l'accueil : OK.
- Mode avion active, Wi-Fi et donnees mobiles desactives, sans Metro : accueil et quiz utilisables.
- Cartes monde et France : rendu vectoriel local affiche, deplacement et pose de point testes, correction distance/direction/tolerance affichee. Canada puis Brest verifies. Pinch et double tap non verifies par ce passage ADB.
- Sortie de la session carte par retour Android, puis reprise depuis l'accueil : question et correction conservees.
- Ecrans Banques et Langues ouverts, retours Android verifies. Banques affiche 7 152 questions et 34 themes.
- Restent a verifier : telephone physique ARM, zoom a deux doigts, quiz image/zoom, multi-champs, parcours langues complet, Infini, favoris, import/export et admin. Ces fonctions ne sont pas declarees validees par ce passage.

Captures et journaux locaux dans `.expo/` (ignores par Git), notamment `qa-home.png`, `qa-result-fixed.png`, `qa-map-france-correction.png`, `build-release-fix.log` et `crash-before-fix.log`. Le premier chargement lent reste a mesurer sur telephone avant toute optimisation.

## Lot UI et qualite des questions - validation complementaire

Ce lot remplace le passage automatique apres une bonne reponse par une correction avec passage explicite a la suite. Les observations de la remise en route ci-dessus restent historiques.

- 23 questions Technologie reecrites et recalibrees ; correction de la Bastille et de la consigne visuelle sans image sur Uyuni. Sources et perimetre dans `docs/PRODUCT_NOTES.md`.
- `npm run typecheck` : OK. `npm test` : 53 tests reussis. Les tests d'interaction executent les gestionnaires reels extraits du TSX, avec des etats simules, sans charger React Native dans Node ; ils ne remplacent pas les essais sur APK.
- Audit de la banque : 7 152 questions, 0 erreur et 24 avertissements de predominance des QCM, identiques au diagnostic initial. Aucun seuil de validation affaibli.
- Dernier build release x86_64 : OK en 59 secondes ; APK installe sur l'AVD isole, en mode avion et sans Metro.
- QCM navigateur : bonne reponse maintenue en correction, reponse erronee affichee avec la bonne reponse, puis bilan et fin de session fonctionnels.
- Texte libre « flash » : variante acceptee, explication affichee avant le bilan.
- Question illustree sur La Joconde : image entiere, zoom ouvrable, deux champs, titre juste/artiste faux, credit de 50 % et bilan coherent. Reprise d'une correction interrompue verifiee.
- Taille de texte a 130 % : correction et bilan utilisables ; les contenus longs defilent. Le changement de taille recree l'activite Android et repasse par l'accueil, depuis lequel le brouillon peut etre repris. Reglage de l'AVD restaure a 100 % apres verification.
- Verification visuelle iterative : retrait d'une image vide sur les QCM textuels et rappel compact de l'enonce dans la correction pour eviter un titre partiellement masque.
- Aucun nouveau crash JavaScript/Android dans les journaux pendant les parcours verifies.

Captures du lot dans `.expo/` : `quiz-final-correction.png`, `quiz-final-large-correction.png`, `quiz-final-partial.png` et `quiz-final-result.png`. Journal de build : `build-editorial-ui.log`.

Etat : **READY WITH MINOR ISSUES** pour l'essai local de ce lot. La relecture editoriale integrale, le telephone physique ARM et le lecteur d'ecran restent hors de la validation effectuee. Les alertes Expo/dependances du diagnostic initial ne sont pas corrigees par ce lot.
