"use strict";
// In typescript the annotation of an array is very special
const names = [];
names.push("Dylan"); // no error
names.push(3); // error
console.log(names);
