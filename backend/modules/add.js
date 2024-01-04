const mongoose = require("mongoose");
const mongooesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    require: false,
  },
  age: {
    type: String,
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
});

const schema = mongoose.model("schema", mongooesSchema);

module.exports = schema;
