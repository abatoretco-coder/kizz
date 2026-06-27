# Audit code Kizz

## Etat actuel

- Expo SDK 56, React Native 0.85, React 19.
- Application monolithique dans `App.tsx`, encore a extraire progressivement.
- Donnees editoriales chargees depuis `src/content.ts` et modules satellites.
- SQLite local via `src/database.ts`.
- Moteurs testes dans `src/quizEngine.ts`, `src/sessionDraft.ts` et `src/quizPack.ts`.
- Tests actuels: 39 tests unitaires/integrite.
- Audit automatique de contenu: `npm run audit:content`.

## Forces

- Fonctionnement local sans compte ni serveur.
- Schema de question deja extensible: QCM, texte libre, multi-champs, carte.
- Import/export JSON transactionnel et import CSV assiste.
- Repetition espacee locale et confiance facultative.
- Banque riche: 2807 questions, 13 themes, 72+ cartes, drapeaux du monde, chimie/tableau periodique niveau ingenieur, reconnaissance visuelle, personnages historiques, nature visuelle, monuments visuels et couverture France/monde renforcee.
- Carte tactile hors ligne via WebView/canvas Mercator, fond satellite embarque, pinch, double tap, pan inertiel et frontieres embarquees.
- Medias visuels embarques pour tableaux, sculptures, monuments, architecture, personnages historiques et nature, avec manifeste de provenance, zoom plein ecran, attribution visible et prechargement local des medias de quiz.
- Accueil navigable au swipe et par onglets tactiles; retour Android intercepte dans l'app.
- Garde-fou de test contre les textes mojibake visibles.

## Risques techniques

1. `App.tsx` concentre navigation, ecrans, styles, logique de session et carte.
2. Les textes visibles les plus exposes sont nettoyes; le risque restant porte sur des contenus importes externes non controles.
3. Le rendu carte est hors ligne et plus fluide; le risque restant est surtout son maintien dans App.tsx.
4. Les tests couvrent bien les moteurs, mais pas encore les parcours UI Android.
5. Les contenus et medias grossissent dans le bundle; la taille APK est acceptee, mais des packs JSON versionnes avec manifeste media resteront plus maintenables.

## Recommandations prioritaires

1. Extraire les composants sans changer les comportements.
2. Executer les smoke tests ADB documentes sur APK reel, dont retour Android et onglets d'accueil.
3. Ajouter un editeur de packs plus confortable.
4. Ajouter labels optionnels, silhouettes et niveaux de detail sans dependance reseau.
5. Enrichir le bilan par theme; le bilan par type d'interaction est livre en premiere version.
6. Garder le manifeste media et les scripts de generation alignes avec les assets embarques.

## Non-objectifs court terme

- Pas de compte utilisateur.
- Pas de classement social.
- Pas de push notification quotidienne.
- Pas de feed infini recommande.
- Pas de copie de banques proprietaires de jeux connus.
