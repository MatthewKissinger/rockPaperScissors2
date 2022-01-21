



function userPlay() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors:");

    if(playerChoice == null) {
        alert(`Fine, I guess you don't like games`);
        return;
    }

    let lowerCaseChoice = playerChoice.toLowerCase();

    if(lowerCaseChoice == 'rock' || lowerCaseChoice == 'paper' || lowerCaseChoice == 'scissors') {
        console.log(lowerCaseChoice);
        return lowerCaseChoice;
    } else {
        alert('Pick a valid choice');
        userPlay();
    }
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result;

    switch(randomNumber) {
        case 0: 
            result = "rock";
            break;
        case 1: 
            result = "paper";
            break;
        case 2:
            result = "scissors"; 
    }
    console.log(result);
    return result;
}

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection == computerSelection) {
        result = `It's a draw`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = `You win`;
    } else if (playerSelection == `rock`&& computerSelection == `paper`) {
        result = `The computer wins`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        result = `You win`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        result = `The computer wins`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        result = `You win`;
    } else {
        result = `The computer wins`;
    }

    return result;
}

// const playerSelection = userPlay();
// const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerSelection));

function game(numRounds) {
    
}
