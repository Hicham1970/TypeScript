"use strict";
/**
 * Declaration d'une enumeration pour les directions cardinales:
 * Chaque membre de cette enumeration aura comme valeur par défaut son index dans l'ordre de déclaration.
 * On peut aussi assigner explicitement une valeur à chaque membre:
 */
var DirectionsCardinal;
(function (DirectionsCardinal) {
    DirectionsCardinal[DirectionsCardinal["North"] = 0] = "North";
    DirectionsCardinal[DirectionsCardinal["East"] = 1] = "East";
    DirectionsCardinal[DirectionsCardinal["South"] = 2] = "South";
    DirectionsCardinal[DirectionsCardinal["West"] = 3] = "West";
})(DirectionsCardinal || (DirectionsCardinal = {}));
let currentDirection = DirectionsCardinal.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.
/**Numeric Enums - Initialized:
 *   On peut assigner des valeurs numériques au membres:
*/
var developers;
(function (developers) {
    developers[developers["frontEnd"] = 1] = "frontEnd";
    developers[developers["backEnd"] = 2] = "backEnd";
    developers[developers["fullStack"] = 3] = "fullStack";
})(developers || (developers = {}));
console.log(developers.backEnd);
console.log(developers.frontEnd);
console.log(developers.fullStack);
// Numeric Enum: Fully Initialized:
var Transport;
(function (Transport) {
    Transport[Transport["Bus"] = 1] = "Bus";
    Transport[Transport["Train"] = 5] = "Train";
    Transport[Transport["Plane"] = 10] = "Plane";
})(Transport || (Transport = {}));
console.log(Transport.Bus);
console.log(Transport.Train);
console.log(Transport.Plane);
//Example 2:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
function checkStatus(type) {
    if (type === StatusCodes.Accepted || type === StatusCodes.BadRequest || type === StatusCodes.Success || type === StatusCodes.NotFound) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkStatus(StatusCodes.Success));
console.log(checkStatus(StatusCodes.BadRequest));
console.log(checkStatus(StatusCodes.NotFound + 1)); // False
/**
String Enums
Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.   */
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
//# sourceMappingURL=Enums.js.map