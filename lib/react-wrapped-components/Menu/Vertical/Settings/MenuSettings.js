import React from "react";
import strap from "../../../../AccDC/DC";

class MenuSettings extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ol", {
      role: "menu",
      title: "Settings",
      className: "menu",
      id: "menu-options-settings"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "settings-search"
    }, "Search")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "settings-cookies"
    }, "Cookies")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "settings-layout"
    }, "Layout")));
  }

}

export default MenuSettings;
//# sourceMappingURL=MenuSettings.js.map