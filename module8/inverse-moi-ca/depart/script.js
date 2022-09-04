
document.getElementById("text-input").addEventListener("input", reverseText);

function reverseText(event) {
    let text = document.getElementById("text-input").value;
    let reverse = text.split("").reverse().join("");
    document.getElementById("inversion").innerHTML = reverse;
}