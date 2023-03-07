// Variable Declaration
let computerSelection; 
let playerSelection;
let roundWinner;

// Function to Obtain Computer's Choice 
function getComputerChoice() {

    let getRandomNumber = Math.floor(Math.random() * 3);
    if (getRandomNumber == 0) {
        return computerSelection = "rock";
    }
    else if (getRandomNumber == 1) {
        return computerSelection = "paper";
    }
    else {
        return computerSelection = "scissors";
    }
}

//Function to  Obtain player's choice 
function getPlayerChoice () {
   let playerInput = prompt("Please select your weapon: rock, paper, or scissors.");
   return playerInput = playerInput.toLowerCase();
}

// One Game Round
function playRound(computerSelection, playerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock") {
        return roundWinner = "Tie";
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return roundWinner = "Player wins!";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        return roundWinner = "Computer wins!";
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return roundWinner = "Computer wins!";
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        return roundWinner = "Tie";
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return roundWinner = "Player wins!";
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return roundWinner = "Player wins!";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return roundWinner = "Computer wins!";
    }
    else if (computerSelection == "scissors" && playerSelection == "scissors") {
        return roundWinner = "Tie";
    }

}


// // Five Rounds of Game 
// let gamePlayed = 5;
// let computerWins = 0;
// let playerWins = 0;

// function game() {
//     for (let i = 0; i < gamePlayed; i++) {
//         computerSelection = getComputerChoice();
//         playerSelection = getPlayerChoice();
//         roundWinner =  playRound(computerSelection, playerSelection);
//         console.log(roundWinner);

//         if(roundWinner == "Computer wins!") {
//             computerWins++;
//         }
//         else if(roundWinner == "Player wins!") {
//             playerWins ++;
//         }
//     }
// }


// Calculate the Winner after 5 rounds
let finalWinner;
function getWinner (computerWins, playerWins) {
    if (computerWins > playerWins) {
        return finalWinner = "Computer Won after 5 rounds";
    }
    else if (computerWins < playerWins) {
        return finalWinner = "Player Won after 5 rounds";
    }
    else if (computerWins = playerWins) {
        return finalWinner = "Tied game after 5 rounds";
    }
}


// // Game Execution 
game();
getWinner(computerWins, playerWins);
console.log(finalWinner);
