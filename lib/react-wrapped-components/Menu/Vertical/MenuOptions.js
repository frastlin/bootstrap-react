import React from "react";
import strap from "../../../AccDC/DC"; // Import the React Menu components that will be dynamically rendered

import AccountMenu from "./Account/MenuAccount";
import ProfileMenu from "./Profile/MenuProfile";
import ServicesMenu from "./Services/MenuServices";
import SettingsMenu from "./Settings/MenuSettings";

class MenuOptions extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      AccountMenu: React.createElement(AccountMenu, null),
      ProfileMenu: React.createElement(ProfileMenu, null),
      ServicesMenu: React.createElement(ServicesMenu, null),
      SettingsMenu: React.createElement(SettingsMenu, null)
    });
  }

  render() {
    return React.createElement("ol", {
      role: "menu",
      title: "Options",
      className: "menu",
      id: "menu-options"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "ProfileMenu",
      className: "submenu",
      id: "-profile"
    }, "Profile")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "SettingsMenu",
      className: "submenu",
      id: "-settings"
    }, "Settings")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "AccountMenu",
      className: "submenu",
      id: "-account"
    }, "Account")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "ServicesMenu",
      className: "submenu",
      id: "-services"
    }, "Services")), React.createElement("li", null, React.createElement("a", {
      "aria-disabled": "true",
      role: "menuitem",
      href: "#",
      className: "link",
      id: "-properties"
    }, "Properties...")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "-help"
    }, "Help...")));
  }

}

export default MenuOptions;
//# sourceMappingURL=MenuOptions.js.map