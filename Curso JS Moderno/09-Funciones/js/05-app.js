// 62. Parámetros y Argumentos en Funciones

// Funciones que toman parámetros y argumentos...
// Nuestra primera función no tiene nada de emocionante, es demasiado simple, para que tus funciones puedan ser más versátiles e inteligentes deberán utilizar parámetros y argumentos


function saludar(nombre, apellido) { // nombre y apellido son parámetros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'De la torre'); // Juan y De la torre son argumentos, son los valores reales...

saludar(); // Si no se pasan argumentos, los parámetros toman el valor de undefined