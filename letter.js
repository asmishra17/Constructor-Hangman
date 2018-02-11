var userInput = process.argv[2];
// maybe try and make this more specific

function Letter (character, guessed) {
    this.character = character; // string
    this.guessed = guessed; // boolean
    this.returnCharacter = function () {
        if (this.guessed === true) {
            return character;
        } else {
            return "_";
        } // else if to deal with spaces
    };
    this.checkCharacter = function (userInput) {
        if (userInput === this.character) {
            console.log(this.character);
            this.guessed = true;
        } else {
            console.log("_");
            this.guessed = false;
        }
    }
}

module.exports = Letter;
//var a = new Letter ("a", false);
//a.checkCharacter(userInput);


