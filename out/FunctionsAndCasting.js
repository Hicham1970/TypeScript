"use strict";
// Typescript possède plusieurs manières de définir les fonctions:
//Ex1 Return type: the type of the value returned by the function
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// Ex2 Void Return type  : Used to indicate that this function will return nothing
function getTimeVoidTest() {
    console.log("Hello World !");
    // return new Date(0); // Error, because we are returning a value in a void function
}
getTimeVoidTest();
// Ex3 Parameters function parameter are typed with a similar  syntax as variable declaration.
// if there is no param. typescript will by default use "any" as param.
function multiply(a, b) {
    return a * b;
}
console.log("Le résultat de la multiplication est :" + multiply(4, 5));
// here below typescript automatically returns the type of the result to number:
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 7)); //number
console.log(typeof sum(4, 7)); // number.
// EX4  Optional parameters : If you want an argument to be optional, you can add ? after its type.
function greet(name) {
    console.log(`Hi ${name || 'Anonymous'}!`);
}
console.log(greet('John'));
console.log(greet());
// EX5 default parameter:
//  In TypeScript, you can provide a default value for your function’s parameters using the = operator
function greetingDefault(name = 'Guest') {
    console.log(`Hi ${name}!`);
}
console.log(greetingDefault('John'));
function divideDefaultTest(a, b = 1) {
    return a / b;
}
console.log(divideDefaultTest(8, 2));
console.log(divideDefaultTest(22));
//Ex Named parameters: follows the same  rules as optional and default parameters.seulement les paramètres nommés sont tout le temps mises entre des intervalles.
function namedParameters({ a, b }) {
    return a * a / b;
}
console.log(namedParameters({ a: 10, b: 6 }));
//Ex6  Rest Parameters: A special syntax ...args lets us write functions that can take any number of arguments, the type parameter must be an array.
function addRestParameter(a, b, ...rest) {
    let sum = a + b;
    for (let i of rest) {
        sum += i;
    }
    return sum + rest.length;
}
console.log(addRestParameter(3, 4, 12, 9, 3, 4, 12, 9));
// nothing exceptional with the Casting .
//# sourceMappingURL=FunctionsAndCasting.js.map