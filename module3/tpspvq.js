let sousTotal = 101;
let tps = 0;
let tvq = 0;
let total = 0;
tps = 0.05 * sousTotal;
tvq = 0.09975 * sousTotal;
total = sousTotal + tps + tvq;
if (sousTotal < 0) {
    console.log("sous-total invalide");
}
else {
    console.log(`Sous-total : ${sousTotal.toFixed(2)}`);
    console.log(`TPS        : ${tps.toFixed(2)}`);
    console.log(`TVQ        : ${tvq.toFixed(2)}`);
    console.log(`Total      : ${total.toFixed(2)}`);
}   