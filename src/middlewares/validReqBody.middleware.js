const { theatreService } = require("../services/theatres.service");

function validTheatreBody(req, res, next) {
  if (
    !req.body.name
    || !req.body.description
    || !req.body.city
    || !req.body.pinCode
  ) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Please enter valid fields'
    }))
  } else next();
}

async function duplicateTheatre(req, res, next) {
  let theatre = req.body;
  let exist = await theatreService.getAllTheatres(theatre);

  if (exist) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Such theatre already exists in the area'
    }))
  } else next();
}

function validUserBody(req, res, next) {
  if (
    !req.body.name
    || !req.body.email
    || !req.body.userId
    || !req.body.password
  ) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Please enter valid fields'
    }))
  } else next();
}

function validMovieBody(req, res, next) {
  if (
    !req.body.name
    || !req.body.description
    || !req.body.casts
    || !req.body.releaseDate
    || !req.body.director
  ) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Please enter valid fields'
    }))
  } else next();
}

module.exports = {
  validMovieBody,
  validTheatreBody,
  validUserBody,
  duplicateTheatre
}