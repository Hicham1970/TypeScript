/**
 * Using the | we are saying our parameter is a string or number:
 */

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
console.log(printStatusCode(404));// No error
console.log(printStatusCode("404"));

/**
Union Type Errors
Note: you need to know what your type is when union types are being used to avoid type errors:
 */
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code.toUpperCase()}.`) 
  Property 'toUpperCase' does not exist on type 'number'
}

//In our example we are having an issue invoking toUpperCase() as its a string method and number doesn't have access to it.