// Accordion/Accordion.js

import React from 'react';
import AccordionItem from '../AccordionItem/AccordionItem';

export default class Accordion extends React.Component {
	constructor() {
		super();
		this.state = {
			//TODO: figure out how to set state to be all child components 
		};
		this.renderItem = this.renderItem.bind(this); //TODO: understand this function call
	}
	
	renderItem(element) {
		return <AccordionItem element />
	}

	render() {
		//TODO: figure out correct way to render all this
		return(
			<div>
				<div className="accordion-container">{Object.keys(this.children).map(this.renderItem)} </div>
			</div>    
		)
	}

}

