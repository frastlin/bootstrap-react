import React, { Component } from 'react';
import AccordionGroup from './react-wrapped-components/AccordionGroup'
import Accordion  from './react-wrapped-components/Accordion'

function TriggerElement(props){
	return <h3><button {...props}>{props.children}</button></h3>
}


class App extends Component {
	render(){
		return(
			<div>
			<h1>Components</h1>
			<h2>Accordians</h2>
				<AccordionGroup>
					<Accordion defaultOpen={true} triggeringElement={TriggerElement} title="I likeItem1">Item1</Accordion>
					<AccordionGroup.Accordion title="Item2">This is item2</AccordionGroup.Accordion>
				</AccordionGroup>
			</div>
		)
	}
}

export default App;
