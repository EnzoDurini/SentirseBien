import { Router } from "express";
import { __dirname } from "../utils.js";


const router = Router();

router.get("/employedForm",(req, res) => {  // Agregué `req` como primer parámetro
    try {
        res.sendFile(__dirname + "/pages/employedForm.html");  // Corregí la ruta a minúsculas
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }
});


export default router;
