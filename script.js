//score

const playerScoreCard = document.querySelector('.playerScoreCard');
const computerScoreCard = document.querySelector('.computerScoreCard');

let playerPoints = 0;
let computerPoints = 0;
let roundNum = 1;

function updatePoints(){
    playerScoreCard.innerText = String(playerPoints);
    computerScoreCard.innerText = String(computerPoints);
}

//Adding querySelectors to buttons
const playerRock = document.querySelector('.player-rock');
const playerPaper = document.querySelector('.player-paper');
const playerScissors = document.querySelector('.player-scissors');

const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');

// User's Button Event Listener for :hover state
playerRock.addEventListener('mouseover', playerHover);
playerPaper.addEventListener('mouseover', playerHover);
playerScissors.addEventListener('mouseover', playerHover);

//Allow user to hover over buttons if game is still in play (less than 5 points)
function playerHover() {
    if(playerPoints<=4 && computerPoints<=4){
        this.classList.add('playerHover');
    }
}


/*function getPlayerSelection(){
    playerSelection = prompt('Please enter rock, paper or scissors', '').toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        console.log(`You chose ${playerSelection}.`);
        return playerSelection;
    } else {
        console.log(`${playerSelection} is an invalid word.`);
    }
}*/


function getComputerSelection(){
    const optionsArray = ['rock', 'paper', 'scissors'];
    return computerSelection = optionsArray[Math.floor(Math.random()*optionsArray.length)] 
}

function playRound(playerSelection, computerSelection){
    playerSelection=this.dataset.button;
    computerSelection=getComputerSelection();
    //playerSelection = prompt("Rock, Paper or Scissors", "").toLowerCase();
    this.classList.add('playerClick');
    updatePoints();
    
    if (playerSelection == computerSelection){
        roundNum++;
    } else if (playerSelection == "rock" && getComputerSelection() == "scissors" ||
               playerSelection == "paper" && getComputerSelection() == "rock" ||
               playerSelection == "scissors" && getComputerSelection() == "paper"){     
        playerPoints++;
        roundNum++;
    } else {
        computerPoints++;
        roundNum++;
    }
}


// User's Button Event Listener to Play the Game
playerPaper.addEventListener('click', playRound);
playerRock.addEventListener('click', playRound);
playerScissors.addEventListener('click', playRound);



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

