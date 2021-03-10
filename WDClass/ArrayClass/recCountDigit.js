"use strict";
/**
 * 
 * @param {number} num coming
 * @returns{number} result
 */
function countDigit(num) {
    if (num === "")
        return 0;
    else
        return 1 + countDigit(num.substr(1));
}
console.log(countDigit("12345"));

