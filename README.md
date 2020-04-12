# Hello GraphQL

My boilerplate code for building a GrahpQL api using Node and Typescript

## Getting Started

First step is to install all dependencies using yarn or npm

```sh
yarn
# or
# npm install
```

Then you should create the environment file. You can use the example one provided in the project
`.env.example`

```sh
cp .env.example .env
```

The best way to get ready quickly is by using the Docker configuration included in the repository

```sh
docker-compose up -d
```

This command will launch two containers

- `api` container using a **node-slim** image to serve the typescript application
- `postgres` container using a **postgres** image to setup the database

## Prisma

This GraphQL example api is using [Prisma](https://www.prisma.io/) as a modern ORM.

Using Prisma v2 there is two different approaches to build your data models.

- The first one is by introspecting your database.
  This means that you need to define you data structure at the database level.
  When your tables are all created you will use Prisma to introspect your database
  and generate your data schema.
- The second approach is by creating the data schema on your app and use
  Prisma Migrate tool (experimental) to generate the different tables on your database.

In this example I used the second approach by migrating the schema defined in the `prisma/schema.prisma` file.

To do so, I added the following models to my schema file

```
model Post {
  id        Int      @default(autoincrement()) @id
  createdAt DateTime @default(now())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
}

model Profile {
  id     Int     @default(autoincrement()) @id
  bio    String?
  user   User    @relation(fields: [userId], references: [id])
  userId Int     @unique
}

model User {
  id      Int      @default(autoincrement()) @id
  email   String   @unique
  name    String?
  posts   Post[]
  profile Profile?
}
```

And then migrate the schema to the database.

```sh
# generate a migration file named 'init' in the 'prisma/migrations' directory
yarn prisma migrate save --name init --experimental
# execute the migrations
yarn prisma migrate up --experimental
```
