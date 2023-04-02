const { movieService } = require("../services/movies.service");

async function getAllMovies(req, res) {

  let queryObj = {};
  if (req.query) queryObj = req.query;

  return await movieService
    .getAllMovies(queryObj)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'All movies fetched successfully',
        data: data
      }))
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function getMoviesById(req, res) {
  return await movieService
    .getMoviesById(req.params.id)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Movie fetched successfully',
        data: data
      }))
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function addMovies(req, res) {
  let movie = req.body;
  return await movieService
    .addMovies(movie)
    .then((data) => {
      console.log(data);
      res.status(201).send(JSON.stringify({
        status: 'success',
        message: 'Movie added successfully',
        data: data
      }))
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function updateMovies(req, res) {
  const update = req.body;
  const id = req.params.id;

  return await movieService
    .updateMovies(id, update)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Movie updated successfully',
        data: data
      }))
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function deleteMovies(req, res) {
  const id = req.params.id;

  return await movieService
    .deleteMovies(id)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Movie deleted successfully'
      }))
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

module.exports = {
  getAllMovies,
  getMoviesById,
  addMovies,
  updateMovies,
  deleteMovies
}