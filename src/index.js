const { ApolloServer, gql } = require("apollo-server");

// Toda request é POST
// Toda request bate no mesmo endpoint (/graphql)

// Query -> Obter informações (GET)
// mutation -> manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types/Tipos primitivos -> String, Int, Boolean, Float e ID

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => "Hello world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server started at ${url}`));
