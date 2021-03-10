"use strict";
/**
 * 
 * @param {string} str coming
 * @returns{string} reverse result
 */
function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse("ABCD"));