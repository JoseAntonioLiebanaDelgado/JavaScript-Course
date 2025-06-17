// 41. El Problema con los objetos

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};

producto.disponible = false; // Cambiando el valor de una propiedad
console.log(producto);
