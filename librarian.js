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
	constructor(title, isCheckedOut, ratings) {
		this._title = title;
		this._isCheckedOut = isCheckedOut;
		//this._isCheckedOut = false;
		this._ratings = ratings;
	}
	get title() {
		return this._title;
	}
	get isCheckedOut() {
		return this._isCheckedOut;
	}
	get ratings() {
		return this._ratings;
	}

	toggleCheckOutStatus() {
		//change checked out status
		if ((this._isCheckedOut = false)) {
			this._isCheckedOut = true;
		} else {
			this._isCheckedOut = false;
		}
	}
}

class Book extends Media {
	constructor(author, title, pages, isCheckedOut, ratings) {
		super(title, isCheckedOut, ratings);
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
	constructor(director, title, runTime, isCheckedOut, ratings) {
		super(title, isCheckedOut, ratings);
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
const JATGP = new Book('Roald Dahl', 'James and the Giant Peach', 144, true, [
	'Good',
	'Great',
]);
//console.log(JATGP.isCheckedOut); //isCheckedOut NOT WORKING. Always returns false, even when indicated true


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