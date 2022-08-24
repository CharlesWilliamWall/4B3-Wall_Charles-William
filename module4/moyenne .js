function moyenne(tableau){
    let moy = undefined;
    if (Array.isArray(tableau)){
        moy = 0;
        let somme = 0;
        let nbNombres = 0;

        for (const element of tableau){
            somme += Number(element);
            nbNombres++;
        }
        if (nbNombres > 0) moy = somme / nbNombres;
        
    }
    return moy;
}
console.log(moyenne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
