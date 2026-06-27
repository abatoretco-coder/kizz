# Audit code Kizz

## Etat actuel

- Expo SDK 56, React Native 0.85, React 19.
- Application monolithique dans `App.tsx`, encore a extraire progressivement.
- Donnees editoriales chargees depuis `src/content.ts` et modules satellites.
- SQLite local via `src/database.ts`.
- Moteurs testes dans `src/quizEngine.ts`, `src/sessionDraft.ts` et `src/quizPack.ts`.
- Tests actuels: 24 tests unitaires/integrite.
- Audit automatique de contenu: `npm run audit:content`.

## Forces

- Fonctionnement local sans compte ni serveur.
- Schema de question deja extensible: QCM, texte libre, multi-champs, carte.
- Import/export JSON transactionnel et import CSV assiste.
- Repetition espacee locale et confiance facultative.
- Banque riche: 1816 questions, 13 themes, 72+ cartes, drapeaux du monde et couverture France/monde renforcee.
- Carte satellite tactile via WebView/Leaflet.

## Risques techniques

1. `App.tsx` concentre navigation, ecrans, styles, logique de session et carte.
2. Plusieurs textes historiques ont subi du mojibake; il faut nettoyer progressivement les libelles visibles.
3. La carte satellite depend encore du reseau pour les tuiles Esri et les surcouches GeoJSON de frontieres.
4. Les tests couvrent bien les moteurs, mais pas encore les parcours UI Android.
5. Les contenus grossissent dans le bundle TypeScript; a moyen terme, des packs JSON versionnes seront plus maintenables.

## Recommandations prioritaires

1. Extraire les composants sans changer les comportements.
2. Executer les smoke tests ADB documentes sur APK reel.
3. Ajouter un editeur de packs plus confortable.
4. Remplacer les surcouches carte distantes par des GeoJSON simplifies embarques.
5. Enrichir le bilan par theme; le bilan par type d'interaction est livre en premiere version.
6. Preparer une strategie "carte offline" separee de l'APK principal pour ne pas exploser la taille.

## Non-objectifs court terme

- Pas de compte utilisateur.
- Pas de classement social.
- Pas de push notification quotidienne.
- Pas de feed infini recommande.
- Pas de copie de banques proprietaires de jeux connus.
