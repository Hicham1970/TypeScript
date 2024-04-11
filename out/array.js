"use strict";
// In typescript the annotation of an array is very special
const names = [];
names.push("Dylan"); // no error
// names.push(3); // error
console.log(names);
// The readonly keyword can prevent arrays from being changed.
const news = ["Dylan"];
// news.push("Jack");
// try removing the readonly modifier and see if it works?
//--------------------------------------
//Type inference
// TYpescript can infer any type of variable, function, or class ,if the variable have a value .
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numbers); // [1, 2, 3, 4]
let head = numbers[0]; // no error
console.log(head); // 1
//# sourceMappingURL=array.js.map