//UserContainer/UserContainer.js

import React from 'react';
import './UserContainer.css';
import UserSmall from '../UserSmall/UserSmall'
import TuneForm from '../TuneForm/TuneForm';
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
		return (
			<div className="user-container">
				<UserSmall user={this.state.user[0]} tune={this.state.tune[0].note_array}/>
				<TuneForm profileUpdate={true} userId={this.state.user[0].id}/>
				<TuneForm profileUpdate={false} userId={this.state.user[0].id}/>
			</div>
		);
	}
}
