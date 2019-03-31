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
	const { name, email, avatar } = request.body;

	pool.pool.query('INSERT INTO users (name, email, avatar) VALUES ($1, $2, $3) RETURNING id', [name, email, avatar], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(201).send(`User added with ID: ${results.rows[0].id}`);
	});
};

const updateUser = (request, response) => {
	const id = parseInt(request.params.id);
	const { name, email, avatar, signature_tune } = request.body;

	pool.pool.query(
			'UPDATE users SET name = $1, email = $2, avatar = $3, signature_tune = $4 WHERE id = $5', 
			[name, email, avatar, signature_tune, id],
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






