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
	
	componentDidMount() {
		fetch("http://localhost:3001/tunes")
			.then(response => response.json())
			.then(data => this.setState({tunes: data }))
		fetch("http://localhost:3001/users")
			.then(response => response.json())
			.then(data => this.setState({users: data }))
	}

	render() {
		return(
			<div>
				{this.state.users.map(
					user => <UserContainer userObject={user} key={user.id} userId={user.id}/>
				)}
				<TuneList tunes = {this.state.tunes}/>
			</div>
		);
	}

}
			
export default App;
