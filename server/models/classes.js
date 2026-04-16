const mongoose = require("mongoose");

const schema = mongoose.Schema({
  year: { type: Number, required: true },
  id: { type: Number, required: true },
  classroom: { type: Boolean, default: false},
  classroomNumber: { type: Number, required: false },
});

module.exports = mongoose.model("Class", schema);