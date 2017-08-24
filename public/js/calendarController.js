(function(exports){

	function CalendarController(moment, weekStartsOnMonday) {
		this.moment = moment;
		this.weekStartOnMonday = weekStartsOnMonday;
		this.firstDayNum = 0 + Number(weekStartsOnMonday);
		this.lastDayNum = 6 + Number(weekStartsOnMonday);
	}
	
	CalendarController.prototype = 
	{
		getCalendarViewDataByTimestamp : function (timestamp) {
			var weekNum = this.moment.unix(timestamp).week();
			var weekdays = this.createWeekViewDataByWeekNum(weekNum);
			var titleData  = this.createCalendarTitleDataByWeeknum(weekNum);
			return {
				titleData: titleData,
				weekdays: weekdays
			};
		},

		createDayViewDataByTimestamp : function (timestamp, lastDay) {
			var day = this.moment.unix(timestamp); 
			return {
				isLastWeekDay: lastDay,
				dayName: day.format('dddd'),
				date: day.format('DD')
			};
		},

		createWeekViewDataByWeekNum : function (weekNum) {
			var result = [];
			var timestamp = 0;
			for (var i = this.firstDayNum; i <= this.lastDayNum; i++) {
				timestamp = this.moment().week(weekNum).day(i).unix();
				result.push(this.createDayViewDataByTimestamp(timestamp, (i === this.lastDayNum)));
			}
			return result;
		},

		createCalendarTitleDataByWeeknum : function(weekNum){
			var week = this.moment().week(weekNum);
			var lastDay = week.day(this.lastDayNum);
			var firstDay = week.day(this.firstDayNum);
			return {
				firstWeekDayDate: firstDay.format('DD'),
				lastWeekDayDate: lastDay.format('DD'),
				monthName: lastDay.format('MMMM'),
				year: lastDay.format('YYYY')
			};
		}
	};
	
	exports.CalendarController = CalendarController;
	

})(typeof exports === 'undefined' ? this.CalendarController = {}:exports);

