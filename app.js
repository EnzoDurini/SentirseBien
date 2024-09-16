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

app.get('/routes/*', (req, res) => {
    res.send('Route handler');
  });
  
  // Configurar la ruta raíz
  app.get('/', (req, res) => {
    res.redirect('/index');
  });

// Uso del router
app.use('/index',indexRouter)
app.use("/login", userRouter);
app.use("/", indexRouter);
app.use("/aboutUs", aboutUsRouter);
app.use("/employedForm", employedFormRouter);
app.use("/notices", noticesRouter);
app.use("/register", registerRouter);
app.use("/services", servicesRouter);
app.use("/turnos", turnosRouter);
app.use("/turnosCargados", turnosCargadosRouter);

//sesions

app.use(session({
    secret: 'clave secreta',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000*60*60*2}
}));

app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "data:"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        scriptSrc: ["'self'"],
      },
    },
  }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});