/**Typescript Classes:
 * TypeScript adds types and visibility modifiers to JavaScript classes.
 * The members of a class (properties & methods) are typed using type annotations, similar to variables.Class members also be given special modifiers which affect visibility:
- `public` - (default) allows access to the class member from anywhere
- `private` - only allows access to the class member from within the class
- `protected` - allows access to the class member from itself and any classes that inherit it.
 */

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Maria");
// console.log(person.name);// person.name isn't accessible from outside the class since it's private
console.log(person.getName());

// Propriété des paramètres:
//TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
class Animal {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const animal = new Animal("Lion");
console.log(animal.getName());

// Readonly:
//Similar to arrays, the readonly keyword can prevent class members from being changed.
class Plant {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const tree1 = new Plant("Palm");
console.log(tree1.getName());
const tree2 = new Plant("Orange");
console.log(tree2.getName());

/** 
 * 
Inheritance: Implements
Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.
 */

interface Form {
  getArea: () => number;
}

class Rectangle implements Form {
  public constructor(
    protected readonly largeur: number,
    protected readonly longueur: number
  ) {}

  public getArea(): number {
    return this.largeur * this.longueur;
  }
}

const rectangle1 = new Rectangle(5, 4);
console.log(`The area of the rectangle is ${rectangle1.getArea()}`);
// The interface "Form" is implemented by "Rectangle".
//A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {
// This means that any object of type "Rectangle" will have all properties and methods required by an object of type "Form".</s

// Inheritance : Extends:
// Classes can extend each other through the extends keyword. A class can only extends one other class.
interface Shape {
  getArea: () => number;
}

class Recta implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}
