let prompt = require('prompt-sync')();
let inputNumber = +prompt('Please enter PIN NUM');

const pin = 1234;


for (i = 1; i < 3; i++) {
    if (inputNumber === pin) {
        console.log("Correct, welcome back.");
    } else {
        console.log("Incorrect, try again");
    }
    inputNumber = +prompt('Please enter PIN NUM');
}

console.log("Sorry but you have been locked out.");