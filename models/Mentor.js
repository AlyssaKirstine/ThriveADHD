const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  id: String,
  age: String,
  gender: String,
  occupation: String,
  struggles: [],
  helpers: []
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
