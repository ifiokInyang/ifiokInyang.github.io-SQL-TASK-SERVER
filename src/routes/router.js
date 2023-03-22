import express from "express";
import { getPollingUnitResultsByParty } from "../controller/pollingUnit.js";

const router = express.Router();

router.get("/:id", getPollingUnitResultsByParty);

export default router;
