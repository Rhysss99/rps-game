

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let compterSelection;




function getPlayerSelection(){
    playerSelection = prompt('Please enter rock, paper or scissors', '');
}
getPlayerSelection();

console.log(playerSelection);

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
        return "win";

    } else {
        return "lose";
    }

}

getComputerSelection();
console.log(playRound(playerSelection, computerSelection));

function game(){

}