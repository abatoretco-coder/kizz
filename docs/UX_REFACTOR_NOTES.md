# Notes UX Refactor

## Applique

- Home structuree par priorite: dashboard, recommandation utile, modes principaux, actions secondaires, themes.
- Navigation d'accueil pleine largeur: Dashboard, Culture et Langues occupent tout le rail, sans texte "swipe".
- Indicateur visuel du rail synchronise au deplacement horizontal.
- Constructeur de session enrichi avec sous-themes selectionnables.
- Logo Kizz v3 branche sur l'accueil et l'icone Expo.
- Mode Infini calme: difficulte constante, themes aleatoires, sortie explicite par la croix avec sauvegarde des reponses.
- Reprise du mode infini: le brouillon conserve son niveau et restaure le contexte.
- Mode Endurance conserve comme session finie de 10 questions.
- Le quiz affiche un compteur infini `infini n` et un rappel clair: toucher `x` pour arreter.
- Tokens couleur extraits dans `src/theme.ts`.

## Garde-fous produit

- Pas de chrono impose.
- Pas de recompense aleatoire.
- Pas de serie punitive.
- L'infini est volontaire et separe des parcours finis.
- Le dashboard recommande d'abord la reprise, la revision ou une session finie.

## Prochains refactors utiles

1. Extraire `Home`, `Quiz` et `SessionConfigurator` hors de `App.tsx`.
2. Etendre `src/theme.ts` aux espacements, rayons, tailles tactiles et variantes de boutons.
3. Ajouter un etat "session terminee" specifique au mode infini avec bilan sans relancer automatiquement.
4. Ajouter un audit accessibilite: tailles tactiles, labels, contraste et ordre de lecture.
