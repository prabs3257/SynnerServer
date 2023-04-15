import express from "express";
import {
  getAllCompetitions,
  getTeamsFromCompetition,
} from "../controllers/competitionController.js";

const router = express.Router();

router.get("/", getAllCompetitions);
router.get("/teams", getTeamsFromCompetition);

export default router;
