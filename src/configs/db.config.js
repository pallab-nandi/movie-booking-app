if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  DB_NAME: 'movie_booking_app',
  DB_URI: process.env.DB_URI
}