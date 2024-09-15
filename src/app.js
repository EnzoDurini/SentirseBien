import express from "express";
import { __dirname } from "./utils.js";
import userRouter from "./routes/user.router.js";  
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


const httpserver = app.listen(8080, () => console.log("Listening on port 8080"));