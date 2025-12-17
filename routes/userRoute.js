import { Router } from "express";
import { getAllUsers, saveUser } from "../controller/userController.js";

const router = Router();
router.use('/saveUser', saveUser);
router.use('/getAllUsers', getAllUsers);

export default router;
