var userInput = process.argv[2];
// maybe try and make this more specific

function Letter (character, guessed) {
    this.character = character; // string
    this.guessed = guessed; // boolean
    this.returnCharacter = function () {
        if (guessed) {
            return character;
        } else {
            return "_";
        } // else if to deal with spaces
    };
    this.checkCharacter = function (userInput) {
        if (userInput === character) {
            console.log(character);
            guessed = true;
        } else {
            console.log("_")
            guessed = false;
        }
    }
}

module.exports = Letter;
//var a = new Letter ("a", false);
//a.checkCharacter(userInput);


