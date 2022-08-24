function Personne(prenom, nom, autresPrenom, date, sexe, fumeur, poids, taille) {
    this.prenom = prenom,
    this.nom = nom,
    this.autresPrenom = [autresPrenom];
    this.Date_de_naissance = new Date(date);
    this.sexe = sexe;
    this.fumeur = fumeur;
    this.mesures = {
        poids : poids,
        taille : taille
    };
    this.imc = function() {
        console.log(this.poids / ((this.taille / 100) * (this.taille / 100)));
    };
  this.getNomComplet = function () {
       return  this.prenom + " " + this.nom;
    };

}

const jean = new Personne("Jean", "Arrache", "Maiden", "1984-02-29", "m", false, 80, 175);
const elva = new Personne("Elva", "Trovite", "Marie-Eva", "1990-06-07T00:00:00.000Z", "f", false, 50, 160);
const Jean_Marc = new Personne("Jean-Marc", "Desbuttes", "", "1954-09-17T00:00:00.000Z", "m", true, 90, 190);
const Jessica = new Personne("Jessica", "Potreau", "Ella", "1999-11-24T00:00:00.000Z", "f", true, 85, 155);
console.log(jean);
console.log(elva);
console.log(Jean_Marc);
console.log(Jessica);