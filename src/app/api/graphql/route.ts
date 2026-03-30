// pages/api/graphql.js

import { ApolloServer, gql } from "apollo-server-micro";

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers for your schema
const resolvers = {
  Query: {
    hello: () => "Hello from GraphQL!",
  },
};

// Create an ApolloServer instance
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Initialize ApolloServer with micro
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, handled by ApolloServer
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
