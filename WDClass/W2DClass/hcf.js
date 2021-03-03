

let compute = function (num1, num2) {
    for (let i = 1; i <= num1 && i <= num2; i++) {

        if (num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }
    console.log(`HCF of ${num1} and ${num2} is ${hcf}.`);
}
let hcf;
compute(9, 6);