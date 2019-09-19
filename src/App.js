import React, { Component } from 'react';
import Accordian from './react-wrapped-components/Accordion'

class App extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
			<h1>Components</h1>
			<h2>Accordians</h2>
			<Accordian group="t1" title="Item1">This is an item 1</Accordian>
			<Accordian group="t1" defaultOpen={true} title="Item2">This is another item 2</Accordian>

			</div>
		)
	}
}

export default App;
