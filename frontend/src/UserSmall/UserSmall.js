// UserSmall/UserSmall.js

import React from 'react';
import './UserSmall.css';

import UserInfo from '../UserInfo/UserInfo';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TunePlayer from '../TunePlayer/TunePlayer';

export default class UserSmall extends React.Component {
	//TODO: add state and pass id props down to children
	render() {
		return(
			<div className="user-small-container">
				<span>UserSmall</span>
				<ProfilePicture/>
				<UserInfo/>
				<TunePlayer/>
			</div>
		);
	}
}
