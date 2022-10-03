### Materiaalitori  Service Guide

1. Make sure you are in cc_materiaalitori_service_setup directory
2. Run ```npm install``` on command line
3. Run ```npm start``` on command line to run the program. This will run two commands:
   - ```tcp```: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - ```node dist/app.js```. Runs the created JavaScript file with Node

Additional script: Run ```npm run check``` to check the file for TypeScript errors/warnings with eslint
