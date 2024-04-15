// Supposons que nous avons plusieurs types qu'on veut gérer:
//1
type Bouton = {
  up: string;
  right: string;
  down: string;
  left: string;
};
//3 Supposons que j'ai un autre type qui contient les boutons et autre chose:
type last = Bouton & {
  x: boolean;
};

/* the function below will take the last interface as a parameter:*/

//2
function getActions(btn: last) {
  console.log(`L'action de cliquer  ${btn.up} est : déplacer vers le haut`);
  console.log(
    `L'action de cliquer  ${btn.right} est : déplacer vers la droite`
  );
  console.log(`L'action de cliquer  ${btn.down} est : déplacer vers le bas`);
  console.log(`L'action de cliquer  ${btn.left} est : déplacer vers la gauche`);
}

console.log(
  getActions({
    up: "Saute",
    right: "A droite",
    down: "Couche toi",
    left: "A gauche",
    x: true,
  })
);
