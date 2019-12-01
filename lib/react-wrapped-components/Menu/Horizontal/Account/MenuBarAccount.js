import React from "react";
import strap from "../../../../AccDC/DC";

class MenuBarAccount extends React.Component {
  componentDidMount() {
    strap.setMenu(this);
  }

  render() {
    return React.createElement("ul", {
      role: "menubar",
      title: "Account",
      className: "menu2 clearfix",
      id: "menu-options2-account2"
    }, React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "account-username2"
    }, "Username")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "account-password2"
    }, "Password")), React.createElement("li", null, React.createElement("a", {
      role: "menuitem",
      href: "#",
      className: "link2",
      id: "account-email2"
    }, "Email")));
  }

}

export default MenuBarAccount;
//# sourceMappingURL=MenuBarAccount.js.map