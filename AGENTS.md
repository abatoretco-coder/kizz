# Instructions projet Kizz

## Références obligatoires
- Avant toute modification Expo/React Native : consulter la doc **SDK 56**  
  https://docs.expo.dev/versions/v56.0.0/

## Portée du projet
- Travailler sur le projet existant (pas de re-scaffold).
- Préserver l’orientation produit : quiz hors ligne, sans boucle compulsive, sessions finies.
- Respecter les contrats techniques de `src/domain.ts` et la logique de validation déjà couverte par `tests/`.

## Banque de questions (priorités éditoriales)
- Couvrir explicitement :
  - styles inspirés des jeux connus (TTMC, Trivial Poursuite, jeu TV, question pour un champion),
  - pays/capitales,
  - placement de pays,
  - géographie carte avec un bloc **dédié France**.
- Garder des formulations originales, claires, vérifiables et en français.
- Éviter toute reprise textuelle d’énoncés protégés.

## Règles de modification
- Faire des changements ciblés et cohérents avec les fichiers déjà en place.
- Ne pas ajouter d’outils/process non demandés.
- Ne pas toucher aux éléments hors périmètre.

## Discipline Git
- Vérifier la branche courante avant commit/push.
- En contexte multi-worktree, confirmer le bon dossier de travail avant action.
