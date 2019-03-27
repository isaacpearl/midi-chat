//UpdateTuneForm/UpdateTuneForm.js

import React from 'react';
import './UpdateTuneForm.css';

export default class UpdateTuneForm extends React.Component {
	
	constructor(props) {
		super(props);
	
		this.state = {
			tuneId: "",
			tuneNotes: "",
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = (target.type) === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value	
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		//TODO: fetch API calls and create new message/note rows in database	
	}


	postData(url = ``, data = {}) {
		// Default options are marked with *
		return fetch(url, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, cors, *same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: "follow", // manual, *follow, error
			referrer: "no-referrer", // no-referrer, *client
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		})
			.then(response => response.json()); // parses JSON response into native Javascript objects 
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Tune ID:
					<input 
						name="tuneId"
						className="tune-id" 
						type="number" 
						value={this.state.tuneId} 
						onChange={this.handleInputChange}
					/>
				</label>
				<label>
					Tune Notes:
					<input
						name="tuneNotes"
						className="tune-notes"
						type="text"
						value={this.state.tuneNotes}
						onChange={this.handleInputChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
