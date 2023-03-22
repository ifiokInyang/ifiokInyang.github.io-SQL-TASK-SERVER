import express from "express";
import {
  getPollingUnitResultsByParty,
  getPollingUnitTotalResults,
  getAllLgaController,
} from "../controller/pollingUnit.js";

const router = express.Router();

router.get("/results/:id", getPollingUnitResultsByParty);
router.get("/total/:lgaId", getPollingUnitTotalResults);
router.get("/lgas", getAllLgaController);

export default router;
