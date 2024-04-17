/**Class Tuto
 * Toute class a besoin de propriétés , et les propr. ont besoin de constructor pour les initialiser qd on fait un new Class().
 *
 */

class Navire {
  name: String;
  nationality: string;
  port_d_attache: string;
  age: number;
  constructor(
    name: String,
    nationality: string,
    port_d_attache: string,
    age: number
  ) {
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

class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;
  secondLanguage!: string; // on veut l'initialiser ds le constructeur, car on ne sait pas de quoi il s'agit

  constructor(
    public readonly name: string,
    public music: st,
    private age: number,// accessible  uniquement dans le meme objets qui l'ont créé cad la class  Coder
    protected lang: string =  "Javascript", // accessible ds cette class et dans les class qui en dérivent
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return 	 `L'âge du coder est de ${this.age} years old`
  }
}

let c1 = new Coder("John Doe", "Rock", 35);
console.log(c1)
console.log(c1.getAge()); 

