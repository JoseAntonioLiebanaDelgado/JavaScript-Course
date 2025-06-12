// 31. Comprar Null y undefined en JavaScript

// Undefined
let numero;
console.log(numero); // undefined, porque no se ha asignado un valor
console.log(typeof numero); // undefined, porque no se ha asignado un valor

// Null
let numero2 = null;
console.log(numero2); // null, porque se ha asignado un valor nulo
console.log(typeof numero2); // object, porque el tipo de dato es un objeto

// Comparar null y undefined
console.log(numero == numero2); // true, porque undefined es igual a null con ==
console.log(numero === numero2); // false, porque undefined es diferente a null con ===
