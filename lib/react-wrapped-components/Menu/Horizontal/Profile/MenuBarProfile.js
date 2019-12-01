import React from "react";
import strap from "../../../../AccDC/DC"; // Import the React Menu components that will be dynamically rendered

import BusinessMenuBar from "./Business/MenuBarBusiness";
import PersonalMenuBar from "./Personal/MenuBarPersonal";

class MenuBarProfile extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      BusinessMenu: React.createElement(BusinessMenuBar, null),
      PersonalMenu: React.createElement(PersonalMenuBar, null)
    });
  }

  render() {
    return React.createElement("ul", {
      role: "menubar",
      title: "Profile",
      className: "menu2 clearfix",
      id: "menu-options2-profile2"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "PersonalMenu",
      className: "submenu2",
      id: "-personal2"
    }, "Personal")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      "aria-haspopup": "true",
      "data-controls": "BusinessMenu",
      className: "submenu2",
      id: "-business2"
    }, "Business")));
  }

}

export default MenuBarProfile;
//# sourceMappingURL=MenuBarProfile.js.map