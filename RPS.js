// Simple Rock Paper Scissors Game 

let playerName = document.querySelector('#player-name');
let playerNameButton = document.querySelector("#psubmit");
playerNameButton.addEventListener('click', userInput);
function userInput () {
    let input = document.getElementById('input').value;
    playerName.innerHTML = input;
}

function getCpuChoice () {
    const choices = ['rock','paper', 'scissors'];
    cpuChoice = choices[Math.floor(Math.random() * 3)]; // Random index from 0-2 [choices] to select CPU's move
    console.log(`CPU Choice: ${cpuChoice}`);
    return cpuChoice;
}


// 0 == tie, 1 == victory, -1 == loss
const resultMatrix = [
                                // CPU
                        // rock, paper, scissors
    /*Player   rock     */[ 0,     -1,      1],
    /*         paper    */[ 1,      0,     -1],
    /*         scissors */[-1,      1,      0]

]

function determineResult(player, cpu) {
    // rock = 0, paper = 1, scissors = 2
    const choice = {
        "rock": 0,
        "paper": 1,
        "scissors": 2
    }
    const playerVal= choice[player]
    const cpuVal = choice[cpu]
    return resultMatrix[playerVal][cpuVal]
}

function playRound(event) {
    // remove existing and get new choice
    cpuButtonHighlightRemoval();
    let cpuChoice = getCpuChoice();
    cpuButtonHighlight(cpuChoice);

    let playerChoice = event.currentTarget.value;

    // get result and print banner
    const result = determineResult(playerChoice, cpuChoice);
    if (result === 0) {
        bannerText = 'Draw, there is no winner';
    } else if (result === 1) {
        bannerText = `You win! ${playerChoice} beats ${cpuChoice}`;
        playerIncrementScore();
    } else {
        bannerText = `You lose! ${cpuChoice} beats ${playerChoice}`;
        cpuIncrementScore();
    }
    changeBannerText(bannerText);
}

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener('click', playRound);

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener('click', playRound);

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener('click', playRound);

const cpuScissors = document.querySelector('#cpu-scissors');
const cpuPaper = document.querySelector('#cpu-paper');
const cpuRock = document.querySelector('#cpu-rock');
function cpuButtonHighlight(cpuChoice) { 
    console.log('The function cpuButtonHighlight() is now running....');
    if (cpuChoice === "rock") {
        cpuRock.classList.add('cpu-selection');
    } else if (cpuChoice === "paper") {
        cpuPaper.classList.add('cpu-selection');
    } else {
        cpuScissors.classList.add('cpu-selection');
    }
}
function cpuButtonHighlightRemoval(cpuChoice){
    console.log('The function cpuButtonHighLightRemoval() is now running');
    cpuRock.classList.remove('cpu-selection');
    cpuPaper.classList.remove('cpu-selection');
    cpuScissors.classList.remove('cpu-selection');
}

const announcementBanner = document.querySelector('.announcement');
announcementBanner.addEventListener('click', restartGameCycle);
function restartGameCycle () {
    location.reload();
}

function changeBannerText(winnerOfRound) {
    console.log('The function changeBannerText() is now running....');
    if (playerScore < 5 && cpuScore < 5) {
        let bannerText = winnerOfRound;
        announcementBanner.innerHTML = bannerText;
    }
    else if (playerScore >= 5 && cpuScore < 5) {
        announcementBanner.innerHTML = 'You are the Grand Winner!\nClick to Refresh';
    }
    else if (cpuScore >= 5 && playerScore < 5) {
        announcementBanner.innerHTML = 'The CPU is the Grand Winner....\nClick to Refresh'
    }
}

