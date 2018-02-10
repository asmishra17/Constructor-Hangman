var Letter = require("./letter.js");

function Word () {
    this.letter = []; // needs to run Letter function on each letter in word
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