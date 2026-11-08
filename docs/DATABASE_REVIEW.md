# Vérification de la base Kizz — 8 novembre 2026

La vérification exécute le code réel de `src/database.ts` contre SQLite via un
adaptateur de test remplaçant uniquement le transport Expo. Elle couvre les
7 276 questions et 34 thèmes, l’export puis l’audit de la banque, les clés
étrangères et les champs JSON. Le relevé chiffré et son empreinte de contenu
sont dans `DATABASE_AUDIT.json`.

Il s’agit de SQLite 3.54.0 intégré à Node.js 26, en mémoire ; ce relevé n’est
pas une extraction du fichier privé de l’émulateur Android. La validation
native complémentaire porte sur les parcours de l’application.

## Défauts reproduits et corrigés

1. L’initialisation faisait `INSERT OR REPLACE` pour chaque question.
   Avec les clés étrangères actives, cela supprimait les favoris et les états
   de révision par cascade. Le test de redémarrage échouait avec zéro favori
   au lieu d’un. L’UPSERT `ON CONFLICT(id) DO UPDATE` actualise désormais le
   contenu en conservant les lignes personnelles liées. Les thèmes utilisent
   également un UPSERT sans suppression intermédiaire.
2. L’enregistrement de session n’était pas transactionnel. Une erreur sur une
   réponse laissait une session et des réponses partielles. Le test injectant
   une question absente reproduisait cette situation. Session, réponses et
   états de révision sont maintenant enregistrés dans une seule transaction.
3. Deux appuis rapprochés sur le bilan déclenchaient deux sauvegardes. Le test
   exécutant le vrai gestionnaire comptait deux appels. Un verrou de l’action
   de quiz empêche les actions concurrentes de fin/quitter ; il est libéré en
   cas d’échec pour permettre de réessayer.
4. La recherche portait aussi sur les tags de provenance et d’usage : une
   recherche de « personne » remontait des questions marquées « personnel ».
   Elle limite désormais ces recherches aux tags sémantiques et donne la
   priorité aux correspondances dans l’énoncé.

## Vérifications automatisées

- Banque complète : intégrité SQLite `ok`, aucune violation de clé étrangère,
  aucun champ JSON invalide, export conservant toutes les questions.
- Redémarrage : favoris, révisions, réponses, signalements conservés et contenu
  éditorial actualisé.
- Difficultés modifiées et suppressions locales : décisions conservées.
- Erreur de sauvegarde : rollback de la session complète.
- Erreur pendant la mise à jour de banque : rollback préservant le contenu et
  les favoris antérieurs.
- Import personnel : conservé au redémarrage, second import sans doublon.
- Ancien schéma déjà peuplé : nouvelles colonnes ajoutées sans perte de favori.
- Recherche : thèmes et énoncés utilisables, métadonnées techniques exclues.
- Fin de session : double appui bloqué et possibilité de réessayer après erreur.

Exécution : `npm run typecheck`, `npm test`, `npm run audit:content`.

Résultat final : 73 tests réussis ; audit éditorial sans erreur, avec 25
avertissements de prédominance du QCM. APK x86_64 vérifié hors ligne sur Android
36 : favori conservé après arrêt/redémarrage et mise à jour, compteurs personnels
inchangés, recherche technique exclue, nouvelle correction lunaire fonctionnelle.
Le détail du parcours est dans `SMOKE_TESTS.md`.

## Banque éditoriale

48 QCM supplémentaires issus du réservoir français sont activés : 18 Sciences,
9 Astronomie, 21 Histoire. Cela porte à 114 les QCM QuizzAPI actifs. Les réponses
scientifiques ou historiques inexactes repérées sont corrigées dans la sélection,
avec des tests ciblés et des sources indiquées dans le README du réservoir.

La comparaison des énoncés, réponses, choix et médias relève trois groupes de
doublons exacts anciens dans OpenTDB. Ils sont listés dans `DATABASE_AUDIT.json`.
Ils sont conservés à ce stade : fusionner leurs identifiants demande aussi de
réconcilier les réponses et brouillons existants, au-delà d’une simple suppression
de texte. Aucun doublon exact supplémentaire n’a été ajouté par les deux lots
QuizzAPI. Le contrôle ne prétend pas repérer tous les doublons sémantiques.
