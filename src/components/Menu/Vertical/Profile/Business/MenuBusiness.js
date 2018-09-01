import React from "react";
import strap from "../../../../../AccDC/DC";

class MenuBusiness extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ol
        role="menu"
        title="Business"
        className="menu"
        id="menu-options-profile-business"
      >
        <li>
          <a role="menuitem" href="#" className="link" id="business-name">
            Name
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="business-contact">
            Contact
          </a>
        </li>
      </ol>
    );
  }
}

export default MenuBusiness;
