"use strict";
/**
 * Data Type
 * --Enums Ou Enumerations
 * --Nous permet de declarer  un ensemble de noms constants
 * --Utilisé pour grouper des collections de constantes et de leurs valeurs respectives
 * --Ca organise le code et le rend plus lisible pour un être humain
 * -- Par défaut Enums sont basés  sur les nombre naturels (0,1,2...) mais on peut leur assigné des chaînes de caractères ou des objets.
 * --On a des Enums numériques, des Enums en chaines de caractères, et des Enums hétérogènes  (mélangeant des types string & numbers) .
 */
// supposons que nous avons un jeu avec différents niveaux de difficulté , et le niveau dépends des seconds  qu'il faudra jouer pour jouer.
var niveaux;
(function (niveaux) {
    niveaux[niveaux["Kids"] = 15] = "Kids";
    niveaux[niveaux["Junior"] = 10] = "Junior";
    niveaux[niveaux["Senior"] = 3] = "Senior";
    niveaux[niveaux["Master"] = 2] = "Master";
})(niveaux || (niveaux = {}));
// let niveauKids: number = niveau.Kids;
// let niveauJunior: number = niveau.Junior;
// let niveauSenior: number = niveau.Senior;
// let niveauMaster: number = niveau.Master;
let niveau = "Easy";
if (niveau === "Easy") {
    console.log(`Le niveau est ${niveau} et le nombre des secondes est ${niveaux.Kids}`);
}
// function checkNiveau(niveau: string) {
//   if (niveau === niveauKids) {
//     console.log(
//       `Le niveau atteint est  ${niveau} et le nombre des seconds est ${niveauKids}`
//     );
//   } else if (niveau === niveauMaster) {
//     console.log(
//       `Le niveau atteint est  ${niveau} et le nombre des seconds est ${niveauMaster}`
//     );
//   } else if (niveau === niveauJunior) {
//     console.log(
//       `Le niveau atteint est  ${niveau} et le nombre des seconds est ${niveauJunior}`
//     );
//   } else if (niveau === niveauSenior) {
//     console.log(
//       `Le niveau atteint est  ${niveau} et le nombre des seconds est ${niveauSenior}`
//     );
//   }
// }
// console.log(checkNiveau(9)); // affiche :
//# sourceMappingURL=EnumsType.js.map