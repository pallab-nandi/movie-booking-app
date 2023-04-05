const { request: req, response: res } = require('express');

module.exports = {
  serverError: (err) => {
    console.log(err);
    res.status(500).send(JSON.stringify({
      status: 'fail',
      message: 'Internal Server Error'
    }))
  }
}