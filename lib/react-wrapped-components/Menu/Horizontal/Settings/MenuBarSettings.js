import React from "react";
import strap from "../../../../AccDC/DC";

class MenuBarSettings extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ul", {
      role: "menubar",
      title: "Settings",
      className: "menu2 clearfix",
      id: "menu-options2-settings2"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "settings-search2"
    }, "Search")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "settings-cookies2"
    }, "Cookies")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "settings-layout2"
    }, "Layout")));
  }

}

export default MenuBarSettings;
//# sourceMappingURL=MenuBarSettings.js.map