Console-based rock, paper, scissors game made with JS as part of the foundations project for The Odin Project curriculum. 
Works through 4 functions: 
getComputerChoice(): It gets a random option out of 3 from an array for the computer's choice using Math.floor and Math.random. 
getHumanChoice(): It uses the prompt() method to get the input from the user, and it converts it to lower case so that it can later match with the computer's choice for the came to work.
playRound(): It includes all the logic for the game through if and else if statements to choose a winner in each comparison scenario between the human's and the computer's selection, then, depending on the winner, it sums a point to either of the scores, and logs the current score after the sum. 
playGame(): It invokes the playRound() function and has the logic for the game to last 5 rounds, and at the end, it compares the scores from both and logs who the winner is. 
