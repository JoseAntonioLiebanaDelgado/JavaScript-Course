// 26. El Orden de las operaciones

 // Multiplicación y división tienen la misma prioridad, se evalúan de izquierda a derecha
 // Suma y resta tienen la misma prioridad, se evalúan de izquierda a derecha

let resultado;

resultado = 20 + 30 * 2; // 20 + (30 * 2) = 20 + 60 = 80
resultado = (20 + 30) * 2; // (20 + 30) * 2 = 50 * 2 = 100  

// 20% de descuento
resultado = (20 + 30 + 50) * 0.2; // (20 + 30 + 50) * 0.2 = 100 * 0.2 = 20
// IVA del 21%
resultado = (20 + 30 + 50) * 1.21; // (20 + 30 + 50) * 1.21 = 100 * 1.21 = 121

console.log(resultado);