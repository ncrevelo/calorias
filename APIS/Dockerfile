FROM node:20

USER root

RUN apt-get update && apt-get install -y wget nano postgresql postgresql-contrib && rm -rf /var/lib/apt/lists/*

RUN npm cache clean --force

RUN npm install -g npm@8.12.1

RUN npm install prisma -g \
    && npm install cors -g \
    && npm install pg -g \
    && npm install dotenv -g \
    && npm install express -g \
    && npm install jsonwebtoken -g \
    && npm install nodemon -g \
    && npm install @prisma/client -g

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY usuarios/package*.json ./ 

RUN npm install

RUN npm install dotenv --save-dev

COPY usuarios ./ 

RUN prisma generate

CMD [ "nodemon", "app.js" ]
