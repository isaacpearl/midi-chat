// UserSmall/UserSmall.js

import React from 'react';
import './UserSmall.css';

import UserInfo from '../UserInfo/UserInfo';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import TunePlayer from '../TunePlayer/TunePlayer';

export default class UserSmall extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: props.user
		};
	}
	
	//TODO: figure out why this doesn't rerender when UserContainer's API calls finish
	componentDidMount() {
		this.setState({user: this.props.user});
	}

	render() {
		return(
			<div className="user-small">
				<ProfilePicture image="https://pbs.twimg.com/profile_images/1280382213/YoshiProfileONG.png"/>
				<UserInfo username={this.state.user.name}/>
				<TunePlayer/>
			</div>
		);
	}
}
