import { pool } from "../DB/poolConfig.js"; 



export default class TurnosManager {
    constructor() {
        this.pool = pool;
    }

    async getTurnos() {
        let result = [];
        try {
            [result] = await this.pool.query("SELECT * FROM turnos");
            // Procesar los datos para el formato adecuado
            return result.reduce((acc, turno) => {
                const dateKey = turno.fecha;
                if (!acc[dateKey]) {
                    acc[dateKey] = [];
                }
                acc[dateKey].push(`${turno.servicio}: ${turno.hora}`);
                return acc;
            }, {});
        } catch (e) {
            console.error("Error al obtener los turnos:", e);
        }
        return result;
    }

    async getTurnosporProfesional(profesional) {
        try {
            const [rows] = await pool.query('SELECT * FROM turnos WHERE profesional = ?', [profesional]);
            return rows[0];
        } catch (error) {
            console.error("Error al buscar los turnos por profesional:", error);
        }
    }
    async getTurnosporPaciente(usuario) {
        try {
            const [rows] = await pool.query('SELECT * FROM turnos WHERE nombre_usuario = ?', [usuario]);
            return rows[0];
        } catch (error) {
            console.error("Error al buscar los turnos por fecha:", error);
        }
    }

    async getTurnosporFecha(fechayhora) {
        try {
            const [rows] = await pool.query('SELECT * FROM turnos WHERE fecha = ?', [fechayhora]);
            return rows[0];
        } catch (error) {
            console.error("Error al buscar los turnos por fecha:", error);
        }
    }

    async addTurno({ nombre, fechayhora, servicio,profesional }) {
        try {
            await pool.query('INSERT INTO turnos (nombre_usuario, fecha, servicio, profesional) VALUES (?, ?, ?, ?)', [nombre, fechayhora, servicio,profesional]);
        } catch (error) {
            console.error("Error al agregar el usuario:", error);
        }
    }  
    
    

}
