import React from "react";
import strap from "../../AccDC/DC";
/* Directions for Accessible Carousels

1. Import AccDC/DC.

2. Import or create named React components to render carousel slide content.

3. Designate an empty container element somewhere on the page where the Carousel React component slides will be inserted, and ensure it has a unique ID.

4. Specify the details for each slide as specified when passed as an array to setCarousel(), and configure desired parameters.

6. Configure supporting handlers using the Carousel object that is returned when setCarousel is invoked. (myCarousel = setCarousel())

Carousel Object Methods

References to 'Coords' refers to the array index values of [groupIndexVal, slideIndexVal], which starts at [0, 0] by default for the first slide in the first group.

// Load the React slides and begin dynamic behaviors as configured.
myCarousel.open(Coords);

// Load the first slide in the previous group.
myCarousel.previousGroup();

// Load the first slide in the next group.
myCarousel.nextGroup();

// Load the previous slide.
myCarousel.previousSlide();

// Load the next slide.
myCarousel.nextSlide();

// Enable or disable automatic slide rotation. true or false
myCarousel.enable(bool);

// Temporarily enable or disable automatic slide rotation. true or false
myCarousel.pause(bool);

// Retern the current auto-rotation state, true if enabled, false if stopped or paused.
var myState = myCarousel.state();

// Perform a specific function using the current state with more precise handling.
myCarousel.state(function(isStopped, isPaused) {
  // Do something.
});

// Bind specific Coords to a DOM element or string ID.
myCarousel.bind(domElementOrStringID, Coords);

// Load the slide Coords that are bound to a specific DOM element or string ID.
myCarousel.load(domElementOrStringID);

// Destroy the Carousel construct, including all DC objects and stored data.
myCarousel.destroy();
*/

import AltSlide1 from "./Alternative/Slide1";
import AltSlide2 from "./Alternative/Slide2";
import AltSlide3 from "./Alternative/Slide3";
import AltSlide4 from "./Alternative/Slide4";
import AltSlide5 from "./Alternative/Slide5";
let $A = window.AccDC;

class Carousel extends React.Component {
  componentDidMount() {
    this.musicCarousel = strap.setCarousel("carouselWindowId", [React.createElement(AltSlide1, {
      slideProps: {
        id: "ET-BtnId",
        // ID matches the ID attribute of the navigation button within the pagination section, which is automatically bound when the carousel initializes. View "handleNavButton" for usage.
        group: "Alternative Rock",
        // Group collection unique identifier. (Not announced by screen readers)
        name: "Emiliana Torrini",
        // Announced by screen readers when Next or Previous is explicitly invoked, but not on auto-rotation.
        description: "Love in the Time of Science" // Announced by screen readers when Next or Previous is explicitly invoked, but not on auto-rotation.

      }
    }), React.createElement(AltSlide2, {
      slideProps: {
        id: "FR-BtnId",
        group: "Alternative Rock",
        name: "Frente",
        description: "Labour of Love"
      }
    }), React.createElement(AltSlide3, {
      slideProps: {
        id: "HO-BtnId",
        group: "Alternative Rock",
        name: "Hooverphonic",
        description: "Blue Wonder Power Milk"
      }
    }), React.createElement(AltSlide4, {
      slideProps: {
        id: "NO-BtnId",
        group: "Alternative Rock",
        name: "New Order",
        description: "Substance"
      }
    }), React.createElement(AltSlide5, {
      slideProps: {
        id: "U2-BtnId",
        group: "Alternative Rock",
        name: "U2",
        description: "The Unforgettable Fire"
      }
    })], {
      role: "Slide",
      // Name of accessible region where slides are rotated within.
      autoStart: [0, 0],
      // Position of [groupIndex, slideIndex] where the carousel will load when first initialized.
      direction: "lr",
      // "lr" = left/right, "tb" = top/bottom.
      cycle: true,
      // Set auto-rotation on or off.
      stopRotation: false,
      // Choose to start the auto-rotation carousel in stopped or enabled mode when first loaded.
      forward: true,
      // Choose to rotate forward or backwards.
      timer: 5000,
      // Time delay in MS.
      animDelay: 2000,
      // Time interval for animation effect.
      hiddenMsg: "Press Escape to stop carousel rotation.",
      // Visually hidden message for screen reader users. Set to "" to omit.
      onComplete: function (DC) {// Do something after the slide finishes rendering.
        // DC.container includes the markup for the newly loaded slide.
        // DC.name and DC.description are the values initially passed within the slide component during enstantiation.
        // DC.slideVal is the array index value of the newly loaded slide.
      },
      handleBoundNodes: function (node) {
        // Passes the bound node if present for processing after the newly loaded slide completes rendering.
        RTI.activate(node);
      },
      onStopStateChange: function (isStopped, isPaused) {
        // Do something whenever pause or stop is activated.
        let stateMsg = isStopped ? "Start carousel" : "Stop carousel";
        $A(stopBtn).setAttribute({
          title: stateMsg,
          "aria-label": stateMsg
        }).toggleClass("stopped", isStopped).mount(isStopped ? '<span aria-hidden="true">O</span>' : '<span aria-hidden="true">X</span>');
      }
    }); // Configure the carousel functionality within the React component and tie it to the instantiated Carousel object to control its behavior.

    var carousel = this.musicCarousel;
    var stopBtn = $A(this).query(".stopBtn").return()[0];
    var navBtnContainer = $A.getElement("NavBtnGroupId");
    var RTI = new $A.RovingTabIndex({
      container: navBtnContainer,
      nodes: navBtnContainer.childNodes,
      orientation: 1,
      autoLoop: true,
      onOpen: function (ev, target, rtiObj, childRTI, wasTriggeredWithArrowKey) {
        if (!wasTriggeredWithArrowKey) {
          carousel.load(target.id);
          $A("#carouselWindowId").focus();
        }
      },
      onSpace: function (ev, target, rtiObj) {
        carousel.load(target.id);
        $A("#carouselWindowId").focus();
      }
    });
  }

