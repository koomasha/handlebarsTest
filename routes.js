var Router = require('express').Router();
var moment = require('moment');
var CalendarController = require('./public/js/calendarController.js').CalendarController;

Router.get('/', function(req, res){
	var calendarController = new CalendarController(moment, true);
	var calendarObj =  calendarController.getCalendarViewDataByTimestamp(moment().unix());
	var controllerObject = {};

	Object.keys(calendarController).forEach(function (key) {
		calendarObj.controllerData.key = calendarController.key;
	});
	calendarObj.controllerData = controllerData
	res.render('calendar', calendarObj);
}); 

module.exports = Router;