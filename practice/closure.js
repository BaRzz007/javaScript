#!/usr/bin/env node
"use strict"
// Practising closure
function range(start, end) {
	var list = [];
	if (end === undefined) {
		return function(end) {
			for (let i = start; i <= end; i++) {
				list.push(i);
			}
			return list;
		};
	}
	else {
		for (let i = start; i <= end; i++) {
			list.push(i);
		}
	}
	return list;
}
module.exports.range = range;

console.log(range(3, 8));
console.log(range(3, 0));

var start3 = range(3);
console.log(start3(5));
var start4 = range(4);
console.log(start4(6));
