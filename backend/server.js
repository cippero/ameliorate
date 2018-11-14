const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const knex = require('knex');
const apolloServer = require('./schema');

const app = express();

// PostgreSQL ////////////////////////////////////////////////////
const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI,
});

// Middleware ////////////////////////////////////////////////////
apolloServer.applyMiddleware({ app });
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

// Routes Handling ///////////////////////////////////////////////
// app.get('/', (req, res) => { res.send('Helloooooo')});

// const testInsertion = (req, res) => {
// 	db.transaction(trx => {
// 		trx.insert({
// 			userid: 1,
// 			entrydate: '2017-3-12',
// 			waterintake: 5,
// 			weightpounds: 150,
// 			sleepamount: 7,
// 			sleepquality: 5,
// 			exercisetype: 'running',
// 			exerciselength: 60,
// 			exerciseintensity: 7,
// 			overallfeeling: 6
// 		})
// 		.into('stats')
// 		.returning('userid')
// 		.then(trx.commit)
// 		.catch(trx.rollback)
// 	})
// 	.catch(err => { console.log(err); res.status(400).json('unable to register'); });
// 	res.status(200).json('added user stats info');
// };
// app.get('/test', (req, res) => { testInsertion(req, res)});

// Port Setup ////////////////////////////////////////////////////
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT || PORT}`)
);
