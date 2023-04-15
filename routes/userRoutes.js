import express from "express";
import { addProfile, addUser, getUser } from "../controllers/userController.js";
import { addTeam } from "../controllers/teamController.js";
import { getAllCompetitions } from "../controllers/competitionController.js";

const router = express.Router();

router.post("/", addUser);
router.post("/profile", addProfile);
router.get("/getUserById", getUser);
router.post("/createTeam", addTeam);
router.get("/competitions", getAllCompetitions);
// router.post("/signup", signup);
// router.post("/login", login);

export default router;
