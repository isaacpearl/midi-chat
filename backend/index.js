//index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

const user_queries = require('./app/queries/user_queries');
const midi_queries = require('./app/queries/midi_queries');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//DELETE THIS IN PRODUCTION - this allows all CORS
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/',(request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/users', user_queries.getUsers);
app.get('/users/:id', user_queries.getUserById);
app.post('/users', user_queries.createUser);
app.put('/users/:id', user_queries.updateUser);
app.delete('/users/:id', user_queries.deleteUser);

app.get('/tunes', midi_queries.getTunes);
app.get('/tunes/:id', midi_queries.getTuneById);

app.listen(port, () => {
	console.log(`midi chat backend running on port ${port}.`);
});
