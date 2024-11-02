*** Présentation du projet ***

Ce projet est un serveur de fichiers basé sur Node.js et MongoDB, permettant aux utilisateurs de s'inscrire, de se connecter, d'uploader, de télécharger et de partager des fichiers. Le projet utilise Docker pour faciliter le déploiement et la gestion des dépendances.

*** Prérequis ***
Docker
Docker Compose
Installation
Clonez ce dépôt :

*** bash ***
Copier le code
git clone <URL_DU_DEPOT>
cd Server-Main
Lancez l'application avec Docker :

*** bash ***
Copier le code
docker-compose up --build
Accédez à l'application via votre navigateur à l'adresse : http://localhost:3000.

*** Tester l'API via Postman ***

1. Inscription d'un utilisateur
Méthode : POST
URL : http://localhost:3000/auth/register
Corps de la requête (JSON) :
json

Copier le code
{
    "username": "John_Doe",
    "password": "mot_de_passe"
}

2. Connexion d'un utilisateur
Méthode : POST
URL : http://localhost:3000/auth/login
Corps de la requête (JSON) :
json

Copier le code
{
    "username": "John_Doe",
    "password": "mot_de_passe"
}

3. Upload d'un fichier

Méthode : POST
URL : http://localhost:3000/files/upload

Headers :
Authorization: Bearer <votre_token_jwt>

Formulaire :
Clé : file (Type : fichier)

Sélectionnez un fichier à uploader.

4. Récupération des fichiers de l'utilisateur

Méthode : GET
URL : http://localhost:3000/files

Headers :
Authorization: Bearer <votre_token_jwt>

5. Suppression d'un fichier

Méthode : DELETE
URL : http://localhost:3000/files/<fileId>

Headers :
Authorization: Bearer <votre_token_jwt>

6. Création d'un lien de partage

Méthode : POST
URL : http://localhost:3000/share/create

Headers :
Authorization: Bearer <votre_token_jwt>
Corps de la requête (JSON) :
json
Copier le code

{
    "fileId": "<fileId>",
    "expiresInHours": 24
}

*** Utiliser le front-end ***
Ouvrez votre navigateur en mode navigation privée pour éviter les problèmes de cache et d'authentification.

Accédez à http://localhost:3000 pour voir l'interface utilisateur.

*** Inscription : ***

Remplissez le formulaire d'inscription avec un nom d'utilisateur et un mot de passe, puis soumettez.

*** Connexion : ***

Utilisez les mêmes identifiants pour vous connecter.

*** Upload de fichiers : ***

Utilisez le formulaire d'upload pour sélectionner un fichier et l'envoyer au serveur.
Affichage des fichiers :

Une fois connecté, vous devriez pouvoir voir vos fichiers téléchargés.
Suppression de fichiers et Création de liens de partage sont également accessibles via l'interface, suivez les instructions à l'écran.