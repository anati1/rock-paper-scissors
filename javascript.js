
const choice = ["rock", "paper", "scissors"];
let choiceIndex = 0;
let playerSelection = "rock"; //default value
let computerSelection = "paper"; //default value
let currentRound = 0;
let computerScore = 0;
let PlayerScore = 0;
let statusText = "";
let playerPaperIcon;

function addToDom(status, PlayerScore, computerScore, round){
   result = document.querySelector('#result'); 
   let currentStatus = document.createElement('div');
   let currentScore = document.createElement('div');
   currentScore.textContent = `Score player-${PlayerScore} computer-${computerScore}. round ${round} \\ 5`; 
   currentStatus.textContent = `${status}`;
   currentScore.classList.add("score");
   currentStatus.classList.add("status");
   result.append(currentStatus);
   result.append(currentScore);
}

function togglecomputerSelection(computerSelection){
    let compIcon;
    if (computerSelection === 'paper'){
        compIcon = document.querySelector('#paper-comp');
        compIcon.classList.toggle("not-active");
    } else if (computerSelection === 'scissors'){
        compIcon = document.querySelector('#scissors-comp');
        compIcon.classList.toggle("not-active");
    } else {
        compIcon = document.querySelector('#rock-comp');
        compIcon.classList.toggle("not-active");
    }
    setTimeout(hideComputerSelection, 3000);
    setTimeout(removeBorder, 3000);
}

function addBorder(element){
    element.classList.add("active");
}

function removeBorder(){
    element = document.querySelector('.active');
    element.classList.remove("active");
}

function hideComputerSelection(){
    compIcon = document.querySelector('#paper-comp');
    compIcon.classList.add("not-active");
    compIcon = document.querySelector('#scissors-comp');
    compIcon.classList.add("not-active");
    compIcon = document.querySelector('#rock-comp');
    compIcon.classList.add("not-active");
}

function endGame(){
    result = document.querySelector('#result'); 
    let currentStatus = document.createElement('p');
    if (computerScore > PlayerScore){
        currentStatus.textContent = 'Computer Wins! Game End!';
    } else if (computerScore < PlayerScore) {
        currentStatus.textContent = 'You Win! Game End!' ;
    }
    else {
        currentStatus.textContent = 'It\'s a tie. Game End!';
    }
    result.append(currentStatus);
}

playerIcon = document.querySelector('#paper');

playerIcon.addEventListener('click', (e) => {
    currentRound++;
    if (currentRound < 6) {
        playerSelection = "paper";
        addBorder(e.target);
        computerSelection = getComputerChoice();
        togglecomputerSelection(computerSelection);
        statusText = playRound(playerSelection, computerSelection);
        addToDom(statusText, PlayerScore, computerScore, currentRound);
        if (currentRound === 5){
            endGame()
        }
    }
    return;
});

playerIcon = document.querySelector('#scissors');

playerIcon.addEventListener('click', (e) => {
    currentRound++;
    if (currentRound < 6) {
        playerSelection = "scissors";
        addBorder(e.target);
        computerSelection = getComputerChoice();
        togglecomputerSelection(computerSelection);
        statusText = playRound(playerSelection, computerSelection);
        addToDom(statusText, PlayerScore, computerScore, currentRound);
        if (currentRound === 5){
            endGame()
        }
    }
    return;
});

playerIcon = document.querySelector('#rock');

playerIcon.addEventListener('click', (e) => {
    currentRound++;
    if (currentRound < 6) {
        playerSelection = "rock";
        addBorder(e.target);
        computerSelection = getComputerChoice();
        togglecomputerSelection(computerSelection);
        statusText = playRound(playerSelection, computerSelection);
        addToDom(statusText, PlayerScore, computerScore, currentRound);
        if (currentRound === 5){
            endGame()
        }
    }
    return;
})

/******************************************************/

function getComputerChoice() {
    //get random number 0-2
    choiceIndex = Math.floor(Math.random() * 3);
    return choice[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
    if (checkTie(playerSelection, computerSelection)){
        computerScore++;
        PlayerScore++;
        return `It's a tie ${playerSelection} vs ${computerSelection}`;
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