var playerScore = 0;
var cpuScore = 0;
const playerScoreElement = document.querySelector('#player-score');
const cpuScoreElement = document.querySelector('#cpu-score');
function playerIncrementScore() {    
    console.log('The function playerIncrementScore() is now running....');
    playerScore++;
    playerScoreElement.innerHTML = `Score: ${playerScore}`;
}
function cpuIncrementScore() {
    console.log('The function cpuIncrementScore() is now running....');
    cpuScore++;
    cpuScoreElement.innerHTML = `Score: ${cpuScore}`;
}
// Legacy Code base
// const pbtns = document.querySelectorAll('.pbtn');
// pbtns.forEach(btns => btns.addEventListener('click', playerButtonSelection));
// pbtns.forEach(btns => btns.addEventListener('click', playRound));

// function playerButtonSelection () {
//     playerButtonChoice = this.id.toLowerCase().toString(); // this refers to DOM object (in this case button), allowing me call .id method and get id of said button
//     console.log(this);
//     console.log(typeof(playerButtonChoice))
//     console.log(`Player Choice: ${playerButtonChoice}`);
//     return playerButtonChoice;
// }
// function playRound (playerButtonChoice) {
//     console.log('The function playRound() is running....');
//     let winnerOfRound = '';
//     let cpuChoice = getCpuChoice();
//     let playerChoice = playerButtonChoice;
//     console.log(`playerButtonChoice variable value: ${playerButtonChoice}`);
//     if (playerChoice === cpuChoice) {
//         winnerOfRound = 'Draw, there is no winner';
//         console.log(winnerOfRound);
//         return winnerOfRound;
//     }
//     else if (playerChoice == 'rock' && cpuChoice === 'paper') {
//         winnerOfRound = 'You lose! Paper beats rock!';
//         console.log(winnerOfRound);
//         return winnerOfRound;
//     }
//     else if (playerChoice == 'paper' && cpuChoice === 'rock'){
//         winnerOfRound = 'You win! Paper beats rock!';
//         console.log(winnerOfRound);
//         return winnerOfRound;
//     }
//     else if (playerChoice == 'rock' && cpuChoice === 'scissors') {
//         winnerOfRound = 'You win! Rock beats scissors!';
//         console.log(winnerOfRound);
//         return winnerOfRound;
//     }
//     else if (playerChoice == 'scissors' && cpuChoice === 'rock') {
//         winnerOfRound = 'You lose! Rock beats scissors!';
//         console.log(winnerOfRound);
//         return winnerOfRound;
//     }
//     else if (playerChoice == 'paper' && cpuChoice === 'scissors') {
//         winnerOfRound = 'You lose! Scissors beats paper!';
//         console.log(winnerOfRound);
//         return winnerOfRound;
//     }
//     else if (playerChoice == 'scissors' && cpuChoice === 'paper') {
//         winnerOfRound = 'You win! Scissors beats paper!';
//         console.log(winnerOfRound);
//         return winnerOfRound;
//     }
//     return winnerOfRound;
// }
// function rpsGame (rounds) {
//     let numRounds = rounds - 1;
//     let playerScore = 0;
//     let cpuScore = 0;
//     for (i = 0; i <= numRounds; i++) {
//         let roundEnd = playRound(cpuChoice);
//         console.log(roundEnd);
//         let words = roundEnd.split(' '); // Lines 53-63 allow for tracking of returned value from playRound(); if returned string contains 'win!', this is considered a +1 for player due to framing of statement, vice versa for 'lose!' +1 for CPU
//         if (words[1] == 'win!') {
//             playerScore += 1;
//         }
//         else if (words[1] == 'lose!') {
//             cpuScore += 1;
//         }
//         else {
//             cpuScore += 0;
//             playerScore += 0;
//         }
//     }
//     if (playerScore > cpuScore) {
//         grandWinner = `You are the Grand Winner! You won ${playerScore} out of ${rounds} rounds`;
//         console.log(grandWinner);
//         return grandWinner;
//     }
//     else {
//         grandWinner = `Sadly you are not the Grand Winner. You only won ${playerScore} out of ${rounds} rounds`;
//         console.log(grandWinner);
//         return grandWinner;
//     }
// }

// Caelan Miller - 2022
