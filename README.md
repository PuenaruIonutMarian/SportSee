# Tableau de bord de Sportsee - projet 12 Openclassrooms

Ce projet est un tableau de bord de fitness développé avec React pour afficher les données de l'utilisateur telles que les performances, l'activité quotidienne, la durée moyenne des sessions, etc.

## Fonctionnalités

- Affichage des données de l'utilisateur telles que les performances, l'activité quotidienne et la durée moyenne des sessions.
- Possibilité de sélectionner un utilisateur à partir de la page d'accueil.
- Utilisation de données fictives ou réelles en fonction de la configuration de l'application.

## Utilisation

1. Cloner le dépôt depuis GitHub :
   git clone https://github.com/PuenaruIonutMarian/SportSee.git

2. Installer les dépendances :
   cd sportsee
   npm install

## Modifier la configuration de l'application :

Dans le fichier config/AppConfig.js, réglez la variable isUsingMockData sur true pour utiliser des données fictives ou sur false pour utiliser des données réelles.

## Lancer l'application :

npm start
L'application sera accessible à l'adresse http://localhost:3000.

## API

Les données réelles sont récupérées à partir de l'API fournie par OpenClassrooms.

Vous pouvez trouver la documentation de l'API :
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

Pour cloner l'API:
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git

## Outils de Qualité du Code

1. Prettier:
   Prettier est utilisé pour formater le code. Pour appliquer Prettier, vous pouvez exécuter :
   npm run prettier

2. ESLint:
   ESLint est utilisé pour vérifier le code et détecter les erreurs. Pour exécuter ESLint, utilisez :
   npm run lint
