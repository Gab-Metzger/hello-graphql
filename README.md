# Hello GraphQL

My boilerplate code for building a GrahpQL api using Node and Typescript

## Getting Started

First step is to install all depedencies using yarn or npm

```sh
yarn
# or
# npm install
```

The best way to get ready quickly is by using the Docker configuration included in the repository

```sh
docker-compose up -d
```

This command will launch two containers

- `api` container using a **node-slim** image to serve the typescript application
- `postgres` container using a **postgres** image to setup the database
