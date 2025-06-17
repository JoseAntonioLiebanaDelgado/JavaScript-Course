// 42. Congelar un Objeto para no poderlo modificar

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};

// Congelar el objeto para que no se pueda modificar
Object.freeze(producto);

// producto.disponible = false; // Cambiando el valor de una propiedad
// producto.imagen = 'imagen.jpg'; // Añadiendo una nueva propiedad
// delete producto.precio; // Eliminando una propiedad
console.log(producto);

// Verificar si el objeto está congelado
console.log(Object.isFrozen(producto)); // true