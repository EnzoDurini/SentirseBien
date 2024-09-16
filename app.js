import express from "express";
import { __dirname } from "./src/utils.js";
import userRouter from "./src/routes/user.router.js";  
import indexRouter from "./src/routes/index.router.js";
import aboutUsRouter from "./src/routes/aboutUs.router.js";
import employedFormRouter from "./src/routes/employedForm.router.js";
import noticesRouter from "./src/routes/notices.router.js";
import registerRouter from "./src/routes/register.router.js";
import servicesRouter from "./src/routes/services.router.js";
import turnosRouter from "./src/routes/turnos.router.js";
import turnosCargadosRouter from "./src/routes/turnosCargados.router.js"
import  session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import ComentarioManager from './src/manager/comentarioManager.js';

const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({path: './.env'})
app.use(cookieParser())

app.use(express.static(__dirname + "/public"));
//app.use(cookieParser());

// Configuraciones de vistas
app.set('pages', __dirname + "/pages");
app.set('views', __dirname + "/views");

// Uso del router
app.use("/", userRouter);
app.use("/", indexRouter);
app.use("/", aboutUsRouter);
app.use("/", employedFormRouter);
app.use("/", noticesRouter);
app.use("/", registerRouter);
app.use("/", servicesRouter);
app.use("/", turnosRouter);
app.use("/", turnosCargadosRouter);

//sesions

app.use(session({
    secret: 'clave secreta',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000*60*60*2}
}));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});