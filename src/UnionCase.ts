/**Union type:
 * Utiliser pour montrer que la variable peut avoir plus qu'un seul type de type.
 */

let someId: string | number;

someId = "123"; // OK
someId = 456; // OK
// someId = true;    Not KO
//----------------------

let email: string | null;
email = "h.ght@dsss.com";
email = null; // OK

//--------------------------

type id = string | number;

let anotherId: id; // OK
anotherId = "hello"; // OK
anotherId = 987; // OK

function getUser(id: id) {
  console.log(`Getting user with id ${id}`);
}
console.log(getUser("1")); // OK
console.log(getUser(987)); // OK
