FROM node:12-slim

WORKDIR /usr/app

COPY package.json .
RUN yarn install --silent

COPY . .
