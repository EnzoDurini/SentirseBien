 import { pool } from "../../DB/poolConfig";
 

 const getEmpleados = async () =>{
    try {
            const [result] = await pool.query("SELECT * FROM empleados")
            return result;
    } catch (error) {
            console.error("error en prueba",e)
    }
 }

 