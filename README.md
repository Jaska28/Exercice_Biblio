# Mini-gestionnaire de bibliothèque

## Description

Cette application est un mini-backend développé avec **Node.js, TypeScript, Prisma et PostgreSQL (Neon)**. Elle permet de gérer un catalogue de livres ainsi que leurs emprunts.

Le projet démontre l'utilisation des opérations CRUD (Create, Read, Update, Delete) à l'aide de Prisma et d'une base de données PostgreSQL hébergée sur Neon.

### Fonctionnalités

Ajouter des livres au catalogue
Consulter tous les livres
Rechercher des livres par identifiant ou auteur
Filtrer les livres disponibles
Modifier les informations d'un livre
Supprimer un livre
Gérer les emprunts de livres
Consulter les emprunts avec les informations du livre associé

## Installation

Pour l'installation, vous devez entrer les commandes suivantes: 

```bash
npm init -y

npm install @prisma/client @prisma/adapter-neon dotenv

npx tsc --init
npx prisma init

```

## Lancer le projet

Pour lancer le projet, on doit utiliser la commande `npx run dev`
