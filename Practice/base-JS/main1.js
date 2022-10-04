// This is a comment
/* This a 
Long 
Comment */
// alert("The file works!");
// console.log("Hello!");

// Variables
/* var unTexte = "Voici un texte";
console.log(unTexte);
unTexte = "Nouveau texte...";
console.log(unTexte);
const prenom = "Martine";
console.log(prenom);
let chaine = "Je suis une chaine de caractères.";
let chiffre = 24;
let nouvelleChaine = "Le chiffre attendu est : " + chiffre + " degrés.";
console.log(nouvelleChaine);
let nouvelleChaine2 = `Le chiffre attendu est : ${chiffre} degrés.`;
console.log(nouvelleChaine2); */

// type of data / type de données
/* let string = "Je suis une chaine";
let number = 24;
let boolean = true;
let array = ["je", "suis", 24, false]; //array/tableau
let object = { prenom: "Audrey", age: 20, ville: "Bordeaux" }; // index: value
console.log(array);
// In javascript array is object
console.log(typeof array);
let tree = null;
console.log(tree); */

// Structure de contrôle
/* let x = 2;
let y = 5;
if (x < y) {
    console.log("x est inférieur à y");
} else {
    console.log("x est supérieur à y");
} */

// Functions
//déclaration
function doSomething() {
    console.log("I am doing something!");
    console.log("Javascript is too cool!");
}
// appeler
doSomething();

const doATask = (tache) => {
    console.log("Je fais : " + tache);
};
doATask("Faire les courses.");
doATask("Faire le ménage.");

function calculate(x, y) {
    return x + y;
}
calculate(4, 9);

(function maFonction() {
    console.log("Je me joue toute seule!");
})();
(() => {
    console.log("Je me joue aussi toute seule!");
})();