// queries/user_queries.js

const pool = require('../../config/pool');

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
	const { name, avatar } = request.body;
	pool.pool.query('INSERT INTO users (name, avatar) VALUES ($1, $2)  RETURNING id', [name, avatar], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(201).send(`User added with ID: ${results.rows[0].id}`);
	});
};

const updateUser = (request, response) => {
	const id = parseInt(request.params.id);
	const { name, avatar, signature_tune } = request.body;

	pool.pool.query(
			'UPDATE users SET name = $1, avatar = $2, signature_tune = $3 WHERE id = $4', 
			[name, avatar, signature_tune, id],
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






