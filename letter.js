function Letter (character, guessed) {
    this.character = character; // string
    this.guessed = guessed; // boolean
    this.returnCharacter = function () {
        if (this.guessed === true) {
            return this.character;
        } else {
            return "_";
        } // else if to deal with spaces
    };
    this.checkCharacter = function (userInput) {
        if (userInput === this.character || this.guessed === true) {
            console.log(this.character);
            // return this.character;
            this.guessed = true;
        } else {
            console.log("_");
            // return "_";
            this.guessed = false;
        }
    }
}

module.exports = Letter;



