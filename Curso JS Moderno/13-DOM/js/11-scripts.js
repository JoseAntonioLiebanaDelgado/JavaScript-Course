// 107. Un Ejemplo más avanzado de lo que podemos hacer con JS

// No siempre estarás haciendo traversing a tu dom, 

const btnFlotante = document.querySelector('.btn-flotante');


const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}