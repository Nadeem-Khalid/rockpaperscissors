let humanScore = 0;
let comScore = 0;

function getComputerChoice(max) {
  let num = Math.floor(Math.random() * max);
  let comChoice = "";
  if (num === 0) {
    comChoice = "Rock";
  } else if (num === 1) {
    comChoice = "Paper";
  } else {
    comChoice = "Scissors";
  }
  return comChoice;
}

function getHumanChoice() {
  let choice = prompt(
    "Please enter your choice: Rock, Paper, or Scissors"
  ).toLowerCase();
  let humanChoice = "";
  if (choice === "rock") {
    humanChoice = "rock";
    console.log("You've picked rock, good luck.");
  } else if (choice === "paper") {
    humanChoice = "paper";
    console.log("You've picked paper, good luck.");
  } else if (choice === "scissors") {
    humanChoice = "scissors";
    console.log("You've picked scissors, good luck.");
  } else {
    console.log("Invalid answer, please try again.");
  }
  return humanChoice;
}

function playRound(comChoice, humanChoice) {
  if (comChoice === humanChoice) {
    console.log("Draw! Play again");
  } else if (comChoice === "Paper" && humanChoice === "scissors") {
    humanScore++;
    console.log("You win! Scissors beats paper");
  } else if (comChoice === "Scissors" && humanChoice === "rock") {
    humanScore++;
    console.log("You win! Rock beats scissors");
  } else if (comChoice === "Rock" && humanChoice === "paper") {
    humanScore++;
    console.log("You win! Paper beats rock");
  } else {
    comScore++;
    console.log("You lose! Better luck next time.");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    const comChoice = String(getComputerChoice(3).toLowerCase());
    playRound(comChoice, humanChoice);
  }
  if (comScore === humanScore) {
    console.log("Draw!");
  } else if (humanScore > comScore) {
    console.log(`You've won! The final score was ${humanScore} - ${comScore}`);
  } else {
    console.log(
      `You've lost! The final score was ${humanScore} - ${comScore} `
    );
  }
}

playGame();
