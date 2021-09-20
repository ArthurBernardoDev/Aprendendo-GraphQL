const { ApolloServer, gql } = require("apollo-server");

// Toda request é POST
// Toda request bate no mesmo endpoint (/graphql)

// Query -> Obter informações (GET)
// mutation -> manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types/Tipos primitivos -> String, Int, Boolean, Float e ID

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
    # O sinal de ! faz com que cada uma das infos sejam obrigatorias
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User! # Alinhamento de tipos, eu posso utilizar O type User dentro do Type Post. Logo o Author teria todas as infos do Type User, Ex (_id, name, email, active)
  }

  type Query {
    hello: String
    users: [User!]! # O sinal de ! depois do [Array] quer dizer que a Api pode retornar um [Array] vazio mas nunca um users como Null
    getUserByEmail(email: String!): User!
  }
  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

const users = [
  {
    _id: String(Math.random()),
    name: "Arthur",
    email: "contato.arthurbernardoas@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()),
    name: "Arthur2",
    email: "contato.arthurbernardoas2@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()),
    name: "Arthur3",
    email: "contato.arthurbernardoas3@gmail.com",
    active: false,
  },
];

const resolvers = {
  Query: {
    hello: () => "Hello world",
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true,
      };

      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server started at ${url}`));
