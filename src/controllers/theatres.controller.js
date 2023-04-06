const { theatreService } = require("../services/theatres.service");
const { movieService } = require('../services/movies.service');
const errorHandler = require('../utils/errorHandler');
const { userService } = require("../services/users.service");
const { sendMail } = require("../utils/notification");

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

  let user = await userService.getUsersById(req._id);
  if (user.userType === 'CLIENT' && user.userStatus === 'APPROVED') {
    theatre.ownerId = req._id;
  }

  return await theatreService
    .addTheatres(theatre)
    .then(async (data) => {
      console.log(data);
      let user = await userService.getUsersById(data.ownerId);
      let maillist = ['pallabnandi.dev@gmail.com', user.email]; //owner and client email to notify both

      await sendMail('New Theatre added to the database', JSON.stringify(data), maillist);

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
    .then(async (data) => {
      console.log(data);

      let user = await userService.getUsersById(data.ownerId);
      let maillist = ['pallabnandi.dev@gmail.com', user.email]; //owner and client email to notify both

      await sendMail('Theatre details updated successfully', JSON.stringify(data), maillist);

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

  if (Object.entries(req.query).length !== 0) {
    let queryObj = req.query;
    let theatre = await theatreService.getAllTheatres(queryObj);
    if (!theatre || theatre.length === 0) {
      res.status(400).send(JSON.stringify({
        status: 'fail',
        message: `Such theatre doesn't exist`
      }))
      return;
    }
    id = theatre[0]._id;
  }

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

    let user = await userService.getUsersById(theatre.ownerId);
    let maillist = ['pallabnandi.dev@gmail.com', user.email]; //owner and client email to notify both

    await sendMail(`Movie list changed in ${theatre.name} successfully`, JSON.stringify(theatre), maillist);

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