/**
 * File: config.js
 * Purpose: Replacement for .env or environment file
 * Functionality IE: Export Credentials | Configurations for different environment hosting
 * Authors: Aaron, Lyra
 */
const os = require("os");
const mysql = require("mysql");

const MYSQL_CRED = [
  //AWS EC2 Instance
  {
    host: "localhost",
    user: "myroot",
    password: "goose10",
    insecureAuth: "true",
    database: "acme",
    multipleStatements: true,
  },
  //Aaron
  {
    host: "localhost",
    user: "guest",
    password: "jkLive586!@",
    insecureAuth: "true",
    database: "node_hatchio_db",
    multipleStatements: true,
  },
  //Jose
  {
    host: "localhost",
    user: "root",
    password: "12345",
    insecureAuth: "true",
    database: "acme",
    multipleStatements: true,
  },
  //Roland
  {
    host: "localhost",
    user: "root",
    password: "roland0308",
    database: "acme",
    multipleStatements: true,
  },
];
const username = "roland";
const credIndex = function (name) {
  switch (name) {
    case "ubuntu":
      return 0;
    case "lyra":
      return 0;
    case "aaron":
      return 1;
    case "hilarioo":
      return 2;
    case "roland":
      return 3;
  }
};

const AWS_PORT = `http://18.118.187.238:5000`;
const LOCAL_PORT = `http://localhost:5000`;
const HOST_PORT = username === "ubuntu" ? AWS_PORT : LOCAL_PORT;
const SQL_PORT = MYSQL_CRED[credIndex(username)];
const SQL_CONNECTION = mysql.createConnection(SQL_PORT);
const DEBUG_ENVIRONMENT = HOST_PORT === LOCAL_PORT;

module.exports = {
  SQL_PORT,
  DEBUG_ENVIRONMENT,
  HOST_PORT,
  SQL_CONNECTION,
};
