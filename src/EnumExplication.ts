//Enums
/* Supposons que nous avons une fonction pour verifier les skills des développeurs,
 on envois le paramètre a la fonction pour quelle vérifie le skill
*/
// function checkDev(type: String) {
//   if (type === "frontEnd" || type === "backEnd" || type === "fullStack") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkDev("frontEnd"));

// * on suppose que les paramètres frontEnd backEnd et fullStack sont inchangeables et on tape par erreur le paramètre "FrontEnd" par exemple, on aura une erreur, cette valeur est susceptible d’être changer par erreur*/
//!* Comment y remédier? Par les enums.
/*Pour créer un enum , on écrits  enum enumeration {} et les valeurs a l’intérieur s’appellent les membres   de l'enum, il suffit de faire un focus over le membre pour voir:
Par défaut au  premier membre  en assigne la valeur 0, le 2éme aura la valeur 1 et ainsi de suite 
Si on donne au premier membre la valeur de 5, le 2éme aura la valeur de 6.
On peut aussi assigner a ces membre des valeurs de type string (ca doit être en lettre capitale "FRONTEND") .
Pour attendre les valeurs de ces membres on fait appelle a developer.membre */

enum developer{
    frontEnd = "FRONT" , 
    backEnd = "BACK",
    fullStack = "FULL"
}; 
console.log(developer.frontEnd);
/**
 ** Si on utilise les enums, on peut typer le paramètre de notre fonction par le nom de notre enum
 ** cad developer, l'avantage est que les valeurs des membres sont maintenant  accessibles via **developer.frontEnd qui est plus stable est constante que le string "frontEnd". cqf.
 ** Ceci est du au faite que nous utilisons uniquement les membres de notre enum.
 ** Et si on veut changer quelque chose , on le fait au niveau de l'enum==> frontEnd = "FRONT" 
 **LE script est compiler en javascript pour qu'il fonctionne  sur un navigateur ou un serveur nodejs,
 **aller voir comment le même code en typescript de l'enum est réécris en js , une difference énorme.
 *
 */
function checkDev(type: developer) {
  if (
    type === developer.frontEnd ||
    type === developer.backEnd ||
    type === developer.fullStack
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkDev(developer.frontEnd));
