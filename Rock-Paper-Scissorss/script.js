function playerChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const resultMessage = document.getElementById('result-message');
    const playerChoiceImg = document.getElementById('player-choice');
    const computerChoiceImg = document.getElementById('computer-choice');

    playerChoiceImg.src = `${choice}.png`;
    computerChoiceImg.src = `${computerChoice}.png`;

    if (choice === computerChoice) {
        resultMessage.textContent = "It's a tie!";
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage.textContent = `You win! ${choice} beats ${computerChoice}.`;
    } else {
        resultMessage.textContent = `You lose! ${computerChoice} beats ${choice}.`;
    }
}
