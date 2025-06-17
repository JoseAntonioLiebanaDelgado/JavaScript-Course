// 37. Agregar o Eliminar Propiedades de un objeto

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}

console.log(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto['nombre']);

// Añadir propiedades nuevas a un objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
producto.imagen = "image.jpg";

// Finalmente para eliminar una propiedad se utiliza delete
delete producto.disponible;
console.log(producto);
