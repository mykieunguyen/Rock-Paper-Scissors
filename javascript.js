// Function to Obtain Computer's Choice 
function getComputerChoice() {
    let getRandomNumber = Math.floor(Math.random() * 3);
    let computerSelection; 

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
console.log(getComputerChoice());