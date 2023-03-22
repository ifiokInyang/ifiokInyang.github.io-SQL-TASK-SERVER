import database from "../dbConfig/config.js";
import { queryPollingUnitResults } from "../DbQuery/query.js";

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


