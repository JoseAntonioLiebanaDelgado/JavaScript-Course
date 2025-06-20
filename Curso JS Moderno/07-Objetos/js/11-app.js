// 45. Funciones en Objetos y acceder a sus valores

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        // Usamos 'this' para acceder a las propiedades del objeto actual
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} y está ${this.disponible ? 'disponible' : 'no disponible'}.`);
    }
};

const producto2 = {
    nombre: 'Tablet 10 pulgadas',
    precio: 3000,
    disponible: true,
    mostrarInfo: function() {
        // Usamos 'this' para acceder a las propiedades del objeto actual
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} y está ${this.disponible ? 'disponible' : 'no disponible'}.`);
    }
};

// Llamamos a la función mostrarInfo del objeto producto
producto.mostrarInfo();
producto2.mostrarInfo();
