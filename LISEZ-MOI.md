# Portfolio finance

## Personnaliser
Ouvrez `data.js` et modifiez le bloc `profile` (nom, bio, email, LinkedIn, GitHub) et la liste `categories`.

## Ajouter un projet
    pip install nbconvert          # une seule fois
    python add_project.py --html rapport.html --ipynb notebook.ipynb \
      --title "Titre" --category "Pricing" --summary "Une phrase." \
      --tags "Python,Monte Carlo" --date 2026-11 --metrics "Erreur=0.3%;Temps=2s"

Le script copie les fichiers dans `projects/<slug>/`, génère la version HTML du notebook et met à jour `data.js`.
Relancer la commande avec le même `--slug` met le projet à jour.

## Mettre en ligne (gratuit)
Poussez le dossier sur un dépôt GitHub → Settings → Pages → branche `main`, dossier `/ (root)`.
Aperçu local : `python -m http.server` puis http://localhost:8000
