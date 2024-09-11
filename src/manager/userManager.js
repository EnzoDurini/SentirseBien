import { pool } from "../DB/poolConfig.js";  
export default class UserManager {
    constructor() {
        this.pool = pool;
    }

    getUser = async () => {
        let result;
        try {
            [result] = await this.pool.query("SELECT * FROM empleados");
        } catch (e) {
            console.error("Error al obtener los empleados:", e);
        }
        return result
    }
    

}

