const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieDirector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Director",
  },
  title: {
    type: String,
    required: [true, "enter the title"],
  },
  year: {
    type: Number,
    required: [true, "enter release date"],
  },
  genre: {
    type: [String],
    required: [true, "enter genre"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
