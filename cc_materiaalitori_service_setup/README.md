### Materiaalitori  Service Guide

1. Move into the cc_materiaalitori_service_setup directory
2. Run ```npm install``` on command line
3. Run ```npm start``` on command line to run the program. This will run two commands:
   - ```tcp```: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - ```node dist/app.js```. Runs the created JavaScript file with Node

Additional script: Run ```npm run check``` to check the file for TypeScript errors/warnings with eslint

### Docker Guide 
1. Move into the cc_materiaalitori_service_setup directory
2. run this command to create docker image docker build . -t materailtori (you can choose any name)
3. docker run -p 8000:8000 materailtori 