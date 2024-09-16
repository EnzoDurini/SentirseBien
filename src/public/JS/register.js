document.getElementById('registroForm').addEventListener('submit',async(e)=>{e.preventDefault()

    // Capturamos los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }
    
    

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password, nombre })
        });

        const data = await response.json();

        if (data.success) {
            alert('Usuario registrado con éxito');
            window.location.href = '/login';
        } else {
            alert(data.message || 'Error al registrar el usuario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al intentar registrar el usuario.');
    }
});
