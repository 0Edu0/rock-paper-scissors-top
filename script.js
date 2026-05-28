function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const selectOption = computerOptions[Math.floor(Math.random() * 3)];
    return selectOption;
}

function getHumanChoice(){
    const humanOption = prompt('Enter rock, paper or scissors!').toLowerCase();
    return humanOption;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    const games = 5;
    
    function playRound(humanChoice, computerChoice){
        const humanLose = `You lose! ${String(computerChoice).charAt().toUpperCase() + String(computerChoice).slice(1).toLowerCase()} beats ${humanChoice}`;
        const humanWin = `You win! ${String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1).toLowerCase()} beats ${computerChoice}`;

        if(humanChoice == 'rock' && computerChoice == 'paper'){
            ++computerScore;
            console.log(humanLose);
            console.log(`Current scores: Human - ${humanScore} | Computer - ${computerScore}`);
        } else if(humanChoice == 'rock' && computerChoice == 'scissors'){
            ++humanScore;
            console.log(humanWin);
            console.log(`Current scores: Human - ${humanScore} | Computer - ${computerScore}`);
        } else if(humanChoice == 'paper' && computerChoice == 'scissors'){
            ++computerScore;
            console.log(humanLose);
            console.log(`Current scores: Human - ${humanScore} | Computer - ${computerScore}`);
        } else if(humanChoice == 'paper' && computerChoice == 'rock'){
            ++humanScore;
            console.log(humanWin);
            console.log(`Current scores: Human - ${humanScore} | Computer - ${computerScore}`);
        } else if(humanChoice == 'scissors' && computerChoice == 'paper'){
            ++humanScore;
            console.log(humanWin);
            console.log(`Current scores: Human - ${humanScore} | Computer - ${computerScore}`);
        } else if(humanChoice == 'scissors' && computerChoice == 'rock'){
            ++computerScore;
            console.log(humanLose);
            console.log(`Current scores: Human - ${humanScore} | Computer - ${computerScore}`);
        } else {
            console.log('tie');
        }
    }

    for(let i = 0; i <= games; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(computerScore > humanScore){
        console.log('Computer wins!');
    } else if(computerScore < humanScore){
        console.log('Human wins!');
    } else {
        console.log('Tie');
    }
}

playGame();