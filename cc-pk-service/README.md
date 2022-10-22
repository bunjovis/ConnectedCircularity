### Purkukartoitus Service Guide

1. Move into the cc-pk-service directory
2. Create .env -file with missing information, you can find the needed information from the .env.example -file
3. Run ```npm install``` on command line
4. Run ```npm start``` on command line to run the program. This will run two commands:
   - ```tcp```: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - ```node dist/app.js```. Runs the created JavaScript file with Node
5. On command line you will be asked for your Purkukartoitus username and password. These will be used for getting token and accessing the Purkukartoitus API
6. If the given username and password are correct, the program will get user's surveys that are ready and post them on ```http://localhost:5000/{USERNAME}/surveys```


Additional scripts: 
1. Run ```npm run check``` to check the file for TypeScript errors/warnings with eslint
2. Run ```npm run dev``` to run nodemon

### Docker Guide 
- At /cc-pk-service/ 
  - docker build . -t pk (you can choose any name instead of backend)
  - docker run -p 5000:5000 --name PK pk 
