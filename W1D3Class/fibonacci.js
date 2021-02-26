let prompt = require('prompt-sync')();
let inputNumber = +prompt('Please enter a number');
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= inputNumber; i++) {

    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}