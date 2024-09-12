import express from "express";
import { __dirname } from "./utils.js";
import userRouter from "./routes/user.router.js";  // Cambié UserRouter a userRouter
import indexRouter from "./routes/index.router.js";
import aboutUsRouter from "./routes/aboutUs.router.js";
import employedFormRouter from "./routes/employedForm.router.js";
import noticesRouter from "./routes/notices.router.js";
import registerRouter from "./routes/register.router.js";
import servicesRouter from "./routes/services.router.js";
import turnosRouter from "./routes/turnos.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

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

const httpserver = app.listen(8080, () => console.log("Listening on port 8080"));