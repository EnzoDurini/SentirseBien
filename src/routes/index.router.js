import { Router } from "express";
import { __dirname } from "../utils.js";
import { pool } from "../DB/poolConfig.js";


const router = Router();

router.get("/index", async (req, res) => {  // Agregué `req` como primer parámetro
    
    /*try {
        res.sendFile(__dirname + "/pages/index.html");  // Corregí la ruta a minúsculas
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }*/
   if(req.cookiesOptions.jwt){
   try {
        const decoded = await promisify(jwt.verify)(req.cookiesOptions.jwt, process.env.JWT_SECRETO)
        pool.query('SELECT * FROM users WHERE id = ?',[decoded.id],(error,result)=>
        {
            if(!result){ return next()}
            req.user = result[0]
            return next()
        })
   } catch (error) {
    console.log(error)  
   }}
   else{
    return res.status(401).send("No tienes permisos para acceder a esta ruta").redirect('/login')
   }
});


export default router;
