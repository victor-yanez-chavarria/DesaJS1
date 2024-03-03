let btnCalcular = document.querySelector("button");

btnCalcular.addEventListener("click", () => {
    let inputCantidad = document.querySelector("#cantidad");
    const valorCantidad = parseFloat(inputCantidad.value);
    const valorPrecio = parseInt(document.querySelector("#precio").innerHTML);
    let valorColor = document.querySelector("#color").value;

    console.log(valorCantidad % 1 == 0);

    if (!isNaN(valorCantidad) && (valorCantidad % 1 == 0) && valorCantidad >= 0) {
        inputCantidad.style.border = "none";
        document.querySelector("#result-total").innerHTML = valorCantidad * valorPrecio;
        document.querySelector("#result-cantidad").innerHTML = valorCantidad;
        document.querySelector("#result-color").style.backgroundColor = valorColor;
    } else {
        inputCantidad.value = "";
        inputCantidad.style.border = "2px solid red";
        inputCantidad.placeholder = "Ingrese un numero entero.";
    }
});