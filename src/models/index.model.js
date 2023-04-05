const db = {};

const { userModel } = require('./users.model');
const { movieModel } = require('./movies.model');
const { theatreModel } = require('./theatres.model');
const { bookingModel } = require('./booking.model');
const { paymentModel } = require('./payment.model');

db.users = userModel;
db.movies = movieModel;
db.theatres = theatreModel;
db.bookings = bookingModel;
db.payments = paymentModel;

module.exports = { db }