  handlePause(ev) {
    this.musicCarousel.pause(true);
  }

  handleResume(ev) {
    this.musicCarousel.pause(false);
  }

  handleStop(ev) {
    let carousel = this.musicCarousel;
    carousel.state(function (isStopped, isPaused) {
      carousel.enable(isStopped ? true : false);
    });
  }

  handleScroll(ev) {
    var k = ev.which;

    if (k === 37 || k === 39) {
      if (k === 37) this.musicCarousel.previousSlide();else if (k === 39) this.musicCarousel.nextSlide();
      ev.preventDefault();
    }
  }

  handlePrevious(ev) {
    this.musicCarousel.previousSlide();
  }

  handleNext(ev) {
    this.musicCarousel.nextSlide();
  }

  render() {
    return React.createElement("div", {
      className: "clearfix",
      id: "carouselId",
      onFocus: ev => this.handlePause(ev),
      onBlur: ev => this.handleResume(ev),
      onMouseEnter: ev => this.handlePause(ev),
      onMouseLeave: ev => this.handleResume(ev)
    }, React.createElement("div", {
      className: "carouselCls",
      role: "region",
      style: {
        width: "auto",
        height: "auto"
      },
      "aria-label": "Carousel"
    }, React.createElement("div", null, React.createElement("div", {
      className: "parentDivCls",
      style: {
        position: "relative"
      }
    }, React.createElement("div", {
      className: "topDiv clearfix"
    }, React.createElement("a", {
      accessKey: "x",
      title: "Stop carousel",
      "aria-label": "Stop carousel",
      className: "stopBtn",
      role: "button",
      href: "#",
      onClick: ev => this.handleStop(ev)
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "X"))), React.createElement("div", {
      id: "carouselWindowId",
      tabIndex: 0,
      className: "centerContent",
      role: "region",
      "aria-label": "Slide",
      "data-keyboard": "Press Left or Right to scroll",
      onKeyDown: ev => this.handleScroll(ev)
    }), React.createElement("div", {
      className: "navDivClass clearfix"
    }, React.createElement("div", {
      className: "leftCol"
    }, React.createElement("button", {
      "aria-label": "Previous Slide",
      title: "Previous Slide",
      className: "navButton navSlideButton",
      accessKey: 1,
      ariaControls: "carouselWindowId",
      onClick: ev => this.handlePrevious(ev)
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\u2190"))), React.createElement("div", {
      className: "midCol"
    }, React.createElement("ul", {
      id: "NavBtnGroupId",
      className: "dotNavClass",
      role: "group",
      "aria-label": "Slides"
    }, React.createElement("li", {
      tabIndex: -1,
      id: "ET-BtnId",
      "aria-label": "Emiliana Torrini - Love in the Time of Science",
      title: "Emiliana Torrini - Love in the Time of Science",
      role: "button"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "1")), React.createElement("li", {
      tabIndex: -1,
      id: "FR-BtnId",
      "aria-label": "Frente - Labour of Love",
      title: "Frente - Labour of Love",
      role: "button"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "2")), React.createElement("li", {
      tabIndex: -1,
      id: "HO-BtnId",
      "aria-label": "Hooverphonic - Blue Wonder Power Milk",
      title: "Hooverphonic - Blue Wonder Power Milk",
      role: "button"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "3")), React.createElement("li", {
      tabIndex: -1,
      id: "NO-BtnId",
      "aria-label": "New Order - Substance",
      title: "New Order - Substance",
      role: "button"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "4")), React.createElement("li", {
      tabIndex: -1,
      id: "U2-BtnId",
      "aria-label": "U2 - The Unforgettable Fire",
      title: "U2 - The Unforgettable Fire",
      role: "button"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "5")))), React.createElement("div", {
      className: "rightCol"
    }, React.createElement("button", {
      "aria-label": "Next Slide",
      title: "Next Slide",
      className: "navButton navSlideButton right",
      accessKey: 2,
      ariaControls: "carouselWindowId",
      onClick: ev => this.handleNext(ev)
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\u2192"))))))));
  }

}

export default Carousel;
//# sourceMappingURL=Carousel.js.map