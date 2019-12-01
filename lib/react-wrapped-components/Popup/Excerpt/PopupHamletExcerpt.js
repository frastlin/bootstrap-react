import React from "react";
let $A = window.AccDC;

class PopupHamletExcerpt extends React.Component {
  handleClose(ev) {
    $A(this).unmount();
    ev.preventDefault();
  }

  render() {
    return React.createElement("div", {
      id: "popup-info"
    }, React.createElement("h4", null, "Hamlet: Act 3, Scene 2"), React.createElement("p", {
      className: "close"
    }, React.createElement("a", {
      onClick: ev => this.handleClose(ev),
      href: "#close",
      className: "popupClose"
    }, React.createElement("img", {
      src: require("../../../img/ic_close.svg"),
      alt: "Close Popup",
      title: "Close Popup"
    }))), React.createElement("dl", null, React.createElement("dt", null, "HAMLET"), React.createElement("dd", null, "Do you see yonder cloud that's almost in shape of a camel?"), React.createElement("dt", null, "POLONIUS"), React.createElement("dd", null, "By th' mass, and 'tis like a camel indeed."), React.createElement("dt", null, "HAMLET"), React.createElement("dd", null, "Methinks it is like a weasel."), React.createElement("dt", null, "POLONIUS"), React.createElement("dd", null, "It is backed like a weasel."), React.createElement("dt", null, "HAMLET"), React.createElement("dd", null, "Or like a whale."), React.createElement("dt", null, "POLONIUS"), React.createElement("dd", null, "Very like a whale.")));
  }

}

export default PopupHamletExcerpt;
//# sourceMappingURL=PopupHamletExcerpt.js.map