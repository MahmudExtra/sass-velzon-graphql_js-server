const { ApolloServer } = require("apollo-server");
const { typeDef } = require("./schema");
const { Query } = require("./resolvers/Query");
const {db} = require('./db');



const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: {
   Query,
  },
  context : {
    db
  }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ port }) => {
  console.log(`sever is running on ${port}`);
});