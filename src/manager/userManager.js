import { pool } from "../DB/poolConfig.js";  
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


