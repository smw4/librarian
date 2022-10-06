/*
Build a Library
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
If you’re looking for a challenge, try to create the four classes without using the steps below.
*/

class Media {
	constructor(title /* isCheckedOut, ratings*/) {
		// I'm supposed to comment-out the second two arguments, as they are given default values. But when I do I get "not defined" error.
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = [];
	}
	get title() {
		return this._title;
	}
	get isCheckedOut() {
		return this._isCheckedOut;
	}
	get ratings() {
		// a ratings array of integers
		return this._ratings;
	}

	set isCheckedOut(keytwo) {
		this._isCheckedOut = keytwo;
	} // STEP 5 (NOT SURE ABOUT THIS ONE)

	toggleCheckOutStatus() {
		//change checked out status
		this._isCheckedOut = !this._isCheckedOut; // CC's code "You can use the following syntax to negate the value saved to a boolean."
	}

	getAverageRating() {
		//return the average value of the ratings array. Use the reduce method to find the sum of the ratings array. Divide this sum by the length of the ratings array, and return the result.
	}
	addRating() {
		//a method that takes one argument and uses .push to add it to the end of the ratings array
		//Make sure input is between 1 and 5.
	}
}

class Book extends Media {
	constructor(author, title, pages /*isCheckedOut, ratings*/) {
		super(title /*isCheckedOut, ratings*/);
		this._isCheckedOut;
		this._ratings;
		this._author = author;
		this._pages = pages;
	}
	get author() {
		return this._author;
	}
	//get title() {}
	get pages() {
		return this._pages;
	}
	//get isCheckedOut() {}
	//get ratings() {}
}

class Movie extends Media {
	constructor(director, title, runTime /*isCheckedOut, ratings*/) {
		super(title /*isCheckedOut, ratings*/);
		this._isCheckedOut;
		this._ratings;
		this._director = director;
		this._runTime = runTime;
	}
	get director() {
		return this._director;
	}
	//get title() {}
	get runTime() {
		return this._runTime;
	}
	//get isCheckedOut() {}
	//get ratings() {}
	toggleCheckOutStatus() {
		// Step 14
	}
	getAverageRating() {}
}

class CD extends Media {
	constructor(artist, title, isCheckedOut, ratings, songs) {
		super(title, isCheckedOut, ratings);
		this._artist = artist;
		this._songs = songs;
	}
	get artist() {
		return this._artist;
	}
	//get title () {}
	//get isCheckedOut() {}
	//get ratings() {}
	get songs() {
		return this._songs;
	}
}

//TESTING BOOK
const historyOfEverything = new Book(
	'Bill Bryson',
	'A Short History of Nearly Everything',
	544
);

historyOfEverything.toggleCheckOutStatus(); //Step 16
console.log(historyOfEverything.isCheckedOut); //Step 17

//TESTING MOVIE
const bigFish = new Movie('Tim Burton', 'Big Fish', 120, false, 5);
//console.log(bigFish.ratings);   //ratings works as an integer

//TESTING CD
const Adele19 = new CD('Adele', '19', true, 10, ['Crazy for You', 'Heartache']);
console.log(Adele19.songs);

/*things to note:
- ratings, which is an inherited property of Media allows differing input types across media. A movie ratings can be an integer while a cd's ratings can be an array of strings.
- isCheckedOut returns false even though I've indicated "true" (STATIC helps here?)
    -update: commenting out ''this._isCheckedOut = false;'' in Media constructor, has it working again...
*/

//Extra Credit:
//Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
//Create class called Catalog that holds all of the Media items in our library.
