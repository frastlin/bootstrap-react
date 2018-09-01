import React from "react";
import strap from "../../../../AccDC/DC";

class MenuAccount extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ol
        role="menu"
        title="Account"
        className="menu"
        id="menu-options-account"
      >
        <li>
          <a role="menuitem" href="#" className="link" id="account-username">
            Username
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="account-password">
            Password
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="account-email">
            Email
          </a>
        </li>
      </ol>
    );
  }
}

export default MenuAccount;
