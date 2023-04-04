const { movieService } = require("../services/movies.service");
const errorHandler = require('../utils/errorHandler');

async function getAllMovies(req, res) {

  let queryObj = {};
  if (req.query) queryObj = req.query;

  return await movieService
    .getAllMovies(queryObj)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No Movie data available'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'All movies fetched successfully',
          data: data
        }))
      }
    })
    .catch((err) => errorHandler.serverError(err));
}

async function getMoviesById(req, res) {
  return await movieService
    .getMoviesById(req.params.id)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No such Movie exist'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'Movie fetched successfully',
          data: data
        }))
      }
    })
    .catch((err) => errorHandler.serverError(err));
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
    .catch((err) => errorHandler.serverError(err));
}

async function updateMovies(req, res) {
  const update = req.body;
  const id = req.params.id;

  let movie = await movieService.getMoviesById(id);
  if (!movie || movie.length === 0) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'No such movie exist'
    }))
    return;
  }

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
    .catch((err) => errorHandler.serverError(err));
}

async function deleteMovies(req, res) {
  let id;

  if (req.params.id) {
    id = req.params.id;
    let movie = await movieService.getMoviesById(id);
    if (!movie || movie.length === 0) {
      res.status(400).send(JSON.stringify({
        status: 'fail',
        message: 'No such movie exist'
      }))
      return;
    }
  }

  if (req.query) {
    let queryObj = req.query;
    let movie = await movieService.getAllMovies(queryObj);
    if (!movie || movie.length === 0) {
      res.status(400).send(JSON.stringify({
        status: 'fail',
        message: `Such movie doesn't exist`
      }))
      return;
    }
    id = movie._id;
  }

  return await movieService
    .deleteMovies(id)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Movie deleted successfully'
      }))
    })
    .catch((err) => errorHandler.serverError(err));
}

module.exports = {
  getAllMovies,
  getMoviesById,
  addMovies,
  updateMovies,
  deleteMovies
}