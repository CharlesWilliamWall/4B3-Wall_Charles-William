function personne(prenom, nom, autresPrenom, date, sexe, fumeur, poids, taille) {
    prenom: prenom;
    nom: nom;
    autresPrenom: [autresPrenom];
    Date_de_naissance: new Date(date);
    sexe: sexe;
    fumeur: fumeur;
    mesures: {
        poids: poids;
        taille: taille;
    };
    getNomComplet = function() {
        return prenom + " " + nom;
    };
    imc = function() {
        return (poids / ((taille / 100) * (taille / 100))).toFixed(2);
    }
}
let jean = new personne("Jean", "Arrache", "Maiden", "1984-02-29", "m", false, 80, 175);
console.log(getNomComplet());
console.log(imc());