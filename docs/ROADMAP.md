# Roadmap Kizz

## Vision

Kizz est une application mobile de culture générale hors ligne, centrée sur le rappel actif, la reconnaissance visuelle et le raisonnement spatial. Une session doit avoir une fin claire. L'application évite les fils infinis subis, les classements sociaux, les vies, les minuteurs imposés et les récompenses aléatoires.

## Accompli

- APK Android autonome avec Expo SDK 56, SQLite local et banque embarquée.
- 13 thèmes et 2541 questions locales.
- Géographie complète: pays/capitales, 585 questions drapeaux, régions françaises, départements, chefs-lieux et numéros de départements.
- Carte hors ligne: fond satellite Blue Marble, frontières pays et départements en GeoJSON local, canvas Mercator, zoom, double tap et déplacement inertiel.
- Thème dédié Carte France avec 51 questions, dont 30 placements tactiles.
- Sous-thèmes sélectionnables pour géographie, histoire, sciences, sport, arts, cinéma, architecture, nature, technologie, langues, économie et astronomie.
- Banque visuelle Arts/Histoire: 425 questions sur œuvres, mouvements, artistes et personnages historiques, avec 99 images embarquées et manifeste de provenance.
- Banque Nature visuelle: 93 questions sur animaux, arbres, arbustes, fleurs, fougères et mousses, avec 31 photos embarquées.
- Banque Science renforcée: 176 questions de chimie/tableau périodique niveau ingénieur.
- Thème Astronomie: système solaire, observation, galaxies et histoire spatiale.
- Parcours Langues: espagnol, allemand, italien, niveaux CECRL, mini-cours, conjugaisons et rituel de vocabulaire.
- Modes calmes: sessions finies, Endurance, Infini volontaire avec sortie explicite, révision locale.
- Répétition locale: maintien en révision des questions faibles sous 80%, erreurs récentes et consolidation sur 5 réussites.
- Réponses avancées: texte libre, multi-champs avec crédit partiel, carte, QCM image et choix d'images.
- Import/export JSON, import CSV avec prévisualisation, mode admin local et signalement de questions.
- Accueil refondu: Dashboard, Culture, Langues accessibles au tap et au swipe.
- Retour Android intercepté dans l'application depuis les écrans internes.
- Tests et audits: 35 tests automatisés, audit de contenu, tests d'encodage visible et vérification des assets.

## Priorités Maintenant

1. **Stabiliser sur téléphone réel**
   - Installer l'APK release sur appareil.
   - Vérifier retour Android, onglets d'accueil, quiz QCM, texte libre, image, carte France et révision.
   - Documenter toute régression vue sur écran physique.

2. **Réduire le risque `App.tsx`**
   - Extraire progressivement `Home`, `Quiz`, `SessionConfigurator`, `LanguageHub`, `Library`, `Search` et `SatelliteMapPicker`.
   - Conserver les comportements, `testID` et contrats actuels.
   - Déplacer les styles par écran ou composant sans changer l'UX.

3. **Améliorer les médias**
   - Livré: zoom plein écran pour les images de question et appui long sur les images de choix.
   - Livré: préchargement des médias de la question courante et de la suivante.
   - Livré: attribution média accessible depuis la correction.
   - Ajouter des détails recadrés pour œuvres, monuments, espèces et personnages.

4. **Faire progresser les cartes**
   - Ajouter silhouettes de pays/départements.
   - Ajouter labels optionnels hors ligne.
   - Ajouter séries Europe, France, monde et monuments.
   - Garder zéro dépendance à des tuiles ou services distants.

5. **Renforcer les langues**
   - Étendre le lexique fréquentiel de 63 lemmes vers 1000 par langue.
   - Ajouter textes gradués A1 à C1.
   - Classer les erreurs par nature: genre, préposition, conjugaison, ordre des mots, vocabulaire.

## Backlog Produit

- Éditeur desktop de packs texte, image, carte et audio.
- Mode salon local à plusieurs joueurs sur un même téléphone.
- Interactions multimodales: point chaud, ordre chronologique, appariement, estimation numérique.
- Cinéma visuel: scènes, affiches recadrées, palettes et indices progressifs avec médias autorisés.
- Architecture avancée: styles, détails de façade, vocabulaire visuel, placement carte.
- Recommandations locales plus lisibles par thème, sous-thème et format faible.
- Audit accessibilité: tailles tactiles, contraste, ordre de lecture et alternatives images.

## Non-Objectifs

- Pas de compte utilisateur obligatoire.
- Pas de serveur pour jouer.
- Pas de classement social.
- Pas de notification quotidienne punitive.
- Pas de copie de questions propriétaires issues de jeux connus.
- Pas de carte dépendante d'Internet.

## Critères De Validation

- `npm run typecheck` doit passer.
- `npm test` doit passer.
- `npm run audit:content` doit remonter 0 erreur.
- `gradlew assembleRelease` doit produire un APK.
- Les nouvelles banques doivent rester hors ligne, avec manifeste de provenance pour les médias.
- Les questions doivent rester originales, vérifiables et en français.
