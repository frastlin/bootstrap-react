import React from "react";
import strap from "../../../../AccDC/DC";

class MenuBarSettings extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ul
        role="menubar"
        title="Settings"
        className="menu2 clearfix"
        id="menu-options2-settings2"
      >
        <li>
          <a role="menuitem" href="#" className="link2" id="settings-search2">
            Search
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="settings-cookies2">
            Cookies
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="settings-layout2">
            Layout
          </a>
        </li>
      </ul>
    );
  }
}

export default MenuBarSettings;
