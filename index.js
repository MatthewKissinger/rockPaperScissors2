// TODO List
// 1 - add in start game and continue game features

// Dom Cache
let gameStart = document.getElementById('gameStart');

// Event Listeners

gameStart.addEventListener("click", function() {
    roundTotal();
} );

// global variables
let userScore = 0;
let computerScore = 0;
let numRounds;


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
        userScore++;
        result = `You win`;
    } else if (playerSelection == `rock`&& computerSelection == `paper`) {
        computerScore++;
        result = `The computer wins`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        userScore++;
        result = `You win`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        computerScore++;
        result = `The computer wins`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        userScore++;
        result = `You win`;
    } else {
        computerScore++;
        result = `The computer wins`;
    }
    console.log(result);
    return result;
}

function roundTotal() {
    numRounds = prompt(`Enter 1, 3, or 5 for the game length`);

    if (numRounds == null) {
        alert(`Ending game start sequence`);
        return;
    }

    numRounds = parseInt(numRounds);
    
    if (numRounds === 1 || numRounds === 3 || numRounds === 5) {
        console.log(numRounds);
        console.log(typeof(numRounds));
        alert(`Start the Game!`);
        return numRounds;

    } else {
        alert(`You have picked an invalid total`);
        roundTotal();
        return numRounds;
    }
}

function game(numRounds) {
    
    let round = 1;

    let playerSelection;
    let computerSelection;

    for (let i = round; i < numRounds + 1; i++) {
        console.log(`Round ${round}`);
        console.log(`User Score is ${userScore}`);
        console.log(`Computer Score is ${computerScore}`);

        playerSelection = userPlay();
        computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
        round++;
    }

    console.log(`End of Game`);
    console.log(`User Score Total = ${userScore}`);
    console.log(`Computer Score Total = ${computerScore}`);

    if (userScore === computerScore) {
        console.log(`It's a draw`);
    } else if (userScore > computerScore) {
        console.log(`You win!!`);
    } else {
        console.log(`The computer wins`);
    }
}

// game(5);
