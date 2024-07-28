const { ApolloServer, gql } = require("apollo-server");

// Define schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
