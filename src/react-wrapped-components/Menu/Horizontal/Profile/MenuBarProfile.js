import React from "react";
import strap from "../../../../AccDC/DC";

// Import the React Menu components that will be dynamically rendered
import BusinessMenuBar from "./Business/MenuBarBusiness";
import PersonalMenuBar from "./Personal/MenuBarPersonal";

class MenuBarProfile extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      BusinessMenu: <BusinessMenuBar />,
      PersonalMenu: <PersonalMenuBar />
    });
  }
  render() {
    return (
      <ul
        role="menubar"
        title="Profile"
        className="menu2 clearfix"
        id="menu-options2-profile2"
      >
        <li>
          <a
            role="menuitem"
            href="#"
            aria-haspopup="true"
            data-controls="PersonalMenu"
            className="submenu2"
            id="-personal2"
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
            className="submenu2"
            id="-business2"
          >
            Business
          </a>
        </li>
      </ul>
    );
  }
}

export default MenuBarProfile;
