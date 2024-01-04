const express = require("express");
const router = express.Router();
require("../db/conn");

router.post("*", async (req, res) => {
  console.log("hello world");
});

module.exports = router;
