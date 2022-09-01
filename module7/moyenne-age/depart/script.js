function ajouterPersonne(prenom, age) {
    var personne = {
        prenom: prompt("Entrez votre nom"),
        age: prompt("Entrez votre age")
    };
    let pre = document.createElement("p");
    let ag = document.createElement("p");
    pre.textContent = personne.prenom;
    ag.textContent = personne.age;
    pre.className = "prenom";
    ag.className = "age";
    let contenu = document.getElementById("contenu");
    let newDiv = document.createElement("h1");
    let newDiv2 = document.createElement("h1");
    newDiv.className = "nom";
    newDiv2.className = "nom";
    newDiv.textContent = "Name";
    newDiv2.textContent = "Age";
    newDiv.appendChild(pre);
    newDiv2.appendChild(ag);
    contenu.appendChild(newDiv);
    contenu.appendChild(newDiv2);
    return pre + ag;
}