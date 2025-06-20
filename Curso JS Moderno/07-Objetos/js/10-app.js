// 44. Copiar 2 objetos

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};

const medidas = {
    peso: '1kg',
    medida: '1m'
};

// Usamos Object.assign para copiar propiedades de un objeto a otro
// El primer argumento es el objeto destino y los siguientes son los objetos origen
const resultado = Object.assign(producto, medidas);
console.log(resultado); // Imprime el objeto combinado con las propiedades de ambos objetos

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };
console.log(resultado2); // Imprime el objeto combinado usando spread operator
