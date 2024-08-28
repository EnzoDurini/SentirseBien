import { Router } from "express";
import UserManager from "../manager/userManager.js";


const router = Router();

const userManager = new UserManager();

router.get('/login', async (req,res) =>{
    const users = await userManager.getUser();
    res.json(users);
    console.log(users)
})

export default router