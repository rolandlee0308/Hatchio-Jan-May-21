/**
 * File: reset.js
 * Purpose: Populate and Reset environments database.
 * Functionality IE: Execute all queries in reset.sql
 * Authors: Aaron
 */
const fs = require("fs");
const mysql = require("../backend/node_modules/mysql");
const CONFIG = require("../backend/config");
const db_connection = mysql.createConnection(CONFIG.SQL_PORT);
const rawSQL = fs.readFileSync("reset.sql").toString();

db_connection.query(rawSQL, (err, result) => {
  if (err) {
    return err;
  } else {
    console.log(result);
  }
});
db_connection.end();
