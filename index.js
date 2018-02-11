// global variables
var Word = require("./word.js");
var inquirer = require("inquirer");

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

var firstWord = new Word();

function initializeGame () {
    console.log("Hangman Game");
    firstWord.returnLetters(wordSplit, letterArray);
    firstWord.returnWord(letterArray, dashArray)
};

initializeGame();
startGame();

function startGame () {
    inquirer 
        .prompt ([
            {
                type: "input",
                message: "Guess a letter:",
                name: "userInput"
            }
        ])
        .then(function(answer) {
            firstWord.checkWord(letterArray, answer.userInput);
        });
;}









