# Notes Produit Kizz

## Composition de sessions et recherche — 8 novembre 2026

La recherche conserve maintenant les questions cochées lorsque le mot recherché
change ou est effacé. L’onglet Sélection permet de revoir les questions retenues,
de les retirer individuellement ou de vider la sélection. Le lancement utilise
la sélection complète, dans l’ordre choisi, y compris les questions absentes
des résultats actuellement affichés.

Les anciennes réponses de recherche arrivant tard sont ignorées. Les états de
chargement, de résultat vide et d’échec sont explicites ; un bouton Réessayer
relance une recherche échouée. Le bouton de lancement reste sous la liste dans
le flux de l’écran, afin de ne pas couvrir les dernières questions. Les onglets,
cases à cocher et messages de statut exposent leur rôle ou état accessible.

Dans le configurateur, Tous les thèmes efface aussi le filtre de sous-thème
antérieur. Cinq régressions sont couvertes par des tests exécutant les vrais
composants avec un environnement de hooks simulé ; ils ne remplacent pas le
contrôle du rendu natif. Typecheck OK et 78 tests réussis.

L’APK a été vérifié hors ligne sur Android 36 à 100 % et 130 % : deux questions
choisies dans deux recherches distinctes restent sélectionnées et sont lancées
ensemble. Captures et périmètre de validation dans `SMOKE_TESTS.md`.

## Conservation SQLite et lot Sciences/Histoire — 8 novembre 2026

La banque atteint 7 276 questions. Le nouveau lot QuizzAPI ajoute 48 QCM :
18 Sciences, 9 Astronomie et 21 Histoire, soit 114 QCM actifs de cette source.
Un filtre Mathématiques distingue les calculs des questions de physique.

Deux défauts de persistance ont été reproduits puis corrigés : remplacement
des questions au démarrage supprimant favoris/révisions par cascade ; sauvegarde
de session laissant des données partielles en cas d’échec. L’initialisation
emploie maintenant un UPSERT et les enregistrements de sessions sont atomiques.
Les doubles appuis de fin de session sont également protégés.

73 tests réussis, dont huit scénarios SQLite réels et deux sur les actions
de fin de session. L’audit éditorial ne signale aucune erreur ; ses 25
avertissements concernent la prédominance du QCM, dont un supplémentaire en
Sciences après cet enrichissement. Trois groupes anciens de doublons exacts
OpenTDB sont documentés séparément. Voir `DATABASE_REVIEW.md` et
`DATABASE_AUDIT.json` pour le périmètre précis du contrôle et les limites.

La recherche ignore désormais les tags techniques de provenance et d’usage,
et privilégie les correspondances dans les énoncés.

## Réservoir francophone et deuxième lot géographie — 8 novembre 2026

943 QCM français récupérés via l’API publique QuizzAPI de Jonathan Moreschi,
dans le cadre de l’usage personnel demandé. L’archive contient onze catégories,
les réponses et distracteurs, ainsi que les niveaux du fournisseur. Elle compte
936 énoncés distincts après normalisation. La recherche comparative d’autres
sites est documentée dans `QUIZ_SOURCES_FR.md`.

66 questions supplémentaires sont actives dans Kizz : 47 Géographie et 19
Carte France, avec explications ajoutées, corrections de formulation et niveaux
recalibrés lorsque nécessaire. Cela porte la banque à 7 228 questions : 1 129
Géographie et 298 Carte France. Les 943 questions brutes ne sont pas toutes
activées ni présentées comme entièrement vérifiées.

Exemples : lacs endoréiques, grandes îles japonaises, langues d’Åland, lac
Victoria, cours d’eau français, frontière guyanaise avec le Brésil, barrage de
la Rance et Fort Boyard. L’archive, le manifeste et les modifications de la
sélection se trouvent dans `external-data/quizzapi`.

Validation : typecheck OK, 62 tests réussis, audit sans erreur ; les 24
avertissements existants portent sur la prédominance du format QCM.

## Géographie et Carte France — 8 novembre 2026

Banque actuelle : 7 162 questions, dont 1 082 en Géographie et 279 en Carte France.
Ce lot modifie 677 questions existantes et ajoute 10 QCM adaptés de trois packs
OpenQuizzDB de Philippe Bresoux. La majorité des changements provient des
générateurs : cela ne constitue pas une vérification manuelle de toute la banque.

- Capitales : distracteurs du même continent ; rôles administratifs explicités
  pour la Suisse, l’Afrique du Sud, la Bolivie, le Bénin, Nauru et le Sri Lanka.
- France administrative : 101 départements et 18 régions comparés au COG Insee
  2026 ; distracteurs départementaux privilégiant la même région, distinction
  entre préfecture départementale et chef-lieu régional.
- Carte France : 30 placements avec explications spatiales enrichies ; 12 QCM
  reformulés et clarification du code du Rhône. Les questions de régions
  précisent qu’elles visent un point central approximatif, conformément au
  calcul de distance existant. Même clarification pour 12 cartes mondiales.
