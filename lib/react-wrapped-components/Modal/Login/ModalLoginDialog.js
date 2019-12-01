import React from "react";
let $A = window.AccDC;

class ModalLoginDialog extends React.Component {
  handleClose(ev) {
    $A(this).unmount();
    ev.stopPropagation();
    ev.preventDefault();
  }

  handleSubmit(ev) {
    let form = ev.target;

    if (!form.uname.value) {
      alert("Woops! You forgot your username...");
      form.uname.focus();
    } else if (!form.pass.value) {
      alert("Woops! You forgot your password...");
      form.pass.focus();
    } else {
      alert("WOW!");
      $A(this).unmount();
    }

    ev.preventDefault();
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      onClick: ev => this.handleClose(ev),
      className: "modalBackdrop"
    }, "\xA0"), React.createElement("div", {
      className: "modal"
    }, React.createElement("div", {
      id: "modal-login"
    }, React.createElement("form", {
      onSubmit: ev => this.handleSubmit(ev),
      id: "lbForm"
    }, React.createElement("p", {
      id: "loginDescriptionId"
    }, "Enter your login credentials to proceed."), React.createElement("p", null, React.createElement("label", {
      htmlFor: "uname"
    }, "Username:"), React.createElement("input", {
      "data-first": "true",
      "data-focusfirst": "true",
      type: "text",
      id: "uname",
      name: "uname"
    })), React.createElement("p", null, React.createElement("label", {
      htmlFor: "pass"
    }, "Password:"), React.createElement("input", {
      type: "password",
      id: "pass",
      name: "pass"
    })), React.createElement("p", {
      className: "buttons-bar"
    }, React.createElement("input", {
      type: "submit",
      id: "lbSubmit",
      defaultValue: "OK"
    }), React.createElement("input", {
      type: "reset",
      "data-last": "true",
      className: "CloseModal",
      id: "lbCancel",
      defaultValue: "Cancel",
      onClick: ev => this.handleClose(ev)
    }))))));
  }

}

export default ModalLoginDialog;
//# sourceMappingURL=ModalLoginDialog.js.map