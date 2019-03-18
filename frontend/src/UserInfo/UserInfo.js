// UserInfo/UserInfo.js

import React from 'react';
import './UserInfo.css';
import StatusBadge from '../StatusBadge/StatusBadge';

export default class UserInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: this.props.username	
		};
	}
	
	render() {
		return (
			<div className="user-info">
				<StatusBadge/>
				<span className="username">@{this.state.username}</span>
			</div>
		);
	}
}
