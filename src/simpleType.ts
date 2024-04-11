/**
 * any is a type that disables type checking and effectively allows all types to be used.
The example below does not use any and will throw an error:
 */

let u = true;
u = "string";

u.runANonExistentMethod();

console.log(Math.round(u)); // string

/**
 * Setting any to the special type any disables type checking:
 * any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...
 */

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// type : unknown is a type that is a super type of any and all types. It's like 'object' in JavaScript but with stricter type checking.is more safer than any.

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't know the type?
w.runANonExistentMethod();
if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
/**---------------------------- */
/**
 * 
Type: never
never effectively throws an error whenever it is defined.
never is rarely used, especially by itself, its primary use is in advanced generics.
never is a subtype of any and all types. However, no type is a subtype of never.
In other words, if you specify a function that returns never, it will never return. If you try to call this function, TypeScript will throw an error.
 */

let x: never = true;

// Type undefined and null: These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.

let y: undefined = undefined;
let z: null = null;
