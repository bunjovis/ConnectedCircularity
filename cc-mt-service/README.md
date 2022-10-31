### Materiaalitori  Service Guide

1. Make sure you are in cc-mt-service directory
2. Create .env -file with missing information, you can find the needed information from the .env.example -file
3. Run ```npm install``` on command line
4. Run ```npm start``` on command line to run the program. This will run two commands:
   - ```tcp```: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - ```node dist/app.js```. Runs the created JavaScript file with Node

Additional script: Run ```npm run check``` to check the file for TypeScript errors/warnings with eslint

### Docker Guide 
- At /cc-db-service/ 
  - docker build . -t mt (you can choose any name instead of backend)
  - docker run -p 8000:8000 --name MT mt 

Additional scripts:
1. Run `npm run check` to check the file for TypeScript errors/warnings with eslint
