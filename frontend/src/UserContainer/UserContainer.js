//UserContainer/UserContainer.js

import React from 'react';
import './UserContainer.css';
import UserSmall from '../UserSmall/UserSmall'

export default class UserContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			userToRender: props.userId,
			user: [{}],
			tune: [{}]
		};
	}
	
	getUserAndTune() {
		var userURL = 'http://localhost:3001/users/' + this.state.userToRender;
		fetch(userURL)
			.then(response => response.json())
			.then(data => this.setState({user: data}))
			.then( () => {
					var signatureTune = this.state.user[0].signature_tune;
					var tuneUrl = 'http://localhost:3001/tunes/' + signatureTune;
					fetch(tuneUrl)
						.then(response => response.json())
						.then(data => this.setState({tune: data }))
			});
	}

	componentDidMount(){ 
		this.getUserAndTune();
	}

	render() {
		console.log(this.state.tune);	
		return (
			<div className="user-container">
				<UserSmall user={this.state.user[0]} tune={this.state.tune[0].note_array}/>
			</div>
		);
	}
}
