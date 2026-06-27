# Accomplissements Kizz

## Socle Produit

- Application de quiz hors ligne, sans compte, serveur ni boucle sociale.
- Sessions finies par défaut, mode Infini volontaire et sortie explicite.
- SQLite local pour questions, réponses, favoris, brouillons, révisions, signalements et statistiques.
- APK Android release générable localement.

## Contenu

- 13 thèmes.
- 2807 questions locales.
- Pays et capitales du monde.
- Drapeaux: 585 questions sur 195 pays.
- France: régions, départements, chefs-lieux, numéros de départements et carte dédiée.
- Histoire découpée par pays, époque et personnages.
- Astronomie.
- Science renforcée avec chimie/tableau périodique niveau ingénieur.
- Arts, architecture, cinéma, économie, technologie, sport et nature.
- Langues: espagnol, allemand, italien, CECRL, mini-cours, conjugaison et vocabulaire.

## Images Et Cartes

- Images embarquées pour œuvres, sculptures, monuments, architecture et personnages historiques.
- 99 images générées Arts/Histoire avec manifeste de provenance.
- 31 photos Nature avec manifeste de provenance.
- 59 photos Monuments avec manifeste de provenance.
- Questions image vers réponse et réponse vers choix d'image.
- Zoom plein écran sur les images de question et appui long sur les images de choix.
- Préchargement local des médias de la question courante et de la suivante.
- Attribution média visible après correction, avec lien source quand disponible.
- Carte hors ligne avec fond satellite Blue Marble.
- Frontières pays et départements embarquées.
- Moteur carte canvas Mercator avec zoom, double tap et déplacement inertiel.

## Apprentissage

- Révision locale des erreurs.
- Maintien des questions faibles sous 80%, avec erreur récente ou sans 5 consolidations réussies.
- Crédit partiel pour multi-champs et carte.
- Auto-évaluation de confiance facultative.
- Bilan par type d'interaction.
- Matrice progression thème x difficulté.

## Outillage

- Import/export JSON.
- Import CSV avec prévisualisation.
- Mode admin local: filtrer, masquer, ajuster la difficulté.
- Signalement local et export des signalements.
- Audit contenu automatisé.
- Générateurs de banques visuelles Arts/Histoire et Nature.
- 36 tests automatisés.

## Dernier État Vérifié

- `npm run typecheck` OK.
- `npm test` OK.
- `npm run audit:content` OK.
- `gradlew assembleRelease` OK.
- Téléphone non connecté lors du dernier passage, donc pas de smoke test ADB réel.
