// TunePlayer/TunePlayer.js

import React from 'react';
import './TunePlayer.css';
import TuneController from '../TuneController/TuneController.js';

export default class TunePlayer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			playing: false,
			Controller: new TuneController(this.props.tune)
		};
	}
	
	onClick = () => {
		const { playing, Controller } = this.state;
		this.setState((state) => ({
			playing: !playing
		}));
		Controller.togglePlayback(this.props.tune, playing);
	}

	render() {	
		return(
			<div className="tune-player">
				<button onClick={this.onClick}>
					Play Tune!
				</button>
			</div>
		);
	}
}
