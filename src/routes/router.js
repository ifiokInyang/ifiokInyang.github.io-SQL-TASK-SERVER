import express from "express";
import { getPollingUnit } from "../controller/pollingUnit.js";


const router = express.Router();


router.get("/:id", getPollingUnit)




export default router;
