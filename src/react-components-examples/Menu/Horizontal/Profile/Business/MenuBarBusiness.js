import React from "react";
import strap from "../../../../../AccDC/DC";

class MenuBarBusiness extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ul
        role="menubar"
        title="Business"
        className="menu2 clearfix"
        id="menu-options2-profile2-business2"
      >
        <li>
          <a role="menuitem" href="#" className="link2" id="business-name2">
            Name
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="business-contact2">
            Contact
          </a>
        </li>
      </ul>
    );
  }
}

export default MenuBarBusiness;
