// queries/tune_queries.js

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
	pool.pool.query('SELECT *  FROM tunes WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error;
		}
		response.status(200).json(results.rows);
	});
};

const storeTune = (request, response) => {
	const { note_array, owner_id, title } = request.body;
	pool.pool.query('INSERT INTO tunes (note_array, owner_id, title) VALUES ($1, $2, $3) RETURNING id', [note_array, owner_id, title], (error, results) => {
		if (error) {
			throw error;
		} else {
			console.log("database results are: ", results);
		}
				
		response.status(201).send(results.rows[0]);
	});
};

const updateTune = (request, response) => {
	const id = parseInt(request.params.id);
	const { note_array } = request.body;

	pool.pool.query(
			'UPDATE tunes SET note_array = $1 WHERE id = $2', 
			[note_array, id],
			(error, results) => {
				if(error) {
					throw error;
				} 
				//				response.status(200);
					response.status(200).send(`tune modified with ID: ${id}`);
			});
};




const sendTuneMessage = (request, response) => {
	const { sender_id, recipient_id, tune_id } = request.body;

	pool.pool.query('INSERT INTO tune_messages (sender_id, recipient_id, tune_id) VALUES ($1, $2, $3) RETURNING id', [sender_id, recipient_id, tune_id], (error, results) => {
		if (error) {
			throw error;
		}

		response.status(201).send(`Tune ${tune_id} sent to recipient ${recipient_id} from sender ${sender_id}`);
	});
};

module.exports = {
	getTunes,
	getTuneById,
	storeTune,
	updateTune,
	sendTuneMessage
};
