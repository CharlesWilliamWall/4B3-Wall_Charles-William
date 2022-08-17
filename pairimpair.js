const nombre = Math.floor(Math.random() * 3001);
let nombredeux = NaN;
if(nombre % 2 == 0){
    console.log(`${nombre} est un nombre pair`);
}
if(nombre % 2 != 0){
    console.log(`${nombre} est un nombre impair`);
}
else{
    console.log(`Erreur 18 ${nombredeux} n'est pas un nombre`);
}