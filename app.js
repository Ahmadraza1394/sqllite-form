const express = require("express");
const db = require("./db.js");
const bodyParser = require("body-parser");

// const data = require("./query.js");

const app = express();
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// adding user data
app.post("/adder", (req, res) => {
  console.log(req.body);
  let sql = "INSERT INTO user (first, last, email, password) VALUES (?,?,?,?)";
  db.run(
    sql,
    [req.body.firstName, req.body.lastName, req.body.email, req.body.password],
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      res.json({ data: this.lastID });
    }
  );
});

app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/add.html");
});

// Getting user by id
app.get("/users/:id", (req, res) => {
  let query = "SELECT * FROM user WHERE id = ?";
  const data = db.get(query, [req.params.id], (err, row) => {
    if (err) {
      throw err;
    } else if (row === undefined) {
      res.json({ message: "No user found" });
    }
    res.json(row);
  });
});

app.get("/users", (req, res) => {
  let query = "SELECT * FROM user";
  const data = db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.get("/", (req, res) => {
  res.json(data);
});
