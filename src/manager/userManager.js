import { pool } from "../DB/poolConfig.js"; 
import jwt from "jsonwebtoken";
import {promisify} from "util";


export default class UserManager {
    constructor() {
        this.pool = pool;
    }

    getUser = async () => {
        let result;
        try {
            [result] = await this.pool.query("SELECT * FROM usuarios");
        } catch (e) {
            console.error("Error al obtener los usuarios:", e);
        }
        return result
    }

    async getUserByUser(username) {
        try {
            const [rows] = await pool.query('SELECT * FROM usuarios WHERE user = ?', [username]);
            return rows[0];
        } catch (error) {
            console.error("Error al buscar el usuario por nombre:", error);
        }
    }

    async getUserByEmail(email) {
        try {
            const [rows] = await pool.query('SELECT * FROM usuarios WHERE correo = ?', [email]);
            return rows[0];
        } catch (error) {
            console.error("Error al buscar el usuario por correo:", error);
        }
    }

    async addUser({ nombre, password, email,username }) {
        try {
            await pool.query('INSERT INTO usuarios (nombre, password, correo, user) VALUES (?, ?, ?, ?)', [nombre, password, email, username]);
        } catch (error) {
            console.error("Error al agregar el usuario:", error);
        }
    }    

}

export const isAuthenticated = async (req, res, next) => {
    if (req.cookies.jwt) {
        try {
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO);
            const [rows] = await pool.query('SELECT * FROM usuarios WHERE idusuario = ?', [decoded.id])
            
                if (!rows) {
                    return res.status(401).send("No tienes permiso de acceder");
                }
                req.user = rows[0];
                return next();

        } catch (error) {
            console.log(error);
            return res.status(401).send("Token inválido o expirado");
        }
    } else {
        return res.status(401).redirect('/login');
    }
};
