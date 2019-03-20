// UserSmall/UserSmall.js

import React from 'react';
import './UserSmall.css';

import UserInfo from '../UserInfo/UserInfo';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TunePlayer from '../TunePlayer/TunePlayer';

export default function UserSmall(props) {
	return(
		<div className="user-small">
			<ProfilePicture image={props.user.avatar}/>
			<UserInfo username={props.user.name} status={props.user.status}/>
			<TunePlayer/>
		</div>
	);
}







