import database from "../dbConfig/config.js";
import { queryPollingUnitResults, queryPollingUnitTotalResults, getAllLgas } from "../DbQuery/query.js";

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
}

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

