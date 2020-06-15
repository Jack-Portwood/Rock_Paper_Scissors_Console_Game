// gets users input 
const  getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
        if(userInput === 'rock'||userInput === 'paper'||userInput === 'scissors'){
            return userInput;
        }else{
            console.log('Pick either Rock, Paper or Scissors')
        }
};

let testVar = "ROCK"



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
            return 'scissor'; 
        default:
            return 'error: case statement failed';
    }
}

console.log(checkRandomNumber(getComputerChoice()));

console.log(getComputerChoice());