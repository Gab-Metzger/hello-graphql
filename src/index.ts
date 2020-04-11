require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(
  {
    port: process.env.PORT,
  },
  () => console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`),
);
