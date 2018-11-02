const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const cors       = require('cors');
const app        = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send('Helloooooo')});

const port = 8080;
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${process.env.PORT || port}`));
