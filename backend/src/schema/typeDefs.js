const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Landing {
    id: ID!
    title: String!
    image: String!
  }

  type Query {
    landing: Landing
  }
`;

module.exports = typeDefs;