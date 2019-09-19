import React from "react";
import CarouselWidget from "./Carousel";

class CarouselMain extends React.Component {
  render() {
    return (
      <div id="pg-carousel">
        <div className="hd">
          <h3>
            <span>Accessible Carousel</span>
          </h3>
        </div>
        <div className="intro highlight">
          <p>
            {" "}
            A carousel control dynamically scrolls large amounts of data using
            minimal screen real estate.
          </p>
        </div>
        <div className="intro viewport demo-block">
          <div>
            <CarouselWidget />
          </div>
          <div className="intro tal keyboard">
            <p>The carousel controls are keyboard accessible:</p>
            <ul>
              <li>
                Press <kbd>Tab</kbd> and{" "}
                <kbd>
                  <kbd>Shift</kbd>+<kbd>Tab</kbd>
                </kbd>{" "}
                to navigate between buttons, and press Enter to activate.
              </li>
              <li>Mouse users can click the desired buttons as usual.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselMain;
