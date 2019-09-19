import React from "react";
import strap from "../../../../AccDC/DC";

// Import the React Menu components that will be dynamically rendered
import BusinessMenu from "./Business/MenuBusiness";
import PersonalMenu from "./Personal/MenuPersonal";

class MenuProfile extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      BusinessMenu: <BusinessMenu />,
      PersonalMenu: <PersonalMenu />
    });
  }
  render() {
    return (
      <ol
        role="menu"
        title="Profile"
        className="menu"
        id="menu-options-profile"
      >
        <li>
          <a
            role="menuitem"
            href="#"
            aria-haspopup="true"
            data-controls="PersonalMenu"
            className="submenu"
            id="-personal"
          >
            Personal
          </a>
        </li>
        <li>
          <a
            role="menuitem"
            href="#"
            aria-haspopup="true"
            data-controls="BusinessMenu"
            className="submenu"
            id="-business"
          >
            Business
          </a>
        </li>
      </ol>
    );
  }
}

export default MenuProfile;
