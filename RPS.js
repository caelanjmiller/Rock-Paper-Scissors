// Simple Rock Paper Scissors Game 

const choices = ['rock','paper', 'scissors'];
let rounds = parseInt(prompt('How many rounds of Rock, Paper, Scissors do you want to play?'));

function getCpuChoice () {
    let cpuChoice = choices[Math.floor(Math.random() * 3)]; // Random index from 0-2 [choices] to select CPU's move
    return cpuChoice;
}

let cpuChoice = getCpuChoice();

function playRound (cpuChoice) {
    let winnerOfRound = '';
    let playerChoice = prompt('Choose From the Following Moves:\nRock\tPaper\tScissors').toLowerCase(); // Allows for case-insensitive input from user

    if (playerChoice === cpuChoice) {
        winnerOfRound = 'Draw, there is no winner';
        return winnerOfRound;
    }
    else if (playerChoice == 'rock' && cpuChoice === 'paper') {
        winnerOfRound = 'You lose! Paper beats rock!';
        return winnerOfRound;
    }
    else if (playerChoice == 'paper' && cpuChoice === 'rock'){
        winnerOfRound = 'You win! Paper beats rock!'
        return winnerOfRound;
    }
    else if (playerChoice == 'rock' && cpuChoice === 'scissors') {
        winnerOfRound = 'You win! Rock beats scissors!';
        return winnerOfRound;
    }
    else if (playerChoice == 'scissors' && cpuChoice === 'rock') {
        winnerOfRound = 'You lose! Rock beats scissors!';
        return winnerOfRound;
    }
    else if (playerChoice == 'paper' && cpuChoice === 'scissors') {
        winnerOfRound = 'You lose! Scissors beats paper!';
        return winnerOfRound;
    }
    else if (playerChoice == 'scissors' && cpuChoice === 'paper') {
        winnerOfRound = 'You win! Scissors beats paper!';
        return winnerOfRound;
    }
    return winnerOfRound;
}

function rpsGame (rounds) {
    let numRounds = rounds - 1;
    let playerScore = 0;
    let cpuScore = 0;
    for (i = 0; i <= numRounds; i++) {
        let roundEnd = playRound(cpuChoice);
        console.log(roundEnd);
        let words = roundEnd.split(' '); // Lines 53-63 allow for tracking of returned value from playRound(); if returned string contains 'win!', this is considered a +1 for player due to framing of statement, vice versa for 'lose!' +1 for CPU
        if (words[1] == 'win!') {
            playerScore += 1;
        }
        else if (words[1] == 'lose!') {
            cpuScore += 1;
        }
        else {
            cpuScore += 0;
            playerScore += 0;
        }
    }
    if (playerScore > cpuScore) {
        grandWinner = `You are the Grand Winner! You won ${playerScore} out of ${rounds} rounds`;
        console.log(grandWinner);
        return grandWinner;
    }
    else {
        grandWinner = `Sadly you are not the Grand Winner. You only won ${playerScore} out of ${rounds} rounds`;
        console.log(grandWinner);
        return grandWinner;
    }
}

rpsGame(rounds);
// Caelan Miller - 2022