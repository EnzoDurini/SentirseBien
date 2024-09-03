// import { Router } from "express";
// import UserManager from "../manager/userManager.js";
// import { __dirname } from "../utils.js";


// const router = Router();

// const userManager = new UserManager();

// // router.get('/', async (req, res) =>{
// //     try {
// //     const users = await userManager.getUser();
// //     console.log("Hola Enzo");
// //     console.log(users);
// //     res.sendFile( __dirname + "/PAGES/index.html");
// //     } catch (error) {
// //         console.log("error");
        
// //     }
// // })

// router.get("/", async (res)=>{
//     try {
//     const users = await userManager.getUser();
//     console.log("Hola Enzo");
//     console.log(users);
//     res.sendFile( __dirname + "/PAGES/index.html");
//     } catch (error) {
//         console.log("error");
        
//     }
// })


// export default router;


import { Router } from "express";
import UserManager from "../manager/userManager.js";
import { __dirname } from "../utils.js";

const router = Router();
const userManager = new UserManager();

router.get("/", async (req, res) => {  // Agregué `req` como primer parámetro
    try {
        const users = await userManager.getUser();
        console.log("Hola Enzo");
        console.log(users);
        res.sendFile(__dirname + "/pages/index.html");  // Corregí la ruta a minúsculas
    } catch (error) {
        console.log("error");
        res.status(500).send("Error interno del servidor");  // Agregué un mensaje de error
    }
});

export default router;
