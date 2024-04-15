interface Navire {
  nom: string;
  tonnage: number;
  longueur: number;
  largeur: number;
  nationalité: string;
  port_d_attache: string;
  niceShape :  boolean;
}

type bulk = Navire & {
  nbVoyages: number;
  naviresEnCoursDeConstruction: boolean;
  port_actuel: string;
  office: [string, string, string, number];
};

let Mv_Sua: bulk & {
  nbVoyages: number;
  naviresEnCoursDeConstruction: boolean;
  port_actuel: string;
} = {
  nom: "MV Sua",
  tonnage: 5059,
  longueur: 312.86,
  largeur: 74.15,
  nationalité: "Spanish",
  port_d_attache: "Salvador de Bahia",
  nbVoyages: 10,
  naviresEnCoursDeConstruction: false,
  port_actuel: "Casablanca",
  niceShape: true,
  office: ["antenna", "bridge", "engine room", 12],
};

console.log(Mv_Sua); // affichage des propriétés du navire MV Sua.
Mv_Sua.office[0] = "radar";    // modification de la valeur d'une propriété (ici le poste à bord).
// On peut accéder à une propriété en utilisant la notation suivante :
// Mv_Sua.nom ou Mv_Sua.longueur

console.log(Mv_Sua.office[0]);
console.log(Mv_Sua.nbVoyages);
console.log(Mv_Sua.naviresEnCoursDeConstruction);