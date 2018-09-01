import React from "react";
import strap from "../../AccDC/DC";

// Import the React Popup component that will be dynamically rendered
import PopupQuote from "./Excerpt/PopupHamletExcerpt";

let $A = window.AccDC;

class PopupMain extends React.Component {
  componentDidMount() {
    strap.setPopup(
      this,
      {
        Quote: <PopupQuote />
      },
      {
        overrides: {
          className: "popup",
          autoCloseOnTabOut: true,

          runAfter: function(DC) {
            // $A.beep();
          }
        }
      }
    );
  }
  render() {
    return (
      <div id="pg-popup">
        <div className="hd">
          <h3>
            <span>Accessible Popup</span>
          </h3>
        </div>
        <div className="intro highlight">
          <p>
            A popup control displays information or interactive content as an
            overlay.
          </p>
        </div>
        <div className="intro tal demo-block">
          <p>
            <a
              id="popupId"
              href="#"
              className="accPopup excerpt"
              data-controls="Quote"
              data-popup="popup"
            >
              {" "}
              Show me the Shakespeare Quote of the Day!
            </a>
          </p>
        </div>
        <div className="intro tal keyboard">
          <p>
            The popup is optimized for screen reader and keyboard only users:
          </p>
          <ul>
            <li>Activate the Quote link to open the popup.</li>
            <li>
              The content will be inserted inline with the triggering element,
              and focus will automatically move to the beginning of the new
              content.
            </li>
            <li>
              Press <kbd>Tab</kbd> to set focus to the Close link and press{" "}
              <kbd>Enter</kbd> to close the popup, or press <kbd>Escape</kbd> to
              close the popup directly.
            </li>
            <li>
              When closed, focus will move back to the triggering element.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PopupMain;
