//Author: Nathan Byarley
//Date: ...
//Project: week 2 - character creation
//Class: Scalable Data Infrastructures
//Term: 1305

//Variables
var totalDogs = 10;
var petShop = "Dogs Haven";
var dogName = "\"Benny\"";
var dogTypes = ["Beagle", "Mastiff", "Bulldog", "Pitbull"];
var currentTime = 800;
var timeWaiting = 10


//dog search function
var dogSearch = function(listing) {
	if (listing !== 6) {
		console.log("This place sure is big!");
 
	} else {
		console.log("When i find a dog i like, i think i will name him " + dogName);
	};
};	

//Boolean function determine if business is open
//return the result
var dogHavenOpen = function(open) {
	var result;
	var openTime = 700;
	
	if (openTime <= open) {
		result = true;
	} else {
		result = false;
	};
	return result;
}

//impatiently waiting for assistance i constantly
//checked my watch, then returned totalTime.
var checkTime = function(minutes) {
	var totalTime;
	var count = 2;
	
	while (minutes >= count) {
		console.log("while waiting for assistance, I checked my watch at " + count + " minutes");
		count = count + 2;
		totalTime = (count / 2) -1;
	}
	return totalTime;
}

//searching for the Dogs Haven pet shop
//if pet shop is not dogsHaven.. keep looking
if(petShop != "Dogs Haven") {
	console.log("I need to find the " + petShop + " pet shop. ");
} else {
	console.log("Excellent i have found the " + petShop + " pet shop!");
};

//output to screen once pet shop is found
console.log("I have been looking all over town for this place");

//calling dogSearch function
dogSearch(6);


//output to screen current time
console.log("I sure hope this place is open, it is currently " + currentTime + " AM so they should be");

//nesting dogHavenOpen function within an
//if statement outputting the true or false result
if (dogHavenOpen(currentTime) === true) {
	console.log("Great they are open!");
} else {
	console.log("Dang, they are not Open");
};

//output to screen the checkTime function
console.log("for a total of " + checkTime(timeWaiting) + " minutes");








