FROM node:16.20.0-alpine

WORKDIR /src

RUN mkdir tmp

COPY package.json .

RUN yarn

RUN apk add --no-cache mysql-client

RUN apk add --no-cache aws-cli

COPY . .

RUN ls -A

RUN cat server.js

CMD [ "yarn", "start" ]