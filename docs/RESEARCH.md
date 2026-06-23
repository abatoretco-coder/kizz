# Recherche open source

Recherche effectuée le 22 juin 2026 via l'API GitHub et les sites officiels. Ces projets servent de références produit ou de sources de données; aucun code applicatif n'est copié.

| Projet | Intérêt | Licence observée |
| --- | --- | --- |
| [android/topeka](https://github.com/android/topeka) | Référence Android officielle pour catégories, progression et quiz hors ligne | Apache-2.0 |
| [lohanidamodar/flutter_opentrivia](https://github.com/lohanidamodar/flutter_opentrivia) | Catégories et consommation d'une banque de trivia | Apache-2.0 |
| [desi-programmer/flutter-quizstar](https://github.com/desi-programmer/flutter-quizstar) | Parcours Flutter de quiz | MIT |
| [CodeFoxLk/quizzle_public](https://github.com/CodeFoxLk/quizzle_public) | Architecture d'une application de quiz plus large | MIT |
| [joaomanaia/newquiz](https://github.com/joaomanaia/newquiz) | Interface Jetpack Compose récente | Apache-2.0 |
| [uberspot/OpenTriviaQA](https://github.com/uberspot/OpenTriviaQA) | Banque structurée par catégories et format texte convertible | CC BY-SA 4.0 |

## Décisions MVP

- OpenTriviaQA est la première source externe retenue grâce à son format simple, ses catégories et ses métadonnées explicites.
- L'importeur `scripts/import-opentriviaqa.mjs` normalise quatre choix, crée des identifiants stables, traduit les formulations de capitales et attribue les difficultés.
- Le dépôt `el-cms/Open-trivia-database` a été examiné mais n'affiche pas de licence dans les métadonnées GitHub.
- Topeka et Flutter OpenTrivia inspirent les frontières techniques; Kizz conserve son architecture Expo/SQLite.
- GeoGuessr, Seterra et Framed inspirent respectivement les interactions spatiales, les cartes répétables et les indices visuels progressifs.

## Provenance des médias

Les deux premiers médias Art sont embarqués dans `assets/questions`: La Joconde est dans le domaine public; la photographie du Penseur est créditée Didier Descouens / Wikimedia Commons, CC BY-SA 4.0.
