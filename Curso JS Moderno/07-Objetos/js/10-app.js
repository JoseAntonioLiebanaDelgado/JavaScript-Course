// 44. Copiar 2 objetos

// En JavaScript, los objetos son referencias, por lo que si creamos un objeto y lo asignamos a una variable,
// y luego asignamos esa variable a otra, ambas variables apuntarán al mismo objeto en memoria.
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};
// Si hacemos una copia de este objeto de la siguiente manera, no estamos creando una copia real, sino una referencia al mismo objeto en memoria.
const copiaProducto = producto;
copiaProducto.nombre = 'Monitor 24 pulgadas';
console.log(producto);
console.log(copiaProducto);

// Para crear una copia real de un objeto, podemos utilizar el operador de propagación (spread operator) o el método Object.assign().
// Utilizando el operador de propagación
const copiaProducto2 = { ...producto };
copiaProducto2.nombre = 'Monitor 27 pulgadas';
console.log(producto);
console.log(copiaProducto2);

// Utilizando Object.assign()
const copiaProducto3 = Object.assign({}, producto);
copiaProducto3.nombre = 'Monitor 28 pulgadas';
console.log(producto);
console.log(copiaProducto3);

// También podemos utilizar JSON para crear una copia profunda de un objeto, pero esto tiene limitaciones, como no poder copiar funciones o propiedades que no sean serializables.
const copiaProducto4 = JSON.parse(JSON.stringify(producto));
copiaProducto4.nombre = 'Monitor 29 pulgadas';
console.log(producto);
console.log(copiaProducto4);

// En resumen, para crear una copia de un objeto en JavaScript, podemos utilizar el operador de propagación, Object.assign() o JSON.parse(JSON.stringify()).
// Sin embargo, es importante tener en cuenta que si el objeto contiene propiedades que son objetos anidados, estas no se copiarán de forma profunda y
// seguirán siendo referencias al mismo objeto en memoria.