// export { default as PollingUnitController } from "./pollingUnit"


//Solution 1
// export const getPollingUnit = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const query = `SELECT * FROM bincom_test.announced_pu_results WHERE polling_unit_uniqueid = ${id}`;
//     conn.query(query, (err, results) => {
//       if (err) throw err;

//       return res.json({ results });
//     });
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

