let humanScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener('click', playRound);
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
        console.log(`You win! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}!`);
        humanScore++;
    } else if (
        humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors"
    ) {
        console.log(`Draw! ${capitalise(humanChoice)} ties with ${capitalise(computerChoice)}!`);
    } else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        console.log(`You lose! ${capitalise(humanChoice)} gets defeated by ${capitalise(computerChoice)}!`);
        computerScore++;
    }
}

function capitalise(string) {
    const firstLetter = string.charAt(0).toUpperCase();
    const afterFirstLetter = string.slice(1).toLowerCase();

    return firstLetter + afterFirstLetter;
}