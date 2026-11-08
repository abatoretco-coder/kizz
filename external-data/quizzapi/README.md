# Réservoir de QCM français pour Kizz personnel

Source : **Quiz API v2 - Jonathan Moreschi (https://quizzapi.jomoreschi.fr/)**.

Récupération le 8 novembre 2026 via l’API publique :
`https://quizzapi.fr/api/v2/quiz?limit=1000`.
943 questions reçues, avec 943 identifiants différents. Après normalisation
des accents, de la ponctuation et de la casse, on compte 936 énoncés distincts.
Les sept répétitions restent dans l’archive originale pour conserver la source.

Les [conditions publiées par le fournisseur](https://github.com/Eromnoj/quizzAPIv2/blob/main/TERMS.md)
autorisent le stockage des réponses pour un projet personnel non commercial,
avec attribution. Ce réservoir correspond à l’usage personnel demandé par le
propriétaire de Kizz. Il n’est pas présenté comme un jeu de données CC BY-SA.

## Fichiers

- `questions-originales.json` : réponse de l’API, 943 QCM français, sans
  modification des questions, réponses, distracteurs ou difficultés.
- `geographie-originale.json` : les 112 questions de la catégorie géographie.
- `manifest.json` : date, URL, comptages, répartition et répétitions détectées.
- `selection-geographie.json` : 66 questions retenues, explications ajoutées et
  corrections locales explicites. Cette sélection alimente
  `src/contentQuizzApiGeo.ts`, sans accès réseau pendant le jeu.
- `selection-sciences-histoire.json` : 48 questions supplémentaires, intégrées
  dans `src/contentQuizzApiExpansion.ts`, avec corrections et explications.

## Répartition de la source

| Catégorie | QCM |
| --- | ---: |
| Culture générale | 180 |
| TV et cinéma | 113 |
| Géographie | 112 |
| Sciences | 111 |
| Arts et littérature | 93 |
| Sport | 81 |
| Musique | 61 |
| Jeux vidéo | 56 |
| Histoire | 51 |
| Actualité et politique | 49 |
| Gastronomie | 36 |

Niveaux du fournisseur : 201 faciles, 484 normaux, 258 difficiles. Pour la
géographie seule : 16 faciles, 49 normaux, 47 difficiles. La source ne fournit
pas d’explications détaillées et ses niveaux ne constituent pas un étalonnage
validé pour Kizz.

## Sélection active

114 QCM : 47 en Géographie, 19 en Carte France, 18 en Sciences, 9 en Astronomie
et 21 en Histoire. Les explications sont rédigées
pour Kizz. Les questions sont reprises ou adaptées selon les modifications
consignées dans la sélection ; certains distracteurs et niveaux changent.
Les métadonnées gardent l’identifiant et le niveau d’origine.

Exemples de corrections :

- Un lac endoréique peut recevoir une rivière ; c’est l’absence d’écoulement
  vers l’océan qui compte, pas l’absence de tout cours d’eau entrant.
- La question de superficie du Brésil précise le sens de « plus grand ».
- Le nom Schengen et le pluriel allemand Länder sont corrigés.
- La question du piton de la Fournaise précise qu’il s’agit d’un volcan actif.
- Le Golo est demandé comme le fleuve le plus **long** de Corse.
- Le barrage de la Rance est décrit sans laisser croire qu’un simple pont
  routier produit de l’électricité.
- Les graphies « océan Antlantique » et « ile » sont corrigées dans la sélection.
- La masse de 60 kg reste la même sur la Lune : le poids change, pas la masse.
- La période orbitale lunaire est précisée à 27,3 jours par rapport aux étoiles,
  distincte des 29,5 jours entre deux nouvelles lunes.
- GEIPAN remplace l’ancien sigle GEPAN dans la réponse sur le service du CNES.
- Le Point de vue du Gras est situé à Saint-Loup-de-Varennes, près de Chalon.
- Le traité de Versailles est précisé comme le traité avec l’Allemagne en 1919.
- La formule de l’eau est présentée comme une formule, et non comme un symbole.

La question attribuant au Couesnon la traversée de trois régions, le classement
imprécis des villes par population, les extrêmes dépendant d’un périmètre et
plusieurs doublons de capitales restent hors de la sélection. L’archive des
943 questions n’est donc pas une banque intégralement vérifiée.

Références de contrôle utiles :
[Insee COG 2026](https://www.insee.fr/fr/information/8740222),
[Béziers Méditerranée : pont-canal](https://www.beziers-mediterranee.com/patrimoine-culturel/pont-canal/),
[EDF : usine de la Rance](https://www.edf.fr/usine-maremotrice-rance/produire-de-lelectricite),
[UNESCO : plaine des Jarres](https://whc.unesco.org/en/list/1587/),
[Conseil nordique : Åland](https://www.norden.org/en/information/about-aland).

Contrôles supplémentaires :
[NASA : questions sur la Lune](https://science.nasa.gov/moon/top-moon-questions/),
[CNES : GEIPAN](https://cnes.fr/en/projects/geipan),
[musée Niépce : première photographie](https://archivesniepce.com/index.php/la-premiere-photographie),
[château de Versailles : traité de 1919](https://www.chateauversailles.fr/decouvrir/histoire/grandes-dates/traite-versailles).
