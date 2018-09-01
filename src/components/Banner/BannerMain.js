import React from "react";
import strap from "../../AccDC/DC";

// Import the React Banner component that will be dynamically rendered
import FloaterMSG from "./Banner/Banner";

let $A = window.AccDC;

class BannerMain extends React.Component {
  componentDidMount() {
    strap.setBanner(
      this,
      {
        Floater: <FloaterMSG />
      },
      {
        overrides: {
          id: "UniqueFloaterBannerID",

          runDuring: function(DC) {
            DC.css({
              position: "fixed",
              zIndex: 1,
              right: 0,
              bottom: 0
            });
          },

          mouseLeave: function(ev, DC) {
            DC.unmount();
          }
        }
      }
    );
  }
  handleToggleBtnClick(ev) {
    var DC = $A("UniqueFloaterBannerID");
    if (DC.loaded) DC.unmount();
    else {
      DC.mount()
        .css({
          outlineStyle: "none"
        })
        .focus();
    }
  }
  render() {
    return (
      <div id="pg-banner">
        <div className="hd">
          <h3>
            <span>Accessible Banner</span>
          </h3>
        </div>
        <div className="intro highlight">
          <p>
            A banner control displays important information by fixing it to a
            specific area of the viewport.
          </p>
        </div>
        <div
          id="uniqueBannerId"
          data-role="Urgent"
          className="accBanner"
          data-controls="Floater"
        />
        <div className="intro tal demo-block">
          <p>
            <button
              onClick={ev => this.handleToggleBtnClick(ev)}
              className="toggleBtn"
            >
              Toggle Banner
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default BannerMain;
