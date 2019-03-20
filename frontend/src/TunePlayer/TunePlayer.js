// TunePlayer/TunePlayer.js

import React from 'react';
import './TunePlayer.css';
import * as TuneController from '../tune_controller.js';

export default class TunePlayer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {		
		};	
	}
		
	render() {
		return(
			<div className="tune-player">
				<button onClick={() => TuneController.playTune()}>
					Play Tune!
				</button>
			</div>
		);
	}
}
