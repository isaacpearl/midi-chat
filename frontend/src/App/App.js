//App/App.js

import React, { Component } from 'react';
import './App.css';
import UserContainer from '../UserContainer/UserContainer';
import Accordion from '../Accordion/Accordion';
import TuneForm from '../TuneForm/TuneForm';
import TuneList from '../TuneList/TuneList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tunes: [],
			users: [],
			messages: [],
		};
	}

	fetchApiCalls() {
		fetch("http://localhost:3001/tunes")
			.then(response => response.json())
			.then(data => this.setState({tunes: data }))
		fetch("http://localhost:3001/users")
			.then(response => response.json())
			.then(data => this.setState({users: data }))
		fetch("http://localhost:3001/messages")
			.then(response => response.json())
			.then(data => this.setState({messages: data}));
	
	}

	componentDidMount() {
		this.fetchApiCalls();
	}

	render() {
		console.log(this.state.messages);
		return(
			<div className = "app">
				{this.state.users.map(
					user => <UserContainer userObject={user} key={user.id} userId={user.id} tunes = {this.state.tunes}/>
				)}
				<TuneList tunes = {this.state.tunes}/>
			</div>
		);
	}

}
			
export default App;
