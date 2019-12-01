import React from "react";
import strap from "../../../../AccDC/DC";

class MenuServices extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ol", {
      role: "menu",
      title: "Services",
      className: "menu",
      id: "menu-options-services"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "services-campaigns"
    }, "Campaigns")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      "aria-disabled": "true",
      href: "#",
      className: "link",
      id: "services-payments"
    }, "Payments")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "services-billing"
    }, "Billing")));
  }

}

export default MenuServices;
//# sourceMappingURL=MenuServices.js.map