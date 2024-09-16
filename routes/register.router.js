import { Router } from "express";
import UserManager from "../manager/userManager.js";
import { __dirname } from "../utils.js";


const router = Router();
const userManager = new UserManager();

router.get("/",(req, res) => {  // Agregué `req` como primer parámetro
    try {
        res.sendFile(__dirname + "/pages/register.html");  // Corregí la ruta a minúsculas
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }
});

router.post("/", async (req,res) =>{
    const {username, password, email, nombre} = req.body;
    if( !username || !password || !email){
        return res.status(400).json({success:false, message: "Completar todos los campos"})   
    }
    try {
        const existingUser = await userManager.getUserByEmail(email);
        if(existingUser){
            return res.status(400).json({success:false, message: "El nombre de usuario ya está registrado"})
            }
        
        await userManager.addUser({ username, password, email, nombre})   
        res.json({success:true, message: "Usuario creado con éxito"})
    } catch (error) {
        console.error("Error al intentar registrarse", error);
        res.status(500).json({ success: false, message: "Error en la conexion con el servidor" })
    }
 } )


export default router;
