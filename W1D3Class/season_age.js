let prompt = require('prompt-sync')();
const age = prompt('Enter age:  ');
const season = prompt('Enter :  ');

if (age <= 0) {

} else if (age <= 5) {
    if (season === "summer" || season === "fall") {
        console.log("8:30pm");
    }
    else if (season === "winter" || season === "spring") {
        console.log("8:00pm");
    }
} else if (age <= 12) {
    if (season === "summer") {
        console.log("9:30pm");
    }
    else if (season === "winter" || season === "spring" || season === "fall") {
        console.log("8:30pm");
    }
} else if (age >= 13) {
    if (season === "summer") {
        console.log("10:30pm");
    }
    if (season === "winter" || season === "spring" || season === "fall") {
        console.log("9:30pm")
    }
}