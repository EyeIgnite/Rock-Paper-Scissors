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

  
}

let playerWinRound = "Player wins!";
let computerWinRound = "Computer Wins!";
let draw = `Draw! Both players picked ${playerSelection}`;

const playerSelection = prompt("Rock, Paper or Scissors to start the game").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));