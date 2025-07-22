// 64. Como se Comunican las funciones


// Como se comunican las funciones entre si...
// Tus funciones se van a comunicar, en lugar de tener una gran función con 800 lineas es recomendable dividirla en pequeñas partes, realizan una operación y se van hacia la otra función...

iniciarApp();

// Iniciar App...
// En este caso la función iniciarApp es la que inicia la aplicación, y dentro de ella se llama a la segunda función
function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}

// Segunda función...
// Esta función se encarga de autenticar al usuario, y dentro de ella se llama a la función usuarioAutenticado
// La función usuarioAutenticado recibe un argumento, que es el nombre del usuario autenticado 
function segundaFuncion() {
    console.log('Desde la segunda función...');
    usuarioAutenticado('Pablo');
}

// Usuario autenticado...
// Esta función recibe un argumento que es el nombre del usuario autenticado, y muestra un mensaje
function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado con éxito ${usuario}`);
}


