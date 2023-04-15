import express from "express";
import { addRequests, getAllTeams } from "../controllers/teamController.js";

const router = express.Router();

router.get("/addRequest", addRequests);
router.get("/getTeams", getAllTeams);

export default router;
