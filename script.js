let precioBoleto = 0.80;

document.getElementById("boletos").addEventListener("input", function() {
    let cantidad = parseInt(this.value);
    let total = cantidad * precioBoleto;
    document.getElementById("total").innerText = `$${total.toFixed(2)} USD`;
    document.getElementById("total2").innerText = `$${total.toFixed(2)} USD`;
});

function comprarBoletos() {
    let cantidad = parseInt(document.getElementById("boletos").value);
    alert(`✅ Has comprado ${cantidad} boletos por $${(cantidad * precioBoleto).toFixed(2)} USD`);
}

// Función para mostrar el método de pago seleccionado
function mostrarMetodo(metodo) {
    document.getElementById("metodo-seleccionado").innerText = `Método de pago seleccionado: ${metodo}`;
}