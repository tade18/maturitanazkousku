const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hours: { type: Number, required: true },
});

module.exports = mongoose.model("Teacher", schema);