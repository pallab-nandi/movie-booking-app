const { theatreService } = require("../services/theatres.service");
const { movieService } = require('../services/movies.service');
const errorHandler = require('../utils/errorHandler');

async function getAllTheatres(req, res) {

  let queryObj = {};
  if (req.query) queryObj = req.query;

  return await theatreService
    .getAllTheatres(queryObj)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No Theatre data available'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'All theatres fetched successfully',
          data: data
        }))
      }
    })
    .catch((err) => errorHandler.serverError(err));
}

async function getTheatresById(req, res) {
  return await theatreService
    .getTheatresById(req.params.id)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No such Theatre exist'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'Theatre fetched successfully',
          data: data
        }))
      }
    })
    .catch((err) => errorHandler.serverError(err));
}

async function addTheatres(req, res) {
  let theatre = req.body;
  return await theatreService
    .addTheatres(theatre)
    .then((data) => {
      console.log(data);
      res.status(201).send(JSON.stringify({
        status: 'success',
        message: 'Theatre added successfully',
        data: data
      }))
    })
    .catch((err) => errorHandler.serverError(err));
}

async function updateTheatres(req, res) {
  const update = req.body;
  const id = req.params.id;

  let theatre = await theatreService.getTheatresById(id);
  if (!theatre || theatre.length === 0) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'No such theatre exist'
    }))
    return;
  }

  return await theatreService
    .updateTheatres(id, update)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Theatre updated successfully',
        data: data
      }))
    })
    .catch((err) => errorHandler.serverError(err));
}

async function deleteTheatres(req, res) {
  let id;

  if (req.params.id) {
    id = req.params.id;
    let theatre = await theatreService.getTheatresById(id);
    if (!theatre || theatre.length === 0) {
      res.status(400).send(JSON.stringify({
        status: 'fail',
        message: 'No such theatre exist'
      }))
      return;
    }
  }

  if (req.query) {
    let queryObj = req.query;
    let theatre = await theatreService.getAllTheatres(queryObj);
    if (!theatre || theatre.length === 0) {
      res.status(400).send(JSON.stringify({
        status: 'fail',
        message: `Such theatre doesn't exist`
      }))
      return;
    }
    id = theatre._id;
  }

  return await theatreService
    .deleteTheatres(id)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Theatre deleted successfully'
      }))
    })
    .catch((err) => errorHandler.serverError(err));
}

async function updateMoviesInTheatre(req, res) {
  try {
    let theatre = await theatreService.getTheatresById(req.params.id);

    if (!theatre || theatre.length === 0) {
      res.status(400).send(JSON.stringify({
        status: 'fail',
        message: 'No such theatre exist'
      }))
      return;
    }

    let movies = req.body.movieIds;
    if (req.body.insert) {
      movies.forEach(movieId => {
        theatre.movies.push(movieId)
      });
    } else {
      movies.forEach(movieId => {
        theatre.movies = theatre.movies.filter(e => e != movieId)
      })
    }
    await theatre.save();
    res.status(200).send(JSON.stringify({
      status: 'success',
      message: 'Movie list updated successfully',
      data: theatre
    }))
  } catch (err) {
    errorHandler.serverError(err);
  }
}

async function checkRunningMovies(req, res) {
  const theatre = await theatreService.getTheatresById(req.params.theatreId);

  if (!theatre || theatre.length === 0) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'No such theate exist'
    }))
    return;
  }

  const movie = await movieService.getMoviesById(req.params.movieId);

  try {
    if (theatre.movies.includes(movie._id)) {
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Movie is running currently',
        data: theatre
      }))
    } else {
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Movie is not running currently'
      }))
    }
  } catch (err) {
    errorHandler.serverError(err)
  }
}

module.exports = {
  getAllTheatres,
  getTheatresById,
  addTheatres,
  updateTheatres,
  deleteTheatres,
  updateMoviesInTheatre,
  checkRunningMovies
}