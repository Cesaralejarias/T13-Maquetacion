// Validación de formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Mostrar mensaje de confirmación
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
    
    if (nombre && email && mensaje) {
        mensajeConfirmacion.textContent = `Gracias, ${nombre}. Tu mensaje ha sido enviado correctamente.`;
        mensajeConfirmacion.classList.remove('error');
        mensajeConfirmacion.classList.add('success');
    } else {
        mensajeConfirmacion.textContent = "Por favor, completa todos los campos.";
        mensajeConfirmacion.classList.remove('success');
        mensajeConfirmacion.classList.add('error');
    }
});

