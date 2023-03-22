import database from "../dbConfig/config.js";

export const queryPollingUnitResults = (res, id) => {
  const query = `SELECT * FROM bincom_test.announced_pu_results WHERE polling_unit_uniqueid = ${id}`;
  database.query(query, (err, results) => {
    if (err)
    return res.status(400).json(err);

    return results.length !== 0
      ? res.status(200).json({ results })
      : res.status(200).json({ results: "No results for this polling unit" });
  });
};

export const queryPollingUnitTotalResults = (res, id) => {
  const query = `SELECT SUM(party_score) AS total FROM bincom_test.announced_pu_results WHERE polling_unit_uniqueid IN (SELECT polling_unit_id FROM polling_unit WHERE lga_id = ${id})`;
  database.query(query, (err, results) => {
    if (err) 
    return res.status(400).json(err);

    const totalResult = results[0].total;

    return res.status(200).json({ totalResult });
    //   : res.status(200).json({ results: "No results for this polling unit" });
  });
};

export const getAllLgas = (res) => {
  const query = "SELECT * FROM bincom_test.lga";
  database.query(query, (err, results) => {
    if (err) {
        return res.status(400).json(err);
    }
    return res.status(200).json(results);
  });
};
