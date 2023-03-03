#!/usr/bin/env node
// Practising closure
function range(start, end) {
	var list = [];
	if (end === undefined) {
		return function(end) {
			for (let i = start; i <= end; i = i + 1) {
				list.push(i);
			}
			return list;
		};
	}
	else {
		for (let i = start; i <= end; i = i + 1) {
			list.push(i);
		}
	}
	return list;
}

console.log(range(3, 8));

var start3 = range(3);
console.log(start3(5));
