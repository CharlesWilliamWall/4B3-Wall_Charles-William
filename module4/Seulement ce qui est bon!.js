const tableau = ["Bon", 8, "bonjour", true, [1, 2] , "javascript", "rebondir"];
const tabFiltre = tableau.filter(element => element.length > 2 && element.length < 9);
console.log(tabFiltre);