import database from "../dbConfig/config.js";

//Query to get result for a particular Polling unit
export const queryPollingUnitResults = (res, id) => {
  const query = `SELECT * FROM bincom_test.announced_pu_results WHERE polling_unit_uniqueid = ${id}`;
  database.query(query, (err, results) => {
    if (err) return res.status(400).json(err);

    return results.length !== 0
      ? res.status(200).json({ results })
      : res.status(200).json({ results: "No results for this polling unit" });
  });
};

//Query to get total polling unit results by LGA

export const queryPollingUnitTotalResults = (res, id) => {
  const query = `SELECT SUM(party_score) AS total FROM bincom_test.announced_pu_results WHERE polling_unit_uniqueid IN (SELECT polling_unit_id FROM polling_unit WHERE lga_id = ${id})`;
  database.query(query, (err, results) => {
    if (err) return res.status(400).json(err);

    const totalResult = results[0].total;

    return res.status(200).json({ totalResult });
  });
};

//Query to get all LGAs

export const getAllLgas = (res) => {
  const query = "SELECT * FROM bincom_test.lga";
  database.query(query, (err, results) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json(results);
  });
};

//Query to get all parties

export const getAllParties = (res) => {
  const query = "SELECT * FROM bincom_test.party";
  database.query(query, (err, results) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json(results);
  });
};


//Query to insert new party results
export const inserPartyResult = (req, res) => {
  const data = req.body;
  const query =
  `INSERT INTO announced_pu_results (polling_unit_uniqueid, party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address) VALUES (28, '${data.party}', '${data.score}', '${data.entered_by}', '2023-03-23 15:44:03', '192.168.0.7')`;

  database.query(query, (err, results) => {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(201).json({
      message: "Successfully added entry",
      results
    });
  });
};
