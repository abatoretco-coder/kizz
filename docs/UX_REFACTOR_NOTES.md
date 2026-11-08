# Notes UX Refactor

## Lot qualite du quiz - 8 novembre 2026

- Apres chaque reponse, juste ou fausse, le joueur voit la correction et choisit quand passer a la suivante. Cela remplace le passage automatique des bonnes reponses.
- Les propositions et champs laissent place a un retour compact : reponse donnee si necessaire, bonne reponse, explication et approfondissement facultatif. L'image correcte est montree pour les QCM a choix d'images.
- Les illustrations de question sont affichees entieres, avec une hauteur reduite pendant la correction. Le zoom reste disponible.
- Le corps du quiz revient au debut lors d'un changement de question ou de la validation. La correction reprend l'enonce en petit, puis la reponse et l'explication ; l'illustration reste consultable et zoomable dans ce meme bloc.
- Le bilan est defilable, avec un score moins encombrant et une action principale pour terminer la session.
- Le resume du bilan classe toutes les reponses : erreur, credit partiel ou hesitation dans « A revoir » ; bonne reponse sans confiance forte dans « A consolider » ; bonne reponse declaree sure dans « Solide ». Il ne constitue pas une mesure de maitrise durable et ne remplace pas la planification de revision.
- Les tests protegent la pause de correction sur les quatre formats et le calcul du bilan, y compris sans confiance declaree.

## Applique

- Home structuree par priorite: dashboard, recommandation utile, modes principaux, actions secondaires, themes.
- Navigation d'accueil pleine largeur: Dashboard, Culture et Langues occupent tout le rail, sans texte "swipe".
- Indicateur visuel du rail synchronise au deplacement horizontal.
- Constructeur de session enrichi avec sous-themes selectionnables.
- Vrai logo Kizz branche sur l'accueil, l'icone Expo et les ressources Android natives.
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
