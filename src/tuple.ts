/**
 * A tuple is a typed array; with a pre defined length and type for each index.
 *
 */

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

console.log(ourTuple);
//-----------------------------------------------

//As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:

// define our tuple
let yourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
yourTuple = [false, "Coding God was mistaken", 5];

// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:

// define our tuple
let otherTuple: [number, boolean, string];
// initialize correctly
otherTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
otherTuple.push("Something new and wrong");
console.log(otherTuple);

// using the readonly :
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');

// Named tuples provides more context for what our index value represent
//const graph: [x: number, y: number] = [55.2, 41.3];