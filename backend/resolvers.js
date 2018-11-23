const uuid4 = require('uuid/v4');

const resolvers = {
  Query: {
    me: (parent, args, { me }) => me,
    user: (parent, { id }, { models }) => models.users[id],
    users: (parent, args, { models }) => Object.values(models.users),
    message: (parent, { id }, { models }) => models.messages[id],
    messages: (parent, args, { models }) => Object.values(models.messages),
  },

  Message: {
    user: (message, args, { models }) => models.users[message.userid],
  },

  User: {
    messages: (user, args, { models }) =>
      Object.values(models.messages).filter(message =>
        user.messageIds.includes(message.id)
      ),
  },

  Mutation: {
    createMessage: (parent, { text }, { models, me }) => {
      const id = uuid4();
      const message = { id, text, userid: me.id };
      models.users[me.id].messageIds.push(id);
      models.messages[id] = message;
      return message;
    },
    deleteMessage: (parent, { id }, { models }) => {
      const { [id]: message, ...otherMessages } = models.messages;
      models.messages = otherMessages;
      return !!message;
    },
  },
};

module.exports = resolvers;
