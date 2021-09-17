const users = [
  { id: 1, name: "Arthur", email: "contato.arthurbernardoas@gmail.com" },
  { id: 2, name: "Joao", email: "joao@gmail.com" },
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0],
  },
  Mutation: {
    createUser: () => users[0],
  },
};
