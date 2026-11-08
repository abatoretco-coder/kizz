# Géographie : sources OpenQuizzDB

Sélection du 8 novembre 2026. Auteur des trois packs : **Philippe Bresoux**,
publication [OpenQuizzDB](https://www.openquizzdb.org/),
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).
Les JSON voisins conservent les sources téléchargées, quatre questions par pack.
Ils ne fournissent pas de niveau de difficulté.

| Pack | Page | JSON original | Questions adaptées |
| --- | --- | --- | --- |
| 219, Bretagne | [Source](https://www.openquizzdb.org/download.php?id=219) | [JSON](https://download.openquizzdb.org/40219684599/OpenQuizzDB_0219/openquizzdb_219.json) | 1 à 4 |
| 542, Villes de France | [Source](https://www.openquizzdb.org/download.php?id=542) | [JSON](https://download.openquizzdb.org/40542256365/OpenQuizzDB_0542/openquizzdb_542.json) | 1 à 4 |
| 554, Géo pour tous | [Source](https://www.openquizzdb.org/download.php?id=554) | [JSON](https://download.openquizzdb.org/40554385933/OpenQuizzDB_0554/openquizzdb_554.json) | 3 et 4 |

Les dix adaptations sont dans `src/contentOpenQuizzGeo.ts`, identifiées par
`oqdb-<pack>-<question>`. Kizz modifie les énoncés, les distracteurs et les
explications, et attribue les difficultés. Ces adaptations éditoriales restent
sous CC BY-SA 4.0 ; cela ne change pas la licence du code de l’application.
L’auteur, le lien du pack et la mention d’adaptation sont disponibles dans les
métadonnées affichées après la réponse.

Corrections de fond : le pruneau d’Agen bénéficie d’une **IGP**, pas d’une AOC
([INAO](https://www.inao.gouv.fr/produit/pruneaux-dagen-14179)). La question sur
la mer Morte porte sur la salinité et les poissons ordinaires : elle ne prétend
pas qu’aucune algue ne peut y vivre
([publication sur Dunaliella](https://aslopubs.onlinelibrary.wiley.com/doi/10.4319/lo.1982.27.2.0201)).
La question sur le Niger utilise les villes traversées pour éviter un énoncé
vague sur les limites du Sahel. Les deux autres questions du pack 554 ne sont
pas intégrées, car elles doublonnent les capitales déjà présentes.
