function ajouterChapitre(){
    const chapitreStr = prompt("Entrez votre texte");
  // creer un nouveau chapitre p
  let newP = document.createElement("p");
  // inserer le contenue du prompt
  let newChapitre = document.createTextNode(chapitreStr);
  // ajoute le noeud texte au nouveau p créé
  newP.appendChild(newChapitre);
  // ajoute la class thin du css au nouveau div créé
    newP.className = "thin";
  // ajoute le nouvel élément créé et son contenu dans le DOM
  let currentP = document.getElementById('1');
  document.body.insertBefore(newP, currentP);
}

function supprimerChapitre(){
    const chapitreStr = prompt("Entrez le numéro du chapitre à supprimer");
    for (const chapitre of roman.rows) {
        let chapitre = document.getElementById(roman);
        chapitre.remove();
    }
}