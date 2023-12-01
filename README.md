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

[Documentation de Prisma concernant les chaînes de connexion (PostgreSQL, MySQL, SQLite, SQL Server, MongoDB et CockroachDB)](https://pris.ly/d/connection-strings)

Installer la base de données en exécutant les migrations :

    $ npx prisma migrate dev

Exécuter le serveur :

    $ npm run start

Pour exécuter le serveur en mode "watch" (surveillance des modifications apportées aux fichiers et redémarrage du serveur automatique) :

    $ npm run start:dev

## Documentation de l'API

La documentation complète de l'API (générée par [Swagger](https://docs.nestjs.com/openapi/introduction)) est disponible à cette adresse :

    http://localhost:3000/api