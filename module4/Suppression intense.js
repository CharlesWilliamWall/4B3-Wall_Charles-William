function suppression(tableau, ...aSupprimer) {
    let reponse = tableau;
    if (Array.isArray(reponse)){
        reponse = [...tableau];
        for (const element of aSupprimer){
            let index;
            while ((index = reponse.indexOf(element)) != -1){
                reponse.splice(index, 1);
            }
        }
    }
    return reponse;
}

let tableau = ["a", "b", "a", 0, 4, false, false, true];
let reponse = suppression(tableau, "a", 4, false);
console.log(reponse);
console.log(tableau);