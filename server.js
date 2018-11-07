const { ApolloServer } = require('apollo-server');
const resolvers = require('./data/resolvers');
const requireText = require('require-text');
const typeDefs = requireText('./data/schema.graphql', require);

//create Apollo Server that uses our schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//start listening on the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});