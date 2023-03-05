#!/usr/bin/env node
// Illustrates the use of prototypal class definition
function Person(firstname, lastname) {
	Person.prototype.firstname = firstname;
	Person.prototype.lastname = lastname;
	Person.prototype.greet = function(person) {
		console.log(`Hello ${ person.firstname }`);
	}
}
person1 = new Person('Comfort', 'Bassey');
person1.firstname
person2 = new Person('Victoria', 'Bassey');
person1.greet(person2);
