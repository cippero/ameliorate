const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Query {
		id: ID,
		fname: String,
		lname: String,
		email: String,
		joined: String,
		stats: UserStats
	}

	type UserStats {
		userid: ID,
		entrydate: String,
		waterintake: Int,
		weightpounds: Int,
		sleepamount: Int,
		sleepquality: Int,
		exercisetype: String,
		exerciselength: Int,
		exerciseintensity: Int,
		overallfeeling: Int
	}
`;

const resolvers = {
	Query: {
		id: () => 1,
		fname: () => 'Eddie',
		lname: () => 'Murphy',
		email: () => 'eddie@murphy.com',
		joined: () => '2017-05-14',
		stats: () => ({
			entrydate: () => '2017-3-12',
			waterintake: () => 5,
			weightpounds: () => 150,
			sleepamount: () => 7,
			sleepquality: () => 5,
			exercisetype: () => 'running',
			exerciselength: () => 60,
			exerciseintensity: () => 7,
			overallfeeling: () => 6
		})
	}
};

module.exports = { typeDefs, resolvers };
