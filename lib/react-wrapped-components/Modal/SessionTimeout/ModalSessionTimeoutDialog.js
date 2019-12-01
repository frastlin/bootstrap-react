import React from "react";
let $A = window.AccDC;

class ModalSessionTimeoutDialog extends React.Component {
  handleClose(ev) {
    $A(this).unmount();
    ev.stopPropagation();
    ev.preventDefault();
  }

  handleSubmit(ev) {
    $A(this).unmount();
    $A("GlobalLoginDialog").mount();
    ev.preventDefault();
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      onClick: ev => this.handleClose(ev),
      className: "modalBackdrop"
    }, "\xA0"), React.createElement("div", {
      className: "modal"
    }, React.createElement("div", {
      id: "modal-timeout"
    }, React.createElement("form", {
      onSubmit: ev => this.handleSubmit(ev)
    }, React.createElement("p", {
      id: "timeoutDescriptionId"
    }, "Your session has expired.", React.createElement("br", null), React.createElement("br", null), "Would you like to enter your login credentials to proceed?"), React.createElement("p", {
      className: "buttons-bar"
    }, React.createElement("input", {
      "data-first": "true",
      "data-focusfirst": "true",
      type: "submit",
      id: "lbSubmitTimeout",
      defaultValue: "OK"
    }), React.createElement("input", {
      type: "reset",
      "data-last": "true",
      className: "CloseModal",
      id: "lbCancelTimeout",
      defaultValue: "Cancel",
      onClick: ev => this.handleClose(ev)
    }))))));
  }

}

export default ModalSessionTimeoutDialog;
//# sourceMappingURL=ModalSessionTimeoutDialog.js.map