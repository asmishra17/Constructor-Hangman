// still need to do: 
// decrease lives correctly
// tell computer when user has won
// restart function


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
var dashArray = []; 

var firstWord = new Word();
var guessesLeft = 10;

function initializeGame () {
    console.log("Hangman Game");

    firstWord.returnLetters(wordSplit, letterArray);
    firstWord.returnWord(letterArray, dashArray)
};

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
            guessesLeft--;
            firstWord.checkWord(letterArray, answer.userInput);
            firstWord.returnWord(letterArray, dashArray);

            console.log(" ");
            console.log(`${guessesLeft} guesses remaining!`)
            console.log(wordSplit);

            if (dashArray === wordSplit) {
                console.log("You win! Next word:")
            }

            if (guessesLeft > 0) {
                startGame();
            } else {
                console.log("You lose :( Next word:")
            }
        });
;}

initializeGame();
startGame();








