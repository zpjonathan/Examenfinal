document.addEventListener('DOMContentLoaded', function () {
    var testimonios = document.querySelectorAll('.testimonio');
    var index = 0;

    function mostrarTestimonio(n) {
        testimonios[index].style.display = 'none';
        index = (n + testimonios.length) % testimonios.length;
        testimonios[index].style.display = 'block';
    }

    mostrarTestimonio(0);

    setInterval(function () {
        mostrarTestimonio(index + 1);
    }, 5000); // Cambiar testimonio cada 5 segundos
});