require('dotenv').config();
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () =>
      `Say hello to the new Apollo Server! A production ready GraphQL server with an incredible getting started experience.`,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({
    port: process.env.PORT,
  })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
