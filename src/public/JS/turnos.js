document.getElementById('turnos').addEventListener('submit', async (e) => {
    e.preventDefault();  // Evita que el formulario se envíe por defecto

    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const servicio = document.getElementById('servicio').value;
    console.log(fecha,hora,servicio)
    
    
    try {
        const response = await fetch('/turnos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fecha,hora,servicio })
        });

        const data = await response.json();
        console.log(data)
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
