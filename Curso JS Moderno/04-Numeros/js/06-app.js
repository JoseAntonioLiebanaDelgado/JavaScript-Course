// 28. Convertir Strings a Números

// Typeof hace referencia al tipo de dato
console.log(typeof '5'); // string

const numero1 = '20';
const numero2 = '20.2';
const numero3 = 'Uno';
const numero4 = 20.2;

// Convertir Strings a Números
console.log(Number.parseInt(numero1)); // Esto convierte el string a un número entero
console.log(Number.parseFloat(numero2)); // Esto convierte el string a un número decimal
console.log(Number.parseInt(numero3)); // NaN, porque no se puede convertir 'Uno' a número

// Revisar si un numero es entero
console.log(Number.isInteger(numero1)); // false, porque es un string
console.log(Number.isInteger(numero4)); // false, porque es un número decimal

// Revisar si un número es NaN
console.log(Number.isNaN(numero3)); // true, porque 'Uno' no es un número
console.log(Number.isNaN(numero4)); // false, porque 20.2 es un número válido

// Revisar si un número es finito
console.log(Number.isFinite(numero4)); // true, porque 20.2 es un número finito 
console.log(Number.isFinite(Infinity)); // false, porque Infinity no es un número finito