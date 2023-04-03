const { authService } = require('../services/auth.service');

async function signUp(req, res) {
  let user = req.body;

  return await authService
    .signUp(user)
    .then(() => {
      res.status(201).send(JSON.stringify({
        status: 'success',
        message: 'User registered successfully'
      }))
    }).catch(err => {
      console.log(err);
      res.status(500).send(JSON.stringify({
        status: 'fail',
        message: 'Error in server'
      }))
    })
}

async function signIn(req, res) {
  const userId = req.body.userId;
  const password = req.body.password;

  return await authService
    .signIn(userId, password)
    .then((returnValue) => {
      res.status(returnValue.statusCode).send(JSON.stringify({
        status: returnValue.status,
        message: returnValue.message,
        data: returnValue.data
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
  signUp,
  signIn
}