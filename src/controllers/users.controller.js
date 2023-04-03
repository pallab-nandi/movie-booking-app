const { userService } = require('../services/users.service');

async function getAllUsers(req, res) {

  let queryObj = {};
  if (req.query) queryObj = req.query;

  return await userService
    .getAllUsers(queryObj)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No User data available'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'All Users fetched successfully',
          data: data
        }))
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function getUsersById(req, res) {
  return await userService
    .getUsersById(req.params.id)
    .then((data) => {
      console.log(data);
      if (!data || data.length === 0) {
        res.status(400).send(JSON.stringify({
          status: 'fail',
          message: 'No such User exist'
        }))
      } else {
        res.status(200).send(JSON.stringify({
          status: 'success',
          message: 'User fetched successfully',
          data: data
        }))
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function addUsers(req, res) {
  const user = req.body;
  return await userService
    .addUsers(user)
    .then((data) => {
      console.log(data);
      res.status(201).send(JSON.stringify({
        status: 'success',
        message: 'User added successfully',
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

async function updateUser(req, res) {
  const update = req.body;
  const id = req.params.id;

  let user = await userService.getUsersById(id);
  if (!user || user.length === 0) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'No such user exist'
    }))
    return;
  }

  return await userService
    .updateUser(id, user)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'User updated successfully',
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

async function deleteUsers(req, res) {
  let id;

  if (req.params.id) {
    id = req.params.id;
    let user = await userService.getUsersById(id);
    if (!user || user.length === 0) {
      res.status(400).send(JSON.stringify({
        status: 'fail',
        message: 'No such user exist'
      }))
      return;
    }
  }

  if (req.query) {
    let queryObj = req.query;
    let user = await userService.getAllUsers(queryObj);
    if (!user || user.length === 0) {
      res.status(400).send(JSON.stringify({
        status: 'fail',
        message: `Such user doesn't exist`
      }))
      return;
    }
    id = user._id;
  }

  return await userService
    .deleteUsers(id)
    .then((data) => {
      console.log(data);
      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'User deleted successfully'
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

module.exports = {
  getAllUsers,
  getUsersById,
  addUsers,
  updateUser,
  deleteUsers
}