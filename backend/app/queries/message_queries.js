// queries/message_queries.js

const pool = require('../../config/pool');

const getMessages = (request, response) => {
	pool.pool.query('SELECT * FROM tune_messages ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error;
		}	
		response.status(200).json(results.rows);
	});
};

const getMessagesBySenderId = (request, response) => {
	const id = parseInt(request.params.id);

	pool.pool.query('SELECT * FROM tune_messages WHERE sender_id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getMessagesByRecipientId = (request, response) => {
	const id = parseInt(request.params.id);

	pool.pool.query('SELECT * FROM tune_messages WHERE recipient_id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const getTunesByRecipientId = (request, response) => {
	const id = parseInt(request.params.id);
};

const createMessage = (request, response) => {
	const { sender_id, recipient_id, tune_id } = request.body;

	pool.pool.query('INSERT INTO tune_messages (sender_id, recipient_id, tune_id) VALUES ($1, $2, $3) RETURNING id', [sender_id, recipient_id, tune_id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(201).send(results.rows[0]);
	});
};

module.exports = {
	getMessages,
	getMessagesBySenderId,
	getMessagesByRecipientId,
	createMessage
};






