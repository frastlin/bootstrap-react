import React from "react";
import strap from "../../../../../AccDC/DC";

class MenuPersonal extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ol
        role="menu"
        title="Personal"
        className="menu"
        id="menu-options-profile-personal"
      >
        <li>
          <a role="menuitem" href="#" className="link" id="-name">
            Name
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="-interests">
            Interests
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="-education">
            Education
          </a>
        </li>
      </ol>
    );
  }
}

export default MenuPersonal;
