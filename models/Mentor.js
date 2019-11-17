const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  id: String,
  answer: String,
  question: String,
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
