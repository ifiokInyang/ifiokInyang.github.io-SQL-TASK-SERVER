import database from "../dbConfig/config.js";

export const queryPollingUnitResults = (res, id) => {
  const query = `SELECT * FROM bincom_test.announced_pu_results WHERE polling_unit_uniqueid = ${id}`;
  database.query(query, (err, results) => {
    if (err) throw err;

    return results.length !== 0
      ? res.status(200).json({ results })
      : res.status(200).json({ results: "No results for this polling unit" });
  });
};
