// AccordionItem/AccordionItem.js

import React from 'react';
import './AccordionItem.css';

export default class AccordionItem extends React.Component {
	constructor() {
		super();
		this.state = {
		
		};

		this.toggle = this.toggle.bind(this); //TODO: understand this function call
	}
	toggle() {
		this.setState({
			active: !this.state.active,
			className: "active"
		});
	}
	render() {
		const activeClass = this.state.active ? "active" : "inactive";
		//TODO: figure out correct way to pass in section title and inner content (inner content should be a react component)
		return (
			<div className={activeClass} onClick={this.toggle}>
				<span className="section-title">{}</span>
				<span className="folding-panel inner-content">{}</span>
			</div>
		);
	}
}
