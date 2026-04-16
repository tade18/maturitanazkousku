const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  avgGrades: { type: Number, required: true },
});

module.exports = mongoose.model("Student", schema);