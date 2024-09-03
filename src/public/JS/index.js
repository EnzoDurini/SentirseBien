import UserManager from "../../manager/userManager.js"

const userManager = new UserManager();

const [empleados] = userManager.getUser()

console.log(empleados);