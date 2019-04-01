//TuneForm/TuneForm.js

import React from 'react';
import './TuneForm.css';

export default class TuneForm extends React.Component {
	
	constructor(props) {
		super(props);
	
		this.state = {
			tuneNotes: "",
			recipient: "",
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = (target.type) === 'checkbox' ? target.checked : this.formatNoteInput(target.value);
		const name = target.name;

		debugger;	

		this.setState({
			[name]: value	
		});
	}

	formatNoteInput(value) {
		
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
				{!this.props.profileUpdate && 
				<label>
					To: 
					<input 
						name="recipient"
						className="recipient-field" 
						type="string" 
						value={this.state.recipient} 
						onChange={this.handleInputChange}
					/>
				</label>
				}
				<label>
					{(!this.props.profileUpdate) ? "Tune Notes: " : "Update signature tune: "}
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
