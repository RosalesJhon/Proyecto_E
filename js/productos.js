document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("open-aside");
    const closeButton = document.getElementById("close-aside");
    const aside = document.getElementById("my-aside");

    openButton.addEventListener("click", function () {
        aside.classList.add("open");
    });

    closeButton.addEventListener("click", function () {
        aside.classList.remove("open");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const corazones = document.querySelectorAll('.fa-heart');
    const guardar = document.querySelectorAll('.fa-bookmark');

    corazones.forEach((corazon) => {
        corazon.addEventListener('click', function () {
            corazon.classList.toggle('active');
        });
    });
    guardar.forEach((iconoGuardar) => {
        iconoGuardar.addEventListener('click', function () {
            iconoGuardar.classList.toggle('active');
        });
    });
});