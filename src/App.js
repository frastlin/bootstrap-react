import React, { Component } from 'react';
import AccordionGroup from './react-wrapped-components/AccordionGroup'
import Accordion  from './react-wrapped-components/Accordion'


class App extends Component {
	render(){
		return(
			<div>
			<h1>Components</h1>
			<h2>Accordians</h2>
				<AccordionGroup>
					<Accordion defaultOpen={true} title="Item1">Item1</Accordion>
					<Accordion title="Item2">This is item2</Accordion>
				</AccordionGroup>
			</div>
		)
	}
}

export default App;
