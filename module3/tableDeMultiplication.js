entierUn = Number.isInteger(0);
entierDeux = Number.isInteger(5);
entierTrois = Number(-3);
entierQuatre = String(`10`);
entierCinq = Boolean(true);
entierSix = NaN;

console.log(`resultat 1`)
console.log(entierUn * 0);
console.log(`resultat 2`);
for (entierDeux = 0; entierDeux < 6; entierDeux++){ 
    console.log(entierDeux * 5);
}
console.log(`resultat 3`);
console.log(typeof entierTrois, entierTrois, `n'est pas un entier`);
console.log(`resultat 4`);
console.log(typeof entierQuatre , entierQuatre, `n'est pas un nombre`);    
console.log(`resultat 5`);
console.log(typeof entierCinq , entierCinq, ` n'est pas un nombre`);
console.log(`resultat 6`);
console.log(typeof entierSix , entierSix, `n'est pas un nombre`);