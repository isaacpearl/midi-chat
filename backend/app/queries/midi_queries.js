// queries/midi_queries.js

const pool = require('../../config/pool');

const getTunes = (request, response) => {
	pool.pool.query('SELECT * FROM tunes ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error;
		}	
		response.status(200).json(results.rows);
	});
};

const getTuneById = (request, response) => {
	const id = parseInt(request.params.id);

	pool.pool.query('SELECT * FROM tunes WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

module.exports = {
	getTunes,
	getTuneById
};
