import React from "react";
import strap from "../../AccDC/DC";
/* Directions for Accessible Modals

1. Import AccDC/DC.

2. Import or create named React components to render modal content.

3. Submit React modal objects to setModal() with relevant behavioral settings as desired.
*/
// Import the React Modal components that will be dynamically rendered

import LoginDialog from "./Login/ModalLoginDialog";
import TimeoutDialog from "./SessionTimeout/ModalSessionTimeoutDialog";
let $A = window.AccDC;

class ModalMain extends React.Component {
  componentDidMount() {
    strap.setModal(this, {
      Login: React.createElement(LoginDialog, null)
    }, {
      overrides: {
        id: "GlobalLoginDialog",
        className: "outerNode",
        ariaDescribedBy: "loginDescriptionId",
        runAfter: function (DC) {
          $A(DC.container).query("div.modalBackdrop").css({
            zIndex: DC.modalIndex
          });
          $A(DC.container).query("div.modal").css({
            zIndex: DC.modalIndex + 1
          });
        }
      }
    });
    strap.setModal(this, {
      Timeout: React.createElement(TimeoutDialog, null)
    }, {
      overrides: {
        id: "GlobalTimeoutDialog",
        className: "outerNode",
        ariaDescribedBy: "timeoutDescriptionId",
        ariaAlertDialog: true,
        runAfter: function (DC) {
          $A(DC.container).query("div.modalBackdrop").css({
            zIndex: DC.modalIndex
          });
          $A(DC.container).query("div.modal").css({
            zIndex: DC.modalIndex + 1
          });
        }
      }
    });
  }

  handleLogin(ev) {
    let DC = $A("GlobalLoginDialog");

    if (DC) {
      DC.triggerObj = ev.target;
      DC.mount();
    }
  }

  scheduleTimeout(ev) {
    setTimeout(function () {
      $A("GlobalTimeoutDialog").mount();
    }, 3000);
  }

  render() {
    return React.createElement("div", {
      id: "pg-modal"
    }, React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, "Accessible Modal"))), React.createElement("div", {
      className: "intro highlight"
    }, React.createElement("p", null, "A modal control displays information or interactive content that must be dismissed before further interaction with the background page can occur.")), React.createElement("div", {
      className: "intro tal demo-block"
    }, React.createElement("p", null, React.createElement("button", {
      id: "modalId",
      className: "accModal lightbox",
      onClick: ev => this.handleLogin(ev)
    }, "Login")), React.createElement("p", null, React.createElement("button", {
      id: "modalId2",
      className: "accModal lightbox",
      onClick: ev => this.scheduleTimeout(ev)
    }, "Schedule Session Timeout Dialog"))), React.createElement("div", {
      className: "intro tal keyboard"
    }, React.createElement("p", null, "The modal is optimized for screen reader and keyboard only users:"), React.createElement("ul", null, React.createElement("li", null, "Activate the triggering element to open the modal."), React.createElement("li", null, "Screen reader users will be confined within the modal content, and will not be able to see the background page content.", React.createElement("em", null, "(Confirmed in both Windows platform and iOS touch screen devices using JAWS, NVDA, and VoiceOver)")), React.createElement("li", null, "Keyboard focus is automatically restricted to active elements within the modal, which is handled using HTML5 attributes within the first and last focusable elements within the markup."))));
  }

}

export default ModalMain;
//# sourceMappingURL=ModalMain.js.map