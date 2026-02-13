@echo off
cd /d "c:\Users\LENOVO\WebstormProjects\browser-extensions-manager-ui"

echo Affichage du statut Git...
git status

echo.
echo Ajout des fichiers modifies...
git add .

echo.
echo Creation du commit...
git commit -m "fix: correct HTML semantic structure - heading levels and landmarks

- Changed h3 to h2 in Card component to respect heading hierarchy (h1 -> h2 instead of h1 -> h3)
- Ensured all page content is contained within proper landmarks (header, nav, main, footer)
- Improved accessibility compliance with WCAG guidelines"

echo.
echo Push vers le repository distant...
git push

echo.
echo Commit et push termines avec succes!"
pause
