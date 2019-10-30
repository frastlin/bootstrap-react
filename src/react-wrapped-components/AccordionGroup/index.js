import React from "react";
import strap from "../../AccDC/DC";
import AccordionElement from "../Accordion";

/*
Usage:
import AccordionGroup from './react-wrapped-components/AccordionGroup'
import Accordion  from './react-wrapped-components/Accordion'

function TriggerElement(props){
	//create your own optional custom element for the triggering element, the default is a button. Put your props after the {...props} to override the passed in props.
	return <h3><button {...props}>{props.children}</button></h3>
}

//...
// in your render function:
	render(){
		return(
			<AccordionGroup>
				<Accordion defaultOpen={true} triggeringElement={TriggerElement} title="I likeItem1">Item1</Accordion>
				<Accordion title="Item2">This is item2</Accordion>
				<AccordionGroup.Accordion title="This is without the need to import Accordion">This uses the static attribute of AccordionGroup rather than importing a seperate Accordion element.</AccordionGroup.Accordion>
			</AccordionGroup>
		)
	}
*/

export default class AccordionGroup extends React.Component {
  static defaultProps = {
    isToggle: true, //says if the accordion should be toggleable
    allowMultiple: false, //says if more than one accordion can be expanded at once.
    callback: (DC, isOpen) => {}, // is run every time an accordion is expanded or collapsed
    toggleClassName: "open", // the CSS for when the element is toggled
    className: "accordionGroup", // className for the accordion group
    style: {} // style for the accordion groupe
  };

  static Accordion = AccordionElement; // can be used instead of importing Accordion. <AccordionGroup.Accordion {..props}>panel content</AccordionGroup.Accordion>

  constructor(props) {
    super(props);
    this.uniqueId = `Accordion-component-number${new Date().getUTCMilliseconds()}`;
    this.group = `group-${this.uniqueId}`; // you can not have a single accordion placed in a group without a group element
    this.accordionObj = {}; //filled below and used in the componentDidMount
    this.accordionElements = []; // filled below and used in the componentDidMount
    if (!this.props.children) {
      throw new Error("AccordionGroup requires <Tab> components as children.");
    } else {
      const accordionArray = React.Children.toArray(this.props.children);
      this.accordionElements = accordionArray.map(child => {
        const uniqueId = `${child.props.title}-${this.uniqueId}`.replace(
          /\s+/g,
          "_"
        ); // the replace replaces spaces with _ because spaces don't work in ids very well.
        this.accordionObj[`${child.props.title}-${uniqueId}`] = (
          <React.Fragment>{child.props.children}</React.Fragment>
        ); // This is what is passed into the componentDidMount function into AccDC
        return (
          <React.Fragment key={uniqueId}>
            {React.createElement(
              child.props.triggeringElement,
              {
                className: child.props.className,
                style: child.props.style,
                "data-controls": `${child.props.title}-${uniqueId}`,
                "data-insert": `content-${uniqueId}`,
                "data-defaultopen": child.props.defaultOpen,
                "data-accordiongroup": this.group,
                id: uniqueId
              },
              child.props.title
            )}
            <div id={`content-${uniqueId}`} />
          </React.Fragment>
        );
      });
    }
  }

  componentDidMount() {
    strap.setAccordion(this, this.accordionObj, {
      callback: this.props.callback,

      isToggle: this.props.isToggle,
      allowMultiple: this.props.allowMultiple,

      overrides: {
        toggleClassName: this.props.toggleClassName
      }
    });
  }

  render() {
    return (
      <div
        id={this.uniqueId}
        className={this.props.className}
        style={this.props.style}
      >
        {this.accordionElements}
      </div>
    );
  }
}
