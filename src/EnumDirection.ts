enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);

// Get all allowed enums values:
let keys = Object.keys(Direction);
console.table(keys);

// c8heck if a value equals an enum value:
function isDirection(type: Direction) {
  if (type === Direction.Up || type === Direction.Down) {
    console.log("Direction found : North or South");
  } else {
    console.log("Direction found : Est or West");
  }
}
console.log(isDirection(Direction.Left));

//Check if a value is in the Enum:

console.log(Direction.hasOwnProperty("down")); // true
//Making the javascript objects immutable cad qu'on peut pas changer ou alterer , ceci est possible en utilisant Object.freeze().
function createEnum(values: string[]) {
  const enumObject: { [key: string]: string } = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
}

// { Up: 'Up', Down: 'Down', Left: 'Left', Right: 'Right' }
console.log(createEnum(["Up", "Down", "Left", "Right"]));
/**Here the explain of this last function from Codiumate Chat Ai:
 * 
 * The function createEnum takes an array of strings (values) and constructs an object where each string is both a key and its corresponding value. This mimics the behavior of an enumeration (enum) in TypeScript, where each enum member has a name and a value.

Here's a breakdown of the function:

Initialization: An empty object enumObject is created. This object will store the keys and values.
Loop through values: The function iterates over the array values using a for loop. For each string val in the array, a property on enumObject is created where the key is val and the value is also val.
Freeze the object: The Object.freeze() method is called on enumObject. This method prevents any modifications to the object, making it immutable. This is similar to how enums are typically non-modifiable.
Return the object: The now immutable enumObject is returned from the function.
The example usage console.log(createEnum(["Up", "Down", "Left", "Right"])); demonstrates how to create an enum-like object with the values "Up", "Down", "Left", and "Right". The output of this line will be an object { Up: 'Up', Down: 'Down', Left: 'Left', Right: 'Right' }, and this object cannot be altered due to Object. */