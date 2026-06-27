# Phases d'implementation Kizz

Ce document sert de guide de travail pour les prochains lots. Il part de l'etat local actuel: Expo SDK 56, APK Android autonome, SQLite local, 13 themes, 2807 questions, 72+ questions carte, drapeaux du monde, chimie/tableau periodique niveau ingenieur, nature visuelle, monuments visuels, sous-themes couverts par test, mode Endurance, mode Infini calme, import/export JSON, admin local, signalement local et parcours Langues.

## Phase 1 - Stabilisation mobile et carte

Objectif: rendre l'APK agreable et fiable sur telephone reel.

Livrables:
- installer l'APK sur appareil branche et verifier le parcours Home -> theme -> question -> correction -> bilan;
- tester specifiquement `Carte France`: zoom tactile, deplacement, pose du point, correction distance/tolerance;
- tester les modes Endurance, Infini calme, Reviser, Favoris, Recherche et Banques;
- checklist de smoke tests reproductibles Android/ADB livree dans `docs/SMOKE_TESTS.md`;
- corriger les regressions UX constatees sur l'ecran physique.

Definition of done:
- `npm run typecheck` OK;
- `npm test` OK;
- build `assembleRelease` OK;
- APK installe et ouvert sur telephone;
- au moins un parcours carte France valide sur telephone.

## Phase 2 - Refactor UI sans changer le produit

Objectif: reduire le risque du gros fichier `App.tsx`.

Livrables:
- extraire `Home`, `Quiz`, `SatelliteMapPicker`, `SessionConfigurator`, `LanguageHub`, `Library` et `Search` dans `src/screens` ou `src/components`;
- centraliser les couleurs dans `src/theme.ts` livre; espacements et textes de boutons a suivre;
- garder les `testID` existants pour ne pas casser les smoke tests;
- nettoyer les textes encodes et harmoniser les labels francais.
- etat actuel: accueil refondu en trois panneaux avec rail pleine largeur synchronise au geste, theme couleur extrait, extraction de composants encore a faire.

Definition of done:
- aucune regression fonctionnelle;
- fichiers composants plus courts et lisibles;
- tests existants inchanges ou renforces.

## Phase 3 - Progression et recommandation produit

Objectif: transformer la banque en vrai outil d'apprentissage, sans mecanique addictive.

Livrables:
- matrice progression theme x difficulte livree en premiere version dashboard;
- recommandations locales: reviser, consolider une faiblesse, lancer une session courte, continuer une langue;
- bilan par type d'interaction livre dans l'ecran de resultat; bilan par theme a enrichir;
- historique local des dernieres sessions livre dans le dashboard;
- sortie du mode Infini avec bilan dedie.
- cellules de matrice cliquables livrees: appui sur theme x niveau pour lancer une session courte ciblee.

Definition of done:
- les recommandations n'utilisent pas de recompense aleatoire;
- les stats restent locales;
- les sessions finies restent prioritaires dans l'UX.

## Phase 4 - Banque editoriale et qualite des questions

Objectif: augmenter la qualite plus vite que le volume.

Livrables:
- signalement local d'une question livre: ambigue, trop facile, trop dure, a reformuler;
- export JSON des signalements livre depuis l'ecran Banques;
- mode admin local livre: filtrer, masquer durablement et modifier la difficulte d'une question;
- audit automatique de couverture livre via `npm run audit:content`: themes, types, reponses, coordonnees et repartition A/B/C/D;
- import CSV assiste avec preview livre pour QCM et texte libre;
- validation automatique des doublons, URLs, coordonnees et reponses;
- packs editoriaux prioritaires: Carte France avancee, capitales monde, art visuel, architecture, cinema scenes.
- etat actuel: Carte France enrichie avec regions, departements, chefs-lieux, numeros de departements et 30+ placements tactiles; geographie monde enrichie avec capitales et 585 questions drapeaux; histoire enrichie par pays, epoque et personnages historiques.

Definition of done:
- chaque pack a un test de couverture;
- aucun doublon d'id;
- chaque question a explication et lien d'approfondissement.
- `npm run audit:content` termine sans erreur.

## Phase 5 - Multimodal

Objectif: aller au-dela du QCM simple.

Livrables:
- schema v2 complet: `interaction_type`, `prompt_blocks`, `answer_schema`, medias locaux;
- image zoomable pour art, architecture et cinema;
- point chaud sur image;
- ordre chronologique;
- appariement de cartes;
- estimation numerique avec marge.

Definition of done:
- chaque nouveau type a un moteur de correction teste;
- l'import/export conserve les nouveaux champs;
- le comportement hors ligne est documente.

## Phase 6 - Langues

Objectif: rendre les parcours espagnol, allemand et italien plus solides.

Livrables:
- progression separee par langue et niveau CECRL livree en premiere version dans l'ecran Langues;
- mini-cours espagnol/allemand/italien: conjugaisons, regles et connecteurs utiles;
- exercices de conjugaison en texte libre apres les cours;
- rituel "10 mots du jour" avec quiz aller-retour;
- corpus frequentiel et lemmatise jusqu'a 1 000 mots par langue;
- textes gradues A1 -> C1 avec questions d'inference;
- classification des erreurs: genre, preposition, conjugaison, ordre des mots, vocabulaire;
- packs audio hors ligne plus tard.

Definition of done:
- une session ne melange jamais deux langues sans choix explicite;
- chaque cellule langue/niveau a au moins 10 exercices utiles; prochain palier: 20.
- les erreurs alimentent la revision locale; les questions faibles restent en revision sous 80%, avec erreur recente, ou avant 5 consolidations reussies.

## Phase 7 - APK autonome et distribution personnelle

Objectif: garder l'app utilisable sans ordinateur.

Livrables:
- build release reproductible;
- notes de version locales;
- sauvegarde/export des banques et de la progression;
- documentation d'installation USB;
- option future: labels regionaux et silhouettes de pays/departements embarques.

Definition of done:
- APK installe sans Metro;
- les quiz fonctionnent hors ligne;
- les cartes de placement fonctionnent sans reseau avec frontieres embarquees.
