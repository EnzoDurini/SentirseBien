// import express from "express";
// import { __dirname } from "./utils.js";
// import UserRouter  from "./routes/user.router.js";
// import UserManager from "./manager/userManager.js";


// const userRouter = new UserRouter();

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended:true }));



// app.use(express.static(__dirname + "/public"));

// //Static
// app.set('pages', __dirname + "/pages");
// app.set('views', __dirname + "/views");
// app.use("/", userRouter)

// app.get("/", (req,res) =>{
//     res.sendFile( __dirname + "/PAGES/index.html");
//     console.log(userManager.getUser);
// });
// app.get("/aboutUs", (req,res) =>{
//     res.sendFile( __dirname + "/PAGES/aboutUs.html");
// });
// app.get("/employedForm", (req,res) =>{
//     res.sendFile( __dirname + "/PAGES/employedForm.html");
// });
// app.get("/login", (req,res) =>{
//     res.sendFile( __dirname + "/PAGES/login.html");
// });
// app.get("/notices", (req,res) =>{
//     res.sendFile( __dirname + "/PAGES/notices.html");
// });
// app.get("/register", (req,res) =>{
//     res.sendFile( __dirname + "/PAGES/register.html");
// });
// app.get("/services", (req,res) =>{
//         res.sendFile( __dirname + "/PAGES/services.html");
// });
// app.get("/lista", (req,res) =>{
//     res.sendFile( __dirname + "/PAGES/listaempleados.html");
// })

// app.use('/users', userRouter);



// const httpserver = app.listen(8080,()=>console.log("Listening on port 8080"))

import express from "express";
import { __dirname } from "./utils.js";
import userRouter from "./routes/user.router.js";  // Cambié UserRouter a userRouter

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

// Configuraciones de vistas
app.set('pages', __dirname + "/pages");
app.set('views', __dirname + "/views");

// Uso del router
app.use("/", userRouter);

const httpserver = app.listen(8080, () => console.log("Listening on port 8080"));