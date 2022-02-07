// rock paper scissors

// computer makes a selection at random
// math floor rounds a number down to the nearest whole integer
// math random returns a float from 0 to 0.99 *
function computerPlay(){
    let selection = Math.floor(Math.random()*3);
    if(selection==0){
        console.log('The computer has chosen rock.');
        return 'rock';
    }
    else if(selection==1){
        console.log('The computer has chosen paper.');
        return 'paper';
    }
    else{
        console.log('The computer has chosen scissors.');
        return 'scissors';
    }
}

// create a player selection function that limits out input to one of the 3 desired choices.
// sadly it seems we may not beable to limit input with window.prompt
// function playerSelection(){
//     let rawInput = window.prompt('rock, paper, or scissors?');
//     let userInput = rawInput.toLowerCase();
//     if(userInput==='rock'){
//         console.log('You have chosen rock.');
//         return 'rock';
//     }
//     else if(userInput==='paper'){
//         console.log('You have chosen paper.');
//         return 'paper';
//     }
//     else if(userInput==='scissors'){
//         console.log('You have chosen scissors.');
//         return 'scissors';
//     }
//     else{
//         console.log('Invalid input, try again.');
//         playerSelection();
//     }
// }
// the 2 selections are then compared, and a winner is declared.
// im not sure why the project page wanted the 2 selections to be parameters, it seems better to just have them inside the function?
function playRound(){
    let playerSelection = window.prompt('rock, paper, or scissors?');
    let input = playerSelection.toLowerCase();

    console.log(`You have chosen ${input}.`);

    let computerSelection = computerPlay();

    if(input===computerSelection){
        console.log('It\'s a tie.');
        return null;
    }
    else if(input==='rock' && computerSelection==='paper'){
        console.log('Computer wins.');
        return false;
    }
    else if(input==='rock' && computerSelection==='scissors'){
        console.log('User wins.');
        return true;
    }
    else if(input==='paper' && computerSelection==='rock'){
        console.log('User wins.');
        return true;
    }
    else if(input==='paper' && computerSelection==='scissors'){
        console.log('Computer wins.');
        return false;
    }
    else if(input==='scissors' && computerSelection==='rock'){
        console.log('Computer wins.');
        return false;
    }
    else if(input==='scissors' && computerSelection==='paper'){
        console.log('User wins.');
        return true;
    }
    else{
        console.log('Invalid input.');
        return null;
    }
}
// let score = 0;
// we now create a new function that plays 5 rounds and keeps score.
// *** NEED TO CREATE SEPERATE SCORES FOR USER AND COMPUTER ***

// based on the outcome of playRound I need to add +1 to either the computers or the players score

// Im going to try and make a seperate function to help keep track of the 2 seperate scores

let computerScore = 0;
let playerScore = 0;

function roundOutcome(){
    let outcome = playRound();
    if(outcome==false){
        return computerScore = ++computerScore;
    }
    else if(outcome==true){
        return playerScore = ++playerScore;
    }
    else{
        return null;
    }
}

// this function plays 5 rounds, declares a winner and then stops
function game(){
    roundOutcome();
    console.log(`comp score = ${computerScore}. player score = ${playerScore}.`)
    roundOutcome();
    console.log(`comp score = ${computerScore}. player score = ${playerScore}.`)
    roundOutcome();
    console.log(`comp score = ${computerScore}. player score = ${playerScore}.`)
    roundOutcome();
    console.log(`comp score = ${computerScore}. player score = ${playerScore}.`)
    roundOutcome();
    console.log(`comp score = ${computerScore}. player score = ${playerScore}.`)

    if(playerScore>computerScore){
        return console.log('You have won the best of 5!');
    }
    else if(playerScore<computerScore){
        return console.log('The computer has won the best of 5.');
    }
    else if(playerScore===computerScore){
        return console.log('The best of 5 has ended in a tie.');
    }
    else{
        return console.log('Outcome unknown.');
    }
}

game();