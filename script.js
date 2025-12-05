let humanScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll("button");
const result = document.querySelector("#result");

btn.forEach((button) => {
    button.addEventListener('click', () => {
        playRound();
        checkGameWin();
    });
})

function getComputerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    
    if (computerChoiceIndex === 0) {
        return "rock";
    } else if (computerChoiceIndex === 1) {
        return "paper";
    } else if (computerChoiceIndex === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = (prompt("Rock, paper or scissors?")).toLowerCase();
    return humanChoice;
}

function playRound(humanChoice , computerChoice) {
    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        result.textContent = `You win! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}!`;
        humanScore++;
    } else if (
        humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors"
    ) {
        result.textContent = `Draw! ${capitalise(humanChoice)} ties with ${capitalise(computerChoice)}!`;
    } else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        result.textContent = `You lose! ${capitalise(humanChoice)} gets defeated by ${capitalise(computerChoice)}!`;
        computerScore++;
    }
}

function capitalise(string) {
    const firstLetter = string.charAt(0).toUpperCase();
    const afterFirstLetter = string.slice(1).toLowerCase();

    return firstLetter + afterFirstLetter;
}

function checkGameWin() {
    let winScore = 5;
    if (humanScore >= winScore && computerScore >= winScore) {
        result.textContent += "\nSomething's not right..."
        return;
    }

    if (humanScore >= winScore) {
        result.textContent += "\nPlayer Wins!"
    }

    if (computerScore >= winScore) {
        result.textContent += "\nComputer Wins!"
    }
}