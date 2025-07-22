// 65. Ejemplo con múltiples funciones que se pasan valores


// Funciones que retornan valores

function sumar(a, b) {
    return a + b;
}

// Llamar a la función y guardar el resultado en una variable
// Se puede llamar a la función y pasarle los valores directamente
const resultado = sumar(1,2);
console.log(resultado);

// Ejemplo más avanzado:
// Imaginemos que tenemos un carrito de compras y queremos calcular el total a pagar
// para ello vamos a crear dos funciones, una para agregar al carrito y otra para calcular el impuesto
// El total a pagar es el total del carrito más un 15% de impuesto.

let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200); // Agregar un producto al carrito
total = agregarCarrito(300); // Agregar un producto al carrito
total = agregarCarrito(400); // Agregar un producto al carrito
console.log(total);

// Calcular el total a pagar con el impuesto
const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}`);