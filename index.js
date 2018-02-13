//global variables
var Word = require("./word.js");
var inquirer = require("inquirer");

//array of words
var wordsArray = ["cheese", "danish", "potatoes", "cornbread", "burrito", "ramen", "sushi", "cupcake", "cookie", "steak", "chorizo"];

//choosing from array
var chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

//splitting word string into array
var wordSplit = chosenWord.split("");

//array for letter objects
var letterArray = [];
//array for dashes
var dashArray = []; 

//using the Word constructor
var firstWord = new Word();
var guessesLeft = 10; 

function initializeGame () {
    console.log("Hangman Game");
    chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    wordSplit = chosenWord.split("");

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
                console.log(""); //these blanks are just here for spacing. I didn't like everything smushed together!
                console.log("Correct!")
            } else {
                guessesLeft--;
                console.log("");
                console.log("Incorrect!")
            }

            //clearing the array
            dashArray = []; 
            firstWord.returnWord(letterArray, dashArray);

            console.log(`${guessesLeft} guesses remaining`)
            console.log("");

            if (dashArray.toString() === wordSplit.toString()) {
                console.log("Winner Winner Chicken Dinner!");
                console.log("");
                guessesLeft = 0;
            }

            if (guessesLeft > 0) {
                startGame();
            } else {
                //reset "function"
                console.log("Next word: ")
                console.log("");
                guessesLeft = 10;
                dashArray = [];
                letterArray = [];
                initializeGame();
                startGame();
            }
        });
};

initializeGame();
startGame();







