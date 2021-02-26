let prompt = require('prompt-sync')();
let inputNumber = +prompt('Please enter an integer');
let sum = 1;

for (i = 0; i < inputNumber; i++) {
    sum = sum * (inputNumber - i);
}

console.log(inputNumber + '! = ' + sum);