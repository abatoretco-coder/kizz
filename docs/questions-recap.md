# Recapitulatif de la banque de questions

Genere le 2026-07-26 depuis `src/content.ts`.

- Questions: 7152
- Themes: 34
- Types: multiple-choice: 6652, free-text: 426, multi-text: 2, map-point: 72
- Questions avec image: 1044
- Questions carte: 72
- Questions sans image/carte: 6036
- Questions OpenTDB integrees: 3950
- Repartition des bonnes reponses QCM A/B/C/D: 1663 / 1663 / 1663 / 1663
- Revue qualite: 7145 sans signalement, 7 avertissement(s), 0 erreur(s)
- Detail complet: `docs/questions-recap.csv`

## Synthese par theme

| Theme | Total | Avec image | Sans image | Diff. 1 | Diff. 2 | Diff. 3 | Types | Sous-themes |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| Histoire | 360 | 304 | 56 | 120 | 180 | 60 | multiple-choice: 334, free-text: 26 | 8 |
| Géographie | 1080 | 1 | 1079 | 162 | 379 | 539 | multiple-choice: 839, map-point: 42, free-text: 199 | 4 |
| Sciences | 224 | 0 | 224 | 35 | 104 | 85 | multiple-choice: 201, free-text: 23 | 4 |
| Sport | 25 | 0 | 25 | 11 | 8 | 6 | multiple-choice: 22, free-text: 3 | 5 |
| Arts | 327 | 298 | 29 | 111 | 157 | 59 | multiple-choice: 318, free-text: 8, multi-text: 1 | 4 |
| Langues | 326 | 0 | 326 | 166 | 106 | 54 | free-text: 132, multiple-choice: 194 | 5 |
| Économie | 28 | 0 | 28 | 9 | 10 | 9 | multiple-choice: 25, free-text: 2, multi-text: 1 | 4 |
| Astronomie | 19 | 0 | 19 | 9 | 6 | 4 | multiple-choice: 16, free-text: 3 | 2 |
| OpenTDB - Culture générale | 343 | 0 | 343 | 154 | 128 | 61 | multiple-choice: 343 | 1 |
| OpenTDB - Livres | 98 | 0 | 98 | 28 | 44 | 26 | multiple-choice: 98 | 1 |
| OpenTDB - Cinéma | 250 | 0 | 250 | 85 | 120 | 45 | multiple-choice: 250 | 1 |
| OpenTDB - Musique | 396 | 0 | 396 | 105 | 217 | 74 | multiple-choice: 396 | 1 |
| OpenTDB - Télévision | 150 | 0 | 150 | 57 | 67 | 26 | multiple-choice: 150 | 1 |
| OpenTDB - Jeux vidéo | 992 | 0 | 992 | 309 | 476 | 207 | multiple-choice: 992 | 1 |
| OpenTDB - Jeux de société | 49 | 0 | 49 | 13 | 16 | 20 | multiple-choice: 49 | 1 |
| OpenTDB - Sciences et nature | 244 | 0 | 244 | 70 | 102 | 72 | multiple-choice: 244 | 1 |
| OpenTDB - Informatique | 94 | 0 | 94 | 29 | 38 | 27 | multiple-choice: 94 | 1 |
| OpenTDB - Mathématiques | 47 | 0 | 47 | 19 | 15 | 13 | multiple-choice: 47 | 1 |
| OpenTDB - Mythologie | 49 | 0 | 49 | 15 | 23 | 11 | multiple-choice: 49 | 1 |
| OpenTDB - Sport | 150 | 0 | 150 | 53 | 71 | 26 | multiple-choice: 150 | 1 |
| OpenTDB - Géographie | 298 | 0 | 298 | 86 | 138 | 74 | multiple-choice: 298 | 1 |
| OpenTDB - Histoire | 347 | 0 | 347 | 78 | 178 | 91 | multiple-choice: 347 | 1 |
| OpenTDB - Politique | 50 | 0 | 50 | 10 | 24 | 16 | multiple-choice: 50 | 1 |
| OpenTDB - Arts | 49 | 0 | 49 | 16 | 16 | 17 | multiple-choice: 49 | 1 |
| OpenTDB - Animaux | 49 | 0 | 49 | 13 | 22 | 14 | multiple-choice: 49 | 1 |
| OpenTDB - Véhicules | 49 | 0 | 49 | 17 | 16 | 16 | multiple-choice: 49 | 1 |
| OpenTDB - Comics | 49 | 0 | 49 | 13 | 23 | 13 | multiple-choice: 49 | 1 |
| OpenTDB - Anime et manga | 148 | 0 | 148 | 39 | 74 | 35 | multiple-choice: 148 | 1 |
| OpenTDB - Animation | 49 | 0 | 49 | 13 | 22 | 14 | multiple-choice: 49 | 1 |
| Carte France | 271 | 0 | 271 | 50 | 121 | 100 | map-point: 30, multiple-choice: 232, free-text: 9 | 4 |
| Nature | 193 | 168 | 25 | 88 | 80 | 25 | multiple-choice: 188, free-text: 5 | 5 |
| Technologie | 23 | 0 | 23 | 8 | 9 | 6 | multiple-choice: 20, free-text: 3 | 4 |
| Cinéma | 23 | 0 | 23 | 8 | 9 | 6 | multiple-choice: 20, free-text: 3 | 5 |
| Architecture | 303 | 273 | 30 | 96 | 158 | 49 | multiple-choice: 293, free-text: 10 | 4 |

## Avertissements restants

- warning: opentdb-entertainment-music-01030 - Proposition trop courte
- warning: opentdb-entertainment-video-games-01684 - Proposition trop courte
- warning: opentdb-science-nature-02331 - Proposition trop courte
- warning: opentdb-science-computers-02643 - Proposition trop courte
- warning: opentdb-science-mathematics-02665 - Proposition trop courte
- warning: opentdb-sports-02770 - Niveau avancé suspect pour une notion très connue
- warning: opentdb-history-03550 - Niveau avancé suspect pour une notion très connue

## Colonnes du CSV

`id`, `theme`, `themeId`, `sousTheme`, `difficulte`, `niveau`, `type`, `question`, `reponse`, `choix`, `tags`, `source`, `media`.
