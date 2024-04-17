"use strict";
/**Typescript Classes:
 * TypeScript adds types and visibility modifiers to JavaScript classes.
 * The members of a class (properties & methods) are typed using type annotations, similar to variables.Class members also be given special modifiers which affect visibility:
- `public` - (default) allows access to the class member from anywhere
- `private` - only allows access to the class member from within the class
- `protected` - allows access to the class member from itself and any classes that inherit it.
 */
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
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
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const animal = new Animal("Lion");
console.log(animal.getName());
// Readonly:
//Similar to arrays, the readonly keyword can prevent class members from being changed.
class Plant {
    constructor(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const tree1 = new Plant("Palm");
console.log(tree1.getName());
const tree2 = new Plant("Orange");
console.log(tree2.getName());
class Rectangle {
    constructor(largeur, longueur) {
        this.largeur = largeur;
        this.longueur = longueur;
    }
    getArea() {
        return this.largeur * this.longueur;
    }
}
const rectangle1 = new Rectangle(5, 4);
console.log(`The area of the rectangle is ${rectangle1.getArea()}`);
class Recta {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
//# sourceMappingURL=ClassTS.js.map