"use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }

    }


    return true;
}

/**
 * 
 * @param {array} arr coming
 * @returns {number} result of addition of first and last elements of the array 
 */
function addend(arr) {
    if (arr === null || arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }

    let lastIndex = arr.length - 1;
    let sum = arr[0] + arr[lastIndex];

    return sum;
}
/**
 * 
 * @param {array} arr coming 
 * @returns {number} it return numbers 
 */
function getMiddle(arr) {
    if (arr.length % 2 !== 0) {
        let cntr = Math.floor(arr.length / 2);

        return arr[cntr];
    } else {
        let cntr1 = (arr.length / 2) - 1;
        let cntr2 = (arr.length / 2);
        let sum = arr[cntr1] + arr[cntr2];
        return sum / 2;

    }
}
/**
 * 
 * @param {array} arr coming 
 * @returns {number} it return numbers 
 */
function rotateLeft(arr) {
    let removeFirst = arr.shift();
    let addLast = arr.push(removeFirst);

    return arr;
}

module.exports = { isArrayEqual, addend, getMiddle, rotateLeft };