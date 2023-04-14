import express from "express";
import { addUser, createUser, getUser } from "../controllers/userController.js";
import { addTeam } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", addUser);
router.post("/profile", createUser);
router.get("/getUserById", getUser);
router.post("/createTeam", addTeam);
// router.post("/signup", signup);
// router.post("/login", login);

export default router;
