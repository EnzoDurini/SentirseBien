import { Router } from "express";
import { __dirname } from "../utils.js";
import ComentarioManager from "../manager/comentarioManager.js";

const router = Router();
const comentarioManager = new ComentarioManager();

router.get("/notices", (req,res) =>{
    try {
        res.sendFile(__dirname + "/pages/notices.html");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error interno");        
    }
    });
    
router.post('/notices', async(req,res)=>{
    const { text } = req.body
    console.log(text)
    if (!text) {
        return res.status(400).json({ success: false, message: 'El comentario no puede estar vacío.' });
    }
    try {
        await comentarioManager.addComentario({text});
    res.json({success: true, message: "Comentario agregado"})
    } catch (error) {
        console.log(error);
        res.status(500).send("Error interno"); 
    }});

export default router;