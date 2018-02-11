// global variables

var Letter = require("./letter.js");
var wordsArray = ["kanye west", "yeezus", "graduation", "late registration", "watch the throne", "college dropout", "life of pablo"];
var word = "tesla" // random word

var newWord = word.split("");
//console.log(newWord); // success

var letterArray = [];
for (i = 0; i < newWord.length; i++) {
    // creating letter objects for each letter in word
    new Letter (newWord[i], false)
    letterArray.push(new Letter (newWord[i], false));
}

//var letterArray = [];

//var test0 = new Letter (newWord[0], false);
//var test1 = new Letter (newWord[1], false);
//var test2 = new Letter (newWord[2], false);

//letterArray.push(test0);
//letterArray.push(test1);
//letterArray.push(test2);

console.log(letterArray);

function Word () {
    this.letter = function () {
        for (i = 0; i < newWord.length; i++) {
            var test = new Letter (newWord[i], false);
        }
    };
    // needs to run Letter function on each letter in word
    this.returnWord = function () { 
        // returns a string representing the word
        // call the returnCharacter function on each letter object
        // concatenate everything together   
    };
    this.checkWord = function () {
        // takes a character as an argument
        // calls checkCharacter on each letter object
    }
}

