import React from "react";
import strap from "../../../AccDC/DC"; // Import the React Menu components that will be dynamically rendered

import AccountMenuBar from "./Account/MenuBarAccount";
import ProfileMenuBar from "./Profile/MenuBarProfile";
import ServicesMenuBar from "./Services/MenuBarServices";
import SettingsMenuBar from "./Settings/MenuBarSettings";

class MenuBarOptions extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      AccountMenu: React.createElement(AccountMenuBar, null),
      ProfileMenu: React.createElement(ProfileMenuBar, null),
      ServicesMenu: React.createElement(ServicesMenuBar, null),
      SettingsMenu: React.createElement(SettingsMenuBar, null)
    });
  }

  render() {
    return React.createElement("ul", {
      role: "menubar",
      title: "Options",
      className: "menu2 clearfix",
      id: "menu-options2"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "ProfileMenu",
      className: "submenu2",
      id: "-profile2"
    }, "Profile")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "SettingsMenu",
      className: "submenu2",
      id: "-settings2"
    }, "Settings")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "AccountMenu",
      className: "submenu2",
      id: "-account2"
    }, "Account")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "ServicesMenu",
      className: "submenu2",
      id: "-services2"
    }, "Services")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      "aria-disabled": "true",
      href: "#",
      className: "link2",
      id: "-properties2"
    }, "Properties...")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "-help2"
    }, "Help...")));
  }

}

export default MenuBarOptions;
//# sourceMappingURL=MenuBarOptions.js.map