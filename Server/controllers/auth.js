const connection = require("../DatabaseConnection/config");
const router = require("../routes/auth");
// this is the api which will save all the data in the database
const TraningData = async (req, res) => {
  const { title, description } = req.body.data; // destructure the data from body
  const imageUrl = req.body.url; // assuming the URL is provided in the body directly
  // console.log(imageUrl, title.description); // just for debugging
  try {
    const sql =
      "INSERT INTO traningdata (Title, Description, URL) VALUES (?, ?, ?)";
    const values = [title, description, imageUrl];

    connection.query(sql, values, (error, result) => {
      if (error) {
        // console.error("Error executing MySQL query: ", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.status(200).json({
        // result: result,
        success: true,
      });
    });
  } catch (error) {
    // console.error("Error in Traning controller: ", error);
    res.status(400).json({ error: "Bad Request" });
  }
};
// this is for the posting all the data int the Cnsulting dastabse
const ConsultingDataa = async (req, res) => {
  const { title, description } = req.body.data; // destructure the data from body
  const imageUrl = req.body.url; // assuming the URL is provided in the body directly
  // console.log(imageUrl, title.description); // just for debugging
  try {
    const sql =
      "INSERT INTO consultingdataa (Title, Description, URL) VALUES (?, ?, ?)";
    const values = [title, description, imageUrl];

    connection.query(sql, values, (error, result) => {
      if (error) {
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.status(200).json({
        success: true,
      });
    });
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
};
// this api will ftch all the data from the consultansydataa table

const getAllConsultancyData = async (req, res) => {
  try {
    const sql = "SELECT * FROM consultingdataa"; // Change the table name as needed

    connection.query(sql, (error, results) => {
      if (error) {
        // console.error("Error executing MySQL query: ", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.status(200).json({
        success: true,
        data: results,
      });
    });
  } catch (error) {
    // console.error("Error in getAllConsultancyData API: ", error);
    res.status(400).json({ error: "Bad Request" });
  }
};
// this api will delete the data based on the index
const deleteConsultingData = (req, res) => {
  const consultingId = req.body.id;

  // First, retrieve the data that will be deleted
  const selectSql = "SELECT * FROM consultingdataa WHERE id = ?";
  connection.query(selectSql, [consultingId], (selectErr, selectResult) => {
    if (selectErr) {
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    } else {
      // Now, delete the data
      const deleteSql = "DELETE FROM consultingdataa WHERE id = ?";
      connection.query(deleteSql, [consultingId], (deleteErr, deleteResult) => {
        if (deleteErr) {
          res
            .status(500)
            .json({ success: false, message: "Internal Server Error" });
        } else {
          // Retrieve all remaining data after deletion
          const remainingDataSql = "SELECT * FROM consultingdataa";
          connection.query(
            remainingDataSql,
            (remainingErr, remainingResult) => {
              if (remainingErr) {
                res
                  .status(500)
                  .json({ success: false, message: "Internal Server Error" });
              } else {
                res.json({
                  success: true,
                  message: "Consulting data deleted successfully",
                  remainingData: remainingResult, // Send all remaining data
                });
              }
            }
          );
        }
      });
    }
  });
};

module.exports = {
  TraningData,
  ConsultingDataa,
  getAllConsultancyData,
  deleteConsultingData,
};
