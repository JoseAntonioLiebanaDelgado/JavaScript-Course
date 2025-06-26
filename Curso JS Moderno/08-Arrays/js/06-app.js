// 53. Crear un nuevo arreglo con el spread operator

// Añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

let resultado

// Añadir un elemento al carrito utilizando el Spread Operator
resultado = [...carrito, producto];
// Añadir un segundo elemento al carrito utilizando el Spread Operator
resultado = [...resultado, producto2];
// Añadir un tercer elemento al carrito utilizando el Spread Operator
resultado = [producto3, ...resultado];

console.table(resultado);