// 32. Crear y Comparar Booleans


const boolean1 = true;
const boolean2 = false;
const boolean3 = "true"

console.log(boolean1); // true
console.log(boolean2); // false

console.log(typeof boolean1); // "boolean"
console.log(typeof boolean2); // "boolean"  

// Comparando Booleans
console.log(boolean1 == boolean3); // false, porque boolean1 es un booleano y boolean3 es una cadena de texto
console.log(boolean1 === boolean2); // false, porque son de tipos diferentes

// New Boolean
const boolean4 = new Boolean(true);
console.log(boolean4); // Boolean { true }
console.log(typeof boolean4); // "object", porque es un objeto Boolean