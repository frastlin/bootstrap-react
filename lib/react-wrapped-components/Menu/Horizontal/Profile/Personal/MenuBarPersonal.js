import React from "react";
import strap from "../../../../../AccDC/DC";

class MenuBarPersonal extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ul", {
      role: "menubar",
      title: "Personal",
      className: "menu2 clearfix",
      id: "menu-options2-profile2-personal2"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "-name2"
    }, "Name")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "-interests2"
    }, "Interests")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "-education2"
    }, "Education")));
  }

}

export default MenuBarPersonal;
//# sourceMappingURL=MenuBarPersonal.js.map