let playerScore = 0;
let computerScore = 0;
let draws = 0;

let playerWinRound = "Player wins!";
let computerWinRound = "Computer Wins!";
let playerWinsGame = "Play has won the game, congrats!";
let computerWinsGame = "Computer has won the game, congrats!";

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

  if (playerSelection === "" || playerSelection === null) {
    console.log("Invalid input. Please enter rock, paper, or scissors")
  }
  else if (playerSelection === computerSelection) {
    return `Draw! Both players picked ${playerSelection}`;
    draws++
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerWinRound + " Rock beats scissors!";
    playerScore++
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return playerWinRound + " Paper beats rock!";
    playerScore++
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerWinRound + " Scissors beats paper!";
    playerScore++
  }
  else {
    return computerWinRound + ` ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`;
    computerScore++
  }
}


function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors to start the game").toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

  }
}
  



console.log( game() );
