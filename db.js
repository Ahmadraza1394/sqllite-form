const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./db/user.db");

module.exports = db;
