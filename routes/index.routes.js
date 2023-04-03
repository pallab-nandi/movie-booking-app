const v1Route = require('./v1/api.routes');

module.exports = (app) => {
  app.use('/api/v1', v1Route);

  app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to Movie Booking Application</h1>')
  });

  app.use('*', (req, res) => {
    res.status(404).end(JSON.stringify({
      status: 'fail',
      message: '404 Error! Page Not Found!'
    }))
  });
}