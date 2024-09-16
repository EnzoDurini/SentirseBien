/*import { Router } from "express";
import { __dirname } from "../utils.js";
import { pool } from "./DB/poolConfig.js";



const router = Router();
const pool = pool
router.get("/notices",(req, res) => {  // Agregué `req` como primer parámetro
    try {
        res.sendFile(__dirname + "/pages/notices.html");  // Corregí la ruta a minúsculas
    } catch (error) {

        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }
});

router.post('/notices', async (req, res) => {
    const { comment } = req.body;
    try {
        await query('INSERT INTO comentario (text) VALUES (?)', [comment]);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/notices', async (req, res) => {
    try {
        const comments = await query('SELECT * FROM comentario ORDER BY created_at DESC');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



export default router;
*/

// routes/notices.js
import { Router } from "express";
import { __dirname } from "../utils.js";
import { pool } from "../DB/poolConfig.js";

const router = Router();

// Ruta para servir el archivo HTML
router.get("/notices", (req, res) => {
    try {
        res.sendFile(__dirname + "/pages/notices.html");
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
});

// Ruta para agregar un comentario
router.post('/notices', async (req, res) => {
    const { comment } = req.body;
    try {
        await pool.promise().query('INSERT INTO comentario (text) VALUES (?)', [comment]);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener comentarios
router.get('/notices/comments', async (req, res) => {
    try {
        const [comments] = await pool.promise().query('SELECT * FROM comentario ORDER BY created_at DESC');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
