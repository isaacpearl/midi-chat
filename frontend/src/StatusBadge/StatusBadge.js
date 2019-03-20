// StatusBadge/StatusBadge.js

import React from 'react';
import './StatusBadge.css';

export default function  StatusBadge (props) {
	return (
		<span className="status-badge">{props.status}</span>
	);
}
