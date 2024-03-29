const { userService } = require('../services/users.service');
const errorHandler = require('../utils/errorHandler');
const { sendMail } = require('../utils/notification');
const bcrypt = require('bcrypt');

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
    .catch((err) => errorHandler.serverError(err));
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
    .catch((err) => errorHandler.serverError(err));
}

async function addUsers(req, res) {
  const user = req.body;
  return await userService
    .addUsers(user)
    .then(async (data) => {
      console.log(data);

      await sendMail(`Hey ${data.name}, your User registration is successful`, JSON.stringify({
        _id: data._id,
        name: data.name,
        email: data.email,
        username: data.userId,
        role: data.userType,
        status: data.userStatus,
        createdAt: data.createdAt
      }), data.email);

      res.status(201).send(JSON.stringify({
        status: 'success',
        message: 'User added successfully',
        data: data
      }))
    })
    .catch((err) => errorHandler.serverError(err));
}

async function updateUser(req, res) {
  const id = req._id;
  const userId = req.params.id;
  const update = req.body;

  let user = await userService.getUsersById(id);

  if (update.password) {
    update.password = await bcrypt.hash(update.password, 8);
  }

  if ((update.userStatus && user.userType !== 'ADMIN') || user.userStatus !== 'APPROVED') {
    delete update.userStatus;
  }

  return await userService
    .updateUser(userId, update)
    .then(async (data) => {
      console.log(data);

      await sendMail(`Hey ${data.name}, your profile update is successful`, JSON.stringify({
        _id: data._id,
        name: data.name,
        email: data.email,
        username: data.userId,
        role: data.userType,
        status: data.userStatus,
        createdAt: data.createdAt
      }), data.email);

      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'User updated successfully',
        data: data
      }))
    })
    .catch((err) => errorHandler.serverError(err));
}

async function updateUserPassword(req, res) {
  const userId = req.params.id;
  let password = req.body.password;

  password = await bcrypt.hash(password, 8);

  return await userService
    .updateUser(userId, { password })
    .then(async (data) => {
      console.log(data);

      await sendMail(`Hey ${data.name}, your password updated successfully`, JSON.stringify({
        _id: data._id,
        name: data.name,
        email: data.email,
        username: data.userId,
        role: data.userType,
        status: data.userStatus,
        createdAt: data.createdAt
      }), data.email);

      res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Password updated successfully',
        data: data
      }))
    })
    .catch(err => errorHandler.serverError(err));
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

  if (Object.entries(req.query).length !== 0) {
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
    .catch((err) => errorHandler.serverError(err));
}

module.exports = {
  getAllUsers,
  getUsersById,
  addUsers,
  updateUser,
  deleteUsers,
  updateUserPassword
}