- Correction carte : explication géographique visible après validation, dans
  une zone défilante ; recadrage sur le point choisi et la cible après réduction
  de la carte ; maintien du passage explicite à la question suivante.
- Filtres France : Régions, Départements, Paysages et patrimoine.
- Recherche : format et niveau lisibles ; sélection annoncée comme une case
  à cocher, sans exposer les tags techniques dans les résultats.
- Sélection web : Bretagne, patrimoine urbain, Niger et mer Morte ; niveaux
  attribués par Kizz, sources conservées dans `external-data/openquizzdb`.
  Correction de deux erreurs des textes sources : IGP des pruneaux d’Agen et
  présence possible de micro-organismes en mer Morte.

L’observation publique de La Table des Savoirs est documentée dans RESEARCH.md.
Les sessions Kizz conservent leur fonctionnement hors ligne et leur rythme calme.

## Premier lot editorial - 8 novembre 2026

Les 23 questions Technologie ont ete relues et reecrites : choix de reponse plausibles, contextes concrets, explications distinguant les notions proches et difficulte recalibree. Le theme conserve ses identifiants, 20 QCM et 3 reponses libres. Les niveaux couvrent 10 questions Decouverte, 9 Intermediaire et 4 Avance.

Exemples : navigateur versus moteur de recherche ; chiffrement versus encodage ; sauvegarde incrementielle versus differentielle ; box Internet versus routeur seul. Les deux questions GPS traitent maintenant le nom du systeme et son usage pour determiner une position. La reponse libre sur le stockage attend explicitement une memoire flash et accepte ses variantes.

Hors Technologie : correction de la Bastille, qui est une forteresse-prison et non une ville ; suppression de l'injonction d'observer un monument pour le salar d'Uyuni, qui n'a pas d'image. Un controle d'audit signale desormais les enonces « en observant » sans media. Ce lot ne constitue pas une relecture integrale des 7 152 questions.

Sources de controle utilisees, avec formulations originales Kizz :

- [NOAA : fonctionnement du GPS](https://oceanservice.noaa.gov/facts/gps.html).
- [MDN : HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax), [TLS et HTTPS](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security), [DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS), [JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON).
- [NIST : cryptographie asymetrique](https://csrc.nist.gov/glossary/term/asymmetric_cryptography).
- [PostgreSQL : contraintes et cles primaires](https://www.postgresql.org/docs/current/ddl-constraints.html).
- [Microsoft : architecture en microservices](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices).
- [Ville de Paris : histoire de la Bastille](https://www.paris.fr/pages/petites-et-grandes-histoires-de-la-bastille-15995).

## Livre maintenant

- Banque enrichie: 2807 questions locales au total.
- Nouveau theme Astronomie: systeme solaire, observation, galaxie et histoire spatiale.
- Sous-themes dans le constructeur: geographie, histoire par pays/epoque, sciences, sport, arts, cinema, architecture, nature, technologie, langues, economie et astronomie.
- Drapeaux du monde: 585 questions, soit 195 pays en texte libre, 195 QCM drapeau -> pays et 195 QCM pays -> drapeau.
- Nouveau theme Carte France: 51 questions, dont 30 placements tactiles sur carte.
- Couverture geographie: pays/capitales du monde, drapeaux, regions francaises, departements et chefs-lieux.
- Carte: fond satellite offline Blue Marble embarque, frontieres de pays et departements francais en GeoJSON local, rendu canvas Mercator avec pinch, double tap et pan inertiel, sans fetch, tuiles, Leaflet ni serveur externe.
- Extension jeux TV originale: 36 questions inspirees des formats TTMC, Trivial, reponse rapide et Question pour un champion, sans copie de questions proprietaires.
- Extension editoriale par grand theme: histoire, sciences, sport, arts, nature, technologie, cinema, architecture et economie.
- Reconnaissance visuelle: tableaux, sculptures, monuments et architecture en medias embarques, avec questions image -> reponse et reponse -> choix d'image.
- Banque Arts/Histoire augmentee: 425 questions simples sur peintures, mouvements, artistes et personnages historiques, avec 99 images embarquees generees (oeuvres + portraits).
- Banque Nature visuelle ajoutee: 93 questions simples sur animaux, arbres, arbustes, fleurs, fougeres et mousses, avec 31 photos embarquees et provenance locale.
- Banque Monuments visuelle ajoutee: 266 questions simples sur monuments, villes, pays et styles architecturaux, avec 59 photos embarquees et provenance locale.
- Banque Science renforcee: 176 questions de chimie/tableau periodique sur elements, numeros atomiques, familles, formules, ions, pH, redox, VSEPR et stoechiometrie.
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
- La revision garde les questions faibles tant que la reussite globale est sous 80%, qu'une erreur apparait dans les 5 dernieres tentatives ou que 5 consolidations reussies ne sont pas atteintes.
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
