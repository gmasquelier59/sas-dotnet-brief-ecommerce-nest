# API de notre boutique "AuBonTroc"

# Présentation

Ce repo contient le code source de l'API de notre boutique en ligne "AuBonTroc".

Notre API permet :

* de gérer les utilisateurs (création, modification, suppression)
* de gérer les produits (création, modification, suppression)

Notre API est consommable via HTTP (ou HTTPS si un certificat SSL est installé), en utilisant les verbes HTTP adéquoits (``GET``, ``POST``, ``PATCH``, ``DELETE``).

# Technologies

<p>
    <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-006d77?style=flat-square&logo=typescript&logoColor=white" />
    <img alt="Node.js" src="https://img.shields.io/badge/-Node.js-006d77?style=flat-square&logo=node.js&logoColor=white" />
    <img alt="NestJs" src="https://img.shields.io/badge/-NestJs-006d77?style=flat-square&logo=nestjs&logoColor=white" />
    <img alt="Swagger" src="https://img.shields.io/badge/-Swagger-006d77?style=flat-square&logo=swagger&logoColor=white" />
</p>
<p>
    <img alt="PostegreSql" src="https://img.shields.io/badge/-PostgreSql-83c5be?style=flat-square&logo=postgresql&logoColor=white" />
</p>

## Installation

Cloner le projet :

    $ git clone git@github.com:gmasquelier59/sas-dotnet-brief-ecommerce-nest.git

Installer les dépendances (via npm, pnpm, etc.) :

    $ npm install

Paramétrer l'accès à la base de données définissant la variable d'environnement ``DATABASE_URL`` en indiquant la chaîne de connexion à la base de données.
Il est possible de créer un fichier ``.env`` à la racine du projet contenant par exemple (pour PostgreSQL) :

```bash
DATABASE_URL="postgresql://user:password@host/database"
```

> [!NOTE]
> Le rôle associé à l'utiliseur de connexion doit disposer de la clause ``CREATEDB`` (https://docs.postgresql.fr/10/sql-createrole.html)

Pour savoir comment créer une chaîne de connexion : [Documentation de Prisma concernant les chaînes de connexion (PostgreSQL, MySQL, SQLite, SQL Server, MongoDB et CockroachDB)](https://pris.ly/d/connection-strings)

Installer la base de données en exécutant les migrations :

    $ npx prisma migrate dev

Exécuter le serveur :

    $ npm run start

**Alternative**: pour exécuter le serveur en mode "watch" (surveillance des modifications apportées aux fichiers et redémarrage du serveur automatique), pratique en mode développement :

    $ npm run start:dev

## Documentation de l'API

La documentation complète de l'API (générée par [Swagger](https://docs.nestjs.com/openapi/introduction)) est disponible à cette adresse :

    http://localhost:3000/api

> [!NOTE]
> Le serveur de l'API doit être démarrée pour pouvoir accéder à la documentation