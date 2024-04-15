/**
 * Data Type:
 * Enums ou Enumerations;
 * ---Enums can refer to other Enums
 * ---Enums can refer to same Enum
 * ---Enums can have calculations
 * ---Enums can have functions
 */

function getDeepThinking(): number {
  return 1;
}

enum garçon {
  cinq = 25,
  sept = 20,
  dix = 15,
}

// comment joindre 2 enums :

enum level {
  Bébé = garçon.cinq,
  Jeune = 13,
  Adult = Jeune + 18,
  Vieux = garçon.dix,
  Extraordinaire = getDeepThinking(),
}

let niv: string = "Genius";

if (niv === "Genius") {
  console.log(
    `Le niveau est ${niv} et le nombre des secondes est ${level.Extraordinaire}`
  );
}
