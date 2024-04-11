"use strict";
// TypeScript has a specific syntax for typing objects.
// Try playing around with modifying properties and adding ones to see what happens
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
    color: "red",
    constructor: "GMC",
    capacity: 1300,
};
console.log(car);
// type inference:TypeScript can infer the types of properties based on their values.
const truck = {
    type: "Toyota",
};
truck.type = "Ford"; // no error
truck.type = 2;
// Optional properties:
// no error on optional property, remove it and see what happens
const boat = {
    type: "Toyota"
};
boat.mileage = 2000;
console.log(car);
//# sourceMappingURL=tsObject.js.map