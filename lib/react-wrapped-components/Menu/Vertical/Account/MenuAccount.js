import React from "react";
import strap from "../../../../AccDC/DC";

class MenuAccount extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ol", {
      role: "menu",
      title: "Account",
      className: "menu",
      id: "menu-options-account"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "account-username"
    }, "Username")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "account-password"
    }, "Password")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link",
      id: "account-email"
    }, "Email")));
  }

}

export default MenuAccount;
//# sourceMappingURL=MenuAccount.js.map