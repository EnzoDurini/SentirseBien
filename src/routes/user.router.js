import { Router } from "express";
import UserManager from "../manager/userManager.js";
import { __dirname } from "../utils.js";
import { pool } from "../DB/poolConfig.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";




const router = Router();
const userManager = new UserManager();
dotenv.config()

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
        else if (existingUser.password != password) {
            return res.json({ success: false, message: 'Contraseña incorrecta' });
        }
        // Si todo es correcto, puedes establecer una sesión, token o simplemente redirigir
        else{
            const id = existingUser.id
            const token = jwt.sign({ id:id }, process.env.JWT_SECRETO, {expiresIn: process.env.JWT_TIEMPO_EXPIRACION})
            const cookieOptions = {
                expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRACION*24*60*60*1000),
                httpOnly: true};
                res.cookie('jwt', token, cookieOptions)
                res.status(200).json({ success: true, message: 'Bienvenido' });
            }
    
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
    }
});




export default router;
