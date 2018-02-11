var Letter = require("./letter.js");

function Word () {
    // runs Letter constructor on each letter in word
    this.returnLetters = function (wordSplit, letterArray) {
        for (i = 0; i < wordSplit.length; i++) {
            letterArray.push(new Letter (wordSplit[i], false));
        }
    };
    this.returnWord = function (letterArray, dashArray) { 
        // call the returnCharacter function on each Letter object
        for (j = 0; j < letterArray.length; j++) {
            dashArray.push(letterArray[j].returnCharacter());
        }
        // concatenate everything together
        console.log(" "); 
        console.log(`Current Word: ${dashArray.join(" ")}`);
        console.log(" ");   
    };
    this.checkWord = function (letterArray, userInput) {
        // calls checkCharacter on each letter object
        for (k = 0; k < letterArray.length; k++) {
            letterArray[k].checkCharacter(userInput);
        }
    }
}

module.exports = Word;