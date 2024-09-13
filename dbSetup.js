const sqlite = require("sqlite3").verbose(); // Step 1: Load SQLite3 with verbose output for debugging.
const db = new sqlite.Database("./db/user.db"); // Step 2: Create/connect to the 'users.db' database file.

db.run(
  "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, first TEXT, last TEXT, email TEXT, password TEXT)" // Step 3: Run a SQL command to create a table if it doesn't already exist.
);

db.close(); // Step 4: Close the connection to the database to save resources.
