let prompt = require('prompt-sync')();
const km = +prompt('Eneter distance in KM: ');
const ml = km * 0.62137;
console.log(`${km}KM is ${ml} in miles`);