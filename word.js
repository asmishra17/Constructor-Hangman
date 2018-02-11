// global variables
var userInput = process.argv[2];
var Letter = require("./letter.js");
var wordsArray = ["kanyewest", "yeezus", "graduation", "lateregistration", "watchthethrone", "collegedropout", "lifeofpablo"];
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];

var newWord = word.split("");

var letterArray = [];
for (i = 0; i < newWord.length; i++) {
    // creating letter objects for each letter in word
    new Letter (newWord[i], false)
    letterArray.push(new Letter (newWord[i], false));
}

//console.log(letterArray);

var dashArray = [];

for (j = 0; j < letterArray.length; j++) {
    dashArray.push(letterArray[j].returnCharacter());
}

// console.log(dashArray.join(" "));

for (k = 0; k < letterArray.length; k++) {
    console.log(userInput);
    console.log(letterArray[k]);
    letterArray[k].checkCharacter(userInput);
}

function Word () {
    this.letter = function () {
        for (i = 0; i < newWord.length; i++) {
            letterArray.push(new Letter (newWord[i], false));
        }
    };
    // runs Letter constructor on each letter in word
    this.returnWord = function () { 
        // call the returnCharacter function on each letter object
        for (j = 0; j < letterArray.length; j++) {
            dashArray.push(letterArray[j].returnCharacter());
        }
        // concatenate everything together
        console.log(dashArray.join(" "));   
    };
    this.checkWord = function (userInput) {
        // takes a character as an argument
        // calls checkCharacter on each letter object
    }
}

