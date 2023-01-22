#!/usr/bin/node
// use of var and let

var adult = true;

if (adult) {
	var myName = "Ezekiel";
	let age = 99;
	console.log("Shhh, this is a secret!");
}

console.log(myName);
// Ezekiel

console.log(age);
// This causes an error because of the scope of the age variable
