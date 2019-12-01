import React from "react";
import strap from "../AccDC/DC";
import "../css/accordion.css";
import "../css/banner.css";
import "../css/calendar.css";
import "../css/carousel.css";
import "../css/combobox.css";
import "../css/footnotes.css";
import "../css/menus.css";
import "../css/modal.css";
import "../css/popup.css";
import "../css/tabs.css"; // Import all React component TabPanels controlled by this Tablist

import Intro from "./Intro/IntroMain";
import Accordion from "./Accordion/AccordionMain";
import Banner from "./Banner/BannerMain";
import Calendar from "./Calendar/CalendarMain";
import Carousel from "./Carousel/CarouselMain";
import Combobox from "./Combobox/ComboboxMain";
import Footnotes from "./Footnotes/FootnotesMain";
import Menus from "./Menu/MenusMain";
import Modal from "./Modal/ModalMain";
import Popup from "./Popup/PopupMain";
import Tabs from "./Tabs/TabsMain";
let tabId = "";

class MainTabList extends React.Component {
  componentWillMount() {
    var u = window.location.href;
    var id = u.indexOf("#") !== -1 ? u.slice(u.indexOf("#") + 1) : false;
    if (!id) id = "main-tab-intro";
    tabId = id;
  }

  componentDidMount() {
    strap.setTabList(this, {
      Intro: React.createElement(Intro, null),
      Accordion: React.createElement(Accordion, null),
      Banner: React.createElement(Banner, null),
      Calendar: React.createElement(Calendar, null),
      Carousel: React.createElement(Carousel, null),
      Combobox: React.createElement(Combobox, null),
      Footnotes: React.createElement(Footnotes, null),
      Menus: React.createElement(Menus, null),
      Modal: React.createElement(Modal, null),
      Popup: React.createElement(Popup, null),
      Tabs: React.createElement(Tabs, null)
    }, {
      // callback: function(DC, isOpen) {
      // if (isOpen) window.AccDC.beep();
      // },
      overrides: {
        toggleClassName: "active"
      }
    });
  }

  render() {
    return React.createElement("ul", {
      role: "tablist",
      "aria-level": "1",
      className: "contextual-menu"
    }, React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-intro",
      "data-defaultopen": tabId === "main-tab-intro" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Intro"
    }, React.createElement("span", null, "Bootstrap"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-accordion",
      "data-defaultopen": tabId === "main-tab-accordion" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Accordion"
    }, React.createElement("span", null, "Accordion"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-banner",
      "data-defaultopen": tabId === "main-tab-banner" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Banner"
    }, React.createElement("span", null, "Banner"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-calendar",
      "data-defaultopen": tabId === "main-tab-calendar" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Calendar"
    }, React.createElement("span", null, "Calendar"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-carousel",
      "data-defaultopen": tabId === "main-tab-carousel" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Carousel"
    }, React.createElement("span", null, "Carousel"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-combobox",
      "data-defaultopen": tabId === "main-tab-combobox" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Combobox"
    }, React.createElement("span", null, "Combobox"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-footnotes",
      "data-defaultopen": tabId === "main-tab-footnotes" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Footnotes"
    }, React.createElement("span", null, "Footnotes"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-menu",
      "data-defaultopen": tabId === "main-tab-menu" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Menus"
    }, React.createElement("span", null, "Menus"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-modal",
      "data-defaultopen": tabId === "main-tab-modal" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Modal"
    }, React.createElement("span", null, "Modal"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-popup",
      "data-defaultopen": tabId === "main-tab-popup" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Popup"
    }, React.createElement("span", null, "Popup"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-tabs",
      "data-defaultopen": tabId === "main-tab-tabs" ? "true" : "false",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "Tabs"
    }, React.createElement("span", null, "Tabs"))), React.createElement("li", {
      role: "presentation"
    }, React.createElement("a", {
      id: "main-tab-unassigned",
      role: "tab",
      href: "#tab",
      className: "accTab",
      "data-insert": "pgContent",
      "data-controls": "",
      "aria-disabled": "true"
    }, React.createElement("span", null, "Unassigned"))));
  }

}

export default MainTabList;
//# sourceMappingURL=MainTabList.js.map