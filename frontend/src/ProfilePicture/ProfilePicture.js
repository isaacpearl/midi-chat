// ProfilePicture/ProfilePicture.js

import React from 'react';
import './ProfilePicture.css';

export default function ProfilePicture(props) {
	return (
		<span className="profile-picture"><img src={props.avatar} alt="profile"/></span>
	);
}
