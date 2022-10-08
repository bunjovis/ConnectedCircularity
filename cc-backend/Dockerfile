# This is where you define the image for
# Materiaalitori service setup.

# Start by copying the server stub to this directory.


# First line is provided for your convenience.
# This line fetches the Node Docker image with tag "16"
# from Docker Hub.
# We use version 16 as the mongodb dependency has requirements
FROM node:latest


WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

RUN npm install -g typescript

RUN npm install express


COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev" ]


