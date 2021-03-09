"use strict";
let car = {};
car.make = "Toyota";
car.model = "camry";
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.make;
console.log(car);