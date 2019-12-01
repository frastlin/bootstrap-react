import React from "react";

class IntroMain extends React.Component {
  render() {
    return React.createElement("div", {
      id: "pg-intro"
    }, React.createElement("div", {
      className: "intro highlight"
    }, React.createElement("p", null, "AccDC Bootstrap is an HTML parser that renders advanced, accessible interactive controls using semantic HTML markup.")), React.createElement("div", {
      className: "intro tal"
    }, React.createElement("p", null, "AccDC Bootstrap Mirrors:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
      href: "http://whatsock.com/bootstrap/"
    }, "Powered by AccDC Standalone")), React.createElement("li", null, React.createElement("a", {
      href: "http://whatsock.com/bootstrap/jquery/"
    }, "Powered by jQuery")), React.createElement("li", null, React.createElement("a", {
      href: "http://whatsock.com/bootstrap/dojo/"
    }, "Powered by Dojo")), React.createElement("li", null, React.createElement("a", {
      href: "http://whatsock.com/bootstrap/mootools/"
    }, "Powered by MooTools"))), React.createElement("p", {
      className: "guidance"
    }, "For specific coding guidance, view the", " ", React.createElement("a", {
      href: "http://whatsock.com/tsg"
    }, "AccDC Technical Style Guide"))), React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, "What is bootstrapping?"))), React.createElement("div", {
      className: "intro tal"
    }, React.createElement("p", null, "Bootstrapping refers to the use of semantic HTML markup to configure advanced controls, which are then magically converted into dynamic interactive components when the content finishes loading."), React.createElement("p", null, "This allows developers to include complex functionality that is fully configurable across thousands of web pages, without having to program individual components using JavaScript."), React.createElement("p", null, "Benefits:"), React.createElement("ul", null, React.createElement("li", null, "Easy implementation"), React.createElement("li", null, "Consistent layouts"), React.createElement("li", null, "Reliable functionality"), React.createElement("li", null, "Full customization"), React.createElement("li", null, "Automatic accessibility"))), React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, "Why is AccDC Bootstrap different?"))), React.createElement("div", {
      className: "intro tal"
    }, React.createElement("p", null, "AccDC Bootstrap is module based, so it can be extended or reduced as needed for any site-wide implementation."), React.createElement("p", null, "The style sheets for all bootstrap components are fully configurable, so they can be customized to fit the user interface design of any site while maintaining the same level of reliability and accessibility."), React.createElement("p", null, "The bootstrap module itself is also fully configurable, so that new features and components can easily be added and customized for global integration."), React.createElement("p", null, "Tested using:"), React.createElement("ol", null, React.createElement("li", null, "JAWS 12+ using IE 11 and Firefox."), React.createElement("li", null, "NVDA using IE11 and Firefox."), React.createElement("li", null, "Voiceover using iOS Safari.")), React.createElement("p", null, "AccDC Bootstrap is designed to automatically enforce accessibility, while making it possible to populate individual components with any type of content, in any language, using any visual styling."), React.createElement("p", null, "Recursive processing is also supported, so that new content, when rendered, will automatically be bootstrapped; even when pulled from an external resource."), React.createElement("p", null, "Bootstrapping can also be manually invoked using the", " ", React.createElement("code", {
      className: "inline"
    }, "$A.bootstrap"), " method for individual DOM nodes.", React.createElement("br", null), React.createElement("code", null, "$A.bootstrap(Container_DOM_Node);"))), React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, "Downloads"))), React.createElement("div", {
      className: "intro tal downloads"
    }, React.createElement("ul", null, React.createElement("li", null, React.createElement("strong", null, "Browse All"), React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/"
    }, "WhatSock Projects on GitHub")), React.createElement("li", null, React.createElement("strong", null, "The AccDC API (Standalone)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/accdc"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/accdc/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "The AccDC API (for jQuery)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/accdc-jquery"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/accdc-jquery/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "The AccDC API (for Dojo)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/accdc-dojo"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/accdc-dojo/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "The AccDC API (for MooTools)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/accdc-mootools"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/accdc-mootools/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "AccDC Bootstrap (Standalone)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/bootstrap"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/bootstrap/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "AccDC Bootstrap (for jQuery)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/bootstrap-jquery"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/bootstrap-jquery/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "AccDC Bootstrap (for Dojo)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/bootstrap-dojo"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/bootstrap-dojo/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "AccDC Bootstrap (for MooTools)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/bootstrap-mootools"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/bootstrap-mootools/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "The AccDC Technical Style Guide and Coding Arena (for AccDC Standalone and jQuery)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/tsg"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/tsg/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "The AccDC Technical Style Guide and Coding Arena (for Dojo)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/tsg-dojo"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/tsg-dojo/archive/master.zip"
    }, "Zip"), " ", "]"), React.createElement("li", null, React.createElement("strong", null, "The AccDC Technical Style Guide and Coding Arena (for MooTools)"), "[", " ", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/tsg-mootools"
    }, "GitHub"), " ", "|", React.createElement("a", {
      target: "custom",
      href: "https://github.com/whatsock/tsg-mootools/archive/master.zip"
    }, "Zip"), " ", "]"))));
  }

}

export default IntroMain;
//# sourceMappingURL=IntroMain.js.map