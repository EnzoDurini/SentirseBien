import express from "express";
import { __dirname } from "./utils.js";
import userRouter from "./routes/user.router.js";  // Cambié UserRouter a userRouter
import indexRouter from "./routes/index.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

// Configuraciones de vistas
app.set('pages', __dirname + "/pages");
app.set('views', __dirname + "/views");

// Uso del router
app.use("/", userRouter);
app.use("/", indexRouter)
const httpserver = app.listen(8080, () => console.log("Listening on port 8080"));