import React from "react";
import strap from "../../../../AccDC/DC";

class MenuBarServices extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ul", {
      role: "menubar",
      title: "Services",
      className: "menu2 clearfix",
      id: "menu-options2-services2"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "services-campaigns2"
    }, "Campaigns")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "services-payments2"
    }, "Payments")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      "aria-disabled": "true",
      href: "#",
      className: "link2",
      id: "services-billing2"
    }, "Billing")));
  }

}

export default MenuBarServices;
//# sourceMappingURL=MenuBarServices.js.map