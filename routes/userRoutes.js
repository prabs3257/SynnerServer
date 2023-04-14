import express from "express";
import { addUser, addProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/", addUser);
router.post("/profile", addProfile);
// router.post("/signup", signup);
// router.post("/login", login);

export default router;
