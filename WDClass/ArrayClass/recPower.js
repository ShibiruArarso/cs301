"use strict";
/**
 * 
 * @param {number} x coming
 * @param {number} n coming
 * @returns{number} result
 */
function pow(x, n) {

    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}


console.log(pow(2, 3));