// NewMessageForm/NewMessageForm.js

import React from 'react';
import './NewMessageForm.css';

export default class NewMessageForm extends React.Component {
	
	constructor(props) {
		super(props);
	
		this.state = {
			value: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//TODO: handle multiple fields as in https://reactjs.org/docs/forms.html
	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert("a value was submitted: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					Tune Name:
					<input className ="tune-name" type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
