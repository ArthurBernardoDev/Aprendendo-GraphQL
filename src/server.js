import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import path from "path";

const server = new GraphQLServer({
  typeDefs: path.join(__dirname, "graphql/schema.graphql"),
  resolvers,
});

server.start({ port: 3100 }, ({ port }) => {
  console.log("Server on port", port);
});
