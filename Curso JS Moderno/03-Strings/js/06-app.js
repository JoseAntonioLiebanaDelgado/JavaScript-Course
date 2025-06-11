// 21. String Methods - Repeat y Split


const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)

// Repeat Te va a permitir repetir una cadena de texto:
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);

// Split se encarga de dividir una cadena de texto en un array, usando un separador específico:
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));
// Divide la cadena en un array de palabras
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));
