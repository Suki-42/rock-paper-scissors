// This function returns the computer choice.
function getComputerChoice() {
    const computerRandomChoice = Math.floor(Math.random() * 3) + 1;
    if (computerRandomChoice == 1) {
        return 'rock';
    } else if (computerRandomChoice == 2) {
        return 'paper';
    } else if (computerRandomChoice == 3) {
        return 'scissors';
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultDiv = document.querySelector('#result');
let playerScore = 0;
let computerScore = 0;

if(playerScore === 5) {
    resultDiv.textContent = `You are the WINNER of the game with a score of ${playerScore}! Computer have ${computerScore} point(s). Want to play another game?`
    playerScore = 0;
    computerScore = 0;
} else if (computerScore === 5) {
    resultDiv.textContent = `You are the LOSER of the game with a score of ${playerScore}! Computer have ${computerScore} point(s). Want to play another game?`
}

function playRound(buttonClicked) {
    let computerChoice = getComputerChoice();
    let result = '';

    if (buttonClicked === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (buttonClicked === 'rock' && computerChoice === 'scissors') ||
        (buttonClicked === 'paper' && computerChoice === 'rock') ||
        (buttonClicked === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }
    if(playerScore === 5) {
        resultDiv.textContent = `You are the WINNER of the game with a score of ${playerScore}! Computer have ${computerScore} point(s). Want to play another game?`
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        resultDiv.textContent = `You are the LOSER of the game with a score of ${playerScore}! Computer have ${computerScore} point(s). Want to play another game?`
    } else {
        resultDiv.textContent = `You chose ${buttonClicked}, computer chose ${computerChoice}. ${result}
        Computer now have ${computerScore} point(s) and you have ${playerScore} point(s).`;
    }
};

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

