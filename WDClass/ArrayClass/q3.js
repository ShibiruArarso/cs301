"use strict";
/**
 * 
 * @param {object} str coming
 * @returns{boolean}bolean return
 */
function checkSpam(str) {
    if (str.includes("lottery") || str.includes("prize")) {
        return true;
    }
    return false;

}
console.log(checkSpam("lotteryythtfjfjtf"));
