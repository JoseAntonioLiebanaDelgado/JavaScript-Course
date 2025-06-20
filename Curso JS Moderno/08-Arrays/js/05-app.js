// 52. Añadir nuevos elementos al fin o Inicio de un array

const carrito = [];

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Smartphone',
    precio: 800
}

// Añadir un producto al final del array
carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'Teclado Mecánico',
    precio: 100
}

// Añadir un producto al inicio del array
carrito.unshift(producto3);
console.log(carrito);

