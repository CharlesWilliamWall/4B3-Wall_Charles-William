function ajouterNombre() {
    const nombreInt = prompt("Entrez votre nombre");
    let nombre = Number(nombreInt);
    let contenu = document.getElementById("contenu");
    let newUl = document.getElementById("ulContent");
    if(newUl==null){
        newUl = document.createElement("ul");
        newUl.id = "ulContent";
    }
    let newLi = document.createElement("li");
    if (!isNaN(nombre)) {
        newLi.innerHTML = nombre;
        contenu.appendChild(newUl);
        newUl.appendChild(newLi);

        let li = document.getElementsByTagName("li");
        let liArray = Array.from(li);
        liArray.sort(function (a, b) {
            return a.innerHTML - b.innerHTML;
        });

        for (let i = 0; i < liArray.length; i++) {
            newUl.appendChild(liArray[i]);
        }
    } else {
        alert("Entrez un nombre valide");
    }
}
