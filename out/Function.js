"use strict";
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
/**
 * Void Return Type
// The type void can be used to indicate a function doesn't return any value.
 */
function printHelloWorld() {
    console.log("Hello World !!");
}
printHelloWorld();
// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
// We can specify multiple parameters separated by commas
function multiplyNumbers(a, b) {
    return a * b;
}
let result = multiplyNumbers(5, 10);
console.log(`Result is ${result}`);
//If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.
// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(1, 2)); // Outputs
//Default Parameters
// For parameters with default values, the default value goes after the type annotation:
function exponentiel(val, exponent = 10) {
    return val ** exponent;
}
console.log(exponentiel(4));
//TypeScript can also infer the type from the default value.
// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 8, divisor: 2 }));
//Rest Parameters
// The rest parameter is denoted by an ellipsis (`...`) followed by the parameter name.
// Rest parameters must be last in the function declaration.
function addAll(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addAll(10, 10, 10, 10, 10));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
console.log(negateFunction(10));
//# sourceMappingURL=Function.js.map