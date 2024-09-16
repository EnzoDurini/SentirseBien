import { Router } from "express";
import { __dirname } from "../utils.js";
import { isAuthenticated } from "../manager/userManager.js";
import TurnosManager from "../manager/turnosManager.js"

const router = Router();
const turnosManager = new TurnosManager()

router.get("/turnos",isAuthenticated, async (req, res) => {  // Agregué `req` como primer parámetro
    try {
        await res.sendFile(__dirname + "/pages/turnos.html");  // Corregí la ruta a minúsculas
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }
});
router.post('/turnos', async (req, res) => {
    const { fechayhora, servicio, nombre, profesional } = req.body;

    if(!nombre || !servicio || !fechayhora || !profesional){
      return res.status(400).send('Faltan campos');
    }
    try {
      const existingTurno = await turnosManager.getTurnosporFecha(fechayhora)
      if(existingTurno)
        { return res.status(400).json({success:false, message: "El turno ya está registrado"})}

    await turnosManager.addTurno({nombre, fechayhora, servicio, profesional})
    res.json({success:true, message: "Turno agregado con éxito"})
    } catch (error) {
      console.log("Error al intentar agregar turno", error)
      res.status(500).send("Error interno del servidor")
    }

  });

export default router;