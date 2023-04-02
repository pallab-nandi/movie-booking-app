const { theatreService } = require("../services/theatres.service");

async function getAllTheatres(req, res) {

  let queryObj = {};
  if (req.query) queryObj = req.query;

  return await theatreService
    .getAllTheatres(queryObj)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'All theatres fetched successfully',
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

async function getTheatresById(req, res) {
  return await theatreService
    .getTheatresById(req.params.id)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Theatre fetched successfully',
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
    .catch((err) => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function updateTheatres(req, res) {
  const update = req.body;
  const id = req.params.id;

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
    .catch(err => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function deleteTheatres(req, res) {
  const id = req.params.id;

  return await theatreService
    .deleteTheatres(id)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Theatre deleted successfully'
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
  getAllTheatres,
  getTheatresById,
  addTheatres,
  updateTheatres,
  deleteTheatres
}