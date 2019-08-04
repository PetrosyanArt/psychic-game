var lettersGuessed = [];
var guessesLeft = 9;
var wins = 0;
var loses = 0;


//generate random letters
var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
);

//capture user's keyboard input and make lowercase
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    addLetter(keyPress);

}

//function to catch repeat letters and/or add players guess to lettersGuessed string
function addLetter (usersKeypress) {

        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);

        showLettersGuessed();
        guessMatch(usersKeypress);
    }


//show letters guessed in browser
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    if (character === computerGuess) {

       wins = wins + 1;
        showWins();

    } else if (guessesLeft === 0) {
        loses = loses + 1;
        showLoses();
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

//function to show wins
function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

//function to show loses
function showLoses() {
    document.getElementById("numLoses").innerHTML = loses;
}

//function to show guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 9;
    showGuessesRemaining();
}

function startGame() {
    showGuessesRemaining();
    showWins();
    showLoses();
}



startGame();