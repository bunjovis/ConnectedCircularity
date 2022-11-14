### Materiaalitori Service Guide

1. Make sure you are in cc-mt-service directory
2. Create .env -file with missing information, you can find the needed information from the .env.example -file
3. Run ```npm install``` on command line
4. Run ```npm start``` on command line to run the program. This will run two commands:
   - ```tcp```: TypeScript compiler. Creates a JavaScript file from the app.ts -file which Node can easily run
   - ```node dist/app.js```. Runs the created JavaScript file with Node

##### How to post an advert with an attachment
1. Upload an attachment to Materiaalitori Test API. Use the route `localhost:8000/v1/attachment`. Example of the curl request inside the folder where the attachment exists:
    - curl -XPOST localhost:8000/v1/attachment -F file=@puu.jpg
2. Curl request will return an object array. For example, the call above can return:
    - [{"id":"44f62eab361f482f92349dc5c74742b8","filename":"puu.jpg","contentType":"image/jpeg","length":52745}]
3. Make a curl call with an advert object to post a advert to Materiaalitori Test API. Use the route `localhost:8000/v1/advert`. In the advert, the attachments-attribute will get the previously gotten object array as its value. Example of the curl request:
    - curl -XPOST localhost:8000/v1/advert --data '{"type":"offeringMaterial","data":{"materials": ... ,"attachments":[{"id":"de67524823a043a0913b29f717b5bf87", "filename":"puu.jpg", "contentType":"image/jpeg","length":52745}]}}' -H 'Content-Type: application/json'
4. The advert can now be seen in the Materiaalitori Test API.

### Docker Guide 
- At /cc-db-service/ 
  - docker build . -t mt (you can choose any name instead of backend)
  - docker run -p 8000:8000 --name MT mt 

Additional scripts:
1. Run `npm run check` to check the file for TypeScript errors/warnings with eslint
2. Run `npm run dev` to run the ts-file with nodemon