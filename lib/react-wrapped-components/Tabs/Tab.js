function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
export default class Tab extends React.Component {
  render() {
    return React.createElement(this.props.element, {
      id: this.props._uniqueId,
      className: this.props.className,
      style: this.props.style,
      role: "tab",
      "data-controls": `${this.props.title}-${this.props._uniqueId}`,
      "data-defaultopen": this.props.defaultOpen,
      "data-insert": this.props._contentInsertId
    }, React.createElement(React.Fragment, null, this.props.title));
  }

}

_defineProperty(Tab, "defaultProps", {
  // The only requirements are title and children. Title is a string that is displayed on the tab element, then the children are shown in the tabPannnel.
  element: "li",
  // it should be li, but a custom element can be passed as long as it spreads the props like: {...props}
  className: "accTab tab tab1",
  defaultOpen: false,
  // Will the tab element be open by default?
  style: {},
  // only internal usage for when passing into a TabList
  _uniqueId: "",
  _contentInsertId: "" // the id of the contentPanel where content will be displayed

});
//# sourceMappingURL=Tab.js.map