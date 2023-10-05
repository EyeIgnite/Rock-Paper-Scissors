document.addEventListener("DOMContentLoaded", function() {
let playerScore = 0;
let computerScore = 0;

const playerWinRound = "Player wins!";
const computerWinRound = "Computer Wins!";
const playerWinsGame = "Player has won the game, congrats!";
const computerWinsGame = "Computer has won the game, congrats!";

const choices = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll("button");

const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice")
const text = document.querySelectorAll(".text");
const roundResult = document.querySelector("#round-result");
const userScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#computer-score")

btns.forEach(button => button.addEventListener("click", (e) => {
  const playerSelection = e.target.textContent.toLowerCase();
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  playerChoice.textContent = `Player choice: ${playerSelection}`;
  computerChoice.textContent = `Computer choice: ${computerSelection}`;
  text.forEach(text => text.style.cssText = "font-size: 20px; font-weight: 500;");
  roundResult.textContent = result;
  userScore.textContent = "Player's score is: " + playerScore;
  cpuScore.textContent = "Computer's score is: " + computerScore;
}));

function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
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
});

// function game() {
//   for (let i = 0; i < 100; i++) {
//     const playerSelection = "";

//     if (playerSelection === null) {
//       break;
//     }

//     const computerSelection = getComputerChoice();
//     const result = playRound(playerSelection, computerSelection);
//     console.log(result); 
//     console.log("Player score is: " + playerScore);
//     console.log("Computer score is: " + computerScore); 
    
//     if (playerScore === 5 ) {
//       console.log(playerWinsGame);
//       break;
//     }
//     else if (computerScore === 5 ) {
//       console.log(computerWinsGame);
//       break;
//     }
//   }
// }

// function playAgain() {
//   const input = prompt("Do you want to play again? (yes or no)");
//   playerScore = 0;
//   computerScore = 0;

//   if (input === null) {
//     return null;
//   }

//   if (input && input.toLowerCase().trim() === "yes") {
//     game();
//     playAgain();
//   } else if (input && input.toLowerCase().trim() === "no") {
//     console.log("Thanks for playing!");
//   }
//   else {
//     console.log("Invalid input. Please type yes or no.");
//     return playAgain();
//   }
// }

// playAgain();