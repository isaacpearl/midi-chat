// NewMessageForm/NewMessageForm.js

import React from 'react';
import './NewMessageForm.css';

export default class NewMessageForm extends React.Component {
	
	constructor(props) {
		super(props);
	
		this.state = {
			recipient: "",
			sender: "",
			tuneNotes: "",
			tuneName: ""
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

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Tune Name:
					<input 
						name="tuneName"
						className="tune-name" 
						type="text" 
						value={this.state.tuneName} 
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
