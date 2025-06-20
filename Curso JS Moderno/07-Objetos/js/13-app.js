// 47. Object .keys, .values y .entries

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};

// Object.keys() devuelve un array con las claves del objeto
console.log(Object.keys(producto)); // ['nombre', 'precio', 'disponible']

// Object.values() devuelve un array con los valores del objeto
console.log(Object.values(producto)); // ['Monitor 20 pulgadas', 300, true]

// Object.entries() devuelve un array con las entradas del objeto
console.log(Object.entries(producto)); // [['nombre', 'Monitor 20 pulgadas'], ['precio', 300], ['disponible', true]]
