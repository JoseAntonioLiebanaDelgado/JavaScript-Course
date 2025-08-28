// 83. While Loop

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50, descuento: true},
    { nombre: 'Celular', precio: 500},
]

let i = 0;
while(i < carrito.length) {
    console.log(carrito[i].nombre);
    i++;
}

// --------------


// Otro iterador muy común es el while loop, este se ejecuta mientras una condición sea verdadera..

let i = 0;
while (i < 10) { // condicion

    // Bloque de código...
    console.log(`Numero: ${i}`);
    


    i++; // incremento
}

// El while se ejecuta mientras una condición sea verdadera, por lo tanto si inicicializamos en 20, no hará nada..


/* Intenta realizar los mismos ejemplos  Detectar pares y nones y el fizz buzz con el while, seguramente va a quedar mucho mas claro... */