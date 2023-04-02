const db = {};

db.users = require('./users.model');
db.movies = require('./movies.model');
db.theatre = require('./theatres.model');

module.exports = { db }