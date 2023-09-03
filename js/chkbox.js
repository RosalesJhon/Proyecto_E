// Obtenemos los elementos del DOM
const checkbox1 = document.getElementById('dell');
const checkbox2 = document.getElementById('lenovo');
const checkbox3 = document.getElementById('acer');
const div1 = document.getElementById('contenidoDell');
const div2 = document.getElementById('contenidoLenovo');
const div3 = document.getElementById('contenidoAcer');

checkbox1.addEventListener('change', function () {
    if (this.checked) {
        div1.style.display = 'block';
    } else {
        div1.style.display = 'none';
    }
});

checkbox2.addEventListener('change', function () {
    if (this.checked) {
        div2.style.display = 'block';
    } else {
        div2.style.display = 'none';
    }
});
checkbox3.addEventListener('change', function () {
    if (this.checked) {
        div3.style.display = 'block';
    } else {
        div3.style.display = 'none';
    }
});