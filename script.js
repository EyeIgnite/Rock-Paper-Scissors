let playerScore = 0;
let computerScore = 0;

const playerWinRound = "Player wins!";
const computerWinRound = "Computer Wins!";
const playerWinsGame = "Player has won the game, congrats!";
const computerWinsGame = "Computer has won the game, congrats!";

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

function getPlayerChoice() {
  let playerInput;

  while (true) {
    const userInput = prompt("Enter (rock, paper, or scissors to start the game):");

    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
      return playerInput;
    }
    else {
      console.log("Invalid input, please enter a valid choice!");
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "" || playerSelection === null) {
    console.log("Invalid input");
  }
  else if (playerSelection === computerSelection) {
    return `Draw! Both players picked ${playerSelection}`;
  }
  else if (
    playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper"
  ) {
    playerScore++;
    return playerWinRound + ` ${playerSelection.charAt(0).toUpperCase() + 
    playerSelection.slice(1)} beats ${computerSelection}!`;
  }
  else {
    computerScore++;
    return computerWinRound + ` ${computerSelection.charAt(0).toUpperCase() + 
    computerSelection.slice(1)} beats ${playerSelection}!`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter rock, paper, or scissors to start the game");
    if (playerSelection !== null) {
      playerSelection.toLowerCase();
    }
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
  
game();

