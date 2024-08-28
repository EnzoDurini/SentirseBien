import  { pool } from "../DB/poolConfing.js";

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
        console.log(result)
        return result
        
    }
}

