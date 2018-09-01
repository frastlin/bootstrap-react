strap.setCalendar(this, {
  overrides: {
    // Optionally set auto positioning, values reflect those within the AccDC API. 0 = disabled
    autoPosition: 0,
    // Uncomment to combine the year and month selectors
    // condenseYear: true,
    // Switch the behaviour when the PageUp or PageDown keys are pressed to a "natural" behaviour (PageUp goes to previous month, PageDown goes to next month)
    pageUpDownNatural: true,
    // Uncomment to append a "dayToday" CSS class to the current day cell element - this allows styling to be targeted to this specific element
    // highlightToday: true,
    // Fill in the day cells outside of the current month so that the calendar grid is always filled with day cells
    drawFullCalendar: true,
    // Uncomment to run custom functions at the end of the code within the following component functions. Receives a single parameter "dc", which provides access to the Datepicker object.
    // runBefore: function (dc) {
    // 	console.log('runBefore');
    // 	console.log(dc);
    // },
    // runAfterClose: function (dc) {
    // 	console.log('runAfterClose');
    // 	console.log(dc);
    // },
    // Uncomment to override the character used on the month / year change buttons
    // leftButtonYearText: '&lt;',
    // rightButtonYearText: '&gt;',
    // leftButtonMonthText: '&lt;',
    // rightButtonMonthText: '&gt;',
    // Uncomment to set specific start / end boundaries of a date range. Can be Date objects (absolute boundaries), or integers (relative boundaries)
    // minDate: (new Date(1987, 4, 19)),
    // maxDate: 28,
    // Set a specific date string format to be used when setting the selected value into the calendar input box
    inputDateFormat: "dddd MMMM D, YYYY",
    // Set a specific date string format to be read out to screen reader users
    audibleDateFormat: "D, dddd MMMM YYYY" // Date format announced to screen reader users (Recommended: "Date, Weekday Month Year")
    // Other AccDC API overrides if desired.
  }
});
