const laptops = document.querySelectorAll('.laptops');
const whatsappButton = document.getElementById('whatsapp-button');
const contenedorArrastre = document.getElementById('contenedor-arrastre');

let draggedItem = null;

laptops.forEach(laptop => {
    laptop.addEventListener('dragstart', (e) => {
        draggedItem = laptop.cloneNode(true); 
        // Clonar el elemento
        e.dataTransfer.setData('text/plain', laptop.innerText);
    });

    laptop.addEventListener('dragend', () => {
        draggedItem = null;
    });
});

whatsappButton.addEventListener('click', () => {
    // Mostrar solo los elementos arrastrados en una ventana nueva
    const elementosArrastrados = contenedorArrastre.innerHTML;
    if (elementosArrastrados.trim() !== '') {
        const newWindow = window.open('', '_blank');
        newWindow.document.write('<h1>Productos en el carrito</h1>');
        newWindow.document.write(elementosArrastrados);
    }
});


whatsappButton.addEventListener('dragover', (e) => {
    e.preventDefault();
    whatsappButton.classList.add('drag-over');
});

whatsappButton.addEventListener('dragleave', () => {
    whatsappButton.classList.remove('drag-over');
});

whatsappButton.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedItem) {
        contenedorArrastre.appendChild(draggedItem); // Agregar el clon al contenedor de arrastre
    }
});
