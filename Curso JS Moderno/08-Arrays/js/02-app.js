// 49. Acceder a los valores de un Array

const numeros = [10, 20, 30, 40, 50, [1, 2, 3]]; // Array de números con un sub-array

// Acceder a la tabla completa de un Array en la consola
console.table(numeros);

// Acceder a los valores de un Array en el navegador
console.log(numeros[0]); // 10
console.log(numeros[1]); // 20
console.log(numeros[2]); // 30
console.log(numeros[3]); // 40
console.log(numeros[4]); // 50

// Acceder a un sub-array dentro de un Array
console.log(numeros[5]); // [1, 2, 3]
console.log(numeros[5][0]); // 1
console.log(numeros[5][1]); // 2
console.log(numeros[5][2]); // 3
