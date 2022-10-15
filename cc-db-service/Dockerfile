# This is where you define the image for cc-db-service

# Start by copying the server stub to this directory.

# First line is provided for your convenience.
# This line fetches the latest Node Docker image 
# from Docker Hub.

FROM node:latest


WORKDIR /usr/src/app

RUN echo "PORT=4001" >> .env 

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

RUN npm install -g typescript

COPY . .

EXPOSE 4001

CMD ["npm", "start"]


