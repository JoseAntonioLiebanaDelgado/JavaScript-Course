// 46. El Object Constructor

// Object literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};

// Object constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

// Agregamos un método al prototipo del objeto Producto
const producto2 = new Producto('Tablet 10 pulgadas', 3000, true);
const producto3 = new Producto('Monitor 24 pulgadas', 400, true);
