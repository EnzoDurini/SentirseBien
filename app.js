import express from "express";
import { __dirname } from "./utils.js";
import userRouter from ".//routes/user.router.js";  
import indexRouter from "./routes/index.router.js";
import aboutUsRouter from "./routes/aboutUs.router.js";
import employedFormRouter from "./routes/employedForm.router.js";
import noticesRouter from "./routes/notices.router.js";
import registerRouter from "./routes/register.router.js";
import servicesRouter from "./routes/services.router.js";
import turnosRouter from "./routes/turnos.router.js";
import turnosCargadosRouter from "./routes/turnosCargados.router.js"
import  session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import helmet from 'helmet'

const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config({path: './.env'})
app.use(cookieParser())

app.use(express.static(__dirname + "/public"));
//app.use(cookieParser());

// Configuraciones de vistas
app.set('pages', __dirname + "/pages");

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


app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"], // Solo permitir recursos del propio dominio
        fontSrc: ["'self'", 'https://sentirse-bien-delta.vercel.app'], // Permitir fuentes desde el dominio
        imgSrc: ["'self'", 'data:', 'https://sentirse-bien-delta.vercel.app'], // Permitir imágenes desde el dominio y en formato base64
        scriptSrc: ["'self'"], // Si tienes scripts externos, agrégalos aquí
        styleSrc: ["'self'", "'unsafe-inline'"] // Para estilos CSS
      },
    })
  );


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});