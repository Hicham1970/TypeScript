const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty";

// error on the line below : Error: Type 'string' is not assignable to type 'number'.

console.log("Salut")