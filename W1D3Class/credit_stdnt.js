let prompt = require('prompt-sync')();
const credits = +prompt('Enter number of credit completed so that I will tell your name:  ');
if (credits <= 0) {

} else if (credits < 30) {
    console.log("Fresh man");
} else if (credits < 60) {
    console.log("Sophomore");
} else if (credits < 90) {
    console.log("Junior");
} else {
    console.log("Senior");
}