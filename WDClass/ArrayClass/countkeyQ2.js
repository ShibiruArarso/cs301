"use strict";
//Question2
let user = {
    name: "shibiru",
    age: 27,
    lottery: "powerball",

};
/**
 * 
 * @param {Object} obj coming
 * @returns{number}total key
 */
function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties(user));
