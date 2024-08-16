"use strict";
// arrays, objects, strings, function arguments
// concat arrays
const arr1 = [10, 20];
const arr2 = [30, 40];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
// cloning arrays
const arr4 = [10, 20];
const arr5 = [...arr4];
const arr6 = arr4;
console.log(arr4, arr5, arr6); /**[ 10, 20 ] [ 10, 20 ] [ 10, 20 ] */
console.log(arr4 === arr5); /* false because arr5 points to diff memory location */
console.log(arr4 === arr6); /* true because arr6 points to same memory location */
arr4.splice(1, 1);
console.log(arr4, arr5, arr6); /**[ 10 ] [ 10, 20 ] [ 10 ] */
const persons = {
    name: "John",
    age: 30
};
const employee = Object.assign(Object.assign({}, persons), { salary: 50000 });
console.log(employee);
