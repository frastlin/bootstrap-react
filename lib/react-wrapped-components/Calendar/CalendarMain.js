import React from "react";
import DatePicker from "./DatePicker/DatePicker";
/* Directions for Accessible Date Pickers

1. Import the general DatePicker object from "./DatePicker/DatePicker.js".

2. Add a <DatePicker> element declaration, and make sure that all of the required attributes are properly set within that element.
*/

let $A = window.AccDC;

class CalendarMain extends React.Component {
  render() {
    return React.createElement("div", {
      id: "pg-calendar"
    }, React.createElement("div", {
      className: "hd"
    }, React.createElement("h3", null, React.createElement("span", null, " Accessible Calendar Picker"))), React.createElement("div", {
      className: "intro highlight"
    }, React.createElement("p", null, "A calendar picker control simplifies the task of selecting dates by rendering a miniature calendar.")), React.createElement("div", {
      className: "intro tal demo-block"
    }, React.createElement("div", {
      class: "insertCalendar"
    }, React.createElement(DatePicker, {
      label: "Your Birthday:",
      inputId: "date",
      inputName: "bd",
      triggerId: "dateLnk",
      readOnly: "readonly",
      required: "required",
      config: {
        callback: function (event, DC, inputElement) {
          // Perform a custom callback when a date is activated from the calendar instead of using the default module functionality.
          // event is the event object that was passed to this callback, may be either from onClick or onKeyDown or onKeyUp.
          // DC is the current calendar DC object instance in the AccDC API (window.AccDC).
          // DC.date is the Date instance object for the activated date when chosen.
          // inputElement is the intended target element for the date string.
          inputElement.value = DC.formatDate(DC); // Close the calendar after saving the formatted date string as desired.

          DC.close(); // Set focus to the input field to ensure intuitive keyboard accessibility.

          inputElement.focus(); // Now that a new date has been selected, clear the second input field so it can't include a stored value by mistake.
          // Gets the input element with id="party"

          $A.getElement("party").value = ""; // Now dynamically set a disabled date range for the second calendar using the newly saved date as the starting point.
          // Get a reference to the second calendar's DC object using the 'triggerId' of that element as the reference within AccDC.

          var partyDC = $A("partyLnk"); // Set a new initial Date instance for Calendar2 (Party Date)
          // Starts with the initial reference to reflect the recently chosen date for Birthday.

          partyDC.initialDate = new Date(DC.date.getFullYear(), DC.date.getMonth(), DC.date.getDate()); // Now set a Date instance as the minimum to start a disabled date range, using partyDC.initialDate as the starting point with -7 days as the offset.

          partyDC.minDate = new Date(DC.date.getFullYear(), DC.date.getMonth(), DC.date.getDate() + -7); // Set a Date instance as the maximum to end a disabled date range, using partyDC.initialDate as the starting point with 7 days ahead as the offset.

          partyDC.maxDate = new Date(DC.date.getFullYear(), DC.date.getMonth(), DC.date.getDate() + 7); // Now, set all of these variables within Calendar2 to configure it without opening it.

          partyDC.presetDate(partyDC); // Now make the second calendar actionable since it was initially disabled when first initialized.

          partyDC.setDisabled(false);
        }
      }
    })), React.createElement("div", {
      class: "insertCalendar"
    }, React.createElement(DatePicker, {
      label: "Party Date:",
      inputId: "party",
      inputName: "pd",
      triggerId: "partyLnk",
      readOnly: "readonly",
      disabled: "disabled"
    }))), React.createElement("div", {
      className: "intro tal keyboard"
    }, React.createElement("p", null, "The calendar is keyboard accessible:"), React.createElement("ul", null, React.createElement("li", null, "Set focus to the input field to automatically open the calendar, focus will remain on the input field."), React.createElement("li", null, "When the input has focus, press the", React.createElement("kbd", {
      className: "down"
    }, "Down"), " arrow to set focus on the current date within the calendar."), React.createElement("li", null, "Press the ", React.createElement("kbd", {
      className: "left"
    }, "Left"), " and", React.createElement("kbd", {
      className: "right"
    }, "Right"), " arrow keys to navigate the row by week day."), React.createElement("li", null, "Press the ", React.createElement("kbd", {
      className: "home"
    }, "Home"), " and", React.createElement("kbd", {
      className: "end"
    }, "End"), " keys to jump to the beginning or end of the current row."), React.createElement("li", null, "Press the ", React.createElement("kbd", {
      className: "up"
    }, "Up"), " and", React.createElement("kbd", {
      className: "down"
    }, "Down"), " arrow keys to navigate between weeks on the same week day."), React.createElement("li", null, "Press the ", React.createElement("kbd", null, "PageDown"), " and ", React.createElement("kbd", null, "PageUp"), " keys to navigate backwards or forwards by month."), React.createElement("li", null, "Press", React.createElement("kbd", null, React.createElement("kbd", null, "Alt"), "+", React.createElement("kbd", null, "PageDown")), "and", React.createElement("kbd", null, React.createElement("kbd", null, "Alt"), "+", React.createElement("kbd", null, "PageUp")), "to navigate backwards or forwards by year."), React.createElement("li", null, "Press the ", React.createElement("kbd", null, "Enter"), " key to activate the selected date."), React.createElement("li", null, "Press ", React.createElement("kbd", null, "Escape"), " to close the calendar without making a selection."), React.createElement("li", null, "Mouse users can click the desired date buttons as usual."))));
  }

}

export default CalendarMain;
//# sourceMappingURL=CalendarMain.js.map