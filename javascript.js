// Variable Declaration
let computerSelection; 
let playerSelection;
let roundWinner;


let computerWins = 0;
let playerWins = 0;
let finalWinner;

// Query Selecting Variables 
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

let computerImage = document.querySelector('.computerChoiceImage');
let computerScore = document.querySelector('.computerScoreTally');
let playerImage = document.querySelector('.playerChoiceImage');
let playerScore = document.querySelector('.playerScoreTally');

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


// Function to Display Computer Choice onto Computer Image
function getComputerImage(computerSelection) {
    if (computerSelection === 'rock') {
        computerImage.src = './images/rock.png';
    }
    else if (computerSelection === 'paper') {
        computerImage.src = './images/paper.png';
    }
    else if(computerSelection === 'sicssors') {
        computerImage.src = './images/scissors.png';
    }
}

// Function to perform one round of game 
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

// Function to determine if there is a final winner
function game(roundWinner) {
    if (computerWins !== 5 || playerWins !== 5) {
        if(roundWinner == "Computer wins!") {
            computerWins++;
        }
        else if(roundWinner == "Player wins!") {
            playerWins ++;
        }
    }
    if (computerWins === 5) {
        alert("Player has been defeated")
        computerWins = 0;
        playerWins = 0;
        computerImage.src = './images/question.png';
        playerImage.src = './images/question.png';
        

    }    
    else if (playerWins === 5) {
        alert("Computer has been defeated");
        computerWins = 0;
        playerWins = 0;
        computerImage.src = './images/question.png';
        playerImage.src = './images/question.png';
    }
}


// UI 

// Rock is clicked
rockButton.addEventListener('click', () => {
    getComputerChoice();
    getComputerImage(computerSelection);
    playerImage.src = "./images/rock.png";
    playerSelection = 'rock';
    playRound(computerSelection,playerSelection);
    console.log(roundWinner);
    computerScore.innerHTML = `Computer: ${computerWins}`;
    playerScore.innerHTML = `Player: ${playerWins}`;
    game(roundWinner);
    computerScore.innerHTML = `Computer: ${computerWins}`;
    playerScore.innerHTML = `Player: ${playerWins}`;
});

// Paper is clicked
paperButton.addEventListener('click', () => {
    getComputerChoice();
    getComputerImage(computerSelection);
    playerImage.src = "./images/paper.png";
    playerSelection = 'paper';
    playRound(computerSelection,playerSelection);
    console.log(roundWinner);
    computerScore.innerHTML = `Computer: ${computerWins}`;
    playerScore.innerHTML = `Player: ${playerWins}`;
    game(roundWinner);
    computerScore.innerHTML = `Computer: ${computerWins}`;
    playerScore.innerHTML = `Player: ${playerWins}`;
});

// Scissors is clicked
scissorsButton.addEventListener('click', () => {
    getComputerChoice();
    getComputerImage(computerSelection);
    playerImage.src = "./images/scissors.png";
    playerSelection = 'scissors';
    playRound(computerSelection,playerSelection);
    console.log(roundWinner);
    computerScore.innerHTML = `Computer: ${computerWins}`;
    playerScore.innerHTML = `Player: ${playerWins}`;
    game(roundWinner);
    computerScore.innerHTML = `Computer: ${computerWins}`;
    playerScore.innerHTML = `Player: ${playerWins}`;
});

