const express               = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser            = require('body-parser');
const morgan                = require('morgan');
const cors                  = require('cors');
const knex                  = require('knex');
const app                   = express();

const db = knex({
	client: 'pg',
	connection: process.env.POSTGRES_URI
});

// GraphQL/Apollo ////////////////////////////////////////////////
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

const server = new ApolloServer({ typeDefs, resolvers });

// Middleware ////////////////////////////////////////////////////
server.applyMiddleware({ app });
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

// Routes Handling ///////////////////////////////////////////////
app.get('/', (req, res) => { res.send('Helloooooo')});

// Port Setup ////////////////////////////////////////////////////
const port = 8080;
app.listen(process.env.PORT || port, () =>
	console.log(`🚀 Server ready at http://localhost:${process.env.PORT || port}. Access GraphQL at http://localhost:${process.env.PORT || port}${server.graphqlPath}`)
);


// app.listen(process.env.PORT || port, () => console.log(`Listening on port ${process.env.PORT || port}`));
