function ajouterChapitre(){
  const chapitreStr = prompt("Entrez votre texte");
  let roman = document.getElementById("roman");
  let newP = document.createElement("p");
  newP.textContent = chapitreStr;
  div.appendChild(newP);
  newP.className = "thin";
}

function supprimerChapitre(){
    const chapitreStr = prompt("Entrez le numéro du chapitre à supprimer");
    roman.removeChild(roman.childNodes[chapitreStr]);
}