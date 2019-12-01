import React from "react";
import strap from "../../../../../AccDC/DC";

class MenuPersonal extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ol", {
      role: "menu",
      title: "Personal",
      className: "menu",
      id: "menu-options-profile-personal"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "-name"
    }, "Name")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "-interests"
    }, "Interests")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "-education"
    }, "Education")));
  }

}

export default MenuPersonal;
//# sourceMappingURL=MenuPersonal.js.map