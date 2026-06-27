# Roadmap Kizz

## Vision

Kizz est une application mobile de culture générale hors ligne, centrée sur le rappel actif, la reconnaissance visuelle et le raisonnement spatial. Une session a une fin claire. Aucun fil infini, minuteur imposé, classement public, vie ou récompense aléatoire.

## Guide d'execution

Le plan operationnel des prochains lots est maintenu dans `docs/IMPLEMENTATION_PHASES.md`.

Priorites actuelles:

1. Stabiliser l'APK sur telephone reel, surtout la carte vectorielle tactile hors ligne et les parcours critiques.
2. Refactorer l'UI sans changer le produit: theme couleur centralise, extraction des ecrans de `App.tsx` a faire.
3. Ajouter une progression plus lisible: matrice theme x difficulte livree et cliquable, historique local livre, sous-themes livres, recommandations locales a enrichir.
4. Renforcer la qualite editoriale: audit automatique, signalement local, import CSV assiste, astronomie, drapeaux et premier pack visuel livres; editeur de packs a faire.
5. Generaliser les interactions multimodales: image zoomable, point chaud, ordre chronologique, appariement et cartes offline.

## Mise a jour livree - Carte embarquee

- premier moteur `map-point` livre: placement tactile sur une carte vectorielle embarquee avec zoom et deplacement;
- calcul de distance geodesique en kilometres et credit total/partiel selon une tolerance par question;
- 30 nouvelles questions de geographie, reparties en 10 faciles, 10 intermediaires et 10 difficiles;
- schema v2 amorce avec `interaction_type`, `prompt_blocks`, `answer_schema` et `geo_target`;
- import/export JSON compatible avec les questions de placement geographique;
- correction carte enrichie: direction cardinale vers la cible et zone de tolerance visible;
- frontieres des pays du monde et des departements francais embarquees en GeoJSON local;
- moteur carte repris en canvas Mercator: pinch, double tap, deplacement inertiel et rendu non deforme;
- prochaines etapes carte: silhouettes de pays, frontieres voisines, monuments, regions et correction visuelle plus fine.

## Mise a jour livree - Qualite UX

- accueil: les onglets Dashboard, Culture et Langues sont tactiles et synchronises avec le swipe;
- Android: le bouton retour revient dans l'app au lieu de fermer l'application depuis un ecran interne;
- encodage: nettoyage des textes mojibake visibles et ajout d'un test anti-regression.

## Mise a jour livree - Reconnaissance visuelle

- 18 questions visuelles ajoutees sur arts, sculpture, architecture et geographie monumentale;
- medias telecharges depuis Wikimedia Commons puis embarques dans `assets/questions`, avec manifeste de provenance;
- QCM avec image principale et QCM avec quatre images de reponse;
- schema et SQLite etendus avec `choiceImageAssets` et `choiceImageAlts`;
- reequilibrage automatique A/B/C/D mis a jour pour garder les images synchronisees avec les choix.

## MVP actuel

