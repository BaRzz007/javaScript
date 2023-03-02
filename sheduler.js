#!/usr/bin/env node
// shedules a meeting within the work day
const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
	let time = function(hour, minute){
		var publicApi = {
			hour: Number(hour),
			minute: Number(minute)
		};
		return publicApi;
	}

	dayStartObj = time(...dayStart.split(":"));
	dayEndObj = time(...dayEnd.split(":"));
	startTimeObj = time(...startTime.split(":"));
	durationTimeObj = time(Math.floor(durationMinutes / 60), durationMinutes % 60);

	if (startTimeObj.hour < dayStartObj.hour){
		return false;
	}
	else if (startTimeObj.hour == dayStartObj.hour){
		if (startTimeObj.minute < dayStartObj.minute){
			return false;
		}
	}

	let endMinute = 0;
	let endHour = 0;
	endMinute = endMinute + startTimeObj.minute + durationTimeObj.minute;
	if (endMinute >= 60){
		endHour = endHour + 1;
		endMinute = endMinute % 60;
	}
	endHour = endHour + startTimeObj.hour + durationTimeObj.hour;
	if (endHour > dayEndObj.hour){
		return false;
	}
	else if (endHour == dayEndObj.hour){
		if (endMinute > dayEndObj.minute){
			return false;
		}
	}
	return true;
}
var outcome = scheduleMeeting("08:00", 500);
console.log(outcome);
// console.log(`End time is: ${ endHour }:${ endMinute }`); learn print formatting
