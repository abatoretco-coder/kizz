# Notes UX Refactor

## Applique

- Home structuree par priorite: dashboard, recommandation utile, modes principaux, actions secondaires, themes.
- Mode Infini calme: difficulte constante, themes aleatoires, sortie explicite par la croix avec sauvegarde des reponses.
- Reprise du mode infini: le brouillon conserve son niveau et restaure le contexte.
- Mode Endurance conserve comme session finie de 10 questions.
- Le quiz affiche un compteur infini `infini n` et un rappel clair: toucher `x` pour arreter.

## Garde-fous produit

- Pas de chrono impose.
- Pas de recompense aleatoire.
- Pas de serie punitive.
- L'infini est volontaire et separe des parcours finis.
- Le dashboard recommande d'abord la reprise, la revision ou une session finie.

## Prochains refactors utiles

1. Extraire `Home`, `Quiz` et `SessionConfigurator` hors de `App.tsx`.
2. Centraliser les tokens de design dans un fichier theme.
3. Ajouter un etat "session terminee" specifique au mode infini avec bilan sans relancer automatiquement.
4. Ajouter un audit accessibilite: tailles tactiles, labels, contraste et ordre de lecture.
