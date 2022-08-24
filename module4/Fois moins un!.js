const tableau = [-10, 1, -34, 56, 45, -1];
tableau.forEach((element,i,tab) => {tab[i] = [tab[i] * -1]});
console.log(tableau);