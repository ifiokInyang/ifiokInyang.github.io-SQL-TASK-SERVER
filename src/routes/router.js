import express from "express";
import {
  getPollingUnitResultsByParty,
  getPollingUnitTotalResults,
  getAllLgaController,
  getAllPartiesController,
  inserPartyResultController
} from "../controller/pollingUnit.js";

const router = express.Router();

router.get("/results/:id", getPollingUnitResultsByParty);
router.get("/total/:lgaId", getPollingUnitTotalResults);
router.get("/lgas", getAllLgaController);
router.get("/parties", getAllPartiesController);
router.post("/insert-results", inserPartyResultController);

export default router;
