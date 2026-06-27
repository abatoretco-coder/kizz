# Notes Produit Kizz

## Livre maintenant

- Banque enrichie: 1847 questions locales au total.
- Nouveau theme Astronomie: systeme solaire, observation, galaxie et histoire spatiale.
- Sous-themes dans le constructeur: geographie, histoire par pays/epoque, sciences, sport, arts, cinema, architecture, nature, technologie, langues, economie et astronomie.
- Drapeaux du monde: 585 questions, soit 195 pays en texte libre, 195 QCM drapeau -> pays et 195 QCM pays -> drapeau.
- Nouveau theme Carte France: 51 questions, dont 30 placements tactiles sur carte.
- Couverture geographie: pays/capitales du monde, drapeaux, regions francaises, departements et chefs-lieux.
- Carte: fond satellite offline Blue Marble embarque, frontieres de pays et departements francais en GeoJSON local, rendu canvas Mercator avec pinch, double tap et pan inertiel, sans fetch, tuiles, Leaflet ni serveur externe.
- Extension jeux TV originale: 36 questions inspirees des formats TTMC, Trivial, reponse rapide et Question pour un champion, sans copie de questions proprietaires.
- Extension editoriale par grand theme: histoire, sciences, sport, arts, nature, technologie, cinema, architecture et economie.
- Reconnaissance visuelle: tableaux, sculptures, monuments et architecture en medias embarques, avec questions image -> reponse et reponse -> choix d'image.
- Signalement local d'une question apres correction: ambigue, trop facile, trop dure ou a reformuler.
- Export JSON des signalements depuis l'ecran Banques.
- Audit automatique de banque disponible avec `npm run audit:content`.
- Import CSV assiste: previsualisation puis ajout de QCM ou questions en texte libre.
- Mode Endurance: l'utilisateur choisit une difficulte, Kizz tire un theme au hasard et lance 10 questions.
- Mode Infini calme: difficulte fixe, themes aleatoires, sortie explicite par la croix et sauvegarde des reponses.
- Reprise robuste: un brouillon infini conserve maintenant son mode et sa difficulte apres interruption.
- Dashboard guide: carte "prochaine action utile" pour reprendre, reviser, composer ou lancer une session finie.
- Matrice de progression locale: lecture theme x difficulte avec action directe vers une session courte ciblee.
- Historique local: les dernieres sessions apparaissent dans le dashboard avec score et date courte.
- Bilan de session enrichi: repartition par type d'interaction lorsque la session melange plusieurs formats.
- Parcours langues renforces: mini-cours espagnol, allemand et italien avec exercices de rappel ecrit.
- Progression Langues: grille locale separee par langue et niveau CECRL.
- Accueil: retrait du libelle swipe et rail Dashboard/Culture/Langues pleine largeur synchronise au geste.
- Vrai logo Kizz branche dans l'accueil, `app.json` et les icones Android natives.

## Decisions produit

- L'infini reste un mode volontaire, jamais la recommandation par defaut.
- Les recommandations privilegient la reprise, la revision espacee et les sessions finies.
- Les sessions gardent une promesse cognitive claire: choisir, repondre, comprendre, sortir.
- Les phases suivantes sont pilotees par `docs/IMPLEMENTATION_PHASES.md`.
- La carte est un mode d'apprentissage spatial hors ligne; les frontieres et la camera tactile sont embarquees dans l'application.

## Apports produit a fort impact

1. Parcours guides: "progresser en geo", "reviser mes erreurs", "etre surpris".
2. Qualite des questions: editeur de packs et validation media.
3. Sessions calibrees: Sprint 5 questions, Standard 10, Profondeur 20.
4. Matrice de progression avancee: filtrer par periode, competence et formats faibles.
5. Packs editoriaux: Art visuel, Geographie carte, Cinema scenes, Architecture styles, Economie reperes.
6. Mode salon: quiz local a plusieurs joueurs sur le meme telephone, style plateau TV, sans compte.
7. Reglage cognitif: option "moins de hasard" pour prioriser la repetition espacee, option "surprise" pour varier.
8. Assistant d'import: analyser une banque JSON/CSV et proposer automatiquement theme, difficulte et tags.
9. Visuel avance: image zoomable, details recadres, attribution media visible et validation de licences par pack.
10. Cartes avancees: ajouter silhouettes, zoom regional guide et labels optionnels sans introduire de dependance reseau.
