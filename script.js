function getComputerChoice() {
  const randomChoice = Math.random() * 3;

  if (randomChoice <= 1) {
    return 1; // rock
  }
  else if (randomChoice <= 2) {
    return 2; // paper
  }
  else {
    return 3; // scissors
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
}

let playerWinRound = "Player wins!";
let computerWinRound = "Computer Wins!";
let draw = `Draw! Both players picked ${playerSelection}`;

const playerSelection = prompt("Rock, Paper or Scissors to start the game").toLowerCase();
const computerSelection = getComputerChoice();
console.log( playRound(playerSelection, computerSelection) );