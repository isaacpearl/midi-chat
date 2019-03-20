//UserContainer/UserContainer.js

import React from 'react';
import './UserContainer.css';
import UserSmall from '../UserSmall/UserSmall'

export default class UserContainer extends React.Component {

	constructor(props) {
		super(props);

		//TODO: ask someone about how to handle defaults/pre api return rendering best practices
		this.state = {
			users: [{
				id: 0,
				name: "loading name",
				email: "loading email",
				avatar: "https://pbs.twimg.com/profile_images/1280382213/YoshiProfileONG.png",
				status: "away"
			}] 
		};
	}

	componentDidMount() {
		fetch('http://localhost:3001/users/9')
			.then(response => response.json())
			.then(data => this.setState({users: data}));
	}

	render() {
		return (
			<div className="user-container">
				<UserSmall user={this.state.users[0]}/>
			</div>
		);
	}
}
