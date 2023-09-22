// Initialize scores
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// Define win messages
const playerWinRound = "Player wins!";
const computerWinRound = "Computer Wins!";
const playerWinsGame = "Player has won the game, congrats!";
const computerWinsGame = "Computer has won the game, congrats!";

// Function to get computer's choice
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

// Function to play a single round
function playRound(playerSelection, computerSelection) {
// Check for invalid input
  if (playerSelection === "" || playerSelection === null) {
    console.log("Invalid input");
  }
  // Check for a draw
  else if (playerSelection === computerSelection) {
    return `Draw! Both players picked ${playerSelection}`;
  }
  // Check for player win
  else if (
    playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper"
  ) {
    playerScore++;
    return playerWinRound + ` ${playerSelection.charAt(0).toUpperCase() + 
    playerSelection.slice(1)} beats ${computerSelection}!`;
  }
  // Computer win
  else {
    computerScore++;
    return computerWinRound + ` ${computerSelection.charAt(0).toUpperCase() + 
    computerSelection.slice(1)} beats ${playerSelection}!`;
  }
}

// Main game function
function game() {
  // Loop to play 5 rounds
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors to start the game").toLowerCase();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result); 
    console.log("Player score is: " + playerScore);
    console.log("Computer score is: " + computerScore);
  }
  // Determine game winner
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
  
// Start the game
game();


// let func = (arg1, arg2, ..., argN) => expression; 