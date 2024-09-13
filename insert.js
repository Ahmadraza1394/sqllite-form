const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./db/user.db");

let sql =
  "INSERT INTO user (first, last, email, password) VALUES ('John', 'Doe', 'john@gmail.com', 'password')";

db.run(sql, [], function (err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Rows inserted ${this.lastID}`);
});
db.close();
