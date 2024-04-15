"use strict";
// Supposons que nous avons plusieurs types qu'on veut gérer:
function getActions(btn) {
    console.log(`L'action de cliquer  ${btn.up} est : déplacer vers le haut`);
    console.log(`L'action de cliquer  ${btn.right} est : déplacer vers la droite`);
    console.log(`L'action de cliquer  ${btn.down} est : déplacer vers le bas`);
    console.log(`L'action de cliquer  ${btn.left} est : déplacer vers la gauche`);
}
console.log(getActions({ up: "Saute", right: "A droite", down: "Couche toi", left: "A gauche" }));
//# sourceMappingURL=AliasAdvenced.js.map