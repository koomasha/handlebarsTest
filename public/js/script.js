document.addEventListener('DOMContentLoaded', function () {
	controller = new CalendarController.CalendarController(moment);
	initPicker(moment().format());
}, false);

function reRenderCalendar(calendarObj, selectedDateTimestamp) {
	document.getElementById('main-wrapper').innerHTML = Handlebars.templates.calendar(calendarObj);
	initPicker(moment.unix(selectedDateTimestamp).format());
}

function initPicker(){
	var picker = new Pikaday({
		field: document.getElementById('datepicker'),
		firstDay: 1,
		showDaysInNextAndPreviousMonths: true,
		enableSelectionDaysInNextAndPreviousMonths: true,
		onSelect: function () {
			var selectedDateTimestamp = picker.getMoment().unix();
			var result = dateController.getCalendarViewDataByTimestamp(selectedDateTimestamp, true);
			reRenderCalendar(result, selectedDateTimestamp);
		}
	});
}