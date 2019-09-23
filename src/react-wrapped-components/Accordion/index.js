import React from "react";
import strap from "../../AccDC/DC";

/*
Usage:
use the import statement to import the Accordion component. Then use it as follows:

function render(){
	return(
		<Accordion title="This is the title" defaultOpen={true}>This is content that is expanded</Accordion>
	)
}
*/

export default class Accordion extends React.Component {
	static defaultProps = {
		title: "", // title of the accordian
		defaultOpen: false, // says if the accordion should be expanded or not.
		isToggle: true, //says if the accordion should be toggleable
		callback: (DC, isOpen)=>{}, // is run every time the accordion is expanded or collapsed
		triggeringElement: "button", // the type of the triggering element. Should be either button or a (link)
		className: "accAccordion", // Visual Aria for the triggering element.
		style: {} // if there should be inline css for the element
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
				allowMultiple: false, // not useful for a single accordion

				overrides: {
					toggleClassName: this.props.toggleClassName
				}
			}
		);
	}

	render(){
		const expandableElement = React.createElement(
			this.props.triggeringElement,
			{
				                className: this.props.className,
				style: this.props.style,
				"data-controls": `${this.props.title}-${this.uniqueId}`,
				"data-insert": `content-${this.uniqueId}`,
				"data-defaultopen": this.props.defaultOpen,
				"data-accordiongroup": this.group,
				id: this.uniqueId,
			},
			this.props.title
		)


		return(
			<div id={this.uniqueId}>
				{expandableElement}
				<div id={`content-${this.uniqueId}`} />
			</div>
		)
	}
}