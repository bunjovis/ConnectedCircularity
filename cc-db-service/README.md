### Connected Circularity database Service

## Description

Express + TS + Sequelize server, handling dataflow to the systems Postgres database

## Instructions

1. Create .env -file with missing information, you can find the needed information from the .env.example -file

2. Run `npm install` on command line
3. Run postgres on docker
   `docker run --name cc-db -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -it -p 5432:5432 postgres`

   If container already exists:
   `docker start cc-db -i`

4. Create database (if not created)
   `npm run create:database`
5. Run migrations & seed (for testing purposes)
   `npm run init:data`

6. Run `npm start` on command line to run the program. This will run two commands:
   - `tcp`: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - `node dist/app.js`. Runs the created JavaScript file with Node

Swagger documentation is served from /api-docs endpoint

Additional scripts:

1. Run `npm run check` to check the file for TypeScript errors/warnings with eslint
2. Run `npm run dev` to run nodemon
3. `npm run undo:seed` Undo seeds
4. `npm run undo:migrate` Undo migrations

### Docker Guide

- At /cc-db-service/
  - docker build . -t db (you can choose any name instead of backend)
  - docker run -p 4001:4001 --name DB db
