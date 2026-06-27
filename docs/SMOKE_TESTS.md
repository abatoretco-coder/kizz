# Smoke tests Android

Checklist courte pour verifier un APK Kizz sur telephone reel apres un lot mobile.

## Preparation

```powershell
$env:ANDROID_HOME='D:\Android\Sdk'
adb devices
adb reverse tcp:8081 tcp:8081
```

Installer puis ouvrir l'APK. Verifier que l'app arrive directement sur le dashboard sans compte, sans demande reseau obligatoire et sans boucle de connexion.

## Parcours critiques

1. Dashboard
   - voir les trois panneaux swipeables: Dashboard, Culture, Langues;
   - ouvrir une action recommandee;
   - revenir a l'accueil sans perte visible.

2. Quiz fini
   - lancer un theme depuis `topic-*`;
   - repondre a un QCM avec `choice-0`;
   - verifier correction, explication, confiance facultative et bouton continuer;
   - terminer la session et voir le bilan.

3. Texte libre et multi-champs
   - lancer Recherche ou une session Langues;
   - saisir une reponse dans `free-text-answer`;
   - verifier credit total, partiel ou refus clair.

4. Carte
   - lancer `map-session` ou Carte France;
   - zoomer/deplacer la carte;
   - poser un point;
   - verifier distance, direction et tolerance apres correction.

5. Modes calmes
   - lancer Endurance niveau 2: confirmer 10 questions maximum;
   - lancer Infini niveau 1: confirmer sortie visible par croix et sauvegarde au retour.

6. Banques
   - ouvrir Banques;
   - exporter la bibliotheque JSON;
   - importer `examples/sample-pack.json` si besoin;
   - importer `examples/sample-import.csv` et verifier la previsualisation;
   - exporter les signalements.

7. Admin
   - ouvrir Mode admin questions;
   - filtrer par theme et difficulte;
   - verifier le compteur de signalements;
   - ne masquer une question que sur APK de test.

## Commandes de validation locale

```bash
npm run typecheck
npm test
npm run audit:content
```

Critere attendu: aucune erreur, audit contenu a 0 error et 0 warning.
