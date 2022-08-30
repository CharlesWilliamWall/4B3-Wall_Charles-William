// function supprimerVilles(input) {
//     const table = document.getElementById("temperature-juillet");
//     if (! isNaN(Number(input)) && table != undefined ) {
//     for (e in table.rows) {
//         if(table.rows[e].cells!= undefined){
//             if (Number(table.rows[e].cells[1].innerHTML) < Number(input)) {
//                table.deleteRow(e);
//             }
//         }
//     }
// }
// }
function supprimerVilles(input) {
    const table = document.getElementById("temperature-juillet");
   
    for (e in table.rows) {
        
        if(table.rows[e].cells != undefined){
            if (Number(table.rows[e].cells[1].innerHTML) < Number(input)) {
                // table.deleteRow(e);
               console.log(table.rows[e].cells[1].innerHTML);
            }
        }
    }
    }
