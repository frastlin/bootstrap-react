import React from "react";
import strap from "../../../../../AccDC/DC";

class MenuBarPersonal extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ul
        role="menubar"
        title="Personal"
        className="menu2 clearfix"
        id="menu-options2-profile2-personal2"
      >
        <li>
          <a role="menuitem" href="#" className="link2" id="-name2">
            Name
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="-interests2">
            Interests
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="-education2">
            Education
          </a>
        </li>
      </ul>
    );
  }
}

export default MenuBarPersonal;
