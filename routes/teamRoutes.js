import express from "express";
import { addRequests } from "../controllers/teamController.js";

const router = express.Router();

router.get("/addRequest", addRequests);

export default router;
