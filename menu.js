document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navegacion = document.querySelector('.navegacion');

    toggleMenu.addEventListener('click', function() {
        navegacion.classList.toggle('mostrar');
    });
});
