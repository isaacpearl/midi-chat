// TunePlayer/TunePlayer.js

import React from 'react';
import './TunePlayer.css';
import Tone from 'tone';

export default class TunePlayer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		};	
	}
	
	playNote() {
		console.log("playing note!");
		var synth = new Tone.Synth().toMaster();
		synth.triggerAttackRelease('C4', '8n');
	}
	
	render() {
		return(
			<div className="tune-player">
				<button onClick={() => this.playNote()}>Play Tune!</button>
			</div>
		);
	}
}
