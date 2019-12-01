import React from "react";
import strap from "../../../../AccDC/DC"; // Import the React Menu components that will be dynamically rendered

import BusinessMenu from "./Business/MenuBusiness";
import PersonalMenu from "./Personal/MenuPersonal";

class MenuProfile extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      BusinessMenu: React.createElement(BusinessMenu, null),
      PersonalMenu: React.createElement(PersonalMenu, null)
    });
  }

  render() {
    return React.createElement("ol", {
      role: "menu",
      title: "Profile",
      className: "menu",
      id: "menu-options-profile"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "PersonalMenu",
      className: "submenu",
      id: "-personal"
    }, "Personal")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "BusinessMenu",
      className: "submenu",
      id: "-business"
    }, "Business")));
  }

}

export default MenuProfile;
//# sourceMappingURL=MenuProfile.js.map