function supprimerVilles(tempatureMinMax) {
    const table = document.getElementById("temperature-juillet");

    for (const ville of table.rows) {
        let min = Number(ville.cells[1].innerHTML);
            if (!isNaN(min) && min > tempatureMinMax) {
            //    console.log(table.rows[e].cells[1].innerHTML);
               ville.remove();
            }
        }
}
