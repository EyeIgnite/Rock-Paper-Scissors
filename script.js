let playerScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return 0; // rock
  }
  else if (randomChoice === 1) {
    return 1; // paper
  }
  else {
    return 2; // scissors
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return draw;
  }
  else if (playerSelection === 1 && computerSelection === 3) {
    return playerWinRound + " Rock beats scissors!";
  }
  else if (playerSelection === 2 && computerSelection === 1) {
    return playerWinRound + " Paper beats rock!";
  }
  else if (playerSelection === 3 && computerSelection === 2) {
    return playerWinRound + " Scissors beats paper!"; 
  }
  else {
    return computerWinRound
  }
}

const playerSelection = prompt("Enter 0 for rock, 1 for paper or 2 for scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log( playRound(playerSelection, computerSelection) );

var playerWinRound = "Player wins!";
var computerWinRound = "Computer Wins!";
var draw = `Draw! Both players picked ${playerSelection}`;