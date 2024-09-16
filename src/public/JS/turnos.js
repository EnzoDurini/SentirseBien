document.getElementById('turnos').addEventListener('submit', async (e) => {
    e.preventDefault();  // Evita que el formulario se envíe por defecto

    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const servicio = document.getElementById('servicio').value;
    const profesional = document.getElementById('profesional').value;
    const nombre = document.getElementById('nombre').value;
    const fechayhora = `${fecha} ${hora}`;
    console.log(fechayhora)
    
    
    try {
        const response = await fetch('/turnos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fechayhora,servicio, profesional, nombre})
        });

        const data = await response.json();
        
        if (data.success) {
            window.location.href = '/index';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al intentar solicitar el turno.');
    }
});
