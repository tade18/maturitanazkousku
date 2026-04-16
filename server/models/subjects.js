const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  year: { type: Number, required: true },
  requiredHours: { type: Number, required: true },
});

module.exports = mongoose.model("Subject", schema);