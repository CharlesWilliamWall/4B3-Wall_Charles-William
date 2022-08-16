const annee = Math.floor(Math.random() * 3001);

let bissextile = "non bissextile.";
if (annee % 4 == 0 && (annee % 100 != 0 || annee % 400 == 0)) {
  bissextile = "bissextile.";
}

console.log(`L'année ${annee} est ${bissextile}`);