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

// This function returns the human choice.
function getHumanChoice() {
    const humanPrompt = prompt('Enter your choice');
    if (humanPrompt.toLowerCase() === 'rock') {
        return 'rock';
    } else if (humanPrompt.toLowerCase() === 'paper') {
        return 'paper';
    } else if (humanPrompt.toLowerCase() === 'scissors') {
        return 'scissors';
    }
}



function playGame() {



    // This function says who wins in the console and increments the scores.
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 'rock') {


            if (computerChoice == 'rock') {
                console.log("It's a tie!");
            } else if (computerChoice == 'paper') {
                console.log('You lose! Paper beats rock.');
                computerScore++;
            } else if (computerChoice == 'scissors') {
                console.log('You win! Rock beats scissors.');
                humanScore++;
            }


        } else if (humanChoice == 'paper') {


            if (computerChoice == 'rock') {
                console.log('You win! Paper beats rock.');
                humanScore++;
            } else if (computerChoice == 'paper') {
                console.log("It's a tie!");
            } else if (computerChoice == 'scissors') {
                console.log('You lose! Scissors beats paper.');
                computerScore++;
            }


        } else if (humanChoice == 'scissors') {


            if (computerChoice == 'rock') {
                console.log('You lose! Rock beats scissors.');
                computerScore++;
            } else if (computerChoice == 'paper') {
                console.log('You win! Scissors beats paper.');
                humanScore++;
            } else if (computerChoice == 'scissors') {
                console.log("It's a tie!");
            }


        }
    }


    // These are the scores.
    let humanScore = 0;
    let computerScore = 0;



    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();


    // This plays the 5 rounds.
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    // This tells the scores at the end of the game.
    console.log(`Your score: ${humanScore}`);
    console.log(`The computer's score: ${computerScore}`);
}

playGame()