import React from "react";
import strap from "../../AccDC/DC";
/* Directions for Accessible Banners

1. Import AccDC/DC.

2. Import or create named React components to render banner content.

3. Designate an empty container element somewhere on the page where the banner React component will be inserted, and give that element a class of "accBanner". (className="accBanner")

4. Ensure the accBanner container element includes a unique ID attribute.

5. Add a data-controls attribute to the accBanner container element and make sure the name of the attribute matches the object property name of the related React component as submitted to setBanner().
*/
// Import the React Banner component that will be dynamically rendered

import FloaterMSG from "./Banner/Banner";
let $A = window.AccDC;

class BannerMain extends React.Component {
  componentDidMount() {
    strap.setBanner(this, {
      Floater: React.createElement(FloaterMSG, null)
    }, {
      overrides: {
        id: "UniqueFloaterBannerID",
        runDuring: function (DC) {
          DC.css({
            position: "fixed",
            zIndex: 1,
            right: 0,
            bottom: 0
          });
        },
        mouseLeave: function (ev, DC) {
          DC.unmount();
        }
      }
    });
  }

  handleToggleBtnClick(ev) {
    var DC = $A("UniqueFloaterBannerID");
    if (DC.loaded) DC.unmount();else {
      DC.mount().css({
        outlineStyle: "none"
      }).focus();
    }
  }

  render() {
    return React.createElement("div", {
      id: "pg-banner"
    }, React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, "Accessible Banner"))), React.createElement("div", {
      className: "intro highlight"
    }, React.createElement("p", null, "A banner control displays important information by fixing it to a specific area of the viewport.")), React.createElement("div", {
      id: "uniqueBannerId",
      "data-role": "Urgent",
      className: "accBanner",
      "data-controls": "Floater"
    }), React.createElement("div", {
      className: "intro tal demo-block"
    }, React.createElement("p", null, React.createElement("button", {
      onClick: ev => this.handleToggleBtnClick(ev),
      className: "toggleBtn"
    }, "Toggle Banner"))));
  }

}

export default BannerMain;
//# sourceMappingURL=BannerMain.js.map