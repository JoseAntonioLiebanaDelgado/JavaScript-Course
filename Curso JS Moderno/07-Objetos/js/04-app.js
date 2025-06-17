// 38. Destructuring de Objetos

const producto = {
    nombre: 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true,
}

// Extracción de propiedades del objeto
// const nombre = producto.nombre;
// console.log(nombre);

// Gracias a ECMAScript 6 podemos extraer las propiedades de un objeto de la siguiente manera:
// const {nombre} = producto; // Esto extrae y crea la variable nombre con el valor de producto.nombre
// const {precio} = producto; // Esto extrae y crea la variable precio con el valor de producto.precio
const {nombre, precio, disponible} = producto; // Extrae las 3 propiedades del objeto
console.log(nombre);
console.log(precio);
console.log(disponible);