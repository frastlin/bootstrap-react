import React from "react";
import strap from "../../../../AccDC/DC";

class MenuBarServices extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ul
        role="menubar"
        title="Services"
        className="menu2 clearfix"
        id="menu-options2-services2"
      >
        <li>
          <a
            role="menuitem"
            href="#"
            className="link2"
            id="services-campaigns2"
          >
            Campaigns
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link2" id="services-payments2">
            Payments
          </a>
        </li>
        <li>
          <a
            role="menuitem"
            aria-disabled="true"
            href="#"
            className="link2"
            id="services-billing2"
          >
            Billing
          </a>
        </li>
      </ul>
    );
  }
}

export default MenuBarServices;
