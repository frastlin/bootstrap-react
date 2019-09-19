import React from "react";
import strap from "../../../AccDC/DC";

// Import the React Menu components that will be dynamically rendered
import AccountMenuBar from "./Account/MenuBarAccount";
import ProfileMenuBar from "./Profile/MenuBarProfile";
import ServicesMenuBar from "./Services/MenuBarServices";
import SettingsMenuBar from "./Settings/MenuBarSettings";

class MenuBarOptions extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      AccountMenu: <AccountMenuBar />,
      ProfileMenu: <ProfileMenuBar />,
      ServicesMenu: <ServicesMenuBar />,
      SettingsMenu: <SettingsMenuBar />
    });
  }
  render() {
    return (
      <ul
        role="menubar"
        title="Options"
        className="menu2 clearfix"
        id="menu-options2"
      >
        <li>
          <a
            role="menuitem"
            href="#"
            aria-haspopup="true"
            data-controls="ProfileMenu"
            className="submenu2"
            id="-profile2"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            role="menuitem"
            href="#"
            aria-haspopup="true"
            data-controls="SettingsMenu"
            className="submenu2"
            id="-settings2"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            role="menuitem"
            href="#"
            aria-haspopup="true"
            data-controls="AccountMenu"
            className="submenu2"
            id="-account2"
          >
            Account
          </a>
        </li>
        <li>
          <a
            role="menuitem"
            href="#"
            aria-haspopup="true"
            data-controls="ServicesMenu"
            className="submenu2"
            id="-services2"
          >
            Services
          </a>
        </li>
        <li>
          <a
            role="menuitem"
            aria-disabled="true"
            href="#"
            className="link2"
            id="-properties2"
          >
            Properties...
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="-help2">
            Help...
          </a>
        </li>
      </ul>
    );
  }
}

export default MenuBarOptions;
