// 34. Buenas practicas a la hora de evaluar un Boolean

const autenticado = true;

// No hace falta comparar con === true en el if, ni tampoco con === false en el else.
if (autenticado) {
    console.log("Usuario autenticado");
} else {
    console.log("Usuario no autenticado");
}

// Operador ternario
console.log(autenticado ? "Usuario autenticado" : "Usuario no autenticado");