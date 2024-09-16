import { Router } from "express";
import { __dirname } from "../utils.js";
import { isAdmin } from "../manager/userManager.js";
import TurnosManager from "../manager/turnosManager.js";
const router = Router();
const turnosManager = new TurnosManager();

router.get("/",isAdmin,(req, res) => {  
    try {
        
        res.sendFile(__dirname + "/pages/turnosCargados.html");  
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  
    }
});
/*router.get('/', async (req, res) => {
    try {
        const turnos = await getTurnos(); // Función que obtiene turnos de la base de datos
        res.res.sendFile(__dirname + "/pages/turnosCargados1.html");
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los turnos", error });
    }
});*/

export default router;