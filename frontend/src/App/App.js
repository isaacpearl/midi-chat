//App/App.js

import React, { Component } from 'react';
import './App.css';
import UserContainer from '../UserContainer/UserContainer';
import Accordion from '../Accordion/Accordion';
import TuneForm from '../TuneForm/TuneForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: []
		};
	}
	
	componentDidMount() {
		fetch('http://localhost:3001/')
			.then(response => response.json())
			.then(data => this.setState({info: data.info }));
	}

	render() {
		return(
			<div>
				<UserContainer userId={9} />	
				<UserContainer userId={10} />
			</div>
		);
	}
}

export default App;
