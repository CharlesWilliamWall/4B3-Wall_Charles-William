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
        console.log(prenom + " " + nom);
    };
}
let jean = personne("Jean", "Arrache", "Maiden", "1984-02-29", "m", false, 80, 175);
getNomComplet();

