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

class MainTabList extends React.Component {
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
  isDefaultOpen(id) {
    id = "main-tab-" + id.toLowerCase();
    var tabList = [
      "main-tab-intro",
      "main-tab-accordion",
      "main-tab-banner",
      "main-tab-calendar",
      "main-tab-carousel",
      "main-tab-combobox",
      "main-tab-footnotes",
      "main-tab-menu",
      "main-tab-modal",
      "main-tab-popup",
      "main-tab-tabs"
    ];
    var refId = window.location.href.split("#")[1] || false;
    return ((!refId || tabList.indexOf(refId) === -1) &&
      id === "main-tab-intro") ||
      (refId && tabList.indexOf(refId) !== -1 && refId === id)
      ? "true"
      : "false";
  }
  render() {
    return (
      <ul role="tablist" aria-level="1" className="contextual-menu">
        <li role="presentation">
          <a
            id="main-tab-intro"
            data-defaultopen={this.isDefaultOpen("Intro")}
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
            data-defaultopen={this.isDefaultOpen("Accordion")}
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
            data-defaultopen={this.isDefaultOpen("Banner")}
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
            data-defaultopen={this.isDefaultOpen("Calendar")}
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
            data-defaultopen={this.isDefaultOpen("Carousel")}
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
            data-defaultopen={this.isDefaultOpen("Combobox")}
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
            data-defaultopen={this.isDefaultOpen("Footnotes")}
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
            data-defaultopen={this.isDefaultOpen("Menu")}
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
            data-defaultopen={this.isDefaultOpen("Modal")}
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
            data-defaultopen={this.isDefaultOpen("Popup")}
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
            data-defaultopen={this.isDefaultOpen("Tabs")}
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
