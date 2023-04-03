

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let compterSelection;




function getPlayerSelection(){
    playerSelection = prompt('Please enter rock, paper or scissors', '').toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        console.log(`You chose ${playerSelection}.`);
        return playerSelection;
    } else {
        console.log(`${playerSelection} is an invalid word.`);
    }
}
getPlayerSelection();

function getComputerSelection(){
    const optionsArray = ['rock', 'paper', 'scissors'];
    return computerSelection = optionsArray[~~(Math.random()*optionsArray.length)] //~~=math.floor
}

function playRound(playerSelection, computerSelection){
    

    
    if (playerSelection === computerSelection){
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        playerScore =+ playerScore;
        let result = console.log(`You won!, your score is ${playerScore}`);        
        return result;
        

    } else {
        computerScore++;
        computerScore =+computerScore;
        let result = console.log(`You lost!, the computers score is ${computerScore}`);
        return result;
    }

}

getComputerSelection();
console.log(playRound(playerSelection, computerSelection));

function game(){

}