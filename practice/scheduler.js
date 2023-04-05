#!/usr/bin/env node
"use strict"
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

	let dayStartObj = time(...dayStart.split(":"));
	let dayEndObj = time(...dayEnd.split(":"));
	let startTimeObj = time(...startTime.split(":"));
	let durationTimeObj = time(Math.floor(durationMinutes / 60), durationMinutes % 60);

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
var outcomes = [
	scheduleMeeting("7:00", 15),
	scheduleMeeting("07:15", 30),
	scheduleMeeting("7:30", 30),
	scheduleMeeting("11:30", 60),
	scheduleMeeting("17:00", 45),
	scheduleMeeting("17:30", 30),
	scheduleMeeting("18:00", 15)
];
for (let outcome of outcomes){
	console.log(outcome);
}
// console.log(`End time is: ${ endHour }:${ endMinute }`); learn print formatting
