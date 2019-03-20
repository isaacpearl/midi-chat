// ProfilePicture/ProfilePicture.js

import React from 'react';
import './ProfilePicture.css';

//TODO: add props to this function
export default function ProfilePicture(props) {
	return (
		<span className="profile-picture"><img src={props.image}/></span>
	);
}
