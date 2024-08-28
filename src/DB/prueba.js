import {pool} from "./poolConfing.js";

const getEmpleados = async () => {
    try{
        const res = await pool.query("SELECT * FROM empleados;")
        console.log(res);
    }catch(e){
        console.log(e);
    }
}

getEmpleados();