FROM node:17

WORKDIR /usr/src/app

RUN npm i -D gts


COPY frontend/tsconfig.json .
COPY frontend/package*.json .
COPY frontend/next*.js .
COPY frontend/.babelrc .
COPY frontend/src src
COPY frontend/pages pages
COPY frontend/public/ public
COPY frontend/styles styles


# RUN npm i -D @swc/core-linux-x64-gnu
RUN npm i

EXPOSE 3000