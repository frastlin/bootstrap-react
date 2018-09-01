import React from "react";
import strap from "../../../../AccDC/DC";

class MenuServices extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }
  render() {
    return (
      <ol
        role="menu"
        title="Services"
        className="menu"
        id="menu-options-services"
      >
        <li>
          <a role="menuitem" href="#" className="link" id="services-campaigns">
            Campaigns
          </a>
        </li>
        <li>
          <a
            role="menuitem"
            aria-disabled="true"
            href="#"
            className="link"
            id="services-payments"
          >
            Payments
          </a>
        </li>
        <li>
          <a role="menuitem" href="#" className="link" id="services-billing">
            Billing
          </a>
        </li>
      </ol>
    );
  }
}

export default MenuServices;
