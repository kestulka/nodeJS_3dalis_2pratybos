const Movie = require("../models/movie.js");

//@ route POST /api/movies

const createMovie = async (req, res) => {
  if (
    !req.body.movieDirector ||
    !req.body.title ||
    !req.body.year ||
    !req.body.genre
  ) {
    res.status(404).send("there is no data available");
  }

  const existingMovie = await Movie.findOne({ title: req.body.title });
  if (existingMovie) {
    return res.status(409).send("movie already exists in database");
  }

  const movie = await Movie.create({
    movieDirector: req.body.movieDirector,
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
  });

  res.status(200).json(movie);
};

//@ route GET /api/movies/all

const getAllMovies = async (req, res) => {
  const movieFromDB = await Movie.find();
  if (!movieFromDB) {
    res.status(404).send("there is no data available");
    return;
  }
  res.status(200).json(movieFromDB);
};

//@ route GET /api/movies/:id
const getMovieById = async (req, res) => {
  const movieById = await Movie.findById(req.params.id);
  if (!movieById) {
    res.status(404).send("there is no data available");
    return;
  }
  res.status(200).json(movieById);
};

//@ route PUT /api/movies/:id

const updateMovie = async (req, res) => {
  const movieById = await Movie.findById(req.params.id);
  if (!movieById) {
    res.status(404).send("there is no data available");
    return;
  }
  movieById.title = req.body.title;
  const result = await movieById.save();
  res.status(200).send(result);
};

//@ route DELETE /api/movies/:id

const deleteMovie = async (req, res) => {
  const movieById = await Movie.findById(req.params.id);
  if (!movieById) {
    res.status(404).send("there is no data available");
    return;
  }
  const result = await Movie.deleteOne({ _id: req.params.id });
  res.status(200).send(result);
};

const getInfoAboutMovie = async (req, res) => {
  const MoviesFromDB = await Movie.find().populate(
    "movieDirector",
    "firstname lastname id oscars country date",
  );

  if (!MoviesFromDB) {
    res.status(404).send("movies not found");
    return;
  }
  res.status(200).json(MoviesFromDB);
};

//
module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  getInfoAboutMovie,
};
