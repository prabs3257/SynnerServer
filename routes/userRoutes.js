import express from "express";
import { createUser, addProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.post("/profile", addProfile);
// router.post("/signup", signup);
// router.post("/login", login);

export default router;
