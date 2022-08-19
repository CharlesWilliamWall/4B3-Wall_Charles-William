const tableau = ["parc", "magasin", "", "b", "a", "zoo", "île", "1", "11"];
tableau.sort((a,b) => a.localeCompare(b, 'fr'));
tableau.sort(function(a, b){
    return a.length - b.length;
  });
console.log(tableau);

