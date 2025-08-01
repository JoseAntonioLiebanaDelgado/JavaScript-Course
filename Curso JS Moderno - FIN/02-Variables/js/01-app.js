// Las variables son una caracteristica de cualquier lenguaje de programación
// Existen 3 formas de crear variables en JavaScript, en nuevas versiones solo se utilizan 2:

// Variables con var
var producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';
console.log(producto);

// Javascript es un lenguaje de tIpo Dinamico,
// No se especifican tipos de datos cuando se crea la variable
var precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después
var disponible;
disponible = true;

// Inicializar múltiples variables 
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria)
console.log(marca)
console.log(calificacion)

// Reglas de las variables:

/*Pueden tener: letras, numeros, _
No pueden iniciar con numero
var 99dias;
var dias99;
var _01;
var 01_;*/

// Estilos para nombrar variables con más de una palabra
// Más de una palabra.
var nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
var nombre_producto = 'Monitor 30 Pulgadas'; //underscore
var NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
var nombreproducto = 'Monitor 30 Pulgadas';