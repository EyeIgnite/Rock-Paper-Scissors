let playerScore = 0;
let computerScore = 0;

const playerWinRound = "Player wins!";
const computerWinRound = "Computer Wins!";
const playerWinsGame = "Player has won the game, congrats!";
const computerWinsGame = "Computer has won the game, congrats!";

const choices = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll("button");

btns.forEach(button => button.addEventListener("click", (e) => {
  const playerSelection = e.target.textContent.toLowerCase();
  const computerSelection = getComputerChoice();

  console.log(playRound(playerSelection, computerSelection));
}))

function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

// function getComputerChoice() {
//   const randomChoice = Math.floor(Math.random() * 3);

//   if (randomChoice === 0) {
//     return "rock"; 
//   }
//   else if (randomChoice === 1) {
//     return "paper"; 
//   }
//   else {
//     return "scissors"; 
//   }
// }

// function getPlayerChoice() {
//   let playerInput;

//   while (true) {
//     const userInput = prompt("Enter rock, paper, or scissors to start the game");
    
//     if (userInput === null) {
//       console.log("Game canceled by user.");
//       return null;
//     }
//     playerInput = userInput.toLowerCase().trim();

//     if (
//     playerInput === "rock" || 
//     playerInput === "paper" || 
//     playerInput === "scissors"
//     ) {
//       return playerInput;
//     }   
//     else {
//       console.log("Invalid input, please enter a valid choice!");
//       return getPlayerChoice();
//     }
//   }
// }

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