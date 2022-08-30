function pairImpair(input) {
if (input == null || input == String || input != parseInt(input)) {
    console.log("erreur");
}
if(input % 2 == 0){
    console.log("pair");
}if(input % 2 == 1){
    console.log("impair");
}
}