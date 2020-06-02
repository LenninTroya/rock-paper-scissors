// player selection
var playerSelection = prompt("Choose your weapon")

// computer selection
var computerSelection = Math.floor(Math.random() * 3);

// indexing to choices
var playerSelection = playerSelection.toLowerCase();
var choice = ["rock", "paper", "scissors"];
var computerIndexing = choice[computerSelection];
var playerIndexing = choice.indexOf(playerSelection);


// indexing to results
var table = [
    ['t', 'c', 'u'],
    ['u', 't', 'c'],
    ['c', 'u', 't']
];
var results = table[playerIndexing][computerSelection];
var winner = {
    "t": "it's a tie!",
    "u": "user wins!",
    "c": "computer wins!"

};



// the game
function game() {
    console.log("You've chosen " + playerSelection + " and the computer chose " + computerIndexing);
console.log(winner[results]);

}

game();
