"use strict";
/**Class Tuto
 * Toute class a besoin de propriétés , et les propr. ont besoin de constructor pour les initialiser qd on fait un new Class().
 *
 */
class Navire {
    constructor(name, nationality, port_d_attache, age) {
        this.name = name;
        this.nationality = nationality;
        this.port_d_attache = port_d_attache;
        this.age = age;
    }
}
const bateau1 = new Navire("Mv Sua", "portugaise", "Madeira", 20);
console.log(`Le navire porte le nom de  ${bateau1.name}
et la nationalité de ${bateau1.nationality} et son port d'attache
 est ${bateau1.port_d_attache} , il est agé de ${bateau1.age}  ans`);
//# sourceMappingURL=ClassTuto.js.map