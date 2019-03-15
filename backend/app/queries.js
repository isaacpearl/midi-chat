//queries.js

const pool = require('../config/pool');

const getUsers = (request, response) => {
	pool.pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error;
		}	
		response.status(200).json(results.rows);
	});
};

const getUserById = (request, response) => {
	const id = parseInt(request.params.id);

	pool.pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const createUser = (request, response) => {
	const { name, email } = request.body;

	pool.pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
		if (error) {
			throw error;
		}
		//TODO: figure out why this returns undefined for results.insertId
		response.status(201).send(`User added with ID: ${results.insertId}`);
	});
};

const updateUser = (request, response) => {
	const id = parseInt(request.params.id);
	const { name, email } = request.body;

	pool.pool.query(
			'UPDATE users SET name = $1, email = $2 WHERE id = $3', 
			[name, email, id],
			(error, results) => {
				if(error) {
					throw error;
				}
				response.status(200).send(`user modified with ID: ${id}`);
			});
}

const deleteUser = (request, response) => {
	const id = parseInt(request.params.id);
	
	pool.pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).send(`User deleted with ID: ${id}`);
	});
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser
};






