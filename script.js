
let result = 0;
function getPlayerSelection(){
    playerSelection = prompt('Please enter rock, paper or scissors', '').toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        console.log(`You chose ${playerSelection}.`);
        return playerSelection;
    } else {
        console.log(`${playerSelection} is an invalid word.`);
    }
}


function getComputerSelection(){
    const optionsArray = ['rock', 'paper', 'scissors'];
    return computerSelection = optionsArray[Math.floor(Math.random()*optionsArray.length)] 
}

function playRound(){
    getPlayerSelection();
    //playerSelection = prompt("Rock, Paper or Scissors", "").toLowerCase();
    
    
    if (playerSelection == getComputerSelection()){
        result = 0
        return "tie";
    } else if (playerSelection == "rock" && getComputerSelection() == "scissors" ||
               playerSelection == "paper" && getComputerSelection() == "rock" ||
               playerSelection == "scissors" && getComputerSelection() == "paper"){
        result = 1;     
        return "win";
        

    } else {
        result = -1;
        return "lose";
    }
}
playRound();



/*function game(){
    let scores = [0,0];
    for(let i=0;i<5;i++){
        playRound();
        if (result == 1){
            scores[0]=(scores[0]+1)
        } else if (result == -1) {
            scores[1]=(scores[1]+1)
        }
    }
    console.log("Player has a score of:" +scores[0]);
    console.log("Computer has a score of:" +scores[1]);
}*/

