//UserContainer/UserContainer.js

import React from 'react';
import './UserContainer.css';
import UserSmall from '../UserSmall/UserSmall'
import TuneForm from '../TuneForm/TuneForm';
import TuneList from '../TuneList/TuneList';
export default class UserContainer extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			tune: [{}],
			receivedTuneIds: [],
			inbox: []
		};
	}

	getSignatureTune() {
		var tuneUrl = 'http://localhost:3001/tunes/' + this.props.userObject.signature_tune;
		fetch(tuneUrl)
			.then(response => response.json())
			.then(data => this.setState({tune: data }))
	}

	getReceivedTunes() {
		var inboxUrl = 'http://localhost:3001/messages/recipient/' + this.props.userObject.id;
		fetch(inboxUrl)
			.then(response => response.json())
			.then(data => data[0] ? this.state.receivedTuneIds.push(data[0].tune_id) : 0);
	}

	componentDidMount(){ 
		this.getSignatureTune();
		this.getReceivedTunes();
	}

	render() {
		console.log(this.state.receivedTuneIds);
		return (
			<div className="user-container">
				<UserSmall user={this.props.userObject} tune={this.state.tune[0].note_array}/>
				<TuneForm profileUpdate={true} signatureTuneId={this.props.userObject.signature_tune}/>
				<TuneForm profileUpdate={false} userId={this.props.userObject.id}/>
			</div>
		);
	}
}
