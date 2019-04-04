// TuneList/TuneList.js

import React from 'react';
import './TuneList.css';
import TunePlayer from '../TunePlayer/TunePlayer.js';

export default class TuneList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tunes: [] 	
		};
	}

	render() {
		return(
			<div className="tune-list">
				{this.props.tunes.map(
					tune => <TunePlayer key={tune.id} id={tune.id} tune={tune.note_array}/>
				)}
			</div>
		);
	}
}
