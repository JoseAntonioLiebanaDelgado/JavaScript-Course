// 40. Destructuring de Objetos Anidados

const producto = {
    nombre: 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m',
        },
        fabricacion: {
            pais: 'China',
        }
    }
}


const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;
console.log(nombre); // Monitor 20 pulgadas
console.log(informacion); // { medidas: { peso: '1kg', medida: '1m' }, fabricacion: { pais: 'China' } }
console.log(fabricacion); // { pais: 'China' }
console.log(pais); // China 
