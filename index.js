// TODO List
// Disable the player selection buttons inbetween rounds and before starting a new game
//5. commit changes to the rps-ui branch
//6. Merge the changes from the rps-ui branch back to the main branch
 
//Global Variables
let userScore = 0;
let computerScore = 0;
let round = 1;

// Dom Cache
let messageContainer = document.getElementById('message-container');
let messageDisplay = document.getElementById('message-display');
let userSelection = document.getElementById('user-selection');
let compSelection = document.getElementById('comp-selection');

let startDiv = document.getElementById('start-div');
let gameStart = document.getElementById('game-start');

let userScoreDisplay = document.getElementById('user-score');
let roundDisplay = document.getElementById('round-container');
let compScoreDisplay = document.getElementById('computer-score');

let userButtons = document.querySelectorAll('#user-btn-container button');

let newRoundButton = document.getElementById('new-round-btn');

// Event Listeners
gameStart.addEventListener("click", function() {
    playGame();
});

userButtons.forEach(button => button.addEventListener('click', function() {
    playRound(button.getAttribute('id'), computerPlay());
}));

newRoundButton.addEventListener("click", function() {
    nextRound();
});

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
    return result;
}

// compares the user and computer selections and determines the outcome of the game round

function playRound(playerSelection, computerSelection) {
    
    userSelection.innerText = `You Selected: ${playerSelection}`;
    compSelection.innerText = `Comp Selected: ${computerSelection}`;

    if (playerSelection == computerSelection) {
        messageDisplay.innerText = `It's a draw`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        userScore++;
        messageDisplay.innerText = `You win!`;
    } else if (playerSelection == `rock`&& computerSelection == `paper`) {
        computerScore++;
        messageDisplay.innerText = `The computer wins :(`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        userScore++;
        messageDisplay.innerText = `You win!`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        computerScore++;
        messageDisplay.innerText = `The computer wins :(`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        userScore++;
        messageDisplay.innerText = `You win!`;
    } else {
        computerScore++;
        messageDisplay.innerText = `The computer wins :(`;
    }
    updateScoreDisplay();
    newRoundButton.classList.remove('hide');
    gameOver();
}

function nextRound() {
    console.log('next round please');
    round++;
    updateScoreDisplay();
    resetMessageBoard();
    newRoundButton.classList.add('hide');

}

function playGame() {
    gameStart.classList.add('hide');

    messageDisplay.classList.remove('hide');
    messageDisplay.innerText = 'Choose your selection from the buttons below'; 

    updateScoreDisplay();
}

function updateScoreDisplay() {
    userScoreDisplay.innerText = `User Score: ${userScore}`;
    compScoreDisplay.innerText = `Comp Score: ${computerScore}`;
    roundDisplay.innerText = `Round ${round}`;
}

function resetMessageBoard() {
    messageDisplay.innerText = 'Choose your selection from the buttons below';
    userSelection.innerText = ``;
    compSelection.innerText = ``;
}

function gameOver() {
    if (userScore >= 5) {
        messageDisplay.classList.add('hide');
        gameStart.classList.remove('hide');
        gameStart.innerText = `You Won! New Game?`;
    } else if (computerScore >= 5) {
        messageDisplay.classList.add('hide');
        gameStart.classList.remove('hide');
        gameStart.innerText = `You Lost! New Game?`;

    }
}
