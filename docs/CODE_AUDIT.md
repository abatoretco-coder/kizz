# Audit code Kizz

## Etat actuel

- Expo SDK 56, React Native 0.85, React 19.
- Application monolithique dans `App.tsx`, encore a extraire progressivement.
- Donnees editoriales chargees depuis `src/content.ts` et modules satellites.
- SQLite local via `src/database.ts`.
- Moteurs testes dans `src/quizEngine.ts`, `src/sessionDraft.ts` et `src/quizPack.ts`.
- Tests actuels: 27 tests unitaires/integrite.
- Audit automatique de contenu: `npm run audit:content`.

## Forces

- Fonctionnement local sans compte ni serveur.
- Schema de question deja extensible: QCM, texte libre, multi-champs, carte.
- Import/export JSON transactionnel et import CSV assiste.
- Repetition espacee locale et confiance facultative.
- Banque riche: 1829 questions, 13 themes, 72+ cartes, drapeaux du monde et couverture France/monde renforcee.
- Carte vectorielle tactile hors ligne via WebView/SVG embarque.

## Risques techniques

1. `App.tsx` concentre navigation, ecrans, styles, logique de session et carte.
2. Plusieurs textes historiques ont subi du mojibake; il faut nettoyer progressivement les libelles visibles.
3. Le rendu carte est hors ligne; le risque restant est surtout sa taille et son maintien dans App.tsx.
4. Les tests couvrent bien les moteurs, mais pas encore les parcours UI Android.
5. Les contenus grossissent dans le bundle TypeScript; a moyen terme, des packs JSON versionnes seront plus maintenables.

## Recommandations prioritaires

1. Extraire les composants sans changer les comportements.
2. Executer les smoke tests ADB documentes sur APK reel.
3. Ajouter un editeur de packs plus confortable.
4. Ajouter labels optionnels et silhouettes sans dependance reseau.
5. Enrichir le bilan par theme; le bilan par type d'interaction est livre en premiere version.
6. Surveiller la taille du bundle avec les GeoJSON embarques.

## Non-objectifs court terme

- Pas de compte utilisateur.
- Pas de classement social.
- Pas de push notification quotidienne.
- Pas de feed infini recommande.
- Pas de copie de banques proprietaires de jeux connus.
