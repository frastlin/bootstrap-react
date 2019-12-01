import React from "react";
import strap from "../../AccDC/DC";
/* Directions for Accessible Menus

1. Import AccDC/DC.

2. Import or create named React components to render menu content.

3. Using a native button or link as triggering elements, add the attribute aria-haspopup="true" on all triggering elements that will open attached menus. All menu item active elements must include role="menuitem", "menuitemcheckbox", or "menuitemradio" to be ARIA compliant. No other active element types are supported within the container elements for role="menu" or role="menubar" other than sub-constructs of the same ARIA Menu widget type.

4. Ensure all menu triggering elements include a unique ID attribute.

5. Add a data-controls attribute to each triggering element and make sure the name of the attribute matches the object property name of the related React component as submitted to setMenu().

IMPORTANT: To ensure proper functionality when creating ARIA Menus, enable Visual ARIA and then use the keyboard to verify that all roles and focus handling is done correctly in accordance with the ARIA spec.
*/
// Import the React Menu components that will be dynamically rendered

import Menu from "./Vertical/MenuOptions";
import MenuBar from "./Horizontal/MenuBarOptions";

class MenusMain extends React.Component {
  componentDidMount() {
    strap.setMenu(this, {
      OptionsMenu: React.createElement(Menu, null),
      OptionsMenuBar: React.createElement(MenuBar, null)
    }, {
      overrides: {
        onClick: function (ev, menuItemLink) {
          alert("Do something with the link with id=" + menuItemLink.id);
        },
        globalOnClick: function (ev, menuItemLink) {
          alert("Do something else with the link with id=" + menuItemLink.id); //window.top.location = menuItemLink.href;
        },
        runDuring: function (DC) {
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
    });
  }

  render() {
    return React.createElement("div", {
      id: "pg-menus"
    }, React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, " Accessible Menus"))), React.createElement("div", {
      className: "intro highlight"
    }, React.createElement("p", null, " ", "A menu control simulates the nested menu behavior of context menus in the operating system.")), React.createElement("div", {
      className: "intro tal demo-block"
    }, React.createElement("p", null, React.createElement("button", {
      id: "menuBtn1",
      "aria-haspopup": "true",
      className: "accMenu menu2",
      "data-controls": "OptionsMenuBar",
      "data-containerclassname": "foMenu"
    }, "Options (Horizontal Flyout)"))), React.createElement("div", {
      className: "intro tal demo-block"
    }, React.createElement("p", null, React.createElement("button", {
      id: "menuBtn2",
      "aria-haspopup": "true",
      className: "accMenu menu",
      "data-controls": "OptionsMenu",
      "data-containerclassname": "menu"
    }, "Options (Vertical Dropdown)"))), React.createElement("div", {
      className: "intro tal keyboard"
    }, React.createElement("p", null, "The menus are keyboard accessible:"), React.createElement("ul", null, React.createElement("li", null, "Activate the triggering element using the keyboard."), React.createElement("li", null, "Press the ", React.createElement("kbd", {
      className: "left"
    }, "Left"), " and", " ", React.createElement("kbd", {
      className: "right"
    }, "Right"), " Arrow keys to move focus between the menu options within the horizontal menu."), React.createElement("li", null, "Press the ", React.createElement("kbd", {
      className: "up"
    }, "Up"), " and", " ", React.createElement("kbd", {
      className: "down"
    }, "Down"), " Arrow keys to open or close submenus within the horizontal menu."), React.createElement("li", null, "Press the ", React.createElement("kbd", {
      className: "up"
    }, "Up"), " and", " ", React.createElement("kbd", {
      className: "down"
    }, "Down"), " Arrow keys to move focus between the menu options within the vertical menu."), React.createElement("li", null, "Press the ", React.createElement("kbd", {
      className: "left"
    }, "Left"), " and", " ", React.createElement("kbd", {
      className: "right"
    }, "Right"), " Arrow keys to open or close submenus within the vertical menu."), React.createElement("li", null, "Press any letter or number to jump to a menu item starting with that character or digit."), React.createElement("li", null, "Press ", React.createElement("kbd", null, "Enter"), " to activate a menu option."), React.createElement("li", null, "Press ", React.createElement("kbd", null, "Escape"), " to close the currently open menu."), React.createElement("li", null, "Press ", React.createElement("kbd", null, "Tab"), " or set focus back on the triggering element to close the menu and all submenus."), React.createElement("li", null, "Mouse users can click the desired menu option as usual."))));
  }

}

export default MenusMain;
//# sourceMappingURL=MenusMain.js.map