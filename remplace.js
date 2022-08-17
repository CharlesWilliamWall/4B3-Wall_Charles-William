let chaine = String;
if(chaine == String){
    let textone = "Sur le toit, il y a une balle"
    console.log(textone.replace("o", "w"));
    let texttwo = "Les chaussettes de l'archiduchesse sont-elles sèches?"
    console.log(texttwo.replace(/e/g, "a"));
    let textthree = "C'est en revenant de Rigaud."
    console.log(textthree.replace(/z/g, "e"));
}
else{
    console.log("Erreur");
}


