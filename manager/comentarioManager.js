import { pool } from "../DB/poolConfig.js"; 

export default class ComentarioManager {
    constructor() {
        this.pool = pool;
    }

    async getComentarios() {
        try {
            const [rows] = await this.pool.query("SELECT * FROM comentarios ORDER BY created_at DESC");
            return rows;
        } catch (error) {
            console.error("Error al obtener los comentarios:", error);
            return [];
        }
    }

    async addComentario({text}) {
        try {
            await this.pool.query('INSERT INTO comentarios (text) VALUES (?)', [text]);
        } catch (error) {
            console.error("Error al agregar el comentario:", error);
        }
    }
}
