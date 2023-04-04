const jwt = require('jsonwebtoken');
const { userService } = require('../services/users.service');

async function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Unauthorize Access'
    }))
    return;
  }

  try {
    const decoded = jwt.verify(token, 'genshin-impact');
    if (!decoded) {
      return res.status(400).send(JSON.stringify({
        status: 'fail',
        message: 'Token is not valid'
      }))
    }
    req.decoded = decoded;
    req._id = decoded.id;
    next();
  } catch (err) {
    res.status(500).send(JSON.stringify({
      status: 'fail',
      message: 'Error in server'
    }))
  }
}

async function isAdmin(req, res, next) {
  const id = req._id;

  const user = await userService.findOneByUserId(id);
  if (user && user.userType !== 'ADMIN' && user.userStatus !== 'APPROVED') {
    return res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Unauthorize Access'
    }))
  }

  next();
}

async function isAuthorized(req, res, next) {
  const id = req._id;

  const user = await userService.findOneByUserId(id);
  if ((user && user.userType === 'CUSTOMER') || user.userStatus !== 'APPROVED') {
    return res.status(400).send(JSON.stringify({
      status: 'fail',
      message: 'Unauthorize Access'
    }))
  }
  next();
}

module.exports = {
  verifyToken,
  isAdmin,
  isAuthorized
}