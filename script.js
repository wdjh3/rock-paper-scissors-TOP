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