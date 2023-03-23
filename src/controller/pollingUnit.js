import database from "../dbConfig/config.js";
import {
  queryPollingUnitResults,
  queryPollingUnitTotalResults,
  getAllLgas,
  getAllParties,
  inserPartyResult
} from "../DbQuery/query.js";

//Solution 1
export const getPollingUnitResultsByParty = async (req, res) => {
  try {
    const id = req.params.id;
    return queryPollingUnitResults(res, id);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      Error: error,
      route: "/polling-unit/:id",
    });
  }
};

//Solution 2

export const getPollingUnitTotalResults = async (req, res) => {
  try {
    const id = req.params.lgaId;
    return queryPollingUnitTotalResults(res, id);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      Error: error,
      route: "/polling-unit/total/:id",
    });
  }
};

//Sending the list of Polling Units to the front end
// app.get('/lgas', (req, res) => {

export const getAllLgaController = async (req, res) => {
  try {
    return getAllLgas(res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      Error: error,
      route: "/polling-unit/lgas",
    });
  }
};

//Solution 3

//Logic to return all parties
export const getAllPartiesController = async (req, res) => {
  try {
    return getAllParties(res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      Error: error,
      route: "/polling-unit/parties",
    });
  }
};

//Logic to insert new party results to the announced_pu_results table.

export const inserPartyResultController = async (req, res) => {
  try {
    return inserPartyResult(req,res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      Error: error,
      route: "/polling-unit/insert-results",
    });
  }
};