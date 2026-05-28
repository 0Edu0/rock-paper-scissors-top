

function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    const selectOption = computerOptions[Math.floor(Math.random() * 3)];
    return selectOption;
}

function getHumanChoice(){
    const humanOption = prompt('Enter rock, paper or scissors!');
    return humanOption;
}