//UserContainer/UserContainer.js

import React from 'react';
import './UserContainer.css';
import UserSmall from '../UserSmall/UserSmall'

export default class UserContainer extends React.Component {

	constructor(props) {
		super(props);

		//TODO: ask someone about how to handle defaults/pre api return rendering best practices
		this.state = {
			user: [{
				id: 0,
				name: "loading name",
				email: "loading email",
				avatar: "https://pbs.twimg.com/profile_images/1280382213/YoshiProfileONG.png"
			}] 
		};
	}

	componentDidMount() {
		fetch('http://localhost:3001/users/9')
			.then(response => response.json())
			.then(data => this.setState({user: data}));
	}

	render() {
		var testUser = {
			username: "yoshi",
			profilePicture: "https://pbs.twimg.com/profile_images/1280382213/YoshiProfileONG.png"
		}
	
		return (
			<div className="user-container">
				{this.state.user[0].name}
				<UserSmall user={this.state.user[0]}/>
			</div>
		);
	}
}
