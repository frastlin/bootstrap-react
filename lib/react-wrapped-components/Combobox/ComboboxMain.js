import React from "react";
import EditCombobox from "./Editable/NativeEditableCombobox";
import ReadOnlyCombobox from "./ReadOnly/NativeReadOnlyCombobox";

class ComboboxMain extends React.Component {
  handleSubmit(ev) {
    let form = ev.target;
    alert("State: " + form["state-input-value"].value);
    alert("Country: " + form["country-input-value"].value);
    ev.stopPropagation();
    ev.preventDefault();
  }

  render() {
    return React.createElement("div", {
      id: "pg-combobox"
    }, React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, " Accessible Comboboxes"))), React.createElement("div", {
      className: "intro highlight"
    }, React.createElement("p", null, " ", "A combobox control simplifies the task of selecting dynamically filtered options, and may be read-only or editable as needed.")), React.createElement("div", {
      className: "intro tal demo-block"
    }, React.createElement("form", {
      className: "demoComboboxes",
      onSubmit: ev => this.handleSubmit(ev)
    }, React.createElement(EditCombobox, null), React.createElement(ReadOnlyCombobox, null), React.createElement("p", null, React.createElement("button", {
      type: "submit"
    }, "Submit")))), React.createElement("div", {
      className: "intro tal keyboard"
    }, React.createElement("p", null, "The comboboxes are keyboard accessible:"), React.createElement("ul", null, React.createElement("li", null, "Set focus to the State or Country fields to open the combobox control."), React.createElement("li", null, "Within a combobox that is not readonly, first type into the field, then press the ", React.createElement("kbd", {
      class: "down"
    }, "Down"), " arrow to navigate into the dropdown and use the ", React.createElement("kbd", {
      class: "up"
    }, "Up"), " and", " ", React.createElement("kbd", {
      class: "down"
    }, "Down"), " arrow keys to navigate available options."), React.createElement("li", null, "Press any other letter or number, or the", " ", React.createElement("kbd", {
      class: "left"
    }, "Left"), " or ", React.createElement("kbd", {
      class: "right"
    }, "Right"), " ", "arrow keys to then move focus back into the Input for editing."), React.createElement("li", null, "Within a combobox that is readonly, press the", " ", React.createElement("kbd", {
      class: "down"
    }, "Down"), " arrow or click the trigger icon to open the dropdown."), React.createElement("li", null, "Press any letter or number within a readonly field to jump to an option starting with that character or digit."), React.createElement("li", null, "Press ", React.createElement("kbd", null, "Enter"), " or", " ", React.createElement("kbd", null, React.createElement("kbd", null, "Alt"), "+", React.createElement("kbd", null, "Up")), " ", "to close the dropdown and save the selection."), React.createElement("li", null, "To cancel, press ", React.createElement("kbd", null, "Escape"), ", ", React.createElement("kbd", null, "Tab"), " or", " ", React.createElement("kbd", null, React.createElement("kbd", null, "Shift"), "+", React.createElement("kbd", null, "Tab")), " ", "to close the dropdown."), React.createElement("li", null, "Sighted mouse users can click the desired option to save the selection and close the dropdown."))));
  }

}

export default ComboboxMain;
//# sourceMappingURL=ComboboxMain.js.map