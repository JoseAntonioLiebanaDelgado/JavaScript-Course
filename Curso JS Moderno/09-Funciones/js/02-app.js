// 59. La Diferencia entre Function expression y Declaration

// Hoisting es un concepto importante en JavaScript que se refiere a cómo el motor de JavaScript maneja la declaración de funciones y variables. En resumen, el código se ejecuta en dos etapas:
// 1. Creación: Durante esta etapa, el motor de JavaScript registra todas las funciones y determina las variables.
// 2. Ejecución: En esta etapa, el motor ejecuta el código línea por línea.
// Esto significa que las funciones declaradas con la sintaxis de declaración de función (function declaration o function declaration) se pueden llamar antes de su declaración en el código, mientras que las funciones expresadas (function expression) no se pueden llamar antes de su declaración.


// Ademas de las notables diferencias en sintaxis, quiero mostrarte las diferencias entre ambas... si llamamos la función antes de declararla, el function expression va a funcionar bien, mientras que el otro nos va a marcar un error..

sumar();
function sumar() {
    console.log(2 + 2);
}

sumar2();
const sumar2 = function() {
    console.log(3 + 3);
}


//const sumar2;
sumar2(); // a estas alturas es undefined...
sumar2 = function() {
    console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
}
