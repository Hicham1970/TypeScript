"use strict";
/* the function below will take the last interface as a parameter:*/
//2
function getActions(btn) {
    console.log(`L'action de cliquer  ${btn.up} est : déplacer vers le haut`);
    console.log(`L'action de cliquer  ${btn.right} est : déplacer vers la droite`);
    console.log(`L'action de cliquer  ${btn.down} est : déplacer vers le bas`);
    console.log(`L'action de cliquer  ${btn.left} est : déplacer vers la gauche`);
}
console.log(getActions({
    up: "Saute",
    right: "A droite",
    down: "Couche toi",
    left: "A gauche",
    x: true,
}));
//# sourceMappingURL=AliasAdvenced.js.map