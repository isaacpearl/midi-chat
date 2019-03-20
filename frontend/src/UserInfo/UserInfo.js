// UserInfo/UserInfo.js

import React from 'react';
import './UserInfo.css';
import StatusBadge from '../StatusBadge/StatusBadge';

export default function UserInfo(props) {
	return(
		<div className="user-info">
			<span className="username">@{props.username}</span>
			<StatusBadge status={props.status}/>
		</div>
	);
}
