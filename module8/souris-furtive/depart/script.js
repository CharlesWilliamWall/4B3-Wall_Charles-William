box.addEventListener("mousemove", giveXY);
function giveXY(event) {
    let x = event.clientX;
    let y = event.clientY;
    let pos = document.getElementById("position");
    pos.innerHTML = "x = " + x + " y = " + y;
}