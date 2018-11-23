const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    user(id: ID!): User
    users: [User!]

    message(id: ID!): Message!
    messages: [Message!]!
  }

  type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
  }

  type User {
    id: ID!
    fname: String
    lname: String
    email: String
    joined: String
    messages: [Message!]
  }

  type Message {
    id: ID!
    text: String!
    user: User!
  }
`;

// type UserStats {
// 	userid: ID
// 	entryid: ID
// 	entrydate: String
// 	waterintake: Int
// 	weightpounds: Int
// 	sleepamount: Int
// 	sleepquality: Int
// 	exercisetype: String
// 	exerciselength: Int
// 	exerciseintensity: Int
// 	overallfeeling: Int
// }

module.exports = typeDefs;
