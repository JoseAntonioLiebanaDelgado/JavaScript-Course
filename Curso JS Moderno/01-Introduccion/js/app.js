// Este codigo se encarga de solicitar el nombre del usuario y mostrar un mensaje en la página web
const nombre = prompt('¿Cuál es tu nombre?');
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;
