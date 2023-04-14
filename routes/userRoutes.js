import express from "express";
import { addUser, createUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", addUser);
router.post("/profile", createUser);
// router.post("/signup", signup);
// router.post("/login", login);

export default router;
