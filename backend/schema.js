const { ApolloServer, gql } = require('apollo-server-express');
const uuid4 = require('uuid/v4');

const users = {
  1: {
    id: '1',
    fname: 'Eddie',
    lname: 'Murphy',
    email: 'eddie@murphy.com',
    joined: '2017-03-14',
    stats: {
      entrydate: '2017-05-12',
      waterintake: 5,
      weightpounds: 150,
      sleepamount: 7,
      sleepquality: 5,
      exercisetype: 'running',
      exerciselength: 60,
      exerciseintensity: 7,
      overallfeeling: 6,
    },
    messageIds: ['1'],
  },
  2: {
    id: '2',
    fname: 'Bob',
    lname: 'Murphy',
    email: 'eddie@murphy.com',
    joined: '2017-03-14',
    stats: {
      entrydate: '2017-05-12',
      waterintake: 5,
      weightpounds: 150,
      sleepamount: 7,
      sleepquality: 5,
      exercisetype: 'running',
      exerciselength: 60,
      exerciseintensity: 7,
      overallfeeling: 6,
    },
    messageIds: ['2'],
  },
  3: {
    id: '3',
    fname: 'Edgar',
    lname: 'Murphy',
    email: 'eddie@murphy.com',
    joined: '2017-03-14',
    stats: {
      entrydate: '2017-05-12',
      waterintake: 5,
      weightpounds: 150,
      sleepamount: 7,
      sleepquality: 5,
      exercisetype: 'running',
      exerciselength: 60,
      exerciseintensity: 7,
      overallfeeling: 6,
    },
    messageIds: ['3', '4'],
  },
  4: {
    id: '4',
    fname: 'Shrek',
    lname: 'Murphy',
    email: 'eddie@murphy.com',
    joined: '2017-03-14',
    stats: {
      entrydate: '2017-05-12',
      waterintake: 5,
      weightpounds: 150,
      sleepamount: 7,
      sleepquality: 5,
      exercisetype: 'running',
      exerciselength: 60,
      exerciseintensity: 7,
      overallfeeling: 6,
    },
    messageIds: ['1'],
  },
};

let messages = {
  1: {
    id: '1',
    userid: '1',
    text: 'Hello World',
  },
  2: {
    id: '2',
    userid: '2',
    text: 'By World',
  },
  3: {
    id: '3',
    userid: '3',
    text: 'Shalom',
  },
  4: {
    id: '4',
    userid: '4',
    text: 'bla bla bla',
  },
};

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

const resolvers = {
  Query: {
    me: (parent, args, { me }) => me,
    user: (parent, { id }) => users[id],
    users: () => Object.values(users),
    message: (parent, { id }) => messages[id],
    messages: () => Object.values(messages),
  },

  Mutation: {
    createMessage: (parent, { text }, { me }) => {
      const id = uuid4();
      const message = { id, text, userid: me.id };
      users[me.id].messageIds.push(id);
      messages[id] = message;
      return message;
    },
    deleteMessage: (parent, { id }) => {
      const { [id]: message, ...otherMessages } = messages;
      messages = otherMessages;
      return !!message;
    },
  },

  Message: {
    user: message => users[message.userid],
  },

  User: {
    messages: user =>
      Object.values(messages).filter(message =>
        user.messageIds.includes(message.id)
      ),
  },
};

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context: { me: users[2] },
});