- banque enrichie a 1847 questions, avec formats jeux TV originaux, astronomie, couverture pays/capitales du monde, drapeaux, regions/departements/chefs-lieux de France, reconnaissance visuelle et mini-cours langues;
- 72 questions `map-point`, dont 30 dans le theme dedie `Carte France`;
- accueil refondu en trois panneaux: tableau de bord, quiz culture, langues, avec rail pleine largeur synchronise au geste;
- sous-themes de session pour geographie, histoire par pays/epoque, sciences, sport, arts, cinema, architecture, nature, technologie, langues, economie et astronomie;
- formats non-QCM renforces: texte libre, multi-champs, placement carte, numeros de departements et conjugaison saisie;
- mode Infini calme avec theme aleatoire et difficulte constante;
- reprise des brouillons infinis avec conservation du niveau choisi;
- recommandation dashboard "prochaine action utile" pour guider sans pousser a l'usage compulsif;
- matrice de progression locale theme x difficulte, affichee dans le dashboard;
- cellules de progression cliquables pour relancer un theme a un niveau precis;
- historique local des dernieres sessions dans le dashboard;
- bilan de session par type d'interaction quand une session melange QCM, texte, multi-champs ou carte;
- dashboard sombre avec sessions, réponses, précision et jours actifs;
- 13 themes et 1847 questions locales, dont jeux TV originaux, economie, astronomie, langues, art visuel, geographie monde, drapeaux et carte de France;
- Architecture comme thème autonome;
- correction immédiate, explication et lien d'approfondissement;
- favoris, recherche, sessions personnalisées et révision des erreurs;
- constructeur mono ou multithème, mono ou multidifficulté, sessions de 5, 10 ou 20 questions;
- réponses multi-champs avec crédit partiel (livré);
- planification locale des révisions selon réussite complète, partielle ou échec (livré);
- auto-évaluation de confiance facultative, persistée et utilisée pour l'espacement (livré);
- sauvegarde automatique et reprise exacte des sessions interrompues (livré);
- SQLite hors ligne et import/export de banques JSON;
- mode admin local: consultation, filtre, masquage durable, ajustement de difficulte et compteur de signalements;
- signalement local d'une question apres correction: ambigue, trop facile, trop dure ou a reformuler;
- export JSON des signalements depuis l'ecran Banques;
- audit automatique de la banque via `npm run audit:content`;
- import CSV assiste avec previsualisation pour QCM et texte libre;
- tokens couleur centralises dans `src/theme.ts`;
- checklist smoke tests Android/ADB documentee;
- tests unitaires du moteur et smoke tests sur téléphone Android réel.

## Prochaine étape: moteur multimodal

Le schéma `QuestionSeed` doit évoluer vers des blocs d'interaction explicites plutôt qu'un simple champ `type`.

### Identification visuelle

- image plein écran avec zoom et recadrage;
- réponse unique ou double: nom de l'œuvre + artiste, avec crédit partiel;
- modes `artwork`, `sculpture`, `building`, `movie-frame`, `object`;
- indices progressifs choisis par l'utilisateur: époque, pays, mouvement, année;
- comparaison avant/après et reconnaissance d'un détail recadré;
- médias embarqués dans des packs pour rester utilisables hors ligne.

### Carte et géographie

- carte du monde tactile sans service distant obligatoire;
- placer un pays, une capitale, un monument ou un événement;
- calcul de distance en kilomètres entre la réponse et la cible;
- tolérance adaptée à l'échelle de la question;
- modes silhouettes de pays, drapeaux, capitales et frontières voisines;
- séries régionales et parcours de difficulté progressive;
- correction visuelle montrant cible, réponse et distance, sans chronomètre imposé.

### Art

- reconnaître tableau, sculpture, artiste, mouvement ou musée;
- réponse en deux champs `œuvre` et `artiste`;
- détails recadrés pour entraîner l'observation;
- frise chronologique et classement d'œuvres par époque;
- association œuvre ↔ artiste ↔ mouvement;
- premiers packs: Renaissance, impressionnisme, art moderne, sculpture antique.

### Architecture

- reconnaître un édifice depuis une photographie ou une silhouette;
- trouver architecte, ville, style ou période;
- placer le bâtiment sur une carte;
- comparer des détails: arc, voûte, façade, matériau, plan;
- packs: Antiquité, gothique, modernisme, brutalisme, architecture contemporaine.

### Cinéma

