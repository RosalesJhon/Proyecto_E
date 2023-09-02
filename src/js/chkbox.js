 // Obtenemos los elementos del DOM
 const checkbox1 = document.getElementById('dell');
 const checkbox2 = document.getElementById('lenovo');
 const div1 = document.getElementById('contenidoDell');
 const div2 = document.getElementById('contenidoLenovo');
 const h1 = document.getElementById('cc');

 // Agregamos event listeners para los checkboxes
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
