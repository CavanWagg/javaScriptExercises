"use strict";
// declaration
// function modulus(params) {

// expression (assigned to a variable)
// const even = function(param) {
//   const result = param % 2;
// //  console.log(result);
//   return result;
// };

// const wellIsIt = even(10);
// console.log(wellIsI

// const adder = function(arg1, arg2) {
//     const result = arg1 + arg2;
//     return result;
// }
// const sum = adder(1,5);
// // const answer = adder(1,2);
// console.log(sum);

// const subtractor = function(arg1, arg2) {
//   const result = arg1 - arg2;
//   return result;
// };

// const difference = subtractor(1, 5);
// // const answer = adder(1,2);
// console.log(difference);

const mathTeacher = {
  name: "Josh",
  good: false,
  adder: function(arg1, arg2) {
    const result = arg1 + arg2;
    return result;
  }
};
console.log(mathTeacher.adder(1, 5));
