//index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('./app/queries');

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

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
	console.log(`midi chat backend running on port ${port}.`);
});
