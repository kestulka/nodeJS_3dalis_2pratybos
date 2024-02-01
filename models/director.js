const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "enter name"],
  },
  lastname: {
    type: String,
    required: [true, "enter last name"],
  },
  oscars: {
    type: Number,
    required: [true, "how many oscars?"],
  },
  country: {
    type: String,
    required: [true, "enter country"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Director = mongoose.model("Director", directorSchema);
module.exports = Director;

