function pairImpair(input) {
    input = window.prompt("Entrez un nombre");
    const texte = document.getElementsByTagName('p');
if (input == null || input == String || input != parseInt(input)) {
    for(let r of texte){r.classList.add('red');}
    console.log("erreur");
    document.getElementById("reponse").innerHTML = "erreur";
}
if(input % 2 == 0){
    for(let t of texte){t.classList.add('blue');}
    console.log("pair");
    document.getElementById("reponse").innerHTML = "pair";
}if(input % 2 == 1){
    for(let y of texte){y.classList.add('brown');}
    console.log("impair");
    document.getElementById("reponse").innerHTML = "impair";
}
}