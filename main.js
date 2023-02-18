const choices = ["rock", "paper", "scissors"]
const winners = [];

function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, Scissors");
    while(input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) { 
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling needs, but capitilization doesn't matter"
        );
        while(input == null) {
            input = prompt("Type Rock, Paper, or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function validateInput(choice) {
    if(choice.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "Tie";
    } else if (
      (choiceP === "rock" && choiceC == "scissors") ||
      (choiceP === "paper" && choiceC == "rock") ||
      (choiceP === "scissors" && choiceC == "paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
}

function logWins(){
    let playerWins = winners.filter((item) =>item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter ((item) => item == "Tie"). length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round:", round);
    console.log("Player Choose:", playerChoice);
    console.log("Computer Choose:", computerChoice);
    console.log(winner, "Won The Round!");
    console.log("---------------");
}
