#!/usr/bin/node

class Publication {
	constructor(title, author, pubDate) {
		this.title = title;
		this.author = author;
		this.pubDate = pubDate;
	}

	print() {
		console.log(`
		title: ${ this.title }
		By: ${ this.author }
		${ this.pubDate }
			`);
	}
}

class Book extends Publication {
	constructor(bookDetails) {
		super(
			bookDetails.title,
			bookDetails.author,
			bookDetails.pubDate
		);
		this.publisher = bookDetails.publisher;
		this.ISBN = bookDetails.ISBN;
	}

	print() {
		super.print();
		console.log(`
		publisher: ${ this.publisher }
		ISBN: ${ this.ISBN }
			`);
	}
}

class BlogPost extends Publication {
	constructor(title, author, pubDate, URL) {
		super(
			title,
			author,
			pubDate
		);
		this.URL = URL;
	}

	print() {
		super.print();
		console.log(this.URL);
	}
}


var HTGTD = new Book({
	title: "How to get things done",
	author: "Richard Templar",
	pubDate: "October 2019",
	publisher: "Pearson Education Limited",
	ISBN: "978-0-273-72556-5"
});

HTGTD.print();

var forAgainstLet = new BlogPost(
	"For and against let",
	"Kyle Simpson",
	"October 27, 2014",
	"https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
