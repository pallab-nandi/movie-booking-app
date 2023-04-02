const db = {};

const { userModel } = require('./users.model');
const { movieModel } = require('./movies.model');
const { theatreModel } = require('./theatres.model');

db.users = userModel;
db.movies = movieModel;
db.theatres = theatreModel;

module.exports = { db }