var Word = require("./word.js");
// global variables

// user input
var userInput = process.argv[2];

// array of words
var wordsArray = ["kanyewest", "yeezus", "graduation", "lateregistration", "watchthethrone", "collegedropout", "lifeofpablo"];

// choosing from array
var chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

// splitting word string into array
var wordSplit = chosenWord.split("");

// array for letter objects
var letterArray = [];

// array to show dashes and correctly guessed letters
var dashArray = [];

var test = new Word();
console.log(test);
test.returnLetters(wordSplit, letterArray);
console.log(letterArray);










