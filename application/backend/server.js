/**
 * File: server.js
 * Purpose: Define HTTP Prototype Route definitions for web server.
 * Functionality IE: Handle Requests for Frontend to communicate writing and reading from database.
 * Authors: Aaron
 */
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const cookieparser = require("cookie-parser");
//MiddleWare: client request configuration
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://18.118.187.238:3000"],
    allowedHeaders: ["Origin", "X-Requested-With", "contentType", "Content-Type", "Accept", "Authorization"],
  })
);
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Backend UI Views for Database Tables (temporarily for dev)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.get("/ec2", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/ec2.html"));
});
// GET | POST  for Frontend UI Routes
require("./routes/tables")(app);
require("./routes/cards")(app);
require("./routes/users")(app);
require("./routes/verification")(app);
require("./routes/insert")(app);
require("./routes/tmp")(app);

app.listen(5000, () => `Backend-Live`);
