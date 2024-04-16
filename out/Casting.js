"use strict";
/**Typescript Casting:
 * There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
Casting is the process of overriding a type.
*/
/** Casting with as:
 * A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
 */
let charabia = "hello";
console.log(charabia.length); // 5
let r = 4;
console.log(r.length); // prints undefined since numbers don't have a length
// console.log((4 as string).length);  // error because we are trying to cast a number to a string without using `as`// To fix this, we can use the Force Casting.
// Casting With <> is the same as the casting with as:
let fleur = "Jasmine";
console.log(fleur.length); //
//# Force casting
// To override type errors that TypeScript may throw when casting, first cast to `unknown`, then to the target type.
let bl = 'hello';
console.log(bl.length); // x is not actually a number so this will return undefined
//# sourceMappingURL=Casting.js.map