// 39. Objetos dentro de Objetos

const producto = {
    nombre: 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m'
    },
    fabricacion: {
        pais: 'China',
        fecha: '2023-01-01'
    }
}

// Extraer propiedades de un objeto dentro de otro objeto
console.log(producto.informacion.peso); // Accede a la propiedad peso del objeto informacion
console.log(producto.fabricacion.pais); // Accede a la propiedad pais del objeto fabricacion