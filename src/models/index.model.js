const db = {};

const { userModel } = require('./users.model');
const { movieModel } = require('./movies.model');
const { theatreModel } = require('./theatres.model');
const { bookingModel } = require('./booking.model');

db.users = userModel;
db.movies = movieModel;
db.theatres = theatreModel;
db.bookings = bookingModel;

module.exports = { db }