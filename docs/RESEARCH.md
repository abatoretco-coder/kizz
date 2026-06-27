# Recherche open source

Recherche effectuÃ©e le 22 juin 2026 via l'API GitHub et les sites officiels. Ces projets servent de rÃ©fÃ©rences produit ou de sources de donnÃ©es; aucun code applicatif n'est copiÃ©.

Mise a jour du 27 juin 2026: revue produit rapide de Quizlet, Kahoot, Anki, Duolingo, GeoGuessr, Seterra et Framed pour nourrir les interactions sans reprendre de contenu protege.

| Projet | IntÃ©rÃªt | Licence observÃ©e |
| --- | --- | --- |
| [android/topeka](https://github.com/android/topeka) | RÃ©fÃ©rence Android officielle pour catÃ©gories, progression et quiz hors ligne | Apache-2.0 |
| [lohanidamodar/flutter_opentrivia](https://github.com/lohanidamodar/flutter_opentrivia) | CatÃ©gories et consommation d'une banque de trivia | Apache-2.0 |
| [desi-programmer/flutter-quizstar](https://github.com/desi-programmer/flutter-quizstar) | Parcours Flutter de quiz | MIT |
| [CodeFoxLk/quizzle_public](https://github.com/CodeFoxLk/quizzle_public) | Architecture d'une application de quiz plus large | MIT |
| [joaomanaia/newquiz](https://github.com/joaomanaia/newquiz) | Interface Jetpack Compose rÃ©cente | Apache-2.0 |
| [uberspot/OpenTriviaQA](https://github.com/uberspot/OpenTriviaQA) | Banque structurÃ©e par catÃ©gories et format texte convertible | CC BY-SA 4.0 |

## DÃ©cisions MVP

- Les sources externes restent des references de structure et de licence; la banque initiale active est maintenue comme contenu Kizz original.
- Les anciens importeurs OpenTrivia ont ete retires du projet actif pour eviter une dependance editoriale inutile.
- Le dÃ©pÃ´t `el-cms/Open-trivia-database` a Ã©tÃ© examinÃ© mais n'affiche pas de licence dans les mÃ©tadonnÃ©es GitHub.
- Topeka et Flutter OpenTrivia inspirent les frontiÃ¨res techniques; Kizz conserve son architecture Expo/SQLite.
- GeoGuessr, Seterra et Framed inspirent respectivement les interactions spatiales, les cartes rÃ©pÃ©tables et les indices visuels progressifs.
- Quizlet confirme l'interet des cartes aller-retour: Kizz l'applique aux langues, capitales et drapeaux.
- Kahoot confirme l'interet du quiz en groupe; Kizz peut l'adapter plus tard en mode salon local, sans classement public obligatoire.
- Anki confirme la valeur du rappel espace; Kizz garde une version locale simple avant une eventuelle migration SM-2/FSRS.
- Duolingo inspire le decoupage en competences courtes; Kizz doit garder des sessions finies et eviter les series punitives.

## Recommandations retenues pour Kizz

1. Cartes aller-retour par sous-theme: deja applique aux drapeaux et aux langues; a etendre aux dates, artistes, styles et notions scientifiques.
2. Parcours "ecrire la reponse": renforcer les questions texte libre apres chaque QCM important, pour eviter la reconnaissance passive.
3. Mode salon local: s'inspirer des quiz live en gardant un usage sans compte, sans classement public et sans timer obligatoire.
4. Banque modulaire: continuer les imports CSV/JSON et ajouter un editeur local de packs plutot qu'une dependance a une banque externe.
5. Revision espacee lisible: afficher pourquoi une question revient, sans streak punitive ni notification quotidienne.
6. Progression par sous-theme: utiliser les nouveaux tags pour recommander "Histoire > Allemagne", "Geographie > Drapeaux" ou "Cinema > Langage".

## Provenance des mÃ©dias

Les deux premiers mÃ©dias Art sont embarquÃ©s dans `assets/questions`: La Joconde est dans le domaine public; la photographie du Penseur est crÃ©ditÃ©e Didier Descouens / Wikimedia Commons, CC BY-SA 4.0.

