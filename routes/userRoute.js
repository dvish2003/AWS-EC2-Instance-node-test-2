import { Router } from "express";
import { getAllUsers, saveUser } from "../controller/userController.js";

const router = Router();
router.post('/', saveUser);
router.get('/', getAllUsers);

export default router;
