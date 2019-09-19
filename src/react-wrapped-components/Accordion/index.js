import React from "react";
import strap from "../../AccDC/DC";


export default class Accordion extends React.Component {
	static defaultProps = {
		title: "", // title of the accordian
		defaultOpen: false, // says if the accordion should be expanded or not.
		isToggle: true, //says if the accordion should be toggleable
		callback: (DC, isOpen)=>{}, // is run every time the accordion is expanded or collapsed
		// pass the panel in as a child of the component
	}

	constructor(props){
		super(props)
		this.uniqueId = `Accordion-component-number${new Date().getUTCMilliseconds()}`
		this.group = `group-${this.uniqueId}` // you can not have a single accordion placed in a group without a group element
	}

	componentDidMount() {
		strap.setAccordion(
			this,
			{
				[`${this.props.title}-${this.uniqueId}`]: <div>{this.props.children}</div>,
			},
			{
				callback: this.props.callback,

				isToggle: this.props.isToggle,
				allowMultiple: false,

				overrides: {
					toggleClassName: "open"
				}
			}
		);
	}

	render(){
		return(
			<div id={this.uniqueId}>
				<button
					className="accAccordion"
					data-controls={`${this.props.title}-${this.uniqueId}`}
					data-insert={`content-${this.uniqueId}`}
					data-defaultopen={this.props.defaultOpen}
					data-accordiongroup={this.group}
					id={this.uniqueId}
				>
					{this.props.title}
				</button>
				            <div id={`content-${this.uniqueId}`} />

			</div>
		)
	}
}