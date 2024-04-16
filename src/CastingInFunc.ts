function displayLength(input: string | number) {
    if (typeof input === 'string') { 
        console.log((input as string).length);
    } else {
        console.log("Désolé the length() propriété est uniquement réservée pour les chaines de caractères !!!!")
    }
}
displayLength("Hello World"); // 1
displayLength(121212); 

// Si je ne  sais pas le type de l'argument, j'utilise as pour  dire a typescript de se comporter avec ce paramètre comme si il est de type string , même si il est de type number
