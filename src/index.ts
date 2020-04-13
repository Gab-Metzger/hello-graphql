require('dotenv').config();
import { ApolloServer } from 'apollo-server';
import { makeSchema, objectType } from '@nexus/schema';

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.string('hello', {
      nullable: true,
      resolve: () => `Say hello to the new Apollo Server using NexusJS.`,
    });
  },
});

const server = new ApolloServer({ schema: makeSchema({ types: [Query] }) });

server
  .listen({
    port: process.env.PORT,
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
