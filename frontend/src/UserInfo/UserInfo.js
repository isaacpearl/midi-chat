// UserInfo/UserInfo.js

import React from 'react';
import './UserInfo.css';
import StatusBadge from '../StatusBadge/StatusBadge';

export default class UserInfo extends React.Component {
	render() {
		var testUsername = 'username';

		return (
			<div className="user-info">
				<StatusBadge/>
				<span className="username">@{testUsername}</span>
			</div>
		);
	}
}
