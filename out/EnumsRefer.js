"use strict";
/**
 * Data Type:
 * Enums ou Enumerations;
 * ---Enums can refer to other Enums
 * ---Enums can refer to same Enum
 * ---Enums can have calculations
 * ---Enums can have functions
 */
function getDeepThinking() {
    return 1;
}
var garçon;
(function (garçon) {
    garçon[garçon["cinq"] = 25] = "cinq";
    garçon[garçon["sept"] = 20] = "sept";
    garçon[garçon["dix"] = 15] = "dix";
})(garçon || (garçon = {}));
// comment joindre 2 enums :
var level;
(function (level) {
    level[level["B\u00E9b\u00E9"] = 25] = "B\u00E9b\u00E9";
    level[level["Jeune"] = 13] = "Jeune";
    level[level["Adult"] = 31] = "Adult";
    level[level["Vieux"] = 15] = "Vieux";
    level[level["Extraordinaire"] = getDeepThinking()] = "Extraordinaire";
})(level || (level = {}));
let niv = "Genius";
if (niv === "Genius") {
    console.log(`Le niveau est ${niv} et le nombre des secondes est ${level.Extraordinaire}`);
}
//# sourceMappingURL=EnumsRefer.js.map