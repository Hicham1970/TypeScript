// Try creating a new Car using the aliases.
// Définir les types d'alias :
type CarYear = number; // a type alias for the number type.
type CarType = string;
type CarModel = string;
//Création d'une instance Car avec les alias de types :
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};
// et les valeurs correspondents
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
// stockage de Car dans la variable carDeHicham:
const carDeHicham: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};
// affichage de la variable carDeHicham:
console.log(carDeHicham);

/**------------------------------------------------------ */
/**Interfaces
Interfaces are similar to type aliases, except they only apply to object types. */

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

console.log(rectangle);

/**--------------------------------------------------------------- */
/**Extending Interfaces
Interfaces can extend each other's definition.
Extending an interface means you are creating a new interface with the same properties as the original, plus something new. */
// Try creating a new interface and extending it like below
// define 1st interface with the properties width and heigh
interface Rectangle {
  height: number,
  width: number
}
// define the second interface that extends the first interface & add a color property:
interface ColoredRectangle extends Rectangle {
  color: string;
}

// create an object of the second interface and set a width and a heigh properties:
const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
// login in the console:
console.log(coloredRectangle);