- reconnaître un film depuis une scène ou une suite de photogrammes;
- demander film, réalisateur, interprète ou année;
- révélation progressive de 3 à 6 images, inspirée du principe de [Framed](https://framed.wtf/), mais sans obligation quotidienne;
- modes affiche recadrée, palette colorimétrique et citation non protégée;
- crédits partiels pour film trouvé mais réalisateur incorrect;
- packs locaux par décennie, pays, genre et réalisateur.

## Autres interactions intéressantes

- ordre chronologique par glisser-déposer;
- association de cartes par paires;
- point chaud à toucher sur une image, un schéma ou une œuvre;
- audio: reconnaître langue, instrument, compositeur ou accent;
- estimation numérique avec marge de tolérance;
- réponse avant/après, cause/conséquence et vrai/faux argumenté;
- construction d'une chaîne: événement → date → lieu → personnage;
- mode comparaison: laquelle de deux œuvres est la plus ancienne, haute ou éloignée ?

## Parcours Langues dédié

### Première version livrée

- écran autonome, distinct du constructeur de culture générale;
- choix obligatoire d'une seule langue: espagnol, allemand ou italien;
- niveaux CECRL A1, A2, B1, B2 et C1;
- filtres vocabulaire fréquent, compréhension écrite, expression écrite et culture;
- 60 exercices pédagogiques initiaux couvrant chaque combinaison langue, niveau et compétence;
- 126 exercices fréquentiels supplémentaires en reconnaissance et rappel écrit;
- mini-cours espagnol, allemand et italien sur conjugaisons, regles, connecteurs et registre, completes par exercices en texte libre;
- rituel "10 mots du jour" en session aller-retour depuis le lexique fréquentiel;
- 10 exercices disponibles pour chacun des 15 couples langue/niveau;
- progression locale separee par langue et niveau CECRL dans l'ecran Langues;
- ordre de session stable et ciblé, sans mélange aléatoire entre langues;
- réponses écrites corrigées avec variantes accentuées ou translittérées;
- répétition espacée réutilisant le moteur local existant.

### Corpus fréquentiel

**État actuel : socle technique livré, corpus massif à poursuivre.** Les rangs stables, les modes reconnaissance/rappel et les bandes CECRL sont intégrés. Le corpus contient actuellement 63 lemmes et 126 exercices dérivés ; il ne prétend pas encore constituer une liste scientifique de 10 000 mots.

1. Constituer pour chaque langue un lexique hors ligne de 10 000 lemmes avec rang, fréquence, nature grammaticale et niveau CECRL estimé.
2. Dédupliquer les formes fléchies autour d'un lemme, sans apprendre dix fois le même mot.
3. Découper le corpus en bandes 1-500, 501-1 000, 1 001-2 000, 2 001-5 000 et 5 001-10 000.
4. Introduire les mots par phrases contextualisées, jamais comme une liste brute isolée.
5. Mesurer séparément reconnaissance, rappel écrit et emploi en contexte.
6. Faire remonter les mots faibles par répétition espacée, sans série quotidienne punitive.

### Compréhension et expression

- textes gradués de 40 à 80 mots en A1-A2, 100 à 250 mots en B1-B2 et documents plus nuancés en C1;
- questions sur idée principale, détails, inférence, connecteurs et intention;
- dictée et compréhension audio lorsque les packs audio hors ligne seront prêts;
- production guidée par trous, reformulation, traduction courte puis réponse ouverte;
- correction par concepts attendus et variantes, avec crédit partiel plutôt qu'une correspondance fragile;
- carnets d'erreurs distincts pour conjugaison, genre, ordre des mots, prépositions et vocabulaire.

### Progression et culture

- profil et progression indépendants pour chaque langue, livre en premiere version par niveau CECRL;
- niveau de départ configurable, avec espagnol A1 proposé par défaut;
- parcours thématiques: voyage, quotidien, travail, médias, littérature et société;
- culture liée à la langue choisie, incluant plusieurs pays et régions plutôt qu'un seul État;
- bilan par compétence et recommandation de la prochaine session la plus utile;
- téléchargement et import de packs linguistiques versionnés, toujours utilisables hors ligne.

### Ordre de réalisation Langues

1. **Livré** : sélection stricte langue, CECRL et compétences.
2. **Livré** : 15 cellules langue/niveau capables de produire une session de 10 exercices.
3. **Livré** : premier lexique classé et exercices bidirectionnels reconnaissance/rappel.
4. **Livré partiel** : rituel "10 mots du jour", mini-cours espagnol/allemand/italien et premieres conjugaisons en texte libre.
5. **À faire** : importer des listes fréquentielles sourcées et lemmatisées jusqu'à 1 000 mots par langue.
6. **À faire** : ajouter plusieurs textes gradués par niveau avec questions d'inférence.
7. **Livré partiel** : progression separee par langue/niveau livree ; niveau recommande par langue a faire.
8. **À faire** : classer automatiquement les erreurs par nature grammaticale.
9. **À faire** : étendre progressivement de 1 000 à 5 000 puis 10 000 lemmes validés.
10. **À faire** : packs audio hors ligne, dictée et compréhension orale.

### Critères de qualité

- aucune session ne mélange deux langues ni deux niveaux sans choix explicite;
- au moins 10 exercices par cellule langue/niveau avant d'afficher une session longue;
- un lemme possède un rang stable et génère au minimum reconnaissance et rappel;
- les distracteurs appartiennent à une catégorie plausible sans être ambigus;
- les variantes orthographiques utiles sont acceptées, mais une faute grammaticale ciblée ne l'est pas;
- chaque extension du corpus passe les tests de doublons, couverture et intégrité hors ligne.

## Principes de mémorisation

- rappel actif avant affichage de la réponse;
- répétition espacée locale des erreurs et réponses hésitantes;
- entrelacement de thèmes compatibles plutôt que blocs trop longs;
- difficulté désirable: indices facultatifs, jamais punitifs;
- auto-évaluation de confiance après la réponse, utilisée uniquement pour planifier la révision (**livré**);
- bilan de calibration mémoire en fin de session: à revoir, à consolider, solide (**livré**);
- correction courte puis approfondissement volontaire;
- variété des représentations: texte, image, carte, audio et chronologie;
- sessions configurables de 5, 10 ou 20 questions.

## Architecture technique à coder

### Schéma v2

- `interaction_type`, `prompt_blocks` et `answer_schema` (**socle livre, generalisation a poursuivre**);
- réponses multi-champs et score partiel (**première version livrée**);
- médias locaux avec hash, dimensions, légende et attribution;
- coordonnées latitude/longitude et rayon de tolérance;
- indices ordonnés et coût pédagogique facultatif;
- migrations conservant progression et favoris.

### Moteurs

- moteur de score partiel (**livré**);
- moteur cartographique et distance géodésique;
- planificateur de répétition espacée simple (**livré**), migration FSRS ou SM-2 (**à étudier**);
- cache et validation des packs médias;
- préchargement de l'image suivante;
- reprise d'une session interrompue (**livré**);
- tests E2E Android pour chaque interaction.

### Édition de contenu

- import CSV assisté avec prévisualisation;
- admin mobile local pour masquer, reclasser, auditer et voir les signalements (**premiere version livree**);
- éditeur desktop de packs texte, image, carte et audio;
- détection de doublons par identifiant et hash média;
- validation des réponses, liens et coordonnées;
- export d'un pack autonome compressé et versionné.

## Séquencement conseillé

1. **Partiel** : composant image et réponses associées livrés ; schéma multimodal v2 à faire.
2. **Partiel** : mini-pack Art local livré ; objectif de 30 médias encore à faire.
3. **Livré** : carte vectorielle tactile hors ligne et 30 questions de placement géographique. **À faire** : labels optionnels et silhouettes.
4. **Livré** : score partiel et réponses œuvre + artiste.
5. **Partiel** : banque Architecture livrée ; interaction point chaud à faire.
6. **Partiel** : banque Cinéma textuelle livrée ; scènes et indices progressifs à faire.
7. **Partiel** : répétition simple, confiance, bilan de calibration et sessions mixtes livrées ; migration FSRS à étudier.
8. **Partiel** : import/export JSON, import CSV assiste, signalement local, export des signalements et audit automatique livres ; editeur de packs a faire.
9. **Partiel** : tests unitaires, bilan par interaction et smoke Android documentes ; E2E reproductibles et audit accessibilité à faire.
10. **En cours** : parcours Langues et corpus frequentiel ; progression independante langue/niveau livree en premiere version.

## Références produit

- [GeoGuessr](https://www.geoguessr.com/) pour l'exploration et l'estimation spatiale;
- [Seterra](https://www.geoguessr.com/quiz/seterra) pour les cartes ciblées et répétables;
- [Framed](https://framed.wtf/) pour la révélation progressive de scènes de films.

Ces références servent à étudier les mécaniques. Kizz conserve ses principes: hors ligne, sans pression quotidienne et sans boucle compulsive.
