function Letter (character, guessed) {
    this.character = character; // string
    this.guessed = guessed; // boolean
    this.returnCharacter = function () {
        if (guessed) {
            console.log(character);
        } else {
            console.log("_");
        }
    };
    this.checkCharacter = function (userInput) {
        if (userInput === character) {
            console.log(character);
        } else {
            console.log("_")
        }
    }
}

