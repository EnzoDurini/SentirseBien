import { Router } from "express";
import { __dirname } from "../utils.js";


const router = Router();

router.get("/turnos",(req, res) => {  // Agregué `req` como primer parámetro
    try {
        res.sendFile(__dirname + "/pages/turnos.html");  // Corregí la ruta a minúsculas
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }
});
/*app.post('/turnos', (req, res) => {
    const { fecha, hora, servicio } = req.body;
  
    // Imprimir los datos recibidos en la consola
    console.log(`Fecha: ${fecha}`);
    console.log(`Hora: ${hora}`);
    console.log(`Servicio: ${servicio}`);
  
    // Responder con JSON
    res.json({
      success: true,
      message: 'Turno solicitado exitosamente'
    });
  });*/

export default router;