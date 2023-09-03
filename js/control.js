document.addEventListener("DOMContentLoaded", function () {
    const soluciones = document.querySelectorAll(".solu");
    soluciones.forEach(function (solucion) {
        solucion.addEventListener("click", function () {
            soluciones.forEach(function (s) {
                s.classList.remove("selected");
            });
            solucion.classList.add("selected");
        });
    });
    const contenedorOps = document.querySelector(".ops");
    const botonesSolucion = contenedorOps.querySelectorAll(".solu");
    const contenidos = document.querySelectorAll(".contenido");
    botonesSolucion.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const divId = boton.getAttribute("data-div-id");
            contenidos.forEach(function (contenido) {
                if (contenido.id === divId) {
                    contenido.style.display = "flex";
                } else {
                    contenido.style.display = "none";
                }
            });
        });
    });
});
