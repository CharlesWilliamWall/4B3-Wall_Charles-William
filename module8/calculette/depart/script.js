//event listener when 2 inputs are filled
document.getElementById("operande2").addEventListener("input", calculator);
document.getElementById("operande1").addEventListener("input", calculator);
document.getElementById("operateur").addEventListener("input", calculator);
//funcion calculator
function calculator() {
    let input = document.getElementById("operande1").value;
    let input2 = document.getElementById("operande2").value;
    let select = document.getElementById("operateur").value;
    if (select == "+") {
        document.getElementById("total").value = parseInt(input) + parseInt(input2);
    } else if (select == "-") {
        document.getElementById("total").value = parseInt(input) - parseInt(input2);
    } else if (select == "*") {
        document.getElementById("total").value = parseInt(input) * parseInt(input2);
    } else if (select == "/") {
        document.getElementById("total").value = parseInt(input) / parseInt(input2);
    }
}