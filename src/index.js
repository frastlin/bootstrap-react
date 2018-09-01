import React from "react";

// Initialize window.AccDC for use within the global React project
import $A from "./AccDC/Core/API";
import "./VisualARIA/Load";

import "./css/global.css";
import MainTabList from "./components/MainTabList";

// Use $A.insert, $A.insertWithin, $A.before, $A.after, $A.prepend, $A.prependTo, $A.append, or $A.appendTo to render standard markup or DOM nodes.
// To remove a DOM node, use $A.remove. E.G $A(DOM_Node).remove();
$A("#AccDCCurrentVerS1").insert(window.AccDC._version);
$A("#currentYear").insert(new Date().getFullYear());

// Use $A.mount or $A.mountWithin to render a React component object
let myTabListComponent = $A("#BootstrapHomeTabList")
  .mount(<MainTabList />)
  .return();
// To remove a React component, use $A.unmount
// $A(myTabListComponent).unmount();

$A(".topLink a").on("click", function(ev) {
  $A("h1").focus();
  ev.preventDefault();
});

/* For testing Fetch API chaining with recursive loading.

$A(function() {

$A.get([

{
url: "/file.html",
data: {returnType: "html", selector: "#tooltip-help"},
success: function(html, promise) {
// html = DOM node object
alert(html);
}
},

{
url: "/file.xml",
data: {returnType: "xml", selector: "group > slide"},
success: function(xml, promise) {
// xml = XML node object
alert(xml);
}
},

{
url: "/file.json",
data: {returnType: "json"},
success: function(json, promise) {
// json = instantiated JS object
alert(json);
}
}

]);

});

*/
