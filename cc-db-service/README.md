### Connected Circularity database Service

## Description

Express + TS + Sequelize server, handling dataflow to the system database

## Instructions

1. Create .env -file with missing information, you can find the needed information from the .env.example -file
2. Run `npm install` on command line
3. Run `npm start` on command line to run the program. This will run two commands:
   - `tcp`: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - `node dist/app.js`. Runs the created JavaScript file with Node

Additional scripts:

1. Run `npm run check` to check the file for TypeScript errors/warnings with eslint
2. Run `npm run dev` to run nodemon

### Docker Guide 
- At /cc-db-service/ 
  - docker build . -t db (you can choose any name instead of backend)
  - docker run -p 4001:4001 --name DB db 