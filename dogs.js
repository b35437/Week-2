//Author: Nathan Byarley
//Date: ...
//Project: week 2 - character creation
//Class: Scalable Data Infrastructures
//Term: 1305

//global Variables
var petShop = "Dogs Haven";
var dogName = "\"Benny\"";
var dogBreed = ["Beagle", "Mastiff", "Bulldog", "Pitbull"];
var dogBreedAmount = [2, 4, 2, 1];
var myDogBreedNumber = 2;
var currentTime = 800;
var timeWaiting = 20;
var ladyConversationOne = "Hello Sir, how may i help you? ";
var ladyConversationTwo = "Great we have a nice selection of pure breed dogs to chose from. ";

////////////////  Start Functions  //////////////////

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
	//local variables
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
	//local variables
	var totalTime;
	var count = 0;
	
	while (minutes >= count) {
		count = count + 5;
		totalTime = (count / 5) - 1;
		
		if (minutes >= count){
			console.log("while waiting for assistance, I checked my watch at " + count + " minutes");
		} else {
			//condition is false return totalTime
			return totalTime;
		}
	}
}

//string function conversation between the lady and i
var talkingToLady = function(conversationOne, conversationTwo) {
	//local variables
	var myResponse = "Yes Ma'am I am looking to buy a dog. "
	var fullConversation = conversationOne + myResponse + conversationTwo;
	
	return fullConversation;
}


//Array function
//loop through the types until my type is chosen
var dogTypes = function(types, numOfTypes) {
	var myType = 2;
	var newTypes;
	var newNumOfTypes;
	
	for (var i = 0; i < types.length; i++) {
		console.log("we currently have " + numOfTypes[i] + " " + types[i]);
	}
	
	types.push("Collie");
	numOfTypes.push(1);
	
	console.log("Oh! we also have " + numOfTypes[i] + " " + types[i]);
	
	
	console.log("I think i will pick the ");
	return types[myType];
}
////////////////////////  End Functions  ///////////////////////


//////////////////////// start output (story) ////////////////////////////

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

//nesting dogHavenOpen function within an (boolean function)
//if statement outputting the true or false result
if (dogHavenOpen(currentTime) === true) {
	console.log("Great they are open!");
} else {
	console.log("Dang, they are not Open");
};

//output to screen the checkTime function (number function)
console.log("for a total of " + checkTime(timeWaiting) + " times");
//checkTime(timeWaiting);

//output the talkingToLday function (string function)
//the conversation between her and I when she gets to the counter
console.log("The Lady finally arrives and says " + talkingToLady(ladyConversationOne, ladyConversationTwo));

//output dog types function (array function)
console.log("the types of dogs that are available are ");
console.log(dogTypes(dogBreed, dogBreedAmount) + " and name him " + dogName);


////////////////////// End Output (story) ////////////////


