// 19. Cortar Espacios en Blanco de un String



// String con espacios en blanco al inicio y al final
const producto = '   Monitor 20 pulgadas   ';


// Longitud original del string
console.log(producto.length);
// Longitud del string sin espacios en blanco al inicio y al final
console.log(producto.trim().length);
// Longitud del string sin espacios en blanco al inicio
console.log(producto.trimStart().length);
// Longitud del string sin espacios en blanco al final
console.log(producto.trimEnd().length);
