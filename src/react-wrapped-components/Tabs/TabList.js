import React from "react";
import strap from "../../AccDC/DC";
import Tab from "./Tab";

/*
Usage:
// import the Tab and or TabList component, then do the following:
<TabList>
	<Tab defaultOpen={true} title="Country">This is country music.</Tab>
	<TabList.Tab title="Rock">This is rock music</TabList.Tab>
	<Tab title="Clasical">This is clasical</Tab>
</TabList>

Tab props are:
	static defaultProps = {
		// The only requirements are title and children. Title is a string that is displayed on the tab element, then the children are shown in the tabPannnel.
		element: "li", // it should be li, but a custom element can be passed as long as it spreads the props like: {...props}
		className: "accTab tab tab1",
		defaultOpen: false, // Will the tab element be open by default?
		style: {},
	}

TabList default props are:
	static defaultProps = {
		contentElement: Content, // pass in an element that takes an id as a prop and sets it on a rendered element. You can also just pass in elements for the content itself if that is easier. <Tab title="Country"><h3>This element can be passed in the content section</h3></Tab>
		groupElement: "ul", // the list type for the TabList,
		toggleClassName: "active", // the class that is activated when the tab is made active
		callback: (DC, isOpen) => {},  // is the callback that is run when select is made
	}


*/

function Content(props) {
  return <div className="content" id={props.id} />;
}

export default class TabList extends React.Component {
  static defaultProps = {
    contentElement: Content, // pass in an element that takes an id as a prop and sets it on a rendered element. You can also just pass in elements for the content itself if that is easier. <Tab title="Country"><h3>This element can be passed in the content section</h3></Tab>
    groupElement: "ul", // the list type for the TabList,
    toggleClassName: "active", // the class that is activated when the tab is made active
    callback: (DC, isOpen) => {} // is the callback that is run when select is made
  };

  static Tab = Tab; //allows Tab to be accessed through TabList.Tab, so one doesn't need to import Tab and TabList.

  constructor(props) {
    super(props);
    this.uniqueId = `Tab-component-number${new Date().getUTCMilliseconds()}`;
    this.contentId = `${this.uniqueId}-content`;
    this.contentElement = React.createElement(
      this.props.contentElement,
      { id: this.contentId },
      null
    );
    this.TabObj = {}; //filled below and used in the componentDidMount
    this.tabElements = []; // filled below and used in the componentDidMount
    if (!this.props.children) {
      throw new Error("TabGroup requires <Tab> components as children.");
    } else {
      const TabArray = React.Children.toArray(this.props.children);
      this.tabElements = TabArray.map(child => {
        const uniqueId = `${child.props.title}-${this.uniqueId}`.replace(
          /\s+/g,
          "_"
        ); // the replace replaces spaces with _ because spaces don't work in ids very well.
        this.TabObj[`${child.props.title}-${uniqueId}`] = (
          <React.Fragment>{child.props.children}</React.Fragment>
        ); // This is what is passed into the componentDidMount function into AccDC and rendered in the contentPanel
        return (
          <Tab
            {...child.props}
            key={uniqueId}
            _uniqueId={uniqueId}
            _contentInsertId={this.contentId}
          >
            {child.props.title}
          </Tab>
        );
      });
    }
  }

  componentDidMount() {
    strap.setTabList(this, this.TabObj, {
      callback: this.props.callback,
      overrides: {
        toggleClassName: this.props.toggleClassName
      }
    });
  }

  render() {
    const tabs = React.createElement(
      this.props.groupElement,
      {
        id: `${this.uniqueId}-group`,
        className: "tabs ARIA",
        role: "tablist",
        "aria-level": "2"
      },
      this.tabElements
    );

    return (
      <React.Fragment>
        {tabs}
        {this.contentElement}
      </React.Fragment>
    );
  }
}
