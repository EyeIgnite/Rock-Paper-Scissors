let playerScore = 0;
let computerScore = 0;
let draws = 0;

let playerWinRound = "Player wins!";
let computerWinRound = "Computer Wins!";

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return "rock"; 
  }
  else if (randomChoice === 1) {
    return "paper"; 
  }
  else {
    return "scissors"; 
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return draw;
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerWinRound + " Rock beats scissors!";
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return playerWinRound + " Paper beats rock!";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerWinRound + " Scissors beats paper!"; 
  }
  else {
    return computerWinRound + ` ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`;
  }
}

const playerSelection = prompt("Enter Rock, Paper, or Scissors to start the game").toLowerCase();
let draw = `Draw! Both players picked ${playerSelection}`;
const computerSelection = getComputerChoice();

console.log( playRound(playerSelection, computerSelection) );
