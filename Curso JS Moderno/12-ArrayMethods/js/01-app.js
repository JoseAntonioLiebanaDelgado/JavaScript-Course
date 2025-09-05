// 88. .some

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

const carrito = [
    {id: 1, producto: 'Libro', precio: 20 },
    {id: 2, producto: 'Camisa', precio: 10},
    {id: 3, producto: 'Disco', precio: 300},
    {id: 4, producto: 'Guitarra', precio: 500},
    {id: 5, producto: 'Bateria', precio: 700},
    {id: 6, producto: 'Piano', precio: 1000},
];

// Comprobar si al menos un elemento cumple con una condición

let resultado = carrito.some( producto => producto.precio > 400 );
console.log(resultado);

resultado = carrito.some( producto => producto.precio > 1000 );
console.log(resultado);

// El some es ideal para cuando queremos comprobar si al menos un elemento cumple con una condición, en este caso si al menos un producto tiene un precio mayor a 400, si es así nos devolverá true, de lo contrario false.

// De igual forma si queremos saber si al menos una tarea es igual a 'Comer'

resultado = pendientes.some( pendiente => pendiente === 'Comer' );
console.log(resultado);

resultado = pendientes.some( pendiente => pendiente === 'Estudiar' );
console.log(resultado);

// Y con eso terminamos lo que son los iteradores, veamos una serie de Array Methods, que son similares a estos iteradores y sus usos. ya vamos terminando toda la parte de básicos de JavaScript para movernos al DOM pero vamos viendo un tema más!