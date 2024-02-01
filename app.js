// boileris

const connectingDB = require("./config/db.js");
const express = require("express");
require("dotenv").config();
connectingDB();

const app = express();
app.use(express.json());

// ----------------------------

// CRUD

const {
  createDirector,
  getAllDirectors,
  getDirectorByID,
  updateDirector,
  deleteDirector,
} = require("./controllers/directorControllers.js");

app.post("/api/directors", createDirector);
app.get("/api/directors/all", getAllDirectors);
app.get("/api/directors/:id", getDirectorByID);
app.put("/api/directors/:id", updateDirector);
app.delete("/api/directors/:id", deleteDirector);

const {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  getInfoAboutMovie,
} = require("./controllers/movieControllers.js");

app.post("/api/movies", createMovie);
app.get("/api/movies/all", getAllMovies);
app.get("/api/movies/:id", getMovieById);
app.put("/api/movies/:id", updateMovie);
app.delete("/api/movies/:id", deleteMovie);
app.get("/api/movies/full", getInfoAboutMovie)

// -------------------------------



// server test
app.listen(process.env.PORT, () => {
  console.log(`The server is running on port: ${process.env.PORT}`);
});

// -------------