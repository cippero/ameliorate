const { gql } = require('apollo-server-express');

const sampleUsers = {
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
			overallfeeling: 6
		}
	},
	2: {
		id: '1',
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
			overallfeeling: 6
		}
	},
	3: {
		id: '1',
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
			overallfeeling: 6
		}
	},
	4: {
		id: '1',
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
			overallfeeling: 6
		}
	}
}

const typeDefs = gql`
	type Query {
		user(id: ID!): User,
		users: [User!]
	}

	type User {
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
		// user: (parent, args) => ({
		user: (parent, { id }) => sampleUsers[id],
		users: () => Object.values(sampleUsers)
	}
};


module.exports = { typeDefs, resolvers };
