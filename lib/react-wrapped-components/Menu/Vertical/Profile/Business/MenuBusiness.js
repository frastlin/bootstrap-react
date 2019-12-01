import React from "react";
import strap from "../../../../../AccDC/DC";

class MenuBusiness extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ol", {
      role: "menu",
      title: "Business",
      className: "menu",
      id: "menu-options-profile-business"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "business-name"
    }, "Name")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "business-contact"
    }, "Contact")));
  }

}

export default MenuBusiness;
//# sourceMappingURL=MenuBusiness.js.map