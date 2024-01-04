const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    dbName: "book-Ticket",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
