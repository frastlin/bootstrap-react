import React from "react";
import CarouselWidget from "./Carousel";

class CarouselMain extends React.Component {
  render() {
    return React.createElement("div", {
      id: "pg-carousel"
    }, React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, "Accessible Carousel"))), React.createElement("div", {
      className: "intro highlight"
    }, React.createElement("p", null, " ", "A carousel control dynamically scrolls large amounts of data using minimal screen real estate.")), React.createElement("div", {
      className: "intro viewport demo-block"
    }, React.createElement("div", null, React.createElement(CarouselWidget, null)), React.createElement("div", {
      className: "intro tal keyboard"
    }, React.createElement("p", null, "The carousel controls are keyboard accessible:"), React.createElement("ul", null, React.createElement("li", null, "Press ", React.createElement("kbd", null, "Tab"), " and", " ", React.createElement("kbd", null, React.createElement("kbd", null, "Shift"), "+", React.createElement("kbd", null, "Tab")), " ", "to navigate between buttons, and press Enter to activate."), React.createElement("li", null, "Mouse users can click the desired buttons as usual.")))));
  }

}

export default CarouselMain;
//# sourceMappingURL=CarouselMain.js.map