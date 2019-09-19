import React from "react";
import strap from "../../../../AccDC/DC";

class MenuBarAccount extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ul
        role="menubar"
        title="Account"
        className="menu2 clearfix"
        id="menu-options2-account2"
      >
        <li>
          <a role="menuitem" href="#" className="link2" id="account-username2">
            Username
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="account-password2">
            Password
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="account-email2">
            Email
          </a>
        </li>
      </ul>
    );
  }
}

export default MenuBarAccount;
