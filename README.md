# ConnectedCircularity

### Purkukartoitus Service Guide

1. Move into the cc_purkukartoitus_service directory
2. Run ```npm install``` on command line
3. Run ```npm start``` on command line to run the program. This will run two commands:
   - ```tcp```: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - ```node dist/app.js```. Runs the created JavaScript file with Node
4. On command line you will be asked for your Purkukartoitus username and password. These will be used for getting token and accessing the Purkukartoitus API
5. If the given username and password are correct, the program will get user's surveys that are ready and post them on ```http://localhost:5000/{USERNAME}/surveys```



Additional script: Run ```npm run check``` to check the file for TypeScript errors/warnings with eslint
