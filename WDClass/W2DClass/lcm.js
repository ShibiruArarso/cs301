"use strict";
/**
 * 
 * @param {number} num1 is a number which is used to compute with num2  
 * @param {number} num2 is a number which is used to compute with num2
 */

let compute = function (num1, num2) {
    for (let i = 1; i <= num1 && i <= num2; i++) {


        if (num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }

    // find LCM
    let lcm = (num1 * num2) / hcf;

    console.log(`HCF of ${num1} and ${num2} is ${lcm}.`);
};

let hcf;
compute(8, 12);
