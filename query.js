const db = require("./db.js");

let query = "SELECT * FROM user";
const data = db.all(query, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row);
  });
});

db.close();
module.exports = data;
