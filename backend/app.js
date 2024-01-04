require("dotenv").config();
const express = require("express");
const app = express();
require("mongodb");
require("mongoose");
const db = require("./db/database.js");
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
