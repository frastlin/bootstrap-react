import React from "react";
import strap from "../../../../AccDC/DC";

class MenuSettings extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ol
        role="menu"
        title="Settings"
        className="menu"
        id="menu-options-settings"
      >
        <li>
          <a role="menuitem" href="#" className="link" id="settings-search">
            Search
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="settings-cookies">
            Cookies
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="settings-layout">
            Layout
          </a>
        </li>
      </ol>
    );
  }
}

export default MenuSettings;
