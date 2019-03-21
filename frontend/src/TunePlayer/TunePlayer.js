// TunePlayer/TunePlayer.js

import React from 'react';
import './TunePlayer.css';
import TuneController from '../TuneController/TuneController.js';

export default class TunePlayer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			Controller: new TuneController(this.props.tune)
		};
	}
		
	componentDidMount() {
		this.setState({Controller: new TuneController(this.props.tune) });	
	}

	render() {	
		return(
			<div className="tune-player">
				<button onClick={() => this.state.Controller.togglePlayback(this.props.tune)}>
					Play Tune!
				</button>
			</div>
		);
	}
}
