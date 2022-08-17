const chaine = "a";
if(chaine.length <= 1){
    console.log("la chaine est vide");
}
else{
let result=(chaine.length >= 4) ? chaine.slice(0,2) : chaine.slice(0,1);
console.log(result);
}