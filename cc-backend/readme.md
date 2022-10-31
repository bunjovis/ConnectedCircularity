# ConnectedCircularity Backend

## Technologies:

- Express Typescript server
- Nodemon
- Concurrently
- dotenv

## Instructions

- Clone from repo
- At /cc-backend/ 
  - npm install
  - Copy contents from .env.example to .env (create .env first)
  - npm run build
  - npm run dev
## Versions

- nodeJS 16.14.0
- typescript 4.8.3

### Docker Guide 
- At /cc-backend/ 
  - docker build . -t backend (you can choose any name instead of backend)
  - docker run -p 3000:3000 --name Backend backend 

Additional scripts:
1. Run `npm run check` to check the file for TypeScript errors/warnings with eslint
