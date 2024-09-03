// registro.js (en el servidor)
const express = require('express');
const router = express.Router();
const pool = require('../DB/connectionDB'); // Asegúrate de que este sea el archivo correcto donde configuras el pool

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);

        if (existingUser.length > 0) {
            // Usuario o correo ya existe
            res.status(409).json({ message: 'El usuario o el correo ya existen' });
        } else {
            // Registrar nuevo usuario
            await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
            res.status(201).json({ message: 'Usuario registrado con éxito' });
        }
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;
