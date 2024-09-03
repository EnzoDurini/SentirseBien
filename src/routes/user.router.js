import { Router } from "express";
import UserManager from "../manager/userManager.js";


const userRouter = Router();

const userManager = new UserManager();

userRouter.get('/', async (req,res) =>{
    const users = await userManager.getUser();
    res.json(users);
    console.log(users);
})

export default userRouter