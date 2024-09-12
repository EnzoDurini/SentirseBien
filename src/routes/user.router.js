import { Router } from "express";
import UserManager from "../manager/userManager.js";
import { __dirname } from "../utils.js";
import { pool } from "../DB/poolConfig.js";

const router = Router();
const userManager = new UserManager();

router.get("/login", async (req, res) => {  // Agregué `req` como primer parámetro
    try {
        res.sendFile(__dirname + "/pages/login.html");  // Corregí la ruta a minúsculas
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        
        const existingUser = await userManager.getUserByUser(username)
        if(!existingUser){
            res.status(401).send("Usuario no encontrado");
        }
        // Comparar la contraseña proporcionada con la almacenada en la base de datos    
        if (existingUser.password != password) {
            return res.json({ success: false, message: 'Contraseña incorrecta' });
        }
        
         // Si todo es correcto, puedes establecer una sesión, token o simplemente redirigir
        res.json({ success: true, message: 'Inicio de sesión exitoso'});
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
});


export default router;
