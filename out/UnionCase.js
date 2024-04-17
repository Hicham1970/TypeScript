"use strict";
/**Union type:
 * Utiliser pour montrer que la variable peut avoir plus qu'un seul type de type.
 */
let someId;
someId = "123"; // OK
someId = 456; // OK
// someId = true;    Not KO
//----------------------
let email;
email = "h.ght@dsss.com";
email = null; // OK
let anotherId; // OK
anotherId = "hello"; // OK
anotherId = 987; // OK
function getUser(id) {
    console.log(`Getting user with id ${id}`);
}
console.log(getUser("1")); // OK
console.log(getUser(987)); // OK
//# sourceMappingURL=UnionCase.js.map