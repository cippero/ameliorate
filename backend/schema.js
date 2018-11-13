const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Query {
		hello: String,
		five: Int
	}
`;

const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		five: () => 5
	}
};

module.exports = { typeDefs, resolvers };
