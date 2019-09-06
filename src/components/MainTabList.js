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
import "../css/tabs.css";

// Import all React component TabPanels controlled by this Tablist
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
    strap.setTabList(
      this,
      {
        Intro: <Intro />,
        Accordion: <Accordion />,
        Banner: <Banner />,
        Calendar: <Calendar />,
        Carousel: <Carousel />,
        Combobox: <Combobox />,
        Footnotes: <Footnotes />,
        Menus: <Menus />,
        Modal: <Modal />,
        Popup: <Popup />,
        Tabs: <Tabs />
      },
      {
        // callback: function(DC, isOpen) {
        // if (isOpen) window.AccDC.beep();
        // },

        overrides: {
          toggleClassName: "active"
        }
      }
    );
  }
  render() {
    return (
      <ul role="tablist" aria-level="1" className="contextual-menu">
        <li role="presentation">
          <a
            id="main-tab-intro"
            data-defaultopen={tabId === "main-tab-intro" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Intro"
          >
            <span>Bootstrap</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-accordion"
            data-defaultopen={tabId === "main-tab-accordion" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Accordion"
          >
            <span>Accordion</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-banner"
            data-defaultopen={tabId === "main-tab-banner" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Banner"
          >
            <span>Banner</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-calendar"
            data-defaultopen={tabId === "main-tab-calendar" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Calendar"
          >
            <span>Calendar</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-carousel"
            data-defaultopen={tabId === "main-tab-carousel" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Carousel"
          >
            <span>Carousel</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-combobox"
            data-defaultopen={tabId === "main-tab-combobox" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Combobox"
          >
            <span>Combobox</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-footnotes"
            data-defaultopen={tabId === "main-tab-footnotes" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Footnotes"
          >
            <span>Footnotes</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-menu"
            data-defaultopen={tabId === "main-tab-menu" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Menus"
          >
            <span>Menus</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-modal"
            data-defaultopen={tabId === "main-tab-modal" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Modal"
          >
            <span>Modal</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-popup"
            data-defaultopen={tabId === "main-tab-popup" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Popup"
          >
            <span>Popup</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-tabs"
            data-defaultopen={tabId === "main-tab-tabs" ? "true" : "false"}
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls="Tabs"
          >
            <span>Tabs</span>
          </a>
        </li>
        <li role="presentation">
          <a
            id="main-tab-unassigned"
            role="tab"
            href="#tab"
            className="accTab"
            data-insert="pgContent"
            data-controls=""
            aria-disabled="true"
          >
            <span>Unassigned</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default MainTabList;
