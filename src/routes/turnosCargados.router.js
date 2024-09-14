import { Router } from "express";
import { __dirname } from "../utils.js";

const router = Router();

router.get("/turnosCargados",(req, res) => {  
    try {
        res.sendFile(__dirname + "/pages/turnosCargados.html");  
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  
    }
});

export default router;