import express from "express";
import { __dirname } from "./utils.js";
import userRouter from "./routes/user.router.js";

const app = express();




app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + "/public"));

app.use(express.json()); // Para parsear JSON en las solicitudes
app.use('/', userRouter)
app.set('pages', __dirname + "/pages");



const httpserver = app.listen(8080,()=>console.log("Listening on port, Gabi capo, php es una mierda"))

