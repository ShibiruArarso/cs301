let prompt = require('prompt-sync')();
const weather = prompt('choose the correct footwear depend on weather ');

if (weather === "hot") {
    console.log("sandals");
} else if (weather === "rain") {
    console.log("galoshes");
} else if (weather === "snow") {
    console.log("boots");
} else {
    console.log("sneakers");
}