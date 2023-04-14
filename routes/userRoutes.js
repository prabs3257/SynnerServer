import express from "express";
import { getUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUser);
// router.post("/signup", signup);
// router.post("/login", login);

export default router;
