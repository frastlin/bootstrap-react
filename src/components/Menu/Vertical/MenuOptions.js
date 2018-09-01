import React from "react";
import strap from "../../../AccDC/DC";

// Import the React Menu components that will be dynamically rendered
import AccountMenu from "./Account/MenuAccount";
import ProfileMenu from "./Profile/MenuProfile";
import ServicesMenu from "./Services/MenuServices";
import SettingsMenu from "./Settings/MenuSettings";

class MenuOptions extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      AccountMenu: <AccountMenu />,
      ProfileMenu: <ProfileMenu />,
      ServicesMenu: <ServicesMenu />,
      SettingsMenu: <SettingsMenu />
    });
  }
  render() {
    return (
      <ol role="menu" title="Options" className="menu" id="menu-options">
        <li>
          <a
            role="menuitem"
            href="#"
            aria-haspopup="true"
            data-controls="ProfileMenu"
            className="submenu"
            id="-profile"
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
            className="submenu"
            id="-settings"
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
            className="submenu"
            id="-account"
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
            className="submenu"
            id="-services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            aria-disabled="true"
            role="menuitem"
            href="#"
            className="link"
            id="-properties"
          >
            Properties...
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="-help">
            Help...
          </a>
        </li>
      </ol>
    );
  }
}

export default MenuOptions;
