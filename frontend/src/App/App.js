//App.js

import React, { Component } from 'react';
import './App.css';
import UserSmall from '../UserSmall/UserSmall'

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
		console.log('fetched data!');
	}

	render() {
		console.log("data: " + this.state.info);

	
		return (
			<div className="App">
				{this.state.info}
				<UserSmall/>
			</div>
		);
	}
}

export default App;
