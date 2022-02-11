// TODO List
// 1 - add in start game and continue game features

// Dom Cache
let gameStart = document.getElementById('gameStart');

// Event Listeners

gameStart.addEventListener("click", function() {
    // roundTotal();
    playGame(5);
} );

// global variables
let userScore = 0;
let computerScore = 0;
let numRounds;


// prompts the user for their choice in the game round

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

// randomly generates a computer choice in the game round

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

// compares the user and computer selections and determines the outcome of the game round

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

// Lets the player choose the number of rounds for the game

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

// based on the rounds chosen by the user, it loops through each round, calling the user and computer selection functions for new choices
// Also, determines the outcome of the match

function playGame(numRounds) {
    
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
