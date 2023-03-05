#!/usr/bin/env node
// Illustrates the use of prototypal class definition vs ES6 class system

// Prototypal class
function Person(firstname, lastname) {
	Person.prototype.firstname = firstname;
	Person.prototype.lastname = lastname;
	Person.prototype.greet = function(person) {
		console.log(`Prototypal greeting: Hello ${ person.firstname }!`);
	};
}
// surprisingly, using the 'this' keyword in place of 'Person.prototype' works
person1 = new Person('Comfort', 'Bassey');
person2 = new Person('Victoria', 'Bassey');
person1.greet(person2);

// ES6 class system
class Human {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	greet(person) {
		console.log(`ES6 class greeting: Hello ${ person.firstname }!`);
	}
}

ezekiel = new Human('Ezekiel', 'Bassey');
samuel = new Human('Samuel', 'Bassey');
samuel.greet(ezekiel);
