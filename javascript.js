
const choice = ["rock", "paper", "scissors"];
let choiceIndex = 0;
let playerSelection = "rock"; //default value
let computerSelection = "paper"; //default value
let userChoice; //prompt input
let currentRound = 0;
let computerScore = 0;
let PlayerScore = 0;
let statusText = "";

function getComputerChoice() {
    //get random number 0-2
    choiceIndex = Math.floor(Math.random() * 3);
    playerSelection = choice[choiceIndex];
    return playerSelection;
}

function getPlyerChoice() {
    invalid = true;
    do {
        userChoice = (prompt("Please choose rock, paper,  scissors", "paper")).toLowerCase();
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
            invalid = false;
            return userChoice;
        } else if (userChoice === null){
            invalid = false;
            return;
        } else {
            userChoice = prompt("Ivalid choice. Please choose rock, paper,  scissors", "paper");
        }
    } while (invalid)
}

function playRound(playerSelection, computerSelection) {
    if (checkTie(playerSelection, computerSelection)){
        computerScore++;
        PlayerScore++;
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        PlayerScore++;
        return "You Win! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        PlayerScore++;
        return "You Win! Paper beats Rock";
    }  else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors  ";
    } else /*playerSelection === "scissors" && computerSelection === "paper"*/ {
        PlayerScore++;
        return "You Win! Scissors beats Paper";
    }
}

function checkTie(playerSelection, computerSelection){
    if (playerSelection === computerSelection)
        return true;
    return false
}

function printScore(){
    return `Round ${currentRound} \\ 5. 
    Player score ${PlayerScore} 
    computer score ${computerScore}`
}

function resetGame() {
    currentRound = 0;
    computerScore = 0;
    PlayerScore = 0;
}

function Game(){
    for(let i = 0; i < 5; i++){
        currentRound++;
        computerSelection = getComputerChoice();
        playerSelection = getPlyerChoice();
        console.log("****");
        console.log(`Computer selection: ${computerSelection}`);
        console.log(`Player selection: ${playerSelection}`);
        console.log("****");
        statusText = playRound(playerSelection, computerSelection);
        console.log(statusText);
        console.log(printScore());

    }
    console.log("End Game!");
    resetGame();
}

Game();
