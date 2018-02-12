// still need to do: 
// decrease lives correctly (done!)
// tell computer when user has won (done!)
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
            firstWord.checkWord(letterArray, answer.userInput);


            var letterInWord = false;

            for (var i = 0; i < wordSplit.length; i++) {
                if (answer.userInput === wordSplit[i]) {
                      letterInWord = true;
                }
            }

            if (letterInWord) {
                console.log("");
                console.log("Correct!")
            } else {
                guessesLeft--;
                console.log("");
                console.log("Wrong!")
            }

            dashArray = []; 
            firstWord.returnWord(letterArray, dashArray);


            console.log(dashArray); 
            console.log(wordSplit);

            console.log(" ");
            console.log(`${guessesLeft} guesses remaining!`)

            if (dashArray.toString() === wordSplit.toString()) {
                console.log("Winner Winner Chicken Dinner!");
                guessesLeft = 0;
            }

            if (guessesLeft > 0) {
                startGame();
            } else {
                console.log("Next word: ")
                // reset function
            }
        });
;}

initializeGame();
startGame();







