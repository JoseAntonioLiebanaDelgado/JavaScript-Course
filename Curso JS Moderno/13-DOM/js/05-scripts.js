// 101. querySelectorAll

const cards = document.querySelectorAll('.card'); 
console.log(cards);

// si recuerdas tenemos dos elementos con el id de formulario

const formularios = document.querySelectorAll('#formulario'); 
console.log(formularios); // Puedes ver quue eso si funciona, sin embargo recuerda que no rescomendable tener el mismo ID más de una vez por docuemnto...


// Si no hay elementos no va a retornar nada

// Si un selector no existe, 
const noExiste = document.querySelectorAll('#no-existe');
console.log(noExiste);