// 50. Recorrer un Array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Método para saber la longitud de un Array
console.log(meses.length); // Imprime la longitud del Array (6)

// Recorrer un Array con un for
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]); // Imprime cada mes en la consola
}

// Recorrer un Array con un forEach
meses.forEach(function(mes, index) {
    console.log(`${index + 1}. ${mes}`); // Imprime el índice y el mes en la consola
});

// Recorrer un Array con un for...of
for (const mes of meses) {
    console.log(mes); // Imprime cada mes en la consola
} 