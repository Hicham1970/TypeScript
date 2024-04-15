// type Alias & Interface:
// define a Vegetables type:
// type Vegetables = {
//     name: string,
//     color: string,
//     taste: string,
//     allSeason: boolean
// }
// // from this Vegetables type alias we can create an instance Vegetables1 and the Vegetables2:
// let Vegetables1: Vegetables = {
//     name: "Orange",
//     color: "Orange",
//     taste: "Sweet",
//     allSeason: true
// }

// let Vegetables2: Vegetables = {
//     name: "Banana",
//     color: "Yellow",
//     taste: "Sweet",
//     allSeason: true
// }

// Supposons que je veut ajouter une propriété dans le type Vegetables:

// type Vegetables = {
// price: number
// }
// On aura une erreur === > les interfaces entre en jeu.Il suffit de changer type par interface et enlever les signes égale.

interface Vegetables {
  name: string;
  color: string;
  taste: string;
  allSeason: boolean;
}

// Avec l'interface on peut créer d'autre  interface qui hérite des caractéristiques de l'interface Vegetable.et qui possède des propriété en plus.
interface Fruit  extends Vegetables {
  price: number;
}

let Fruit1: Fruit = {
  name: "Orange",
  color: "Orange",
  taste: "Sweet",
    allSeason: true,
  price: 12
};

let Fruit2: Fruit = {
  name: "Banana",
  color: "Yellow",
  taste: "Sweet",
    allSeason: true,
  price:22
};
