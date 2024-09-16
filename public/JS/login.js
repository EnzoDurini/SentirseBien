document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();  // Evita que el formulario se envíe por defecto

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
            
        });

        const data = await response.json();

        if (data.success) {
            // Redirecciona o muestra un mensaje de éxito
            // if (employed === 1) {
            //     window.location.href = '/turnosCargados';
            // }else{
            //     window.location.href = '/turnos';
            // }
            alert('Inicio de Sesión exitoso');
            window.location.href = '/turnos';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al intentar iniciar sesión.');
    }
});
