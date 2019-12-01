import React from "react";
import strap from "../../../../../AccDC/DC";

class MenuBarBusiness extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ul", {
      role: "menubar",
      title: "Business",
      className: "menu2 clearfix",
      id: "menu-options2-profile2-business2"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "business-name2"
    }, "Name")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "business-contact2"
    }, "Contact")));
  }

}

export default MenuBarBusiness;
//# sourceMappingURL=MenuBarBusiness.js.map