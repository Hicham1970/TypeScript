// ex1
type st = string;

let myName : st = "Hicham";
console.log(myName); // Hicham

myName = "Daoud";
console.log(myName); // Daoud

myName = 222;   

//Ex2:

type stringAndNumber = string | number;

let myName2: stringAndNumber = "Hicham";
console.log(myName2); // Hicham

myName2 = 222;
console.log(myName2); // 222

myName = true;  