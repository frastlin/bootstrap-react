import React from "react";
import strap from "../../AccDC/DC";


export default class AccordionGroup extends React.Component {
	static defaultProps = {
		isToggle: true, //says if the accordion should be toggleable
		allowMultiple: false, //says if more than one accordion can be expanded at once.
		callback: (DC, isOpen)=>{}, // is run every time an accordion is expanded or collapsed
		// pass the panel in as a child of the component
	}

	constructor(props){
		super(props)
		this.uniqueId = `Accordion-component-number${new Date().getUTCMilliseconds()}`
		this.group = `group-${this.uniqueId}` // you can not have a single accordion placed in a group without a group element
		this.accordionObj = {} //filled below and used in the componentDidMount
		this.accordionElements = [] // filled below and used in the componentDidMount
		if(!this.props.children){
			throw new Error("AccordionGroup requires <Tab> components as children.")
		} else {
			const accordionArray = React.Children.toArray(this.props.children)
			this.accordionElements = accordionArray.map(child=>{
				const uniqueId = `${child.props.title}-${this.uniqueId}`
				this.accordionObj[`${child.props.title}-${uniqueId}`] = <React.Fragment>{child.props.children}</React.Fragment>
				return( <React.Fragment>
					<button
						className="accAccordion"
						data-controls={`${child.props.title}-${uniqueId}`}
						data-insert={`content-${uniqueId}`}
						data-defaultopen={child.props.defaultOpen}
						data-accordiongroup={this.group}
						id={uniqueId}
					>
						{child.props.title}
					</button>
					<div id={`content-${uniqueId}`} />
				</React.Fragment>)
			})
		}
	}

	componentDidMount() {
		strap.setAccordion(
			this,
			this.accordionObj,
			{
				callback: this.props.callback,

				isToggle: this.props.isToggle,
				allowMultiple: this.props.allowMultiple,

				overrides: {
					toggleClassName: "open"
				}
			}
		);
	}

	render(){
		return(
			<div id={this.uniqueId}>
				{this.accordionElements}
			</div>
		)
	}
}