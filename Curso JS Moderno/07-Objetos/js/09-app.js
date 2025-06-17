// 43. Sellar un Objeto

// La diferencia entre Object.freeze y Object.seal es que freeze no permite modificar nada, mientras que seal permite modificar las propiedades existentes pero no añadir nuevas ni eliminar propiedades.

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};

// Modifica una propiedad existente
producto.precio = 350;

// A diferencia de Object.freeze, Object.seal permite modificar las propiedades existentes pero no añadir nuevas ni eliminar propiedades.
Object.seal(producto);

// Verifica si el objeto está sellado
console.log(Object.isSealed(producto)); // true

