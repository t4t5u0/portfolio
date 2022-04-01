FROM node:17

ENV NODE_ENV=development

WORKDIR /usr/src/app

RUN npm install -D gts

COPY apollo_server/tsconfig.json .
COPY apollo_server/package*.json .
COPY apollo_server/src src

RUN npm install

EXPOSE 4000