// 30. Comparar 2 valores

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// El comparador == no es estricto, compara solo el valor
console.log(numero1 == numero2); // true, porque compara el valor
console.log(numero1 == numero3); // false, porque 20 no es igual a 30

// El comparador === es estricto, compara el valor y el tipo de dato
console.log(numero1 === numero2); // false, porque el tipo de dato es diferente
console.log(numero1 === parseInt(numero2)); // true, porque el valor y el tipo de dato son iguales
console.log(numero1 === numero3); // false, porque 20 no es igual a 30

// Revisar el tipo de dato
console.log(typeof numero1); // number
console.log(typeof numero2); // string
console.log(typeof numero3); // number

// Comparar si los valores son diferentes
const password1 = "admin";
const password2 = "Admin";

// El comparador != no es estricto, compara solo el valor
console.log(password1 != password2); // true, porque los valores son diferentes
console.log(numero1 != numero2); // false, porque los valores son iguales

// El comparador !== es estricto, compara el valor y el tipo de dato
console.log(numero1 !== numero2); // true, porque los valores y tipos de dato son diferentes
console.log(password1 !== password2); // true, porque los valores y tipos de dato son diferentes
