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
  changeURL(id) {
    document.title = id;
    window.history.pushState(
      { html: document.html, pageTitle: id },
      "",
      "./#main-tab-" + id.toLowerCase()
    );
  }
  render() {
    this.changeURL("Combobox");
    return (
      <div id="pg-combobox">
        <div className="hd">
          <h3>
            <span> Accessible Comboboxes</span>
          </h3>
        </div>
        <div className="intro highlight">
          <p>
            {" "}
            A combobox control simplifies the task of selecting dynamically
            filtered options, and may be read-only or editable as needed.
          </p>
        </div>
        <div className="intro tal demo-block">
          <form
            className="demoComboboxes"
            onSubmit={ev => this.handleSubmit(ev)}
          >
            <EditCombobox />
            <ReadOnlyCombobox />
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
        <div className="intro tal keyboard">
          <p>The comboboxes are keyboard accessible:</p>
          <ul>
            <li>
              Set focus to the State or Country fields to open the combobox
              control.
            </li>
            <li>
              Within a combobox that is not readonly, first type into the field,
              then press the <kbd class="down">Down</kbd> arrow to navigate into
              the dropdown and use the <kbd class="up">Up</kbd> and{" "}
              <kbd class="down">Down</kbd> arrow keys to navigate available
              options.
            </li>
            <li>
              Press any other letter or number, or the{" "}
              <kbd class="left">Left</kbd> or <kbd class="right">Right</kbd>{" "}
              arrow keys to then move focus back into the Input for editing.
            </li>
            <li>
              Within a combobox that is readonly, press the{" "}
              <kbd class="down">Down</kbd> arrow or click the trigger icon to
              open the dropdown.
            </li>
            <li>
              Press any letter or number within a readonly field to jump to an
              option starting with that character or digit.
            </li>
            <li>
              Press <kbd>Enter</kbd> or{" "}
              <kbd>
                <kbd>Alt</kbd>+<kbd>Up</kbd>
              </kbd>{" "}
              to close the dropdown and save the selection.
            </li>
            <li>
              To cancel, press <kbd>Escape</kbd>, <kbd>Tab</kbd> or{" "}
              <kbd>
                <kbd>Shift</kbd>+<kbd>Tab</kbd>
              </kbd>{" "}
              to close the dropdown.
            </li>
            <li>
              Sighted mouse users can click the desired option to save the
              selection and close the dropdown.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ComboboxMain;
