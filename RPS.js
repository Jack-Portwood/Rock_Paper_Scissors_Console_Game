// gets users input 
const  getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
        if(userInput === 'rock'||userInput === 'paper'||userInput === 'scissors'){
            return userInput;
        }else{
            console.log('Pick either Rock, Paper or Scissors')
        }
};

let userChoice = "ROCK"



let getComputerChoice = () => {
    return Math.floor(Math.random() * 3);
};




checkRandomNumber = (paramInput) => {
    switch (paramInput) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2: 
            return 'scissors'; 
        default:
            return 'error: case statement failed';
    }
}

// console.log(checkRandomNumber(getComputerChoice()));

// console.log(getComputerChoice());


// let determineWinner = (userChoice, computerChoice) => {
//     if(userChoice === computerChoice) {
//         return 'The game is a tie!'; 
//     }
// }

// console.log(determineWinner(userChoice, getComputerChoice()));

winOrLose = () => {

    let userInput = userChoice.toLocaleLowerCase();

    let computerChoice = checkRandomNumber(getComputerChoice());

    console.log('Your threw: ' + userInput);

    console.log('The computer threw: ' + computerChoice);


if(userInput !== computerChoice) { 
    if (userInput === 'rock' && computerChoice === 'paper'){ 
        console.log('The computer won!');
    }else if( userInput === 'rock' && computerChoice === 'scissors'){
        console.log("You Won"); 
    }else if( userInput === 'paper' && computerChoice === 'scissors'){
        console.log("The computer won!");
    }else if( userInput === 'paper' && computerChoice === 'rock'){
        console.log("You Won"); 
    }else if( userInput === 'scissors' && computerChoice === 'rock'){
        console.log("The computer won!");
    }else if( userInput === 'scissors' && computerChoice === 'paper'){
        console.log("You won");
    } else {
        console.log("error: winorLose not working");
    }
    }else{
        console.log('The game is a tie!'); 
    }   
}

winOrLose();