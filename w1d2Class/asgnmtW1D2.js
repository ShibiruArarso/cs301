let prompt = require('prompt-sync')();
const qrt = +prompt('Eneter volume in quarts: ');
const ltr = qrt / 1.0567;
console.log(`${qrt} is ${ltr} in litres`);
//-----------------------------------------------------
//2
