import { Router } from "express";
import { __dirname } from "../utils.js";
import session from "express-session";


const router = Router();

router.get("/notices",(req, res) => {  // Agregué `req` como primer parámetro
    try {
        res.sendFile(__dirname + "/pages/notices.html");  // Corregí la ruta a minúsculas
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }
    console.log(session().name);
});



export default router;
