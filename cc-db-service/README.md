### Connected Circularity database Service

## Description

Express + TS + Sequelize server, handling dataflow to the system database
Sequelize + Postgres database

## Instructions

1. Create .env -file with missing information, you can find the needed information from the .env.example -file

2. Run `npm install` on command line
   Run postgres on docker
   docker run --name cc-db -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 postgres
   If container already exists:
   docker start cc-db -i

   TODO: run migrations

   1. Create database (if not created)
      npx sequelize-cli db:create
   2. Run migrations
      npx sequelize-cli db:migrate
   3. Seed the database
      // TODO

3. Run `npm start` on command line to run the program. This will run two commands:
   - `tcp`: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - `node dist/app.js`. Runs the created JavaScript file with Node

Additional scripts:

1. Run `npm run check` to check the file for TypeScript errors/warnings with eslint
2. Run `npm run dev` to run nodemon

Swagger documentation is served from /api-docs endpoint
