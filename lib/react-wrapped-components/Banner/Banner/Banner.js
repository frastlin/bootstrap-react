import React from "react";
let $A = window.AccDC;

class Banner extends React.Component {
  handleActivate(ev) {
    alert("Do something...");
    $A(this).unmount();
    ev.stopPropagation();
    ev.preventDefault();
  }

  render() {
    return React.createElement("div", {
      id: "ad-2"
    }, React.createElement("div", {
      className: "h2"
    }, "Lost", React.createElement("br", null), "at", React.createElement("br", null), "sea?"), React.createElement("ul", {
      id: "boat"
    }, React.createElement("li", null, React.createElement("div", {
      id: "question-mark"
    }))), React.createElement("ul", {
      id: "water"
    }, React.createElement("li", {
      id: "water-back"
    }), React.createElement("li", {
      id: "water-front"
    })), React.createElement("div", {
      id: "content"
    }, React.createElement("div", {
      className: "h3"
    }, "Relax.", React.createElement("br", null), "We've got your rudder."), React.createElement("a", {
      role: "button",
      href: "#activate",
      onClick: ev => this.handleActivate(ev)
    }, "Guide me!")));
  }

}

export default Banner;
//# sourceMappingURL=Banner.js.map