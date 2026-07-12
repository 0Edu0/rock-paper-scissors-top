function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const selectOption = computerOptions[Math.floor(Math.random() * 3)];
    return selectOption;
}

function getHumanChoice(value){
    return value.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let games = 0;
    
    function playRound(humanChoice, computerChoice){
        const result = document.querySelector('#result');
        const score = document.querySelector('#score');
        const rounds = document.querySelector('#rounds');

        const humanLose = `You lose! ${String(computerChoice).charAt().toUpperCase() + String(computerChoice).slice(1).toLowerCase()} beats ${humanChoice}`;
        const humanWin = `You win! ${String(humanChoice).charAt(0).toUpperCase() + String(humanChoice).slice(1).toLowerCase()} beats ${computerChoice}`;

        if(humanChoice == 'rock' && computerChoice == 'paper'){
            ++computerScore;
            ++games;
            result.textContent = humanLose;
            let currentScores = `Current scores: Human - ${humanScore} | Computer - ${computerScore}`;
            score.textContent = currentScores;
            rounds.textContent = `Round #${games}`;
        } else if(humanChoice == 'rock' && computerChoice == 'scissors'){
            ++humanScore;
            ++games;
            result.textContent = humanWin;
            let currentScores = `Current scores: Human - ${humanScore} | Computer - ${computerScore}`;
            score.textContent = currentScores;
            rounds.textContent = `Round #${games}`;
        } else if(humanChoice == 'paper' && computerChoice == 'scissors'){
            ++computerScore;
            ++games
            result.textContent = humanLose;
            let currentScores = `Current scores: Human - ${humanScore} | Computer - ${computerScore}`;
            score.textContent = currentScores;
            rounds.textContent = `Round #${games}`;
        } else if(humanChoice == 'paper' && computerChoice == 'rock'){
            ++humanScore;
            ++games;
            result.textContent = humanWin;
            let currentScores = `Current scores: Human - ${humanScore} | Computer - ${computerScore}`;
            score.textContent = currentScores;
            rounds.textContent = `Round #${games}`;
        } else if(humanChoice == 'scissors' && computerChoice == 'paper'){
            ++humanScore;
            ++games
            result.textContent = humanWin;
            let currentScores = `Current scores: Human - ${humanScore} | Computer - ${computerScore}`;
            score.textContent = currentScores;
            rounds.textContent = `Round #${games}`;
        } else if(humanChoice == 'scissors' && computerChoice == 'rock'){
            ++computerScore;
            ++games
            result.textContent = humanLose;
            let currentScores = `Current scores: Human - ${humanScore} | Computer - ${computerScore}`;
            score.textContent = currentScores;
            rounds.textContent = `Round #${games}`;
        } else {
            result.textContent = 'tie';
        }

        const body = document.querySelector('body');

        if(games === 5 && humanScore > computerScore){
            rounds.textContent = 'You won this game!';
            humanScore = 0;
            computerScore = 0;
            games = 0;
        }else if (games === 5 && humanScore < computerScore){
            rounds.textContent = 'Computer wins this game!';
            humanScore = 0;
            computerScore = 0;
            games = 0;
        }else if (games === 5 && humanScore === computerScore){
            rounds.textContent = 'This game was a tie!';
            humanScore = 0;
            computerScore = 0;
            games = 0;
        }
    };

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            switch (button.value) {
                case 'rock':
                    playRound(getHumanChoice('rock'), getComputerChoice());
                    break;
                case 'paper':
                    playRound(getHumanChoice('paper'), getComputerChoice());
                    break;
                case 'scissors':
                    playRound(getHumanChoice('scissors'), getComputerChoice());
                    break;
                default:
                    break;
            }
        });
    });


};

playGame();