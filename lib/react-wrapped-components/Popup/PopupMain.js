import React from "react";
import strap from "../../AccDC/DC";
/* Directions for Accessible Popups

1. Import AccDC/DC.

2. Import or create named React components to render popup content.

3. Using a native button or link as triggering elements, add the attribute data-popup="popup", and ensure that each triggering element includes a unique ID.

4. Add a data-controls attribute to each triggering element and make sure the name of the attribute matches the object property name of the related React component as submitted to setPopup().
*/
// Import the React Popup component that will be dynamically rendered

import PopupQuote from "./Excerpt/PopupHamletExcerpt";

class PopupMain extends React.Component {
  componentDidMount() {
    strap.setPopup(this, {
      Quote: React.createElement(PopupQuote, null)
    }, {
      overrides: {
        className: "popup",
        autoCloseOnTabOut: true,
        runAfter: function (DC) {// Do something
        }
      }
    });
  }

  render() {
    return React.createElement("div", {
      id: "pg-popup"
    }, React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, "Accessible Popup"))), React.createElement("div", {
      className: "intro highlight"
    }, React.createElement("p", null, "A popup control displays information or interactive content as an overlay.")), React.createElement("div", {
      className: "intro tal demo-block"
    }, React.createElement("p", null, React.createElement("a", {
      id: "popupId",
      href: "#popup",
      className: "accPopup excerpt",
      "data-controls": "Quote",
      "data-popup": "popup"
    }, " ", "Show me the Shakespeare Quote of the Day!"))), React.createElement("div", {
      className: "intro tal keyboard"
    }, React.createElement("p", null, "The popup is optimized for screen reader and keyboard only users:"), React.createElement("ul", null, React.createElement("li", null, "Activate the Quote link to open the popup."), React.createElement("li", null, "The content will be inserted inline with the triggering element, and focus will automatically move to the beginning of the new content."), React.createElement("li", null, "Press ", React.createElement("kbd", null, "Tab"), " to set focus to the Close link and press", " ", React.createElement("kbd", null, "Enter"), " to close the popup, or press ", React.createElement("kbd", null, "Escape"), " to close the popup directly."), React.createElement("li", null, "When closed, focus will move back to the triggering element."))));
  }

}

export default PopupMain;
//# sourceMappingURL=PopupMain.js.map