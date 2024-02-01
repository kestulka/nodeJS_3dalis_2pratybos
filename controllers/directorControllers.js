const Director = require("../models/director.js");

//@ route POST /api/directors

const createDirector = async (req, res) => {
  if (
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.oscars ||
    !req.body.country
  ) {
    res.status(404).send("there is no data available");
    
  }
  const director = new Director({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    oscars: req.body.oscars,
    country: req.body.country,
  });

  const result = await director.save();
  res.status(200).send(result);
};

// @ route GET /api/directors/fullInfo

const getDirectorWithMovies = async(req, res)=>{
  const directorsWithBooks = await Director.aggregate([{
      $lookup: {
          from: "movies",
          localField: "_id",
          foreignField: "movieDirector",
          as: "movies",
      }
  }])
if(!directorsWithBooks){
  res.status(404).send("director not found");
  return
}
res.status(200).send(directorsWithBooks);
}



//@ route GET /api/directors/all

const getAllDirectors = async (req, res) => {
  const directorsFromDB = await Director.find();
  if (!directorsFromDB) {
    res.status(404).send("there is no data available");
    return;
  }
  res.status(200).json(directorsFromDB);
};

//@ route GET /api/directors/:id

const getDirectorByID = async (req, res) => {
  const directorById = await Director.findById(req.params.id);
  if (!directorById) {
    res.status(404).send("there is no data available");
    return;
  }
  res.status(200).json(directorById);
};


//@ route PUT /api/directors/:id

const updateDirector = async (req, res) => {
  const directorById = await Director.findById(req.params.id);
  if (!directorById) {
    res.status(404).send("there is no data available");
    return;
  }
  directorById.firstname = req.body.firstname;
  directorById.lastname = req.body.lastname;
  const result = await directorById.save();
  res.status(200).send(result);
};

//@ route DELETE /api/directors/:id

const deleteDirector = async (req, res) => {
  const directorById = await Director.findById(req.params.id);
  if (!directorById) {
    res.status(404).send("there is no data available");
    return;
  }
  const result = await Director.deleteOne({ _id: req.params.id });
  res.status(200).send(result);
};
//
module.exports = {
  createDirector,
  getDirectorWithMovies,
  getAllDirectors,
  getDirectorByID,
  updateDirector,
  deleteDirector,
};