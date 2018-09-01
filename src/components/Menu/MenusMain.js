import React from "react";
import strap from "../../AccDC/DC";

// Import the React Menu components that will be dynamically rendered
import Menu from "./Vertical/MenuOptions";
import MenuBar from "./Horizontal/MenuBarOptions";

class MenusMain extends React.Component {
  componentDidMount() {
    strap.setMenu(
      this,
      {
        OptionsMenu: <Menu />,
        OptionsMenuBar: <MenuBar />
      },
      {
        overrides: {
          onClick: function(ev, menuItemLink) {
            alert("Do something with the link with id=" + menuItemLink.id);
          },

          globalOnClick: function(ev, menuItemLink) {
            alert("Do something else with the link with id=" + menuItemLink.id);
            //window.top.location = menuItemLink.href;
          },

          runDuring: function(DC) {
            let trigger = {
              top: DC.triggerObj.offsetTop,
              left: DC.triggerObj.offsetLeft,
              bottom: DC.triggerObj.offsetBottom,
              width: DC.triggerObj.offsetWidth,
              id: DC.triggerObj.id
            };
            DC.css({
              position: "absolute",
              zIndex: 1,
              top: trigger.top + 6,
              left: trigger.left + trigger.width + 3
            });
            DC.addClass(DC.triggerObj.getAttribute("data-containerclassname"));
          }
        }
      }
    );
  }
  render() {
    return (
      <div id="pg-menus">
        <div className="hd">
          <h3>
            <span> Accessible Menus</span>
          </h3>
        </div>
        <div className="intro highlight">
          <p>
            {" "}
            A menu control simulates the nested menu behavior of context menus
            in the operating system.
          </p>
        </div>
        <div className="intro tal demo-block">
          <p>
            <button
              id="menuBtn1"
              aria-haspopup="true"
              className="accMenu menu2"
              aria-haspopup="true"
              data-controls="OptionsMenuBar"
              data-containerclassname="foMenu"
            >
              Options (Horizontal Flyout)
            </button>
          </p>
        </div>
        <div className="intro tal demo-block">
          <p>
            <button
              id="menuBtn2"
              aria-haspopup="true"
              className="accMenu menu"
              aria-haspopup="true"
              data-controls="OptionsMenu"
              data-containerclassname="menu"
            >
              Options (Vertical Dropdown)
            </button>
          </p>
        </div>
        <div className="intro tal keyboard">
          <p>The menus are keyboard accessible:</p>
          <ul>
            <li>Activate the triggering element using the keyboard.</li>
            <li>
              Press the <kbd className="left">Left</kbd> and{" "}
              <kbd className="right">Right</kbd> Arrow keys to move focus
              between the menu options within the horizontal menu.
            </li>
            <li>
              Press the <kbd className="up">Up</kbd> and{" "}
              <kbd className="down">Down</kbd> Arrow keys to open or close
              submenus within the horizontal menu.
            </li>
            <li>
              Press the <kbd className="up">Up</kbd> and{" "}
              <kbd className="down">Down</kbd> Arrow keys to move focus between
              the menu options within the vertical menu.
            </li>
            <li>
              Press the <kbd className="left">Left</kbd> and{" "}
              <kbd className="right">Right</kbd> Arrow keys to open or close
              submenus within the vertical menu.
            </li>
            <li>
              Press any letter or number to jump to a menu item starting with
              that character or digit.
            </li>
            <li>
              Press <kbd>Enter</kbd> to activate a menu option.
            </li>
            <li>
              Press <kbd>Escape</kbd> to close the currently open menu.
            </li>
            <li>
              Press <kbd>Tab</kbd> or set focus back on the triggering element
              to close the menu and all submenus.
            </li>
            <li>Mouse users can click the desired menu option as usual.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenusMain;
