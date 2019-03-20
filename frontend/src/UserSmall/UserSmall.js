// UserSmall/UserSmall.js

import React from 'react';
import './UserSmall.css';

import UserInfo from '../UserInfo/UserInfo';
import TunePlayer from '../TunePlayer/TunePlayer';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

export default function UserSmall(props) {
	return(
		<div className="user-small">
			<ProfilePicture avatar={props.user.avatar}/>
			<UserInfo username={props.user.name} status={props.user.status}/>
			<TunePlayer/>
		</div>
	);
}







