//UserContainer/UserContainer.js

import React from 'react';
import './UserContainer.css';
import UserSmall from '../UserSmall/UserSmall'

export default class UserContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			info: []
		};
	}

	render() {	
		var testUser = {
			username: "yoshi",
			profilePicture: "https://pbs.twimg.com/profile_images/1280382213/YoshiProfileONG.png"
		}
	
		return (
			<div className="user-container">
				{this.state.info}
				<UserSmall user={testUser}/>
			</div>
		);
	}
}
