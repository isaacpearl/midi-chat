//UserContainer/UserContainer.js

import React from 'react';
import './UserContainer.css';
import UserSmall from '../UserSmall/UserSmall'
import TuneForm from '../TuneForm/TuneForm';
export default class UserContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			tune: [{}]
		};
	}

	getSignatureTune() {
		var tuneUrl = 'http://localhost:3001/tunes/' + this.props.userObject.signature_tune;
		fetch(tuneUrl)
			.then(response => response.json())
			.then(data => this.setState({tune: data }))
	}

	componentDidMount(){ 
		this.getSignatureTune();
	}

	render() {
		return (
			<div className="user-container">
				<UserSmall user={this.props.userObject} tune={this.state.tune[0].note_array}/>
				<TuneForm profileUpdate={true} signatureTuneId={this.props.userObject.signature_tune}/>
				<TuneForm profileUpdate={false} userId={this.props.userObject.id}/>
			</div>
		);
	}
}
