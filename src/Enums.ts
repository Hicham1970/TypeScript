/**
 * Declaration d'une enumeration pour les directions cardinales:
 * Chaque membre de cette enumeration aura comme valeur par défaut son index dans l'ordre de déclaration.
 * On peut aussi assigner explicitement une valeur à chaque membre:
 */

enum DirectionsCardinal {
  North,
  East,
  South,
  West,
}

let currentDirection = DirectionsCardinal.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = "North"; // Error: "North" is not assignable to type 'CardinalDirections'.

/**Numeric Enums - Initialized:
 *   On peut assigner des valeurs numériques au membres:
*/ 
 

enum developers {
  frontEnd = 1,
  backEnd ,
  fullStack,
}

console.log(developers.backEnd);
console.log(developers.frontEnd);
console.log(developers.fullStack);


// Numeric Enum: Fully Initialized:

enum Transport {
  Bus = 1,
  Train = 5,
  Plane = 10
}
console.log(Transport.Bus);
console.log(Transport.Train);
console.log(Transport.Plane)

//Example 2:
enum StatusCodes {
  NotFound = 404,   
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}   

function checkStatus(type:StatusCodes){
    if (type === StatusCodes.Accepted || type === StatusCodes.BadRequest || type === StatusCodes.Success || type === StatusCodes.NotFound) {
        return true;
    } else {
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

enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);