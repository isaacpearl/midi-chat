//TuneForm/TuneForm.js

import React from 'react';
import './TuneForm.css';

export default class TuneForm extends React.Component {
	
	constructor(props) {
		super(props);
	
		this.state = {
			note_array: "",
			sender_id: this.props.userId,
			recipient_id: "",
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.formatTuneInput = this.formatTuneInput.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = (target.type) === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value	
		});

	}

	//TODO: replace this with Animal Crossing-style town tune slider interface ASAP
	formatTuneInput(input) {
		return input.split(" ");
	}

	async handleSubmit(event) {
		event.preventDefault();
		var newArray = this.formatTuneInput(this.state.note_array)
		if (this.props.profileUpdate) {
			await this.putData(`http://localhost:3001/tunes/${this.props.signatureTuneId}`, {note_array: newArray});
		} else {
			var newTuneId = (await this.postData(`http://localhost:3001/tunes`, {note_array: newArray})).id;
			this.postData(`http://localhost:3001/messages`, {sender_id: this.state.sender_id, recipient_id: this.state.recipient_id, tune_id: newTuneId});
		};
	//one option: pass in reFetch() method from app or userContainer to rerender
	//another production-y option: no reFetch(), pass this a function that lets us update state of app or userContainer and 
	//set state using the returned data from API calls
	//one more optimistic option: in this function, use data from this.state.notearray to update state client-side (pass in a function that 
	//updates app or userContainer with the user inputted notearray)
	}

	putData(url = ``, data = {}) {
		// Default options are marked with *
		return fetch(url, {
			method: "PUT", // *GET, POST, PUT, DELETE, etc.
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
			.then(response => response.json())
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
			.then(response => response.json());
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				{!this.props.profileUpdate && 
				<label>
					Send message to: 
					<input 
						name="recipient_id"
						className="recipient-field" 
						type="string" 
						value={this.state.recipient_id} 
						onChange={this.handleInputChange}
					/>
				</label>
				}
				<label>
					{(!this.props.profileUpdate) ? "Tune Notes: " : "Update signature tune: "}
					<input
						name="note_array"
						className="tune-notes"
						type="text"
						value={this.state.note_array}
						onChange={this.handleInputChange}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
