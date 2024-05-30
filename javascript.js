function getComputerChoice(max) {
    let randomNumber = Number(Math.floor(Math.random() * max));
    if (randomNumber == 0) {
        console.log("rock");
        return "rock";
    } else if (randomNumber == 1) {
        console.log("paper");
        return "paper";
    } else if (randomNumber == 2) {
        console.log("scissors");
        return "scissors";
    } else {
        console.log("Not a Number");
    }
}

function getHumanChoice() {
    let message = prompt("Rock, Paper, or Scissors?");
    if (message.toLowerCase() == "rock") {
        console.log("rock");
        return "rock";
    } else if (message.toLowerCase() == "paper") {
        console.log("paper");
        return "paper";
    } else if (message.toLowerCase() == "scissors") {
        console.log("scissors");
        return "scissors";
    } else {
        console.log("Not a valid answer");
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    playRound(humanSelection, computerSelection);
    function playRound (humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You Lose! Paper beats rock.");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You Win! Paper beats rock.");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("It's a Draw!");
            drawScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You Win! Scissors beats paper.");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You Lose! Rock beats scissors.");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("It's a Draw!");
            drawScore++;
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("It's a Draw!");
            drawScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You Lose! Scissors beats paper.");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You Win! Rock beats scissors.");
            humanScore++;
        }
    }
    if (humanScore++ || computerScore++ || drawScore++) {
        playRound(getHumanChoice(), getComputerChoice(3));
        playRound(getHumanChoice(), getComputerChoice(3));
        playRound(getHumanChoice(), getComputerChoice(3));
        playRound(getHumanChoice(), getComputerChoice(3));
    }
    if (humanScore >= 1 && humanScore > computerScore) {
        console.log("You're Victorious!");
    } else if (computerScore >= 1 && computerScore > humanScore) {
        console.log("You've lost! Try again next time.");
    } else {
        console.log("You tied against the computer.");
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);
playGame();