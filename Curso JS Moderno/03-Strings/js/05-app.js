// 20. String Methods - Replace, Slice y Substring

// Crear una cadena de texto
const producto = "Monitor 20 Pulgadas"; console.log(producto); // "Monitor 20 Pulgadas"

// Uso del método replace (reemplaza texto dentro del string)
console.log(producto.replace("Pulgadas", '"')); // "Monitor 20 \"" - reemplaza "Pulgadas" por comillas
console.log(producto.replace("Monitor", "Monitor Curvo")); // "Monitor Curvo 20 Pulgadas"

// Uso del método slice (extrae una parte del string entre dos índices, sin incluir el final)
console.log(producto.slice(0, 7)); // "Monitor" - desde el índice 0 hasta el 6
console.log(producto.slice(2, 1)); // "" - cadena vacía porque el índice inicial (2) es mayor que el final (1)

// Uso del método substring (parecido a slice pero intercambia los índices si están en orden incorrecto)
console.log(producto.substring(0, 7)); // "Monitor" - igual que slice aquí
console.log(producto.substring(8, 16)); // "20 Pulga" - extrae desde el índice 8 hasta el 15

// Diferencias principales entre slice y substring:
// slice permite usar índices negativos y no intercambia los índices si están mal ordenados
// substring no permite índices negativos, pero sí intercambia los índices si el inicio es mayor que el final

const usuario = "Jose"; console.log(usuario.slice(0, 1)); // "J" - extrae desde el índice 0 hasta antes del 1
console.log(usuario.substring(2, 1)); // "o" - intercambia los índices, funciona como substring(1, 2)
console.log(usuario.charAt(0)); // "J" - obtiene el carácter en el índice 0
