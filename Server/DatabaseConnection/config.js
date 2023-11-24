// // creating data base connection..

const mysql = require("mysql");

const con = mysql.createConnection({
  // to provide more robust or security using  enivorment files
  host: "localhost",
  user: "root",
  password: "",
  database: "sankhuem",
});
// creating connection
con.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected Sucessfully:");
  }
});

module.exports = con;
