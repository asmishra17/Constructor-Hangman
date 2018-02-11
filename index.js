// global variables
var Word = require("./word.js");

// user input
var userInput = process.argv[2];

// array of words
var wordsArray = ["cheese", "danish", "potatoes", "cornbread", "burrito", "ramen", "sushi", "cupcake"];

// choosing from array
var chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

// splitting word string into array
var wordSplit = chosenWord.split("");

// array for letter objects
var letterArray = [];

// array to show dashes and correctly guessed letters
var dashArray = [];











