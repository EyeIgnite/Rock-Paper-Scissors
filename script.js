let playerScore = 0;
let computerScore = 0;
let draws = 0;

let playerWinRound = "Player wins!";
let computerWinRound = "Computer Wins!";
let playerWinsGame = "Player has won the game, congrats!";
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
  }
  else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return playerWinRound + ` ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;
  }
  else {
    computerScore++;
    return computerWinRound + ` ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`;
  }
}


function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors to start the game").toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result); 
    console.log("Player score is: " + playerScore);
    console.log("Computer score is: " + computerScore);
  }
  if (playerScore > computerScore) {
    console.log(playerWinsGame);
  }
  else if (computerScore > playerScore) {
    console.log(computerWinsGame);
  }
  else {
    console.log("The game ended in a draw!");
  }
  
}
  



console.log( game() );
