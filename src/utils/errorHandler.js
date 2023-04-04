module.exports = {
  serverError: (err) => {
    console.log(err);
    return res.status(500).send(JSON.stringify({
      status: 'fail',
      message: 'Internal Server Error'
    }))
